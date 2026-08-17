// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from '../../core/jobs';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage account prices.
 */
export class Actions extends APIResource {
  /**
   * Starts a customer's price list and returns the job that tracks it.
   *
   * The document covers every product the customer may order, grouped by product
   * line and then by the SKUs that share a price, with the attributes that vary
   * shown as columns. Prices are calculated by the same engine that prices a sales
   * order, so they include the customer's contracted prices and any volume discount
   * they qualify for; a volume break becomes its own price column only where it
   * actually changes a price.
   *
   * Pricing a whole catalog takes too long to hold a request open for, so the PDF is
   * rendered in the background. Poll the returned job and download the file it names
   * once it completes.
   *
   * This endpoint requires the permission: `discounts:read`.
   *
   * @example
   * ```ts
   * const job =
   *   await client.sales.accountPrices.actions.exportPriceList({
   *     customer_id: 'ac_opnlh43ymyee',
   *   });
   * ```
   */
  exportPriceList(params: ActionExportPriceListParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    const { include, ...body } = params;
    return this._client.post('/v1/sales/account-prices/actions/export-price-list', {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * Request to export a customer's price list.
 */
export interface ExportPriceListRequest {
  /**
   * ID of the customer whose prices are listed.
   */
  customer_id: string;
}

export interface ActionExportPriceListParams {
  /**
   * Body param: ID of the customer whose prices are listed.
   */
  customer_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'created_by' | 'created_by.role'>;
}

export declare namespace Actions {
  export {
    type ExportPriceListRequest as ExportPriceListRequest,
    type ActionExportPriceListParams as ActionExportPriceListParams,
  };
}
