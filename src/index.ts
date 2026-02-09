import { RequestHeaders } from "./enums.js";
import { API_VERSION } from "./version.js";
import createClient, { type ClientOptions, type Middleware } from "openapi-fetch";
import type { components, paths } from "./types.js";

export type { components, paths };
export { API_VERSION, RequestHeaders };

export interface V2ClientOptions extends ClientOptions {
    /**
     * The API version to target. Defaults to the version from the bundled OpenAPI spec.
     */
    version?: string;
    /**
     * Optional callback to get the current account ID for the Augno-Account-ID header.
     */
    getAccountID?: () => string | undefined;
    /**
     * Optional callback to handle permanent authentication failure (e.g., redirect to login).
     */
    onAuthFailure?: (error: unknown) => Promise<void> | void;
}

/**
 * Creates a type-safe API client for the V2 API with built-in Augno authentication logic.
 * 
 * This client automatically:
 * 1. Attaches the Augno-Account-ID header if a getter is provided.
 * 2. Handles 401 Unauthorized responses by attempting to refresh the access token.
 * 3. Retries the original request after a successful refresh.
 */
export const createV2Client = (options: V2ClientOptions) => {
    const { version, getAccountID, onAuthFailure, ...fetchOptions } = options;
    const client = createClient<paths>(fetchOptions);

    let isRefreshing = false;
    let refreshPromise: Promise<unknown> | null = null;

    const authMiddleware: Middleware = {
        async onRequest({ request }) {
            request.headers.set(RequestHeaders.version, version ?? API_VERSION);

            if (getAccountID && !request.headers.has(RequestHeaders.accountID)) {
                const accountID = getAccountID();
                if (accountID) {
                    request.headers.set(RequestHeaders.accountID, accountID);
                }
            }
            return request;
        },
        async onResponse({ response, request }) {
            // If we get a 401 and it's not an authentication request itself (login or refresh)
            const isAuthPath = request.url.includes('/v1/auth/access-tokens') || request.url.includes('/v1/auth/actions/login');
            
            if (response.status === 401 && !isAuthPath) {
                try {
                    if (!isRefreshing) {
                        isRefreshing = true;
                        // Attempt to refresh.
                        if (!fetchOptions.baseUrl) {
                            throw new Error('Base URL is required for access token refresh');
                        }
                        refreshPromise = fetch(`${fetchOptions.baseUrl}/v1/auth/access-tokens`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': request.headers.get('Authorization') || '',
                            },
                            credentials: 'include',
                        }).then(async (res) => {
                            if (!res.ok) {
                                throw new Error('Failed to refresh access token');
                            }
                            return res.json();
                        }).finally(() => {
                            isRefreshing = false;
                            refreshPromise = null;
                        });
                    }
                    
                    await refreshPromise;
                    
                    // Retry the original request
                    return fetch(request.clone());
                } catch (error) {
                    if (onAuthFailure) {
                        await onAuthFailure(error);
                    }
                    return response;
                }
            }
            return response;
        }
    };

    client.use(authMiddleware);

    return client;
};

