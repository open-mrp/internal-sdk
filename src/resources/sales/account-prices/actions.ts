// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage account prices.
 */
export class Actions extends APIResource {
  /**
   * Downloads a customer's price list as a PDF.
   *
   * The document covers every product the customer may order, grouped by product
   * line and then by the SKUs that share a price, with the attributes that vary
   * shown as columns. Prices are calculated by the same engine that prices a sales
   * order, so they include the customer's contracted prices and any volume discount
   * they qualify for; a volume break becomes its own price column only where it
   * actually changes a price.
   *
   * This endpoint requires the permission: `discounts:read`.
   *
   * @example
   * ```ts
   * const fileDownload =
   *   await client.sales.accountPrices.actions.exportPriceList({
   *     customer_id: 'customer_id',
   *   });
   * ```
   */
  exportPriceList(query: ActionExportPriceListParams, options?: RequestOptions): APIPromise<FileDownload> {
    return this._client.get('/v1/sales/account-prices/actions/export-price-list', { query, ...options });
  }
}

/**
 * FileDownload is a response type for endpoints that return a file (e.g. Excel
 * export). When the service returns \*FileDownload, the handler writes the body
 * with Content-Type and Content-Disposition.
 */
export interface FileDownload {}

export interface ActionExportPriceListParams {
  /**
   * ID of the customer whose prices are listed.
   */
  customer_id: string;
}

export declare namespace Actions {
  export {
    type FileDownload as FileDownload,
    type ActionExportPriceListParams as ActionExportPriceListParams,
  };
}
