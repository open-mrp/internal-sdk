// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * View the jobs that track asynchronous work. Endpoints that answer 202 Accepted raise one and point at it with a Location header.
 */
export class Jobs extends APIResource {
  /**
   * Returns a job by ID — poll the job named in a `202 Accepted` response's
   * `Location` to observe its outcome. A completed export carries the link to its
   * file on `export.url`.
   *
   * @example
   * ```ts
   * const job = await client.core.jobs.retrieve(
   *   'jb_01k0a5smf9ekb8rqg1',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Job> {
    return this._client.get(path`/v1/core/jobs/${id}`, options);
  }

  /**
   * Cancels a job and returns it carrying its `cancelled` status. Work in flight is
   * not interrupted but can no longer settle, and a finished job cannot be
   * cancelled.
   *
   * @example
   * ```ts
   * const job = await client.core.jobs.cancel(
   *   'jb_01k0a5smf9ekb8rqg1',
   * );
   * ```
   */
  cancel(id: string, options?: RequestOptions): APIPromise<Job> {
    return this._client.post(path`/v1/core/jobs/${id}/cancel`, options);
  }
}

/**
 * Records a piece of work the API accepted and carries out asynchronously.
 * Endpoints answering `202 Accepted` point at one with a `Location` header; poll
 * it for the outcome.
 */
export interface Job {
  /**
   * Job ID.
   */
  id: string;

  /**
   * When the job was cancelled.
   */
  cancelled_at: string | null;

  /**
   * When the job finished processing, whether or not every row succeeded.
   */
  completed_at: string | null;

  /**
   * When the job was created.
   */
  created_at: string;

  /**
   * Email of the account user who requested the work.
   */
  created_by_email: string | null;

  /**
   * The ID of the account user who requested the work.
   */
  created_by_id: string | null;

  /**
   * Name of the account user who requested the work.
   */
  created_by_name: string | null;

  /**
   * Username of the account user who requested the work.
   */
  created_by_username: string | null;

  /**
   * A one-line reason the last attempt failed.
   */
  error_summary: string | null;

  /**
   * One entry per failure, so a `completed` job can still carry failed rows. A
   * whole-job failure records a single entry with no `index`.
   */
  errors: Array<RowError>;

  /**
   * Points a completed export job at the file it produced.
   */
  export: JobExport | null;

  /**
   * When the most recent attempt failed. A retry that succeeds leaves this alongside
   * `completed_at`.
   */
  failed_at: string | null;

  /**
   * Resource type identifier.
   */
  object: 'job';

  /**
   * One entry per request row that produced a resource. A bulk create records these
   * when it accepts the request, so they stay provisional until `status` is
   * `completed`.
   */
  results: Array<JobResult>;

  /**
   * When the job began executing.
   */
  started_at: string | null;

  /**
   * How far the job has got. `completed` means the work was processed, not that
   * every row succeeded — read `errors`.
   */
  status: 'created' | 'started' | 'completed' | 'failed' | 'cancelled';

  /**
   * The kind of work the job carries out.
   */
  type: 'bulkcreate' | 'bulkupsert' | 'export';

  /**
   * When the job was last updated.
   */
  updated_at: string;
}

/**
 * Points a completed export job at the file it produced.
 */
export interface JobExport {
  /**
   * Presigned link to the file, valid for five minutes — read the job again for a
   * fresh one. It carries its own authorization, so treat it as a credential: do not
   * log it, store it, or pass it on.
   */
  url: string;
}

/**
 * Accounts for one request row that produced a resource. With `errors`, also
 * row-indexed, every submitted row lands in exactly one of the two once the job
 * completes.
 */
export interface JobResult {
  /**
   * ID of the resource this row produced.
   */
  id: string;

  /**
   * Whether the resource was created or updated.
   */
  action: 'created' | 'updated';

  /**
   * Zero-based row of the request this result names.
   */
  index: number;

  /**
   * Resources created alongside this row's own resource — for a bulk production run
   * create, the ids of its batches. Omitted for operations that produce none.
   */
  sub_resource_ids?: Array<string>;
}

/**
 * QuotaInfo provides machine-readable details about a plan-imposed resource limit.
 * Included in limit_exceeded errors so clients can display upgrade prompts, usage
 * bars, or implement programmatic retry/backoff logic.
 */
export interface QuotaInfo {
  /**
   * Limit is the maximum number of resources allowed by the current plan.
   */
  limit: number;

  /**
   * ResetAt is the time when the quota resets, if applicable. Nil for static
   * (non-metered) limits.
   */
  reset_at: string | null;

  /**
   * Used is the number of resources currently consumed.
   */
  used: number;
}

/**
 * ResponseError is the JSON-serializable error body returned to API clients. It
 * contains only public information. This struct is used by the OpenAPI schema
 * generator to produce documentation.
 */
export interface ResponseError {
  /**
   * A machine-readable code for the error.
   */
  code:
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
    | 'api_version_too_old';

  /**
   * A URL to documentation about the error.
   */
  doc_url: string | null;

  /**
   * Whether this error is transient and the request can be retried.
   */
  is_transient: boolean;

  /**
   * A human-readable message providing more details about the error.
   */
  message: string;

  /**
   * The parameter that caused the error, if applicable.
   */
  param: string | null;

  /**
   * QuotaInfo provides machine-readable details about a plan-imposed resource limit.
   * Included in limit_exceeded errors so clients can display upgrade prompts, usage
   * bars, or implement programmatic retry/backoff logic.
   */
  quota: QuotaInfo | null;

  /**
   * RequestLogURL is a link to the dashboard page for this request's log entry. Nil
   * when no request log is available.
   */
  request_log_url: string | null;

  /**
   * The type of error.
   */
  type: 'api_error' | 'idempotency_error' | 'invalid_request_error';
}

/**
 * pairs one row of a bulk request with the failure it produced; a failure of the
 * request as a whole carries no index
 */
export interface RowError {
  /**
   * ResponseError is the JSON-serializable error body returned to API clients. It
   * contains only public information. This struct is used by the OpenAPI schema
   * generator to produce documentation.
   */
  error: ResponseError;

  /**
   * Zero-based row of the request this failure names. Absent for a failure of the
   * whole request.
   */
  index?: number;
}

export declare namespace Jobs {
  export {
    type Job as Job,
    type JobExport as JobExport,
    type JobResult as JobResult,
    type QuotaInfo as QuotaInfo,
    type ResponseError as ResponseError,
    type RowError as RowError,
  };
}
