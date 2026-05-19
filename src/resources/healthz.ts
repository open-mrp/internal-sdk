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
   * @example
   * ```ts
   * const healthzs = await client.healthz.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<HealthzListResponse> {
    return this._client.get('/healthz', options);
  }
}

/**
 * Healthcheck contains information on the health of the application.
 */
export interface HealthzListResponse {
  /**
   * Resource type identifier.
   */
  object: 'healthcheck';

  /**
   * Current operational status of the API service.
   */
  status: string;
}

export declare namespace Healthz {
  export { type HealthzListResponse as HealthzListResponse };
}
