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
   * Creates a customer-specific price for a product line.
   *
   * When an order line matches the price's product line and constraints, the account
   * price overrides standard pricing for the recipient customer.
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
   * Partially updates an account price.
   *
   * Only the provided fields are changed. If `category_ids` or `attribute_ids` are
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
   * Deletes an account price.
   *
   * Associated category constraints, attribute constraints, and the rate record are
   * also removed. Deletion is permanent; further requests against the deleted ID
   * return an error.
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
 * A customer-specific price for a product line.
 *
 * When an order line matches an account price's product line and constraints, the
 * account price replaces the standard product line pricing for the recipient
 * customer.
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
   *
   * A product line groups related products in your catalog and carries the default
   * commission policy, freight policy, and unit group for those products.
   */
  product_line: ProductLine | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  rate: AccountUsersAPI.Rate | null;

  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
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
   *
   * When set, the price applies only to items that have every listed attribute.
   */
  attribute_ids: Array<string>;

  /**
   * Item category IDs to constrain this price to.
   *
   * When empty, the price is not restricted by item category.
   */
  category_ids: Array<string>;

  /**
   * Product line ID.
   */
  product_line_id: string;

  /**
   * ID of the unit for the rate's denominator — the quantity unit being priced.
   */
  rate_denominator_unit_id: string;

  /**
   * ID of the unit for the rate's numerator, typically a currency unit.
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
 *
 * A product line groups related products in your catalog and carries the default
 * commission policy, freight policy, and unit group for those products.
 */
export interface ProductLine {
  /**
   * Product line ID.
   */
  id: string;

  /**
   * Default commission policy for products in this product line.
   *
   * - `commission_exempt`: no commission applies to these products.
   * - `commission_applied`: commission applies to these products, unless overridden
   *   elsewhere.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Free-form description of the product line.
   */
  description: string | null;

  /**
   * Default freight policy for products in this product line.
   *
   * - `free_freight`: these products do not incur a freight charge.
   * - `billed_freight`: freight is billed for these products, unless overridden
   *   elsewhere.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * Display name of the product line.
   */
  name: string;

  /**
   * Free-form notes about the product line.
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
   * Named collection of units sharing one dimension, defining which units products
   * can be ordered in along with per-unit discounts and customer portal visibility.
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
   * Attribute IDs to constrain this price to.
   *
   * When provided, replaces the existing set of attributes entirely; an empty list
   * removes all attribute constraints.
   */
  attribute_ids?: Array<string>;

  /**
   * Item category IDs to constrain this price to.
   *
   * When provided, replaces the existing set of categories entirely; an empty list
   * removes all category constraints.
   */
  category_ids?: Array<string>;

  /**
   * Product line ID.
   */
  product_line_id?: string;

  /**
   * ID of the unit for the rate's denominator — the quantity unit being priced.
   */
  rate_denominator_unit_id?: string;

  /**
   * ID of the unit for the rate's numerator, typically a currency unit.
   */
  rate_numerator_unit_id?: string;

  /**
   * Rate value as a decimal string.
   */
  rate_value?: string;

  /**
   * Recipient customer account ID.
   */
  recipient_account_id?: string;
}

export interface AccountPriceDeleteResponse {}

export interface AccountPriceCreateParams {
  /**
   * Body param: Attribute IDs to constrain this price to.
   *
   * When set, the price applies only to items that have every listed attribute.
   */
  attribute_ids: Array<string>;

  /**
   * Body param: Item category IDs to constrain this price to.
   *
   * When empty, the price is not restricted by item category.
   */
  category_ids: Array<string>;

  /**
   * Body param: Product line ID.
   */
  product_line_id: string;

  /**
   * Body param: ID of the unit for the rate's denominator — the quantity unit being
   * priced.
   */
  rate_denominator_unit_id: string;

  /**
   * Body param: ID of the unit for the rate's numerator, typically a currency unit.
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
   * Body param: Attribute IDs to constrain this price to.
   *
   * When provided, replaces the existing set of attributes entirely; an empty list
   * removes all attribute constraints.
   */
  attribute_ids?: Array<string>;

  /**
   * Body param: Item category IDs to constrain this price to.
   *
   * When provided, replaces the existing set of categories entirely; an empty list
   * removes all category constraints.
   */
  category_ids?: Array<string>;

  /**
   * Body param: Product line ID.
   */
  product_line_id?: string;

  /**
   * Body param: ID of the unit for the rate's denominator — the quantity unit being
   * priced.
   */
  rate_denominator_unit_id?: string;

  /**
   * Body param: ID of the unit for the rate's numerator, typically a currency unit.
   */
  rate_numerator_unit_id?: string;

  /**
   * Body param: Rate value as a decimal string.
   */
  rate_value?: string;

  /**
   * Body param: Recipient customer account ID.
   */
  recipient_account_id?: string;
}

export interface AccountPriceListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Filters results to prices whose recipient is this customer account.
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
