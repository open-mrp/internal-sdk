// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthAPI from '../../auth/auth';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import { ActionActivateResponse, ActionDisableResponse, ActionRemoveResponse, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage account users.
 */
export class AccountUsers extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Adds a user to the account you are acting in.
   *
   * If no user with the given email or username exists, a new user is created; a
   * user created with an email address is sent a welcome email containing a
   * generated password, unless they are being added to a supplier account, since
   * suppliers have no portal to sign in to. If a matching user already exists, that
   * user is added to the account instead, and a user you previously removed is
   * restored rather than duplicated. Adding a user to your own account consumes a
   * seat and is rejected once your plan's seat limit is reached.
   *
   * When you add a user to a customer or supplier account that has its own Augno
   * subscription, the membership is created disabled and has to be activated before
   * that user can sign in.
   *
   * This endpoint requires the permissions: `team:create`, `customers:update`,
   * `suppliers:update`.
   *
   * @example
   * ```ts
   * const accountUser =
   *   await client.identity.accountUsers.create({
   *     department_id: 'dp_m0jayebxnkos',
   *     email: 'jdoe@augno.com',
   *     name: 'John Doe',
   *     password: 'QgS7Z8Hhj3&1',
   *     preferences: [
   *       {
   *         notification_type: 'order_acknowledgement',
   *         enabled: true,
   *       },
   *     ],
   *     role_id: 'rl_3xknmfqflhvb',
   *     username: 'jdoe',
   *   });
   * ```
   */
  create(
    params: AccountUserCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUser> {
    const { include, ...body } = params ?? {};
    return this._client.post('/v1/identity/account-users', { query: { include }, body, ...options });
  }

  /**
   * Returns an account user by ID.
   *
   * The lookup is scoped to the account you are acting in, so an ID belonging to
   * another account is reported as not found.
   *
   * This endpoint requires the permissions: `team:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const accountUser =
   *   await client.identity.accountUsers.retrieve(
   *     'acus_e5zu8bde0z3h',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: AccountUserRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUser> {
    return this._client.get(path`/v1/identity/account-users/${id}`, { query, ...options });
  }

  /**
   * Partially updates an account user.
   *
   * Omitted fields are left unchanged. Profile fields (`name`, `email`, `username`)
   * update the underlying user, which is shared across every account the user
   * belongs to, so the change is visible everywhere that person works.
   *
   * This endpoint requires the permissions: `team:update`, `customers:update`,
   * `suppliers:update`.
   *
   * @example
   * ```ts
   * const accountUser =
   *   await client.identity.accountUsers.update(
   *     'acus_e5zu8bde0z3h',
   *     {
   *       department_id: 'dp_m0jayebxnkos',
   *       email: 'jdoe@augno.com',
   *       name: 'John Doe',
   *       preferences: [
   *         {
   *           notification_type: 'order_acknowledgement',
   *           enabled: true,
   *         },
   *       ],
   *       role_id: 'rl_3xknmfqflhvb',
   *       username: 'jdoe',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: AccountUserUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUser> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/identity/account-users/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of the users who belong to the account you are acting
   * in.
   *
   * When the account you are acting in is a customer or supplier account you manage,
   * this lists that account's users rather than your own team.
   *
   * This endpoint requires the permissions: `team:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const listAccountUser =
   *   await client.identity.accountUsers.list();
   * ```
   */
  list(
    query: AccountUserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAccountUser> {
    return this._client.get('/v1/identity/account-users', { query, ...options });
  }
}

/**
 * A user's membership in an account, carrying the account-specific status, role,
 * and department.
 *
 * Profile fields (name, email, username, image URL) live on the `user`
 * sub-resource, which is shared across every account the user belongs to.
 */
export interface AccountUser {
  /**
   * Account user ID.
   */
  id: string;

  /**
   * When the account user was created.
   */
  created_at: string;

  /**
   * A functional area of a production operation, such as fabrication or packaging,
   * that groups scanning stations and machines.
   */
  department: Department | null;

  /**
   * When the user last accessed this account.
   */
  last_used_at: string | null;

  /**
   * Resource type identifier.
   */
  object: 'account_user';

  /**
   * A named set of permissions that can be assigned to users to control what they
   * can access.
   */
  role: APIKeysAPI.Role | null;

  /**
   * The current state of this user's membership in the account.
   *
   * - `active`: the user can sign in to the account and occupies one of the plan's
   *   seats.
   * - `disabled`: the user is locked out of the account and their sessions have been
   *   revoked, but the membership is retained.
   * - `removed`: the membership has been soft-deleted; it is hidden from listings by
   *   default and can be restored with the activate action.
   */
  status: 'active' | 'disabled' | 'removed';

  /**
   * When the account user was last updated.
   */
  updated_at: string;

  /**
   * A user's global profile, shared across every account they belong to.
   *
   * Account-specific settings (status, role, department) live on the account user
   * resource that links the user to each account.
   */
  user: AuthAPI.User | null;
}

/**
 * A selectable value within a property, such as `Red` for a `Color` property.
 *
 * Attributes are assigned to items to classify them.
 */
export interface Attribute {
  /**
   * Attribute ID.
   */
  id: string;

  /**
   * Swatch color used to display this attribute in the UI.
   *
   * The named colors are arbitrary display choices; `default` is a neutral fallback
   * used when no specific swatch applies.
   */
  color: 'blue' | 'brown' | 'default' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'attribute';

  /**
   * A named characteristic used to classify items, such as `Color` or `Size`.
   *
   * Each property defines a set of attributes — the selectable values (e.g. `Red`,
   * `Blue`) that can be assigned to items.
   */
  property: Property | null;

  /**
   * Position of this attribute relative to its siblings within the property,
   * starting at `1`.
   *
   * Positions are kept contiguous: creating, reordering, or deleting an attribute
   * automatically shifts its siblings.
   */
  sort_order: number;

  /**
   * Last update timestamp.
   */
  updated_at: string;

  /**
   * The selectable value this attribute represents, such as `Red` for a `Color`
   * property or `Large` for a `Size` property.
   */
  value: string;
}

/**
 * Material consumed by a production step.
 *
 * Each consumption records one input item and how much of it the step uses.
 * Consumptions also determine the production flow: when another step produces the
 * consumed item, the two steps are linked upstream/downstream automatically.
 *
 * The quantities are stated against the step's own output, so a step producing 100
 * pairs and consuming 5 kg of yarn needs 5 kg per 100 pairs. Material requirements
 * for an order scale every consumption in the flow by how much of the finished
 * item is wanted.
 */
export interface Consumption {
  /**
   * Consumption ID.
   */
  id: string;

  /**
   * An entry in your catalog: something you sell, consume, or build with.
   */
  consumed_item: Item | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Instructions for how this material is consumed.
   */
  instructions: string | null;

  /**
   * Resource type identifier.
   */
  object: 'consumption';

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity: Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  waste_quantity: Quantity | null;
}

/**
 * Request to create an account user.
 */
export interface CreateAccountUserRequest {
  /**
   * ID of the department to assign to the user.
   *
   * The department must already exist in the account you are acting in.
   */
  department_id?: string;

  /**
   * User email address.
   *
   * Either `email` or `username` must be provided. If a user with this email already
   * exists, that user is added to the account instead of a new user being created,
   * and the request fails with a conflict if they are already an active member of
   * it.
   */
  email?: string;

  /**
   * User display name.
   */
  name?: string;

  /**
   * Password for scanning station users.
   *
   * Required when creating a scanning station user (username without email) and
   * rejected for all other users, who instead receive a generated password in their
   * welcome email. Must be 8–72 characters and include an uppercase letter, a
   * lowercase letter, a number, and a special character.
   */
  password?: string;

  /**
   * Notification preference toggles for the new user.
   *
   * Only applies when creating a user in another account you manage (cross-account);
   * ignored when creating a user in your own account.
   */
  preferences?: Array<NotificationPreferenceItem>;

  /**
   * ID of the role to assign to the user.
   *
   * The role you supply can be overridden: users added to a customer account always
   * receive the shared customer role so their portal capabilities stay
   * permission-driven, and scanning station users in any other account receive the
   * scanner role. Supplying a role whose type is `sales_rep` normalizes to the
   * account's canonical sales-rep role.
   */
  role_id?: string;

  /**
   * Unique username.
   *
   * 3–255 characters; letters, numbers, underscores, and hyphens. Either `email` or
   * `username` must be provided. Providing a username without an email creates a
   * scanning station user.
   */
  username?: string;
}

/**
 * A functional area of a production operation, such as fabrication or packaging,
 * that groups scanning stations and machines.
 */
export interface Department {
  /**
   * Department ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  labor_rate: Rate | null;

  /**
   * A physical storage location, such as a warehouse, aisle, or bin, arranged in a
   * parent-child hierarchy.
   */
  location: Location | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  machines: ListMachine | null;

  /**
   * Display name of the department.
   *
   * Unique within the account.
   */
  name: string;

  /**
   * Free-form notes about the department.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'department';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  scanning_stations: ListScanningStation | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * An entry in your catalog: something you sell, consume, or build with.
 */
export interface Item {
  /**
   * Item ID.
   */
  id: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  attributes: ListAttribute | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  burn_rate: Rate | null;

  /**
   * A grouping of related catalog items that defines the unit group and properties
   * available to the items within it.
   */
  category: ItemCategory | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Item description.
   */
  description: string | null;

  /**
   * Free-form notes about the item.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'item';

  /**
   * Stock keeping unit code, unique within the account.
   */
  sku: string;

  /**
   * What kind of item this is.
   *
   * - `product`: a finished product.
   * - `material`: a raw material or component consumed in production.
   * - `part`: a part used in production.
   */
  type: 'product' | 'material' | 'part';

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  unit_cost: Rate | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  unit_value: Rate | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A grouping of related catalog items that defines the unit group and properties
 * available to the items within it.
 */
export interface ItemCategory {
  /**
   * Item category ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the item category.
   */
  name: string;

  /**
   * Free-form notes about the item category.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'item_category';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  properties: ListProperty | null;

  /**
   * What kind of items this category groups.
   *
   * - `material_category`: groups raw materials and components (items of type
   *   `material`).
   * - `product_category`: groups finished products and parts (items of type
   *   `product` or `part`).
   *
   * An item can only be assigned to a category whose type matches the item's `type`,
   * and the category's type is fixed at creation.
   */
  type: 'material_category' | 'product_category';

  /**
   * A named collection of units that share one dimension, defining which units a
   * product can be ordered in.
   *
   * Each associated unit carries its own discount and customer portal visibility,
   * applied when an order line is priced in that unit. A product takes its unit
   * group from its product line, falling back to its item category.
   */
  unit_group: UnitGroup | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListAccountUser {
  /**
   * Resources in this page.
   */
  data: Array<AccountUser>;

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
export interface ListAttribute {
  /**
   * Resources in this page.
   */
  data: Array<Attribute>;

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
export interface ListConsumption {
  /**
   * Resources in this page.
   */
  data: Array<Consumption>;

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
export interface ListLocation {
  /**
   * Resources in this page.
   */
  data: Array<Location>;

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
export interface ListMachine {
  /**
   * Resources in this page.
   */
  data: Array<Machine>;

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
export interface ListProductionStep {
  /**
   * Resources in this page.
   */
  data: Array<ProductionStep>;

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
export interface ListProperty {
  /**
   * Resources in this page.
   */
  data: Array<Property>;

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
export interface ListScanningStation {
  /**
   * Resources in this page.
   */
  data: Array<ScanningStation>;

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
export interface ListUnitGroupUnit {
  /**
   * Resources in this page.
   */
  data: Array<UnitGroupUnit>;

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
 * A physical storage location, such as a warehouse, aisle, or bin, arranged in a
 * parent-child hierarchy.
 */
export interface Location {
  /**
   * Location ID.
   */
  id: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  children: ListLocation | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the location.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'location';

  /**
   * A physical storage location, such as a warehouse, aisle, or bin, arranged in a
   * parent-child hierarchy.
   */
  parent: Location | null;

  /**
   * This location's level in the storage hierarchy.
   *
   * The levels run from largest to smallest: `building`, `section`, `aisle`, `rack`,
   * `shelf`, `bin`. They are descriptive labels rather than a rule — a location's
   * parent is not required to be the next level up.
   */
  type: LocationTypeCode;

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

export type LocationTypeCode = 'building' | 'section' | 'aisle' | 'rack' | 'shelf' | 'bin';

/**
 * A piece of production equipment, such as a CNC router or press, assigned to a
 * department.
 */
export interface Machine {
  /**
   * Machine ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A functional area of a production operation, such as fabrication or packaging,
   * that groups scanning stations and machines.
   */
  department: Department | null;

  /**
   * Display name of the machine.
   *
   * Unique within the account.
   */
  name: string;

  /**
   * Free-form notes about the machine.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'machine';

  /**
   * Serial number of the machine.
   */
  serial_number: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * NotificationPreferenceItem toggles a single account-relation notification type.
 */
export interface NotificationPreferenceItem {
  /**
   * Whether this notification type is enabled for the account user.
   */
  enabled: boolean;

  /**
   * Notification type.
   */
  notification_type: 'invoice' | 'order_acknowledgement' | 'purchase_order_submission';
}

/**
 * The output of a production step: the item it produces and the quantity produced.
 */
export interface ProductionOutput {
  /**
   * Production ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'production';

  /**
   * An entry in your catalog: something you sell, consume, or build with.
   */
  produced_item: Item | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity: Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A single stage of work in an item's production flow, with its output, material
 * inputs, cost rates, and graph connections.
 */
export interface ProductionStep {
  /**
   * Production step ID.
   */
  id: string;

  /**
   * Allowance correction factor applied to labor time in cost calculations, as a
   * decimal string.
   *
   * Effective labor time per unit is
   * `labor_time × (1 + leveling_factor) × (1 + allowances)`.
   */
  allowances: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  consumptions: ListConsumption | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A functional area of a production operation, such as fabrication or packaging,
   * that groups scanning stations and machines.
   */
  department: Department | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  in_steps: ListProductionStep | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  labor_rate: Rate | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  labor_time: Rate | null;

  /**
   * Leveling correction factor applied to labor time in cost calculations, as a
   * decimal string.
   *
   * Effective labor time per unit is
   * `labor_time × (1 + leveling_factor) × (1 + allowances)`.
   */
  leveling_factor: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  machines: ListMachine | null;

  /**
   * Display name of the step.
   */
  name: string;

  /**
   * Free-form notes about the step.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'production_step';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  out_steps: ListProductionStep | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  overhead_rate: Rate | null;

  /**
   * The output of a production step: the item it produces and the quantity produced.
   */
  production: ProductionOutput | null;

  /**
   * A station on the production floor where operators scan batches to perform a
   * batch operation, such as initializing or moving a batch.
   */
  scanning_station: ScanningStation | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A named characteristic used to classify items, such as `Color` or `Size`.
 *
 * Each property defines a set of attributes — the selectable values (e.g. `Red`,
 * `Blue`) that can be assigned to items.
 */
export interface Property {
  /**
   * Property ID.
   */
  id: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  attributes: ListAttribute | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the property, such as `Color` or `Size`.
   *
   * Unique within the account.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'property';

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * A measured amount: a numeric value together with the unit it is expressed in.
 *
 * Quantities are shared building blocks rather than standalone records — other
 * resources point at them to report stock levels, ordered and packed amounts,
 * money, weights, and durations.
 */
export interface Quantity {
  /**
   * Quantity ID.
   */
  id: string;

  /**
   * Formatted value with unit abbreviation (e.g. "$1,234.56" or "100 kg").
   */
  display_value: string;

  /**
   * Resource type identifier.
   */
  object: 'quantity';

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: Unit | null;

  /**
   * Raw decimal value of the quantity, as a string to preserve precision.
   *
   * This is the unformatted machine value; see `display_value` for the
   * human-readable rendering with unit and thousands separators.
   */
  value: string;
}

/**
 * Value expressed as a ratio of two units, such as a price per kilogram or a
 * throughput per hour.
 */
export interface Rate {
  /**
   * Rate ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  denominator_unit: Unit | null;

  /**
   * Human-readable formatted value (e.g. "$25.50 / kg" or "100 kg / hr").
   */
  display_value: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  numerator_unit: Unit | null;

  /**
   * Resource type identifier.
   */
  object: 'rate';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Decimal value of the rate, as a string to preserve precision.
   *
   * Expressed as the amount of the numerator unit per one denominator unit.
   */
  value: string;
}

/**
 * A station on the production floor where operators scan batches to perform a
 * batch operation, such as initializing or moving a batch.
 */
export interface ScanningStation {
  /**
   * Scanning station ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A functional area of a production operation, such as fabrication or packaging,
   * that groups scanning stations and machines.
   */
  department: Department | null;

  /**
   * Size of the labels printed at this station, given as width-by-height (for
   * example, `1x1`).
   */
  label_size: '1x1' | '1x3' | '1x4' | '2x4' | null;

  /**
   * Type of label printed at this station.
   *
   * - `tag`: a label attached to the physical product.
   * - `traveler`: a routing sheet that accompanies the batch through every
   *   production step.
   */
  label_type: 'tag' | 'traveler' | null;

  /**
   * Display name of the scanning station.
   *
   * Unique within the account.
   */
  name: string;

  /**
   * Free-form notes about the scanning station.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'scanning_station';

  /**
   * Whether operators must perform a material check at this station.
   *
   * - `none`: no additional operator check is required.
   * - `material_check`: a material check is expected before the operation.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  production_steps: ListProductionStep | null;

  /**
   * Scanning station type, determining which batch operation an operator performs
   * when they scan here.
   *
   * - `init_batch`: starts a new batch at the beginning of a production flow.
   * - `merge_batch`: combines several scanned batches into one.
   * - `move_batch`: advances a batch through a production step connected to this
   *   station.
   * - `split_batch`: divides a batch into several batches.
   *
   * Fixed when the station is created.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Unit of measurement used for conversions and product quantities.
 */
export interface Unit {
  /**
   * Unit ID.
   */
  id: string;

  /**
   * Short abbreviation for the unit (e.g. "g", "kg").
   */
  abbreviation: string;

  /**
   * When this unit was created.
   */
  created_at: string;

  /**
   * Whether this is the base unit for its dimension.
   *
   * Every other unit's conversion ratio is expressed relative to the base unit. Base
   * units are platform-defined; units created through the API are never base units.
   */
  is_base_unit: boolean;

  /**
   * Display name of the unit (e.g. "Gram", "Kilogram").
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'unit';

  /**
   * Denominator of the conversion offset applied after the ratio.
   *
   * Never zero; a unit with no offset carries a numerator of `0` over a denominator
   * of `1`.
   */
  offset_denominator: string;

  /**
   * Numerator of the conversion offset, applied after the ratio for scales that do
   * not share a zero point, such as temperature.
   *
   * Zero for units that convert by ratio alone.
   */
  offset_numerator: string;

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Denominator of the ratio that converts a quantity in this unit into the
   * dimension's base unit.
   *
   * Cannot be zero.
   */
  ratio_denominator: string;

  /**
   * Numerator of the ratio that converts a quantity in this unit into the
   * dimension's base unit.
   *
   * A quantity is converted with
   * `value × (ratio_numerator / ratio_denominator) + (offset_numerator / offset_denominator)`,
   * so a kilogram in a gram-based dimension has a numerator of `1000` and a
   * denominator of `1`.
   */
  ratio_numerator: string;

  /**
   * The dimension this unit measures, such as mass, volume, or currency.
   *
   * A unit can only be converted to another unit of the same dimension. The
   * `quantity` dimension is for discrete countable items rather than a physical
   * measure.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * When this unit was last updated.
   */
  updated_at: string;
}

/**
 * A named collection of units that share one dimension, defining which units a
 * product can be ordered in.
 *
 * Each associated unit carries its own discount and customer portal visibility,
 * applied when an order line is priced in that unit. A product takes its unit
 * group from its product line, falling back to its item category.
 */
export interface UnitGroup {
  /**
   * Unit group ID.
   */
  id: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  associated_units: ListUnitGroupUnit | null;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  base_unit: Unit | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the unit group.
   *
   * Unique within the account.
   */
  name: string;

  /**
   * Free-form notes about the unit group.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'unit_group';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * The dimension shared by every unit in this group, such as mass, volume, or
   * currency.
   *
   * Only units of this dimension can belong to the group, and the dimension is fixed
   * once the group is created.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Membership of a unit in a unit group, carrying the discount and customer portal
 * visibility settings applied when ordering in that unit.
 */
export interface UnitGroupUnit {
  /**
   * Unit group unit ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Whether this unit is shown to customers in the customer portal.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Flat amount subtracted from the unit's price when an order is placed in this
   * unit.
   *
   * Subtracted before `discount_percentage` is applied.
   */
  discount_fixed: number;

  /**
   * Share of the unit's price removed when an order is placed in this unit.
   *
   * Expressed as a decimal fraction rather than a whole number, so `0.1` is a 10%
   * discount and `0` is no discount.
   */
  discount_percentage: number;

  /**
   * Resource type identifier.
   */
  object: 'unit_group_unit';

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: Unit | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to partially update an account user.
 */
export interface UpdateAccountUserRequest {
  /**
   * ID of the department to assign to the user.
   *
   * Set to `null` to clear the department. The department must already exist in the
   * account.
   */
  department_id?: string | null;

  /**
   * User email address.
   *
   * Must not already be in use by another user.
   */
  email?: string;

  /**
   * User display name.
   */
  name?: string;

  /**
   * Notification preference toggles to apply.
   *
   * Only allowed when updating a user in another account you manage (cross-account);
   * rejected otherwise. Notification types omitted from the list are left unchanged.
   */
  preferences?: Array<NotificationPreferenceItem>;

  /**
   * ID of the role to assign to the user.
   *
   * Set to `null` to clear the role.
   */
  role_id?: string | null;

  /**
   * Unique username.
   *
   * 3–255 characters; letters, numbers, underscores, and hyphens. Must not already
   * be in use by another user.
   */
  username?: string;
}

export interface AccountUserCreateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'user' | 'role' | 'department'>;

  /**
   * Body param: ID of the department to assign to the user.
   *
   * The department must already exist in the account you are acting in.
   */
  department_id?: string;

  /**
   * Body param: User email address.
   *
   * Either `email` or `username` must be provided. If a user with this email already
   * exists, that user is added to the account instead of a new user being created,
   * and the request fails with a conflict if they are already an active member of
   * it.
   */
  email?: string;

  /**
   * Body param: User display name.
   */
  name?: string;

  /**
   * Body param: Password for scanning station users.
   *
   * Required when creating a scanning station user (username without email) and
   * rejected for all other users, who instead receive a generated password in their
   * welcome email. Must be 8–72 characters and include an uppercase letter, a
   * lowercase letter, a number, and a special character.
   */
  password?: string;

  /**
   * Body param: Notification preference toggles for the new user.
   *
   * Only applies when creating a user in another account you manage (cross-account);
   * ignored when creating a user in your own account.
   */
  preferences?: Array<NotificationPreferenceItem>;

  /**
   * Body param: ID of the role to assign to the user.
   *
   * The role you supply can be overridden: users added to a customer account always
   * receive the shared customer role so their portal capabilities stay
   * permission-driven, and scanning station users in any other account receive the
   * scanner role. Supplying a role whose type is `sales_rep` normalizes to the
   * account's canonical sales-rep role.
   */
  role_id?: string;

  /**
   * Body param: Unique username.
   *
   * 3–255 characters; letters, numbers, underscores, and hyphens. Either `email` or
   * `username` must be provided. Providing a username without an email creates a
   * scanning station user.
   */
  username?: string;
}

export interface AccountUserRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'user' | 'role' | 'department'>;
}

export interface AccountUserUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'user' | 'role' | 'department'>;

  /**
   * Body param: ID of the department to assign to the user.
   *
   * Set to `null` to clear the department. The department must already exist in the
   * account.
   */
  department_id?: string | null;

  /**
   * Body param: User email address.
   *
   * Must not already be in use by another user.
   */
  email?: string;

  /**
   * Body param: User display name.
   */
  name?: string;

  /**
   * Body param: Notification preference toggles to apply.
   *
   * Only allowed when updating a user in another account you manage (cross-account);
   * rejected otherwise. Notification types omitted from the list are left unchanged.
   */
  preferences?: Array<NotificationPreferenceItem>;

  /**
   * Body param: ID of the role to assign to the user.
   *
   * Set to `null` to clear the role.
   */
  role_id?: string | null;

  /**
   * Body param: Unique username.
   *
   * 3–255 characters; letters, numbers, underscores, and hyphens. Must not already
   * be in use by another user.
   */
  username?: string;
}

export interface AccountUserListParams {
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
  include?: Array<'user' | 'role' | 'department'>;

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
   * Controls whether removed (soft-deleted) account users appear in the list.
   *
   * Removed users are left out unless you pass `included`, so a user removed with
   * the remove action disappears from the default listing.
   */
  removed_scope?: 'excluded' | 'included';

  /**
   * Filter by role type.
   *
   * - `admin`: account administrators.
   * - `user`: users with a custom role.
   * - `scanner`: scanning station users.
   * - `sales_rep`: sales representatives.
   * - `agent`: automated agents.
   */
  role_type?: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent';
}

AccountUsers.Actions = Actions;

export declare namespace AccountUsers {
  export {
    type AccountUser as AccountUser,
    type Attribute as Attribute,
    type Consumption as Consumption,
    type CreateAccountUserRequest as CreateAccountUserRequest,
    type Department as Department,
    type Item as Item,
    type ItemCategory as ItemCategory,
    type ListAccountUser as ListAccountUser,
    type ListAttribute as ListAttribute,
    type ListConsumption as ListConsumption,
    type ListLocation as ListLocation,
    type ListMachine as ListMachine,
    type ListProductionStep as ListProductionStep,
    type ListProperty as ListProperty,
    type ListScanningStation as ListScanningStation,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type Location as Location,
    type LocationTypeCode as LocationTypeCode,
    type Machine as Machine,
    type NotificationPreferenceItem as NotificationPreferenceItem,
    type ProductionOutput as ProductionOutput,
    type ProductionStep as ProductionStep,
    type Property as Property,
    type Quantity as Quantity,
    type Rate as Rate,
    type ScanningStation as ScanningStation,
    type Unit as Unit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
    type UpdateAccountUserRequest as UpdateAccountUserRequest,
    type AccountUserCreateParams as AccountUserCreateParams,
    type AccountUserRetrieveParams as AccountUserRetrieveParams,
    type AccountUserUpdateParams as AccountUserUpdateParams,
    type AccountUserListParams as AccountUserListParams,
  };

  export {
    Actions as Actions,
    type ActionActivateResponse as ActionActivateResponse,
    type ActionDisableResponse as ActionDisableResponse,
    type ActionRemoveResponse as ActionRemoveResponse,
  };
}
