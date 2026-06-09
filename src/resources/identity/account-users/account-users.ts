// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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
   * Creates a new account user and invites them to the target account.
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
 * Account user with profile, role, and department.
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
   * Department resource.
   */
  department: Department | null;

  /**
   * Email address.
   */
  email: string | null;

  /**
   * Profile image URL.
   */
  image_url: string | null;

  /**
   * When the user last used this account.
   */
  last_used_at: string | null;

  /**
   * Display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'account_user';

  /**
   * Role resource.
   */
  role: APIKeysAPI.Role | null;

  /**
   * Account user status.
   */
  status: 'active' | 'disabled' | 'removed';

  /**
   * When the account user was last updated.
   */
  updated_at: string;

  /**
   * Underlying user ID.
   */
  user_id: string;

  /**
   * Username.
   */
  username: string | null;
}

/**
 * Value option within a property.
 */
export interface Attribute {
  /**
   * Attribute ID.
   */
  id: string;

  /**
   * Color code.
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
   * Property that groups attributes.
   */
  property: Property | null;

  /**
   * Display order.
   */
  sort_order: number;

  /**
   * Last update timestamp.
   */
  updated_at: string;

  /**
   * Attribute value.
   */
  value: string;
}

/**
 * Material consumed by a production step.
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
   * Department assigned to the user.
   */
  department_id?: string;

  /**
   * User email address.
   */
  email?: string;

  /**
   * User display name.
   */
  name?: string;

  /**
   * Password. Only used for scanner-role users (scanning stations). Must be 8–72
   * chars and include upper, lower, number, and special character.
   */
  password?: string;

  /**
   * Notification preferences for the user (external targets only).
   */
  preferences?: Array<NotificationPreferenceItem>;

  /**
   * Role assigned to the user.
   */
  role_id?: string;

  /**
   * Unique username (3–255 chars; letters, numbers, underscores, hyphens).
   */
  username?: string;
}

/**
 * Department resource.
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
   * Location resource.
   */
  location: Location | null;

  /**
   * List represents a paginated list of resources.
   */
  machines: ListMachine | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes about the department.
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
   * Rate resource.
   */
  burn_rate: Rate | null;

  /**
   * ItemCategory resource.
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
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'item';

  /**
   * Stock keeping unit code.
   */
  sku: string;

  /**
   * Item type code.
   */
  type: 'product' | 'material' | 'part';

  /**
   * Rate resource.
   */
  unit_cost: Rate | null;

  /**
   * Rate resource.
   */
  unit_value: Rate | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * ItemCategory resource.
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
   * Item category type.
   */
  type: 'material_category' | 'product_category';

  /**
   * UnitGroup is a unit group resource.
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
 * Location resource.
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
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'location';

  /**
   * Location resource.
   */
  parent: Location | null;

  /**
   * Location type code.
   */
  type: 'building' | 'section' | 'aisle' | 'rack' | 'shelf' | 'bin';

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

/**
 * Machine within an account.
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
   * Department resource.
   */
  department: Department | null;

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
  object: 'machine';

  /**
   * Serial number.
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
 * Production output of a production step.
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
 * Production step with all nested data.
 */
export interface ProductionStep {
  /**
   * Production step ID.
   */
  id: string;

  /**
   * Allowances as a decimal string.
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
   * Department resource.
   */
  department: Department | null;

  /**
   * List represents a paginated list of resources.
   */
  in_steps: ListProductionStep | null;

  /**
   * Rate resource.
   */
  labor_rate: Rate | null;

  /**
   * Rate resource.
   */
  labor_time: Rate | null;

  /**
   * Leveling factor as a decimal string.
   */
  leveling_factor: string;

  /**
   * List represents a paginated list of resources.
   */
  machines: ListMachine | null;

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
  object: 'production_step';

  /**
   * List represents a paginated list of resources.
   */
  out_steps: ListProductionStep | null;

  /**
   * Rate resource.
   */
  overhead_rate: Rate | null;

  /**
   * Production output of a production step.
   */
  production: ProductionOutput | null;

  /**
   * Scanning station resource.
   */
  scanning_station: ScanningStation | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Property that groups attributes.
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
   * Display name.
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
   * Decimal value.
   */
  value: string;
}

/**
 * Rate resource.
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
   * Rate value as a decimal string.
   */
  value: string;
}

/**
 * Scanning station resource.
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
   * Department resource.
   */
  department: Department | null;

  /**
   * Label size code.
   */
  label_size: '1x1' | '1x3' | '1x4' | '2x4' | null;

  /**
   * Label type code.
   */
  label_type: 'tag' | 'traveler' | null;

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
  object: 'scanning_station';

  /**
   * Operator requirement behavior for this station.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * List represents a paginated list of resources.
   */
  production_steps: ListProductionStep | null;

  /**
   * Scanning station type.
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
   * Whether this is the base unit for its dimension. Conversion ratios are relative
   * to this unit.
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
   * Conversion offset denominator. Typically 1. Cannot be zero.
   */
  offset_denominator: string;

  /**
   * Conversion offset numerator, used for temperature-like conversions. Zero for
   * most unit types.
   */
  offset_numerator: string;

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Conversion ratio denominator relative to the base unit in the same dimension.
   * Cannot be zero.
   */
  ratio_denominator: string;

  /**
   * Conversion ratio numerator relative to the base unit in the same dimension.
   */
  ratio_numerator: string;

  /**
   * Unit dimension.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * When this unit was last updated.
   */
  updated_at: string;
}

/**
 * UnitGroup is a unit group resource.
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
   * Notes.
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
   * Unit type.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * UnitGroupUnit is an associated unit within a unit group.
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
   * Customer portal visibility.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Fixed discount amount.
   */
  discount_fixed: number;

  /**
   * Discount percentage.
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
   * Department assigned to the user.
   */
  department_id?: string | null;

  /**
   * User email address.
   */
  email?: string;

  /**
   * User display name.
   */
  name?: string;

  /**
   * Notification preferences to update (external targets only).
   */
  preferences?: Array<NotificationPreferenceItem>;

  /**
   * Role assigned to the user.
   */
  role_id?: string | null;

  /**
   * Unique username (3–255 chars; letters, numbers, underscores, hyphens).
   */
  username?: string;
}

export interface AccountUserCreateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'role' | 'department'>;

  /**
   * Body param: Department assigned to the user.
   */
  department_id?: string;

  /**
   * Body param: User email address.
   */
  email?: string;

  /**
   * Body param: User display name.
   */
  name?: string;

  /**
   * Body param: Password. Only used for scanner-role users (scanning stations). Must
   * be 8–72 chars and include upper, lower, number, and special character.
   */
  password?: string;

  /**
   * Body param: Notification preferences for the user (external targets only).
   */
  preferences?: Array<NotificationPreferenceItem>;

  /**
   * Body param: Role assigned to the user.
   */
  role_id?: string;

  /**
   * Body param: Unique username (3–255 chars; letters, numbers, underscores,
   * hyphens).
   */
  username?: string;
}

export interface AccountUserRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role' | 'department'>;
}

export interface AccountUserUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'role' | 'department'>;

  /**
   * Body param: Department assigned to the user.
   */
  department_id?: string | null;

  /**
   * Body param: User email address.
   */
  email?: string;

  /**
   * Body param: User display name.
   */
  name?: string;

  /**
   * Body param: Notification preferences to update (external targets only).
   */
  preferences?: Array<NotificationPreferenceItem>;

  /**
   * Body param: Role assigned to the user.
   */
  role_id?: string | null;

  /**
   * Body param: Unique username (3–255 chars; letters, numbers, underscores,
   * hyphens).
   */
  username?: string;
}

export interface AccountUserListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role' | 'department'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Controls whether removed account users are included.
   */
  removed_scope?: 'excluded' | 'included';

  /**
   * Filter by role type code.
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
