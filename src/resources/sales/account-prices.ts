// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import * as CustomersAPI from './customers/customers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage account prices.
 */
export class AccountPrices extends APIResource {
  /**
   * Creates an account price for a recipient customer account. Account prices
   * override all other pricing rules.
   *
   * @example
   * ```ts
   * const accountPrice =
   *   await client.sales.accountPrices.create({
   *     attribute_ids: ['at_01c9493ec0c46bb0ed12708ae4'],
   *     category_ids: ['ic_01ae7bd7bfd21ca0ab81e1357e'],
   *     product_line_id: 'pl_01996357326a0d3f7b129542ea',
   *     rate_denominator_unit_id:
   *       'un_01966263f74a5a0cae356000a1',
   *     rate_numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
   *     rate_value: '25.500000000000000000000000000000',
   *     recipient_account_id: 'ac_01148680966698341a9c0976db',
   *   });
   * ```
   */
  create(params: AccountPriceCreateParams, options?: RequestOptions): APIPromise<AccountPrice> {
    const { include, ...body } = params;
    return this._client.post('/v1/sales/account-prices', { query: { include }, body, ...options });
  }

  /**
   * Returns an account price by ID.
   *
   * @example
   * ```ts
   * const accountPrice =
   *   await client.sales.accountPrices.retrieve(
   *     'acpr_01dfc47cc46b1e0b66ca8eec0a',
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
   *   await client.sales.accountPrices.update(
   *     'acpr_01dfc47cc46b1e0b66ca8eec0a',
   *     { rate_value: '30.000000000000000000000000000000' },
   *   );
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
   * Returns a paginated list of account prices for the current account.
   *
   * @example
   * ```ts
   * const listAccountPrice =
   *   await client.sales.accountPrices.list();
   * ```
   */
  list(
    query: AccountPriceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAccountPrice> {
    return this._client.get('/v1/sales/account-prices', { query, ...options });
  }

  /**
   * Deletes an account price. Associated category constraints, attribute
   * constraints, and the rate record are also removed.
   *
   * @example
   * ```ts
   * const accountPrice =
   *   await client.sales.accountPrices.delete(
   *     'acpr_01dfc47cc46b1e0b66ca8eec0a',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AccountPriceDeleteResponse> {
    return this._client.delete(path`/v1/sales/account-prices/${id}`, options);
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
  attributes: AccountUsersAPI.ListAttribute | null;

  /**
   * List represents a paginated list of resources.
   */
  categories: ListItemCategory | null;

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
  product_line: ProductLine | null;

  /**
   * Rate resource.
   */
  rate: AccountUsersAPI.Rate | null;

  /**
   * Customer account.
   */
  recipient_account: CustomersAPI.Customer | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to create an account price.
 */
export interface CreateAccountPriceRequest {
  /**
   * Attribute IDs to constrain this price to.
   */
  attribute_ids: Array<string>;

  /**
   * Item category IDs to constrain this price to.
   */
  category_ids: Array<string>;

  /**
   * Product line ID.
   */
  product_line_id: string;

  /**
   * Rate denominator unit ID.
   */
  rate_denominator_unit_id: string;

  /**
   * Rate numerator unit ID.
   */
  rate_numerator_unit_id: string;

  /**
   * Rate value as a decimal string.
   */
  rate_value: string;

  /**
   * Recipient customer account ID.
   */
  recipient_account_id: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAccountPrice {
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
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListItemCategory {
  /**
   * Resources in this page.
   */
  data: Array<AccountUsersAPI.ItemCategory>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Product line resource.
 */
export interface ProductLine {
  /**
   * Product line ID.
   */
  id: string;

  /**
   * Commission policy of products in this product line.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Description.
   */
  description: string | null;

  /**
   * Freight policy for all items in this product line.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'product_line';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * UnitGroup is a unit group resource.
   */
  unit_group: AccountUsersAPI.UnitGroup | null;

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to partially update an account price.
 */
export interface UpdateAccountPriceRequest {
  /**
   * Attribute IDs to constrain this price to. Replaces existing attributes.
   */
  attribute_ids?: Array<string>;

  /**
   * Item category IDs to constrain this price to. Replaces existing categories.
   */
  category_ids?: Array<string>;

  /**
   * Product line ID.
   */
  product_line_id?: string;

  /**
   * Rate denominator unit ID.
   */
  rate_denominator_unit_id?: string;

  /**
   * Rate numerator unit ID.
   */
  rate_numerator_unit_id?: string;

  /**
   * Rate value as a decimal string.
   */
  rate_value?: string;

  /**
   * Recipient account ID.
   */
  recipient_account_id?: string;
}

export interface AccountPriceDeleteResponse {}

export interface AccountPriceCreateParams {
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

export interface AccountPriceListParams {
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
    type CreateAccountPriceRequest as CreateAccountPriceRequest,
    type ListAccountPrice as ListAccountPrice,
    type ListItemCategory as ListItemCategory,
    type ProductLine as ProductLine,
    type UpdateAccountPriceRequest as UpdateAccountPriceRequest,
    type AccountPriceDeleteResponse as AccountPriceDeleteResponse,
    type AccountPriceCreateParams as AccountPriceCreateParams,
    type AccountPriceRetrieveParams as AccountPriceRetrieveParams,
    type AccountPriceUpdateParams as AccountPriceUpdateParams,
    type AccountPriceListParams as AccountPriceListParams,
  };
}
