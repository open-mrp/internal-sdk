// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Manage production steps, their rates, productions, and consumptions.
 */
export class Actions extends APIResource {
  /**
   * Creates or updates multiple production steps in a single request.
   *
   * Rows are matched to existing steps by name: matches are updated in place
   * (replacing their production outputs and consumptions) and the rest are created.
   * Each row succeeds or fails independently; failures are reported per row in the
   * response instead of failing the whole request.
   *
   * This endpoint requires the permission: `production_steps:create`.
   *
   * @example
   * ```ts
   * const bulkCreateProductionStepsResponse =
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
  bulkCreate(
    body: ActionBulkCreateParams,
    options?: RequestOptions,
  ): APIPromise<BulkCreateProductionStepsResponse> {
    return this._client.post('/v1/operations/production-steps/actions/bulk-create', { body, ...options });
  }
}

/**
 * Consumption input resolved by SKU.
 */
export interface BulkCreateConsumptionInput {
  /**
   * Quantity consumed, in the item's base unit.
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
export interface BulkCreateProductionOutputInput {
  /**
   * Quantity produced, in the item's base unit.
   */
  measure: number;

  /**
   * SKU of the produced item.
   */
  sku: string;
}

/**
 * Production step input for bulk creation.
 */
export interface BulkCreateProductionStepInput {
  /**
   * Materials consumed by the step, resolved by SKU.
   */
  consumptions: Array<BulkCreateConsumptionInput>;

  /**
   * Labor rate in dollars per hour.
   */
  labor_rate: number;

  /**
   * Labor time required per unit of output.
   *
   * Stored as `labor_time_unit` per one base unit of the first production output.
   */
  labor_time: number;

  /**
   * Display name of the production step.
   *
   * Used to match existing steps: if a step with this name already exists in the
   * account, that step is updated in place instead of creating a new one.
   */
  name: string;

  /**
   * Overhead rate in dollars per hour.
   */
  overhead_rate: number;

  /**
   * Items produced by the step, resolved by SKU.
   *
   * At least one is required.
   */
  productions: Array<BulkCreateProductionOutputInput>;

  /**
   * Allowance correction factor applied to labor time in cost calculations.
   *
   * When omitted, no allowance adjustment is applied.
   */
  allowances?: number;

  /**
   * Labor time unit abbreviation.
   *
   * Accepted values (case-insensitive): `hr`, `minute`, `min`, `second`, `sec`,
   * `day`. Defaults to `hr`.
   */
  labor_time_unit?: string;

  /**
   * Leveling correction factor applied to labor time in cost calculations.
   *
   * When omitted, no leveling adjustment is applied.
   */
  leveling_factor?: number;

  /**
   * Name of an existing scanning station to assign to the step.
   *
   * Resolved by exact name; rows referencing an unknown station are skipped.
   */
  station?: string;
}

/**
 * BulkCreateProductionStepResult represents the result of creating a single
 * production step.
 */
export interface BulkCreateProductionStepResult {
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

/**
 * Request to bulk create production steps.
 */
export interface BulkCreateProductionStepsRequest {
  /**
   * Production steps to create or update.
   */
  steps: Array<BulkCreateProductionStepInput>;
}

/**
 * BulkCreateProductionStepsResponse represents the response from the bulk create
 * production steps endpoint.
 */
export interface BulkCreateProductionStepsResponse {
  /**
   * The results of each production step creation.
   */
  data: Array<BulkCreateProductionStepResult>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

export interface ActionBulkCreateParams {
  /**
   * Production steps to create or update.
   */
  steps: Array<BulkCreateProductionStepInput>;
}

export declare namespace Actions {
  export {
    type BulkCreateConsumptionInput as BulkCreateConsumptionInput,
    type BulkCreateProductionOutputInput as BulkCreateProductionOutputInput,
    type BulkCreateProductionStepInput as BulkCreateProductionStepInput,
    type BulkCreateProductionStepResult as BulkCreateProductionStepResult,
    type BulkCreateProductionStepsRequest as BulkCreateProductionStepsRequest,
    type BulkCreateProductionStepsResponse as BulkCreateProductionStepsResponse,
    type ActionBulkCreateParams as ActionBulkCreateParams,
  };
}
