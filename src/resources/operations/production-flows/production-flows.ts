// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as DepartmentsAPI from '../departments';
import * as MachinesAPI from '../machines';
import * as OperationsAPI from '../operations';
import * as ScanningStationsAPI from '../scanning-stations';
import * as ItemsAPI from '../../catalog/items/items';
import * as BatchesAPI from '../batches/batches';
import * as ActionsAPI from './actions';
import { ActionConnectStepsParams, ActionConnectStepsResponse, Actions } from './actions';
import * as ProductionStepsAPI from '../production-steps/production-steps';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Retrieve and manage production flow graphs.
 */
export class ProductionFlows extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns the production flow graph for the given item, including all production
   * steps, their consumptions, and connections.
   *
   * @example
   * ```ts
   * const productionFlow =
   *   await client.operations.productionFlows.retrieve(
   *     'item_id',
   *   );
   * ```
   */
  retrieve(
    itemID: string,
    query: ProductionFlowRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductionFlowRetrieveResponse> {
    return this._client.get(path`/v1/operations/production-flows/by-item/${itemID}`, { query, ...options });
  }
}

/**
 * ProductionFlow is the production flow graph for an item.
 */
export interface ProductionFlowRetrieveResponse {
  /**
   * Resource type identifier.
   */
  object: 'production_flow';

  /**
   * List represents a paginated list of resources.
   */
  steps: ProductionFlowRetrieveResponse.Steps | null;
}

export namespace ProductionFlowRetrieveResponse {
  /**
   * List represents a paginated list of resources.
   */
  export interface Steps {
    /**
     * Resources in this page.
     */
    data: Array<Steps.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace Steps {
    /**
     * ProductionFlowStep is a step in the production flow.
     */
    export interface Data {
      /**
       * Production step ID.
       */
      id: string;

      /**
       * Allowances as a decimal string.
       */
      allowances: string;

      /**
       * List represents a paginated list of resources.
       */
      consumptions: Data.Consumptions | null;

      /**
       * Department resource.
       */
      department: DepartmentsAPI.Department | null;

      /**
       * List represents a paginated list of resources.
       */
      in_steps: ProductionStepsAPI.ListProductionStep | null;

      /**
       * Rate resource.
       */
      labor_rate: OperationsAPI.Rate | null;

      /**
       * Rate resource.
       */
      labor_time: OperationsAPI.Rate | null;

      /**
       * Leveling factor as a decimal string.
       */
      leveling_factor: string;

      /**
       * List represents a paginated list of resources.
       */
      machines: MachinesAPI.ListMachine | null;

      /**
       * Production step name.
       */
      name: string;

      /**
       * Resource type identifier.
       */
      object: 'production_step';

      /**
       * List represents a paginated list of resources.
       */
      out_steps: ProductionStepsAPI.ListProductionStep | null;

      /**
       * Rate resource.
       */
      overhead_rate: OperationsAPI.Rate | null;

      /**
       * ProductionFlowProduction is the production output of a flow step.
       */
      production: Data.Production | null;

      /**
       * Scanning station resource.
       */
      scanning_station: ScanningStationsAPI.ScanningStation | null;
    }

    export namespace Data {
      /**
       * List represents a paginated list of resources.
       */
      export interface Consumptions {
        /**
         * Resources in this page.
         */
        data: Array<Consumptions.Data>;

        /**
         * Resource type identifier.
         */
        object: 'list';

        /**
         * PageInfo contains URL-based pagination metadata.
         */
        page_info: AgentsAPI.PageInfo;
      }

      export namespace Consumptions {
        /**
         * ProductionFlowConsumption is a consumption input of a flow step.
         */
        export interface Data {
          /**
           * Consumption record ID.
           */
          id: string;

          /**
           * Item is an inventory item (product, material, or part).
           */
          consumed_item: ItemsAPI.Item | null;

          /**
           * Consumption instructions.
           */
          instructions: string | null;

          /**
           * Resource type identifier.
           */
          object: 'consumption';

          /**
           * Value with an associated unit.
           */
          quantity: BatchesAPI.Quantity | null;

          /**
           * Value with an associated unit.
           */
          waste_quantity: BatchesAPI.Quantity | null;
        }
      }

      /**
       * ProductionFlowProduction is the production output of a flow step.
       */
      export interface Production {
        /**
         * Production record ID.
         */
        id: string;

        /**
         * Resource type identifier.
         */
        object: 'production';

        /**
         * Item is an inventory item (product, material, or part).
         */
        produced_item: ItemsAPI.Item | null;

        /**
         * Value with an associated unit.
         */
        quantity: BatchesAPI.Quantity | null;
      }
    }
  }
}

export interface ProductionFlowRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'steps'
    | 'steps.production'
    | 'steps.production.produced_item'
    | 'steps.consumptions'
    | 'steps.consumptions.consumed_item'
    | 'steps.consumptions.quantity'
    | 'steps.consumptions.waste_quantity'
    | 'steps.machines'
    | 'steps.scanning_station'
    | 'steps.department'
    | 'steps.in_steps'
    | 'steps.out_steps'
  >;
}

ProductionFlows.Actions = Actions;

export declare namespace ProductionFlows {
  export {
    type ProductionFlowRetrieveResponse as ProductionFlowRetrieveResponse,
    type ProductionFlowRetrieveParams as ProductionFlowRetrieveParams,
  };

  export {
    Actions as Actions,
    type ActionConnectStepsResponse as ActionConnectStepsResponse,
    type ActionConnectStepsParams as ActionConnectStepsParams,
  };
}
