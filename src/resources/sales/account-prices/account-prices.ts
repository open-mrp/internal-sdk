// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from '../../core/analytics';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as ActionsAPI from './actions';
import { ActionExportPriceListParams, Actions, ExportPriceListRequest } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage account prices.
 */
export class AccountPrices extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a customer-specific price for a product line.
   *
   * When a sales order line for the recipient matches the price's product line and
   * attributes, this price replaces the unit price the line would otherwise be
   * given, including the effect of any volume discount. If more than one account
   * price matches a line, the most recently created one wins.
   *
   * This endpoint requires the permission: `discounts:create`.
   *
   * @example
   * ```ts
   * const accountPrice =
   *   await client.sales.accountPrices.create({
   *     product_line_id: 'pdln_k9bnlgvxhxjh',
   *     rate: {
   *       value: '25.50',
   *       numerator_unit_id: 'un_82bd37dae5po',
   *       denominator_unit_id: 'un_82bd37dae5po',
   *     },
   *     recipient_account_id: 'ac_ykxoradjoeb3',
   *     attribute_ids: ['at_rf1w295jt5ia'],
   *     category_ids: ['ic_d06g9c6yc9ck'],
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
   * A customer portal user can only retrieve a price whose recipient is their own
   * account or its parent; any other price is reported as not found.
   *
   * This endpoint requires the permissions: `discounts:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const accountPrice =
   *   await client.sales.accountPrices.retrieve(
   *     'acpr_7l4j483kf32p',
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
   * Order lines that have already been priced keep the unit price they were given;
   * the new price applies to lines priced after the change.
   *
   * This endpoint requires the permission: `discounts:update`.
   *
   * @example
   * ```ts
   * const accountPrice =
   *   await client.sales.accountPrices.update(
   *     'acpr_7l4j483kf32p',
   *     {
   *       rate: {
   *         value: '30.000000000000000000000000000000',
   *         numerator_unit_id: 'un_82bd37dae5po',
   *         denominator_unit_id: 'un_82bd37dae5po',
   *       },
   *     },
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
   * Returns a paginated list of account prices, newest first.
   *
   * The search term matches the recipient customer's name or their customer number.
   * Customer portal users always see only the prices that apply to their own
   * account, whatever `recipient_account_id` is set to.
   *
   * This endpoint requires the permissions: `discounts:read`, `customers:read`,
   * `suppliers:read`.
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
   * The price's category and attribute associations and its rate record are removed
   * with it. Deletion is permanent; further requests against the deleted ID return
   * an error.
   *
   * Order lines that have already been priced keep the unit price they were given;
   * only lines priced after the deletion revert to standard pricing.
   *
   * This endpoint requires the permission: `discounts:delete`.
   *
   * @example
   * ```ts
   * const accountPrice =
   *   await client.sales.accountPrices.delete(
   *     'acpr_7l4j483kf32p',
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
 * When a sales order line matches an account price, that price replaces the unit
 * price the line would otherwise be given — including the effect of any volume
 * discount — rather than discounting it. If more than one account price matches a
 * line, the most recently created one wins.
 */
export interface AccountPrice {
  /**
   * Account price ID.
   */
  id: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  attributes: AccountUsersAPI.ListAttribute | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
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
   * A named grouping of related products in your catalog.
   *
   * A product line carries the default commission and freight policies for the
   * products assigned to it, along with the unit group that determines how those
   * products are measured. Product lines are also the unit that catalog access is
   * granted over, for both customers and account groups.
   */
  product_line: AnalyticsAPI.ProductLine | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  rate: AccountUsersAPI.Rate | null;

  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  recipient_account: AnalyticsAPI.Customer | null;

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
   * ID of the product line whose products this price applies to.
   */
  product_line_id: string;

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  rate: RateInput;

  /**
   * ID of the customer this price is offered to.
   *
   * A price recorded against a parent customer account also applies to orders placed
   * by its child accounts.
   */
  recipient_account_id: string;

  /**
   * Attribute IDs to constrain this price to.
   *
   * When set, the price applies only to items that have every listed attribute.
   */
  attribute_ids?: Array<string>;

  /**
   * Item category IDs to record on this price.
   *
   * Order pricing matches an account price on its product line and attributes only,
   * so categories recorded here do not narrow which products the price applies to.
   */
  category_ids?: Array<string>;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * A value expressed as a ratio of two units, supplied on create and update
 * requests.
 *
 * A unit price, for example, has a currency as its numerator unit and the unit the
 * product is bought or sold by as its denominator.
 */
export interface RateInput {
  /**
   * ID of the unit for the rate's denominator (the per-unit basis).
   */
  denominator_unit_id: string;

  /**
   * ID of the unit for the rate's numerator (e.g. the currency of a price).
   */
  numerator_unit_id: string;

  /**
   * Decimal value of the rate, expressed as the amount of the numerator unit per one
   * denominator unit.
   */
  value: string;
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
   * Item category IDs to record on this price.
   *
   * When provided, replaces the existing set of categories entirely; an empty list
   * removes them all. Categories are recorded only — they do not narrow which
   * products the price applies to.
   */
  category_ids?: Array<string>;

  /**
   * ID of the product line whose products this price applies to.
   */
  product_line_id?: string;

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  rate?: RateInput;

  /**
   * ID of the customer this price is offered to.
   */
  recipient_account_id?: string;
}

export interface AccountPriceDeleteResponse {}

export interface AccountPriceCreateParams {
  /**
   * Body param: ID of the product line whose products this price applies to.
   */
  product_line_id: string;

  /**
   * Body param: A value expressed as a ratio of two units, supplied on create and
   * update requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  rate: RateInput;

  /**
   * Body param: ID of the customer this price is offered to.
   *
   * A price recorded against a parent customer account also applies to orders placed
   * by its child accounts.
   */
  recipient_account_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'recipient_account' | 'product_line' | 'categories' | 'attributes'>;

  /**
   * Body param: Attribute IDs to constrain this price to.
   *
   * When set, the price applies only to items that have every listed attribute.
   */
  attribute_ids?: Array<string>;

  /**
   * Body param: Item category IDs to record on this price.
   *
   * Order pricing matches an account price on its product line and attributes only,
   * so categories recorded here do not narrow which products the price applies to.
   */
  category_ids?: Array<string>;
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
   * Body param: Item category IDs to record on this price.
   *
   * When provided, replaces the existing set of categories entirely; an empty list
   * removes them all. Categories are recorded only — they do not narrow which
   * products the price applies to.
   */
  category_ids?: Array<string>;

  /**
   * Body param: ID of the product line whose products this price applies to.
   */
  product_line_id?: string;

  /**
   * Body param: A value expressed as a ratio of two units, supplied on create and
   * update requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  rate?: RateInput;

  /**
   * Body param: ID of the customer this price is offered to.
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
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'recipient_account' | 'product_line' | 'categories' | 'attributes'>;

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
   *
   * A child account also matches the prices recorded against its parent, since those
   * price its orders too.
   */
  recipient_account_id?: string;
}

AccountPrices.Actions = Actions;

export declare namespace AccountPrices {
  export {
    type AccountPrice as AccountPrice,
    type CreateAccountPriceRequest as CreateAccountPriceRequest,
    type ListAccountPrice as ListAccountPrice,
    type ListItemCategory as ListItemCategory,
    type RateInput as RateInput,
    type UpdateAccountPriceRequest as UpdateAccountPriceRequest,
    type AccountPriceDeleteResponse as AccountPriceDeleteResponse,
    type AccountPriceCreateParams as AccountPriceCreateParams,
    type AccountPriceRetrieveParams as AccountPriceRetrieveParams,
    type AccountPriceUpdateParams as AccountPriceUpdateParams,
    type AccountPriceListParams as AccountPriceListParams,
  };

  export {
    Actions as Actions,
    type ExportPriceListRequest as ExportPriceListRequest,
    type ActionExportPriceListParams as ActionExportPriceListParams,
  };
}
