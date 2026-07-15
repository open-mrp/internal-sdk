// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and retrieve request logs.
 */
export class RequestLogs extends APIResource {
  /**
   * Returns a request log by ID.
   *
   * This endpoint requires the permission: `request_logs:read`.
   *
   * @example
   * ```ts
   * const requestLog = await client.core.requestLogs.retrieve(
   *   'rq_01304bffe90e8cce9690cbefd4',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: RequestLogRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RequestLog> {
    return this._client.get(path`/v1/core/request-logs/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of request logs for the current account.
   *
   * This endpoint requires the permission: `request_logs:read`.
   *
   * @example
   * ```ts
   * const listRequestLog = await client.core.requestLogs.list();
   * ```
   */
  list(
    query: RequestLogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListRequestLog> {
    return this._client.get('/v1/core/request-logs', { query, ...options });
  }
}

/**
 * Reference to an actor — the user, API key, agent, or group identity associated
 * with an action.
 */
export interface Actor {
  /**
   * Unique identifier of the actor.
   */
  id: string;

  /**
   * URL of the actor's profile photo, if one is set.
   *
   * Only populated for `user` actors.
   */
  avatar_url: string | null;

  /**
   * Human-readable handle identifying the actor.
   *
   * - For `user` actors: the user's email address.
   * - For `api_key` actors: the redacted key value.
   *
   * Other actor types carry no handle.
   */
  handle: string | null;

  /**
   * The actor's display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'actor';

  /**
   * A named set of permissions that can be assigned to users to control what they
   * can access.
   */
  role: APIKeysAPI.Role | null;

  /**
   * Actor type.
   *
   * - `user`: a human user account.
   * - `api_key`: a programmatic caller authenticating with an API key.
   * - `agent`: an automated agent acting on the account's behalf.
   * - `group`: a shared group identity, such as a "Customer Service" persona, rather
   *   than a single individual.
   */
  type: 'user' | 'api_key' | 'agent' | 'group';
}

/**
 * List represents a paginated list of resources.
 */
export interface ListRequestLog {
  /**
   * Resources in this page.
   */
  data: Array<RequestLog>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A log of a single API request, capturing its route, outcome, latency, and actor.
 */
export interface RequestLog {
  /**
   * Request log ID.
   */
  id: string;

  /**
   * A customer account, including its branding and customer portal sub-resources.
   */
  account: APIKeysAPI.Account | null;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  actor: Actor | null;

  /**
   * API version used.
   */
  api_version: string | null;

  /**
   * Client IP address.
   */
  client_ip: string | null;

  /**
   * When the log entry was created.
   */
  created_at: string;

  /**
   * Machine-readable API error code.
   *
   * Populated only for failed requests.
   */
  error_code: string | null;

  /**
   * Human-readable error message.
   *
   * Populated only for failed requests.
   */
  error_message: string | null;

  /**
   * Request host.
   *
   * Usually `api.augno.com`.
   */
  host: string;

  /**
   * User-provided idempotency key.
   */
  idempotency_key: string | null;

  /**
   * Request latency in microseconds.
   */
  latency_us: number;

  /**
   * HTTP method.
   */
  method: string;

  /**
   * The route template the request matched, with path parameters left as
   * placeholders.
   *
   * For example `/v1/sales/customers/{id}` is the normalized route for the request
   * path `/v1/sales/customers/ac_...`. Falls back to the raw path when the request
   * did not match a registered route.
   */
  normalized_route: string;

  /**
   * Resource type identifier.
   */
  object: 'request_log';

  /**
   * When the request occurred.
   */
  occurred_at: string;

  /**
   * The exact path the request was made to, including path parameter values.
   */
  path: string;

  /**
   * Query parameters. Encoded as a JSON value (object, array, string, number,
   * boolean, or null), not a JSON-encoded string.
   */
  query_params: unknown | null;

  /**
   * Referrer header.
   */
  referrer: string | null;

  /**
   * Request body. Encoded as a JSON value (object, array, string, number, boolean,
   * or null), not a JSON-encoded string.
   */
  request_body: unknown | null;

  /**
   * Response body. Encoded as a JSON value (object, array, string, number, boolean,
   * or null), not a JSON-encoded string.
   */
  response_body: unknown | null;

  /**
   * HTTP response status code (e.g. `200`, `404`).
   */
  status_code: number;

  /**
   * User agent.
   */
  user_agent: string | null;
}

export interface RequestLogRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'account'
    | 'actor'
    | 'actor.role'
    | 'actor.role.permissions'
    | 'query_params'
    | 'request_body'
    | 'response_body'
  >;
}

export interface RequestLogListParams {
  /**
   * Filter by the _acting_ account: the account the actor belongs to (the log's
   * `account.id`).
   *
   * Results are always scoped to logs where your account is either the acting
   * account or the target account; this narrows that set to specific acting
   * accounts. For example, pass a customer's account ID to see only requests that
   * customer's actors made against your account.
   */
  actor_account_ids?: Array<string>;

  /**
   * Filter by the actor identifier.
   *
   * Matches the log's `actor.id`: a user ID for `user` actors or an API key ID for
   * `api_key` actors.
   */
  actor_ids?: Array<string>;

  /**
   * Filter by the actor type.
   */
  actor_types?: Array<'user' | 'api_key' | 'agent' | 'group'>;

  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Restricts results to request logs on or before this timestamp.
   */
  end_date?: string;

  /**
   * Filter by API error code.
   */
  error_codes?: Array<
    | 'expired_token'
    | 'api_key_expired'
    | 'api_key_revoked'
    | 'invalid_credentials'
    | 'insufficient_permissions'
    | 'payment_required'
    | 'agent_spending_cap_reached'
    | 'validation_failed'
    | 'missing_field'
    | 'invalid_format'
    | 'method_not_allowed'
    | 'resource_not_found'
    | 'resource_exists'
    | 'resource_conflict'
    | 'resource_gone'
    | 'idempotency_in_progress'
    | 'limit_exceeded'
    | 'registration_closed'
    | 'rate_limit_exceeded'
    | 'parameter_missing'
    | 'parameter_invalid'
    | 'parameter_unknown'
    | 'parameters_exclusive'
    | 'internal_error'
    | 'service_unavailable'
    | 'external_service_error'
    | 'timeout'
    | 'connection_error'
    | 'request_timeout'
    | 'client_closed_request'
    | 'api_version_required'
    | 'api_version_invalid'
    | 'api_version_too_old'
  >;

  /**
   * Exclude request logs whose API error code is in this set.
   *
   * Applied as a negative filter after all other filters. Successful requests (which
   * have no error code) are always kept. The dashboard uses this to hide routine
   * `expired_token` 401s — the noise from short-lived access tokens expiring and
   * clients silently refreshing — while still surfacing genuine auth failures like
   * `invalid_credentials`.
   */
  exclude_error_codes?: Array<
    | 'expired_token'
    | 'api_key_expired'
    | 'api_key_revoked'
    | 'invalid_credentials'
    | 'insufficient_permissions'
    | 'payment_required'
    | 'agent_spending_cap_reached'
    | 'validation_failed'
    | 'missing_field'
    | 'invalid_format'
    | 'method_not_allowed'
    | 'resource_not_found'
    | 'resource_exists'
    | 'resource_conflict'
    | 'resource_gone'
    | 'idempotency_in_progress'
    | 'limit_exceeded'
    | 'registration_closed'
    | 'rate_limit_exceeded'
    | 'parameter_missing'
    | 'parameter_invalid'
    | 'parameter_unknown'
    | 'parameters_exclusive'
    | 'internal_error'
    | 'service_unavailable'
    | 'external_service_error'
    | 'timeout'
    | 'connection_error'
    | 'request_timeout'
    | 'client_closed_request'
    | 'api_version_required'
    | 'api_version_invalid'
    | 'api_version_too_old'
  >;

  /**
   * Filter by the request host.
   *
   * Typically `api.augno.com`.
   */
  hosts?: Array<string>;

  /**
   * Filter by the user-provided idempotency key.
   */
  idempotency_key?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'account' | 'actor' | 'actor.role'>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Filter by the HTTP method.
   */
  methods?: Array<'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS'>;

  /**
   * Restricts results to requests that took at least this many microseconds.
   */
  min_latency_us?: number;

  /**
   * Filter by the _normalized_ route template.
   *
   * For example `/v1/sales/customers/{id}` matches every request to that route
   * regardless of the specific customer ID. Parameter names inside `{}` are ignored
   * when matching, so `{customer_id}` and `{id}` are equivalent.
   */
  normalized_routes?: Array<string>;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Restricts results to request logs on or after this timestamp.
   */
  start_date?: string;

  /**
   * Filter by the HTTP status class, expressed as the leading digit: `1`–`5` for
   * 1xx–5xx.
   *
   * Combined with `status_codes` using OR — e.g. `status_codes=401` and
   * `status_code_classes=5` matches 401 responses and any 5xx response.
   */
  status_code_classes?: Array<number>;

  /**
   * Filter by the HTTP status code.
   */
  status_codes?: Array<number>;

  /**
   * Filter by the _target_ account: the account the request acted upon (the log's
   * target account).
   *
   * Results are always scoped to logs where your account is either the acting
   * account or the target account; this narrows that set to specific target
   * accounts. For example, pass a supplier's account ID to see only requests your
   * account made against that supplier.
   */
  target_account_ids?: Array<string>;
}

export declare namespace RequestLogs {
  export {
    type Actor as Actor,
    type ListRequestLog as ListRequestLog,
    type RequestLog as RequestLog,
    type RequestLogRetrieveParams as RequestLogRetrieveParams,
    type RequestLogListParams as RequestLogListParams,
  };
}
