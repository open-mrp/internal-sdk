// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Manage production steps, their rates, productions, and consumptions.
 */
export class Actions extends APIResource {
  /**
   * Creates multiple production steps in a single request.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.productionSteps.actions.bulkCreate(
   *     {
   *       steps: [
   *         {
   *           name: 'Mixing',
   *           consumptions: [
   *             { sku: 'RAW-FLOUR-001', measure: 50 },
   *           ],
   *           productions: [
   *             { sku: 'ALM-2024-1001', measure: 100 },
   *           ],
   *           labor_rate: 25,
   *           labor_time: 1.5,
   *           overhead_rate: 15,
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  bulkCreate(body: ActionBulkCreateParams, options?: RequestOptions): APIPromise<ActionBulkCreateResponse> {
    return this._client.post('/v1/operations/production-steps/actions/bulk-create', { body, ...options });
  }
}

/**
 * BulkCreateProductionStepsResponse represents the response from the bulk create
 * production steps endpoint.
 */
export interface ActionBulkCreateResponse {
  /**
   * The results of each production step creation.
   */
  data: Array<ActionBulkCreateResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

export namespace ActionBulkCreateResponse {
  /**
   * BulkCreateProductionStepResult represents the result of creating a single
   * production step.
   */
  export interface Data {
    /**
     * The action taken: "created", "updated", or "skipped".
     */
    action: string;

    /**
     * The error message if the step failed.
     */
    error: string | null;

    /**
     * The name of the production step.
     */
    name: string;

    /**
     * The ID of the created or updated production step.
     */
    production_step_id: string | null;

    /**
     * Outcome of the operation for this step: "created" or "failed".
     */
    status: string;
  }
}

export interface ActionBulkCreateParams {
  /**
   * Production steps to create.
   */
  steps: Array<ActionBulkCreateParams.Step>;
}

export namespace ActionBulkCreateParams {
  /**
   * Production step input for bulk creation.
   */
  export interface Step {
    /**
     * Consumptions.
     */
    consumptions: Array<Step.Consumption>;

    /**
     * Labor rate in dollars per hour.
     */
    labor_rate: number;

    /**
     * Labor time value.
     */
    labor_time: number;

    /**
     * Display name.
     */
    name: string;

    /**
     * Overhead rate in dollars per hour.
     */
    overhead_rate: number;

    /**
     * Production outputs. At least one is required.
     */
    productions: Array<Step.Production>;

    /**
     * Allowances factor (default: 0).
     */
    allowances?: number;

    /**
     * Labor time unit abbreviation (default: "hr"). One of: hr, minute, second, day.
     */
    labor_time_unit?: string;

    /**
     * Leveling factor (default: 0).
     */
    leveling_factor?: number;

    /**
     * Scanning station name, resolved by name.
     */
    station?: string;
  }

  export namespace Step {
    /**
     * Consumption input resolved by SKU.
     */
    export interface Consumption {
      /**
       * Consumption quantity measure.
       */
      measure: number;

      /**
       * SKU of the consumed material.
       */
      sku: string;

      /**
       * Instructions for this consumption.
       */
      instructions?: string;
    }

    /**
     * Production output input resolved by SKU.
     */
    export interface Production {
      /**
       * Production quantity measure.
       */
      measure: number;

      /**
       * SKU of the produced item.
       */
      sku: string;
    }
  }
}

export declare namespace Actions {
  export {
    type ActionBulkCreateResponse as ActionBulkCreateResponse,
    type ActionBulkCreateParams as ActionBulkCreateParams,
  };
}
