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
 * Reference to an actor (user, API key, or agent).
 */
export interface Actor {
  /**
   * Actor ID.
   */
  id: string;

  /**
   * Human-readable handle.
   *
   * - `email` for users
   * - `redacted_value` for API keys
   * - `slug` for agents
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
  role: APIKeysAPI.Role | null;

  /**
   * Actor type.
   */
  type: 'user' | 'api_key' | 'agent';
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
  account: APIKeysAPI.Account | null;

  /**
   * Reference to an actor (user, API key, or agent).
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
   * HTTP status code. Exception to the `status` naming convention: this is a numeric
   * HTTP response code (200/404/…), not a domain lifecycle status enum, so the
   * `_code` suffix is meaningful.
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
   * Filter by the _acting_ account: the account the actor belongs to, not the
   * account targeted by the request.
   *
   * This is usually your own account, but differs when another account acts on yours
   * — for example a customer using a customer-portal API key, whose acting account
   * is the customer's account. The request's target account is always your own
   * account (the only account you are authorized to view request logs for), so this
   * filter narrows by _who acted_, not by which account was acted upon.
   */
  account_ids?: Array<string>;

  /**
   * Filter by the actor identifier.
   *
   * This is the `user.id` when `identity_type`=`user` and an `api_key.id` when
   * `identity_type`=`api_key`.
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
   * Filter by the _normalized_ route template.
   *
   * For example `PATCH /v1/sales/customers/{id}` is the normalized route for a
   * request route `PUT /v1/sales/customers/ac_...`.
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
   * Filter by the HTTP status class: 1–5 for 1xx–5xx. Combined with `status_codes`
   * using OR — e.g. status_codes=401 and status_code_classes=5 matches 401 and any
   * 5xx.
   */
  status_code_classes?: Array<number>;

  /**
   * Filter by the HTTP status code.
   */
  status_codes?: Array<number>;
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
