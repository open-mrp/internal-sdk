// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Health monitoring endpoints for service status and environment information.
 */
export class Healthz extends APIResource {
  /**
   * Returns the current health status of the API.
   *
   * The check is shallow: a successful response confirms the API is running and
   * serving requests, and does not probe the database or any downstream service. It
   * is intended for uptime monitors and load-balancer probes, and is not recorded in
   * the request log.
   *
   * @example
   * ```ts
   * const healthcheck = await client.healthz.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<Healthcheck> {
    return this._client.get('/healthz', options);
  }
}

/**
 * A liveness report for the API.
 */
export interface Healthcheck {
  /**
   * Resource type identifier.
   */
  object: 'healthcheck';

  /**
   * Current operational status of the API.
   *
   * Always `healthy` on a successful response: no other value is ever reported, so
   * treat the HTTP status code, not this field, as the real signal.
   */
  status: string;
}

export declare namespace Healthz {
  export { type Healthcheck as Healthcheck };
}
