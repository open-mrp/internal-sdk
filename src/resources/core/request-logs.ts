// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuditEventsAPI from './audit-events';
import * as EdiRunsAPI from '../operations/edi-runs';
import * as ActionsAPI from '../operations/shipments/actions';
import * as LinesAPI from '../operations/shipments/lines';
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
  ): APIPromise<AuditEventsAPI.RequestLog> {
    return this._client.get(path`/v1/core/request-logs/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of request logs.
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
 * Account with optional branding and portal sub-resources.
 */
export interface Account {
  /**
   * Account ID.
   */
  id: string;

  /**
   * Branding metadata for an account.
   */
  branding: LinesAPI.AccountBranding | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Address with associated geolocation.
   */
  default_billing_address: LinesAPI.Address | null;

  /**
   * Address with associated geolocation.
   */
  default_shipping_address: LinesAPI.Address | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account';

  /**
   * Portal metadata for an account.
   */
  portal: LinesAPI.AccountPortal | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Branding metadata for an account.
 */
export interface AccountBranding {
  /**
   * Branding ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Facebook handle.
   */
  facebook_handle: string | null;

  /**
   * Instagram handle.
   */
  instagram_handle: string | null;

  /**
   * LinkedIn handle.
   */
  linkedin_handle: string | null;

  /**
   * Logo URL.
   */
  logo_url: string | null;

  /**
   * Resource type identifier.
   */
  object: 'account_branding';

  /**
   * Support phone number.
   */
  phone_number: string | null;

  /**
   * Support email address.
   */
  support_email: string | null;

  /**
   * Twitter handle.
   */
  twitter_handle: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Website URL.
   */
  website_url: string | null;
}

/**
 * Portal metadata for an account.
 */
export interface AccountPortal {
  /**
   * Portal ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'account_portal';

  /**
   * Portal slug.
   */
  slug: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Reference to an actor (user, API key, or agent).
 */
export interface Actor {
  /**
   * Actor ID.
   */
  id: string;

  /**
   * Human-readable handle (`email` for users, `redacted_value` for API keys, `slug`
   * for agents).
   */
  handle: string | null;

  /**
   * Display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'actor';

  /**
   * Role resource.
   */
  role: ActionsAPI.Role | null;

  /**
   * Actor type.
   */
  type: 'user' | 'api_key' | 'agent';
}

/**
 * Address with associated geolocation.
 */
export interface Address {
  /**
   * Address ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Email address associated with the address.
   */
  email: string | null;

  /**
   * Geolocation sub-resource.
   */
  geolocation: LinesAPI.Geolocation | null;

  /**
   * Display name of the address.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'address';

  /**
   * Phone number associated with the address.
   */
  phone: string | null;

  /**
   * Address type.
   */
  type: 'standard' | 'drop_ship';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Geolocation sub-resource.
 */
export interface Geolocation {
  /**
   * Geolocation ID.
   */
  id: string;

  /**
   * Two-letter country code.
   */
  country: string;

  /**
   * City or locality.
   */
  locality: string | null;

  /**
   * Resource type identifier.
   */
  object: 'geolocation';

  /**
   * Postal or ZIP code.
   */
  postal_code: string | null;

  /**
   * State or administrative area.
   */
  state: string | null;

  /**
   * First line of the street address.
   */
  street_line_1: string | null;

  /**
   * Second line of the street address.
   */
  street_line_2: string | null;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListRequestLog {
  /**
   * Resources in this page.
   */
  data: Array<AuditEventsAPI.RequestLog>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * Owner describes the provenance of a resource.
 */
export interface Owner {
  /**
   * Account with optional branding and portal sub-resources.
   */
  account: LinesAPI.Account | null;

  /**
   * Resource type identifier.
   */
  object: 'owner';

  /**
   * The owner type: "system" for platform defaults, "account" for account-owned
   * resources.
   */
  type: 'system' | 'account';
}

/**
 * PageInfo contains URL-based pagination metadata.
 */
export interface PageInfo {
  /**
   * Whether more results exist after this page.
   */
  has_next_page: boolean;

  /**
   * Whether results exist before this page.
   */
  has_prev_page: boolean;

  /**
   * URL to fetch the next page, `null` if no more pages.
   */
  next_page_url: string | null;

  /**
   * URL to fetch the previous page, `null` if on the first page.
   */
  previous_page_url: string | null;
}

/**
 * RequestLog is an API request log entry.
 */
export interface RequestLog {
  /**
   * Request log ID.
   */
  id: string;

  /**
   * Account with optional branding and portal sub-resources.
   */
  account: LinesAPI.Account | null;

  /**
   * Reference to an actor (user, API key, or agent).
   */
  actor: ActionsAPI.Actor | null;

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
   * API error code.
   */
  error_code: string | null;

  /**
   * Error message.
   */
  error_message: string | null;

  /**
   * Request host. Usually `api.augno.com`.
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
   * _Normalized_ route template. For example `PATCH /v1/sales/customers/{id}` is the
   * normalized route for a request route `PUT /v1/sales/customers/ac_...`.
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
   * Non-normalized request path.
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
   * HTTP status code.
   */
  status_code: number;

  /**
   * User agent.
   */
  user_agent: string | null;
}

/**
 * Role resource.
 */
export interface Role {
  /**
   * Role ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'role';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: LinesAPI.Owner | null;

  /**
   * Permissions in `{domain}:{action}` format.
   */
  permissions: Array<string> | null;

  /**
   * Role type code.
   *
   * The role's type is sometimes used to gate special behaviors in the frontend and
   * to restrict some actions to only certain types of roles. For example, only roles
   * with the type `admin` can create and manage API keys.
   */
  type: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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
   * Filter by the account ID _targeted_ by the request. The actor may be operating
   * on behalf of a separate account.
   */
  account_ids?: Array<string>;

  /**
   * Filter by the actor identifier. `account_user.id` when `identity_type`=`user`,
   * or an `api_key.id` when `identity_type`=`api_key`.
   */
  actor_ids?: Array<string>;

  /**
   * Filter by the actor type.
   */
  actor_types?: Array<'user' | 'api_key' | 'agent'>;

  /**
   * Cursor token used to retrieve the next or previous page of results.
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
   * Filter by the request host. Typically, `api.augno.com`.
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
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Filter by the HTTP method.
   */
  methods?: Array<'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS'>;

  /**
   * Filter by the minimum latency in microseconds.
   */
  min_latency_us?: number;

  /**
   * Filter by the _normalized_ route template. For example
   * `PATCH /v1/sales/customers/{id}` is the normalized route for a request route
   * `PUT /v1/sales/customers/ac_...`.
   */
  normalized_routes?: Array<string>;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Restricts results to request logs on or after this timestamp.
   */
  start_date?: string;

  /**
   * Filter by the HTTP status code.
   */
  status_codes?: Array<number>;
}

export declare namespace RequestLogs {
  export {
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Actor as Actor,
    type Address as Address,
    type Geolocation as Geolocation,
    type ListRequestLog as ListRequestLog,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type RequestLog as RequestLog,
    type Role as Role,
    type RequestLogRetrieveParams as RequestLogRetrieveParams,
    type RequestLogListParams as RequestLogListParams,
  };
}
