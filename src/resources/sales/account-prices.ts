// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as ProductLinesAPI from '../catalog/product-lines';
import * as OperationsAPI from '../operations/operations';
import * as ItemCategoriesAPI from '../catalog/item-categories/item-categories';
import * as AttributesAPI from '../catalog/properties/attributes';
import * as CustomersAPI from './customers/customers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage account prices.
 */
export class AccountPrices extends APIResource {
  /**
   * Returns an account price by ID.
   *
   * @example
   * ```ts
   * const accountPrice =
   *   await client.sales.accountPrices.retrieve(
   *     'acpr_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: AccountPriceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountPrice> {
    return this._client.get(path`/v1/sales/account-prices/${id}`, { query, ...options });
  }

  /**
   * Partially updates an account price. If category_ids or attribute_ids are
   * provided, they replace the existing set entirely.
   *
   * @example
   * ```ts
   * const accountPrice =
   *   await client.sales.accountPrices.update('', {
   *     rate_value: '30.000000000000000000000000000000',
   *   });
   * ```
   */
  update(
    id: string,
    params: AccountPriceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountPrice> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/sales/account-prices/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Deletes an account price. Associated category constraints, attribute
   * constraints, and the rate record are also removed.
   *
   * @example
   * ```ts
   * const accountPrice =
   *   await client.sales.accountPrices.delete(
   *     'acpr_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AccountPriceDeleteResponse> {
    return this._client.delete(path`/v1/sales/account-prices/${id}`, options);
  }

  /**
   * Creates an account price for a recipient customer account. Account prices
   * override all other pricing rules.
   *
   * @example
   * ```ts
   * const accountPrice =
   *   await client.sales.accountPrices.accountPrices({
   *     attribute_ids: ['at_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     category_ids: ['ic_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     product_line_id: 'pl_01jm4r6700f8nwq3v5hx2d9ktp',
   *     rate_denominator_unit_id:
   *       'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *     rate_numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *     rate_value: '25.500000000000000000000000000000',
   *     recipient_account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x',
   *   });
   * ```
   */
  accountPrices(params: AccountPriceAccountPricesParams, options?: RequestOptions): APIPromise<AccountPrice> {
    const { include, ...body } = params;
    return this._client.post('/v1/sales/account-prices', { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of account prices for the current account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sales.accountPrices.retrieveAccountPrices();
   * ```
   */
  retrieveAccountPrices(
    query: AccountPriceRetrieveAccountPricesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountPriceRetrieveAccountPricesResponse> {
    return this._client.get('/v1/sales/account-prices', { query, ...options });
  }
}

/**
 * Customer-specific price for a product line.
 */
export interface AccountPrice {
  /**
   * Account price ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  attributes: AttributesAPI.ListAttribute | null;

  /**
   * List represents a paginated list of resources.
   */
  categories: ItemCategoriesAPI.ListItemCategory | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'account_price';

  /**
   * Product line resource.
   */
  product_line: ProductLinesAPI.ProductLine | null;

  /**
   * Rate resource.
   */
  rate: OperationsAPI.Rate | null;

  /**
   * Customer account.
   */
  recipient_account: CustomersAPI.Customer | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface AccountPriceDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface AccountPriceRetrieveAccountPricesResponse {
  /**
   * Resources in this page.
   */
  data: Array<AccountPrice>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface AccountPriceRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'recipient_account' | 'product_line' | 'categories' | 'attributes'>;
}

export interface AccountPriceUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'recipient_account' | 'product_line' | 'categories' | 'attributes'>;

  /**
   * Body param: Attribute IDs to constrain this price to. Replaces existing
   * attributes.
   */
  attribute_ids?: Array<string>;

  /**
   * Body param: Item category IDs to constrain this price to. Replaces existing
   * categories.
   */
  category_ids?: Array<string>;

  /**
   * Body param: Product line ID.
   */
  product_line_id?: string;

  /**
   * Body param: Rate denominator unit ID.
   */
  rate_denominator_unit_id?: string;

  /**
   * Body param: Rate numerator unit ID.
   */
  rate_numerator_unit_id?: string;

  /**
   * Body param: Rate value as a decimal string.
   */
  rate_value?: string;

  /**
   * Body param: Recipient account ID.
   */
  recipient_account_id?: string;
}

export interface AccountPriceAccountPricesParams {
  /**
   * Body param: Attribute IDs to constrain this price to.
   */
  attribute_ids: Array<string>;

  /**
   * Body param: Item category IDs to constrain this price to.
   */
  category_ids: Array<string>;

  /**
   * Body param: Product line ID.
   */
  product_line_id: string;

  /**
   * Body param: Rate denominator unit ID.
   */
  rate_denominator_unit_id: string;

  /**
   * Body param: Rate numerator unit ID.
   */
  rate_numerator_unit_id: string;

  /**
   * Body param: Rate value as a decimal string.
   */
  rate_value: string;

  /**
   * Body param: Recipient customer account ID.
   */
  recipient_account_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'recipient_account' | 'product_line' | 'categories' | 'attributes'>;
}

export interface AccountPriceRetrieveAccountPricesParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Recipient account ID filter.
   */
  recipient_account_id?: string;
}

export declare namespace AccountPrices {
  export {
    type AccountPrice as AccountPrice,
    type AccountPriceDeleteResponse as AccountPriceDeleteResponse,
    type AccountPriceRetrieveAccountPricesResponse as AccountPriceRetrieveAccountPricesResponse,
    type AccountPriceRetrieveParams as AccountPriceRetrieveParams,
    type AccountPriceUpdateParams as AccountPriceUpdateParams,
    type AccountPriceAccountPricesParams as AccountPriceAccountPricesParams,
    type AccountPriceRetrieveAccountPricesParams as AccountPriceRetrieveAccountPricesParams,
  };
}
