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
   * Adds a user to the target account.
   *
   * If no user with the given email or username exists, a new user is created and
   * sent a welcome email containing a generated password. If a matching user already
   * exists, that user is added to the account instead.
   *
   * This endpoint requires the permissions: `team:create`, `customers:update`,
   * `suppliers:update`.
   *
   * @example
   * ```ts
   * const accountUser =
   *   await client.identity.accountUsers.create({
   *     email: 'jdoe@augno.com',
   *     name: 'John Doe',
   *     password: 'QgS7Z8Hhj3&1',
   *     preferences: [
   *       {
   *         notification_type: 'order_acknowledgement',
   *         enabled: true,
   *       },
   *     ],
   *     role_id: 'rl_01c16d2eb637c0d1f3a372937c',
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
   * This endpoint requires the permissions: `team:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const accountUser =
   *   await client.identity.accountUsers.retrieve(
   *     'acus_01ea9983ddb41dacc44ecf997c',
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
   * belongs to.
   *
   * This endpoint requires the permissions: `team:update`, `customers:update`,
   * `suppliers:update`.
   *
   * @example
   * ```ts
   * const accountUser =
   *   await client.identity.accountUsers.update(
   *     'acus_01ea9983ddb41dacc44ecf997c',
   *     {
   *       department_id: 'dp_01791c25ab59da4704cba61874',
   *       name: 'John Doe',
   *       role_id: 'rl_01c16d2eb637c0d1f3a372937c',
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
   * Returns a paginated list of account users for the current account.
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
 * Profile fields (name, email, username, image URL) live on the expandable `user`
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
   * Account user status.
   *
   * - `active`: the user can access the account.
   * - `disabled`: the user is locked out of the account.
   * - `removed`: the user has been removed (soft-deleted) from the account.
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
 */
export interface Consumption {
  /**
   * Consumption ID.
   */
  id: string;

  /**
   * Item is an inventory item (product, material, or part).
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
   * Value with an associated unit.
   */
  quantity: Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Value with an associated unit.
   */
  waste_quantity: Quantity | null;
}

/**
 * Request to create an account user.
 */
export interface CreateAccountUserRequest {
  /**
   * ID of the department to assign to the user.
   */
  department_id?: string;

  /**
   * User email address.
   *
   * Either `email` or `username` must be provided. If a user with this email already
   * exists, that user is added to the account instead of a new user being created.
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
   * Ignored for scanning station users, which are always assigned the scanner role.
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
   * A physical storage location, such as a warehouse, aisle, or bin, arranged in a
   * parent-child hierarchy.
   */
  location: Location | null;

  /**
   * List represents a paginated list of resources.
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
   * List represents a paginated list of resources.
   */
  scanning_stations: ListScanningStation | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * Item is an inventory item (product, material, or part).
 */
export interface Item {
  /**
   * Item ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
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
   * List represents a paginated list of resources.
   */
  properties: ListProperty | null;

  /**
   * What kind of items this category groups.
   *
   * An item can only be assigned to a category whose type matches the item's `type`.
   *
   * - `material_category`: groups raw materials and components (items of type
   *   `material`).
   * - `product_category`: groups finished products and parts (items of type
   *   `product` or `part`).
   */
  type: 'material_category' | 'product_category';

  /**
   * Named collection of units sharing one dimension, defining which units products
   * can be ordered in along with per-unit discounts and customer portal visibility.
   */
  unit_group: UnitGroup | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
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
   * List represents a paginated list of resources.
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
   * Location type code, identifying this location's level in the storage hierarchy.
   *
   * - `building`: a building-level location.
   * - `section`: a section within a building.
   * - `aisle`: an aisle within a section.
   * - `rack`: a rack within an aisle.
   * - `shelf`: a shelf within a rack.
   * - `bin`: a bin within a shelf.
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
   * Item is an inventory item (product, material, or part).
   */
  produced_item: Item | null;

  /**
   * Value with an associated unit.
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
   * List represents a paginated list of resources.
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
   * List represents a paginated list of resources.
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
   * List represents a paginated list of resources.
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
   * List represents a paginated list of resources.
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
   * List represents a paginated list of resources.
   */
  attributes: ListAttribute | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the property, such as `Color` or `Size`.
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
 * Value with an associated unit.
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
   * List represents a paginated list of resources.
   */
  production_steps: ListProductionStep | null;

  /**
   * Scanning station type, determining which batch operation the station performs.
   *
   * - `init_batch`: initializes a new batch.
   * - `merge_batch`: merges multiple batches into one.
   * - `move_batch`: moves a batch to another location or step.
   * - `split_batch`: splits a batch into multiple batches.
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
   * Conversion ratios are relative to this unit. Base units are platform-defined;
   * account-created units always have this set to `false`.
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
   * Conversion offset denominator.
   *
   * Typically 1. Cannot be zero.
   */
  offset_denominator: string;

  /**
   * Conversion offset numerator, used for temperature-like conversions.
   *
   * Zero for most unit types.
   */
  offset_numerator: string;

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Conversion ratio denominator relative to the base unit in the same dimension.
   *
   * Cannot be zero.
   */
  ratio_denominator: string;

  /**
   * Conversion ratio numerator relative to the base unit in the same dimension.
   */
  ratio_numerator: string;

  /**
   * Physical dimension the unit measures, such as mass, volume, or currency.
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
 * Named collection of units sharing one dimension, defining which units products
 * can be ordered in along with per-unit discounts and customer portal visibility.
 */
export interface UnitGroup {
  /**
   * Unit group ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
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
   * Display name.
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
   * Physical dimension shared by every unit in this group, such as mass, volume, or
   * currency.
   *
   * Only units of this dimension can belong to the group.
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
   */
  discount_fixed: number;

  /**
   * Percentage discount applied to the unit's price when an order is placed in this
   * unit (e.g. `10` is a 10% discount).
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
   * Set to `null` to clear the department.
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
   */
  department_id?: string;

  /**
   * Body param: User email address.
   *
   * Either `email` or `username` must be provided. If a user with this email already
   * exists, that user is added to the account instead of a new user being created.
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
   * Ignored for scanning station users, which are always assigned the scanner role.
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
   * Set to `null` to clear the department.
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
   * - `excluded`: only active and disabled users (default).
   * - `included`: removed users are listed as well.
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
