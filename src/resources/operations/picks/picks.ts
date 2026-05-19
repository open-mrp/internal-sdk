// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as DepartmentsAPI from '../departments';
import * as PrioritiesAPI from '../../sales/priorities';
import * as ActionsAPI from './actions';
import { ActionPackParams, ActionPackResponse, Actions } from './actions';
import * as CustomersAPI from '../../sales/customers/customers';
import * as SalesOrdersAPI from '../../sales/sales-orders/sales-orders';
import * as LinesAPI from './lines/lines';
import { LineUpdateParams, Lines as LinesAPILines, PickLineDetail } from './lines/lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, update, pick, void, and pack picks and pick lines.
 */
export class Picks extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  lines: LinesAPI.Lines = new LinesAPI.Lines(this._client);

  /**
   * Returns a pick by ID.
   *
   * @example
   * ```ts
   * const pickDetail = await client.operations.picks.retrieve(
   *   'pk_01jm4r6700f8nwq3v5hx2d9ktp',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: PickRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PickDetail> {
    return this._client.get(path`/v1/operations/picks/${id}`, { query, ...options });
  }

  /**
   * Partially updates a pick's metadata.
   *
   * @example
   * ```ts
   * const pickDetail = await client.operations.picks.update(
   *   'pk_01jm4r6700f8nwq3v5hx2d9ktp',
   *   { number: 'PCK-2025-0042' },
   * );
   * ```
   */
  update(
    id: string,
    params: PickUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PickDetail> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/picks/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of picks.
   *
   * @example
   * ```ts
   * const picks = await client.operations.picks.list();
   * ```
   */
  list(
    query: PickListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PickListResponse> {
    return this._client.get('/v1/operations/picks', { query, ...options });
  }

  /**
   * Returns the shipment numbers associated with a pick.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.picks.retrieveShipments(
   *     'pk_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieveShipments(
    id: string,
    query: PickRetrieveShipmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PickRetrieveShipmentsResponse> {
    return this._client.get(path`/v1/operations/picks/${id}/shipments`, { query, ...options });
  }
}

/**
 * PickDetail is a full pick resource.
 */
export interface PickDetail {
  /**
   * Pick ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer account.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * List represents a paginated list of resources.
   */
  departments: DepartmentsAPI.ListDepartment | null;

  /**
   * Timestamp when the pick was finished.
   */
  finished_at: string | null;

  /**
   * List represents a paginated list of resources.
   */
  lines: PickDetail.Lines | null;

  /**
   * Pick number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'pick';

  /**
   * Priority level used by sales orders and picks.
   */
  priority: PrioritiesAPI.Priority | null;

  /**
   * Full sales order resource.
   */
  sales_order: SalesOrdersAPI.SalesOrderDetail | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export namespace PickDetail {
  /**
   * List represents a paginated list of resources.
   */
  export interface Lines {
    /**
     * Resources in this page.
     */
    data: Array<LinesAPI.PickLineDetail>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface PickListResponse {
  /**
   * Resources in this page.
   */
  data: Array<PickListResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace PickListResponse {
  /**
   * PickSummary is a pick resource for list views.
   */
  export interface Data {
    /**
     * Pick ID.
     */
    id: string;

    /**
     * Creation timestamp.
     */
    created_at: string;

    /**
     * Customer account.
     */
    customer: CustomersAPI.Customer | null;

    /**
     * Timestamp when the pick was finished.
     */
    finished_at: string | null;

    /**
     * Pick number.
     */
    number: string;

    /**
     * Resource type identifier.
     */
    object: 'pick';

    /**
     * Priority level used by sales orders and picks.
     */
    priority: PrioritiesAPI.Priority | null;

    /**
     * Full sales order resource.
     */
    sales_order: SalesOrdersAPI.SalesOrderDetail | null;

    /**
     * Last updated timestamp.
     */
    updated_at: string;
  }
}

/**
 * PickShipmentsResponse is the result of getting shipments for a pick.
 */
export interface PickRetrieveShipmentsResponse {
  /**
   * Total count of matching shipment numbers.
   */
  count: number;

  /**
   * Shipment numbers associated with the pick.
   */
  shipment_numbers: Array<string>;
}

export interface PickRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'sales_order' | 'departments' | 'lines' | 'lines.sales_order_line'>;
}

export interface PickUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'lines'>;

  /**
   * Body param: Timestamp when the pick was finished. Pass an empty string to clear.
   */
  finished_at?: string;

  /**
   * Body param: Pick number.
   */
  number?: string;
}

export interface PickListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Query parameter: customer_group_ids for List Picks
   */
  customer_group_ids?: Array<string>;

  /**
   * Query parameter: customer_ids for List Picks
   */
  customer_ids?: Array<string>;

  /**
   * Query parameter: department_ids for List Picks
   */
  department_ids?: Array<string>;

  /**
   * Query parameter: end_date for List Picks
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'sales_order'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Query parameter: product_line_ids for List Picks
   */
  product_line_ids?: Array<string>;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Query parameter: start_date for List Picks
   */
  start_date?: string;

  /**
   * Query parameter: status for List Picks
   */
  status?: string;
}

export interface PickRetrieveShipmentsParams {
  /**
   * Maximum number of results to return.
   */
  limit?: number;

  /**
   * Number of results to skip.
   */
  offset?: number;

  /**
   * Query parameter: q for Get Pick Shipments
   */
  q?: string;
}

Picks.Actions = Actions;
Picks.Lines = LinesAPILines;

export declare namespace Picks {
  export {
    type PickDetail as PickDetail,
    type PickListResponse as PickListResponse,
    type PickRetrieveShipmentsResponse as PickRetrieveShipmentsResponse,
    type PickRetrieveParams as PickRetrieveParams,
    type PickUpdateParams as PickUpdateParams,
    type PickListParams as PickListParams,
    type PickRetrieveShipmentsParams as PickRetrieveShipmentsParams,
  };

  export {
    Actions as Actions,
    type ActionPackResponse as ActionPackResponse,
    type ActionPackParams as ActionPackParams,
  };

  export {
    LinesAPILines as Lines,
    type PickLineDetail as PickLineDetail,
    type LineUpdateParams as LineUpdateParams,
  };
}
