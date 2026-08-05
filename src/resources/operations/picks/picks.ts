// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InvoicesAPI from '../../finance/invoices';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import { ActionPackParams, Actions, PackPickRequest, PackPickResponse } from './actions';
import * as LinesAPI from './lines/lines';
import { LineUpdateParams, Lines, UpdatePickLineRequest } from './lines/lines';
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
   * This endpoint requires the permission: `picks:read`.
   *
   * @example
   * ```ts
   * const pick = await client.operations.picks.retrieve(
   *   'pk_6eilj488bq8d',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: PickRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.Pick> {
    return this._client.get(path`/v1/operations/picks/${id}`, { query, ...options });
  }

  /**
   * Partially updates a pick's metadata.
   *
   * Only the fields provided in the request are changed. This endpoint edits the
   * pick record itself; use the pick and pack actions to change what has actually
   * been picked.
   *
   * This endpoint requires the permission: `picks:update`.
   *
   * @example
   * ```ts
   * const pick = await client.operations.picks.update(
   *   'pk_6eilj488bq8d',
   *   { number: 'PCK-2025-0042' },
   * );
   * ```
   */
  update(
    id: string,
    params: PickUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.Pick> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/picks/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of picks, newest first.
   *
   * The `q` search term matches the pick number, the sales order number, the
   * customer PO number, and the customer's name or number.
   *
   * This endpoint requires the permissions: `picks:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const listPick = await client.operations.picks.list();
   * ```
   */
  list(query: PickListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListPick> {
    return this._client.get('/v1/operations/picks', { query, ...options });
  }

  /**
   * Returns the shipment numbers associated with a pick, oldest first.
   *
   * Shipments are matched through the pick's sales order, so the list covers every
   * shipment created for that order — each partial pack of the pick adds another
   * one. Only the numbers are returned; retrieve the shipment to get its full
   * detail.
   *
   * This endpoint requires the permission: `picks:read`.
   *
   * @example
   * ```ts
   * const pickShipmentsResponse =
   *   await client.operations.picks.retrieveShipments(
   *     'pk_6eilj488bq8d',
   *   );
   * ```
   */
  retrieveShipments(
    id: string,
    query: PickRetrieveShipmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PickShipmentsResponse> {
    return this._client.get(path`/v1/operations/picks/${id}/shipments`, { query, ...options });
  }
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListPick {
  /**
   * Resources in this page.
   */
  data: Array<InvoicesAPI.Pick>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * The shipment numbers for the sales order a pick belongs to.
 */
export interface PickShipmentsResponse {
  /**
   * Total number of matching shipments, ignoring `limit` and `offset`.
   */
  count: number;

  /**
   * Resource type identifier.
   */
  object: 'pick_shipments_response';

  /**
   * Shipment numbers associated with the pick, oldest first.
   */
  shipment_numbers: Array<string>;
}

/**
 * Request to partially update a pick's metadata.
 */
export interface UpdatePickRequest {
  /**
   * Timestamp when the pick was finished, in RFC 3339 format.
   *
   * Setting it closes the pick out even if lines are still unpacked; pass an empty
   * string to clear it and reopen the pick.
   */
  finished_at?: string;

  /**
   * New number to assign to the pick.
   *
   * Maximum 255 characters. Renaming a pick does not rename the sales order it was
   * created from.
   */
  number?: string;
}

export interface PickRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'sales_order' | 'customer' | 'departments' | 'lines' | 'lines.sales_order_line'>;
}

export interface PickUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'lines'>;

  /**
   * Body param: Timestamp when the pick was finished, in RFC 3339 format.
   *
   * Setting it closes the pick out even if lines are still unpacked; pass an empty
   * string to clear it and reopen the pick.
   */
  finished_at?: string;

  /**
   * Body param: New number to assign to the pick.
   *
   * Maximum 255 characters. Renaming a pick does not rename the sales order it was
   * created from.
   */
  number?: string;
}

export interface PickListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Filter by customer type group IDs.
   *
   * Matches picks whose customer's type group — the account group returned in the
   * customer's `type` field — is one of the given groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Filter by customer IDs.
   */
  customer_ids?: Array<string>;

  /**
   * Filter by department IDs.
   *
   * Matches picks assigned to any of the given departments.
   */
  department_ids?: Array<string>;

  /**
   * Only return picks created before this date (`YYYY-MM-DD`).
   */
  ends_at?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'sales_order' | 'customer' | 'departments'>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Filter by product line IDs.
   *
   * Matches picks that contain at least one line for a product in any of the given
   * product lines.
   */
  product_line_ids?: Array<string>;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Only return picks created on or after this date (`YYYY-MM-DD`).
   */
  starts_at?: string;

  /**
   * Filter by pick status.
   *
   * Pass `open` for picks that have not been finished, or `closed` for picks that
   * have.
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
   * Search query that filters shipment numbers by substring match.
   */
  q?: string;
}

Picks.Actions = Actions;
Picks.Lines = Lines;

export declare namespace Picks {
  export {
    type ListPick as ListPick,
    type PickShipmentsResponse as PickShipmentsResponse,
    type UpdatePickRequest as UpdatePickRequest,
    type PickRetrieveParams as PickRetrieveParams,
    type PickUpdateParams as PickUpdateParams,
    type PickListParams as PickListParams,
    type PickRetrieveShipmentsParams as PickRetrieveShipmentsParams,
  };

  export {
    Actions as Actions,
    type PackPickRequest as PackPickRequest,
    type PackPickResponse as PackPickResponse,
    type ActionPackParams as ActionPackParams,
  };

  export {
    Lines as Lines,
    type UpdatePickLineRequest as UpdatePickLineRequest,
    type LineUpdateParams as LineUpdateParams,
  };
}
