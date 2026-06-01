// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EdiRunsAPI from '../edi-runs';
import * as ActionsAPI from './actions';
import {
  ActionBulkDeleteParams,
  ActionBulkDeleteResponse,
  ActionCloseParams,
  ActionInitializeParams,
  ActionMergeParams,
  ActionMoveParams,
  ActionSplitParams,
  Actions,
  CloseBatchRequest,
  DeleteManyBatchesRequest,
  InitializeBatchRequest,
  MergeBatchesRequest,
  MoveBatchesRequest,
  SplitBatchRequest,
  SplitQuantityInput,
} from './actions';
import * as ProductionRunsBatchesAPI from '../production-runs/batches';
import * as ShipmentsActionsAPI from '../shipments/actions';
import * as LinesAPI from '../shipments/lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage production batches, batch flows, and scanning station operations.
 */
export class Batches extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Deletes a batch by ID.
   *
   * @example
   * ```ts
   * const batch = await client.operations.batches.delete(
   *   'bt_017313a7df2d7ac8d895809747',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductionRunsBatchesAPI.Batch> {
    return this._client.delete(path`/v1/operations/batches/${id}`, options);
  }

  /**
   * Returns possible next production steps for a batch at a given scanning station.
   *
   * @example
   * ```ts
   * const listScanningProductionStepInfo =
   *   await client.operations.batches.nextSteps(
   *     'bt_017313a7df2d7ac8d895809747',
   *     {
   *       scanning_station_id:
   *         'scst_0129335dd6286056a97024fcc1',
   *     },
   *   );
   * ```
   */
  nextSteps(
    id: string,
    body: BatchNextStepsParams,
    options?: RequestOptions,
  ): APIPromise<ListScanningProductionStepInfo> {
    return this._client.post(path`/v1/operations/batches/${id}/next-steps`, { body, ...options });
  }

  /**
   * Returns the remaining quantity available to split from the specified batches at
   * a given production step.
   *
   * @example
   * ```ts
   * const quantity =
   *   await client.operations.batches.remainingQuantities({
   *     batch_ids: ['bt_017313a7df2d7ac8d895809747'],
   *     production_step_id: 'prst_0159474175bb59f4b1990404ee',
   *   });
   * ```
   */
  remainingQuantities(
    body: BatchRemainingQuantitiesParams,
    options?: RequestOptions,
  ): APIPromise<LinesAPI.Quantity> {
    return this._client.post('/v1/operations/batches/remaining-quantities', { body, ...options });
  }

  /**
   * Returns the production flow graph for a batch, including all input and output
   * batch relationships.
   *
   * @example
   * ```ts
   * const listBatchFlowNode =
   *   await client.operations.batches.retrieveFlow(
   *     'bt_017313a7df2d7ac8d895809747',
   *   );
   * ```
   */
  retrieveFlow(id: string, options?: RequestOptions): APIPromise<ListBatchFlowNode> {
    return this._client.get(path`/v1/operations/batches/${id}/flow`, options);
  }
}

/**
 * Account with optional branding and portal sub-resources.
 */
export interface Account {
  /**
   * Account ID.
   */
  id: string;

  /**
   * Branding metadata for an account.
   */
  branding: LinesAPI.AccountBranding | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Address with associated geolocation.
   */
  default_billing_address: LinesAPI.Address | null;

  /**
   * Address with associated geolocation.
   */
  default_shipping_address: LinesAPI.Address | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account';

  /**
   * Portal metadata for an account.
   */
  portal: LinesAPI.AccountPortal | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Branding metadata for an account.
 */
export interface AccountBranding {
  /**
   * Branding ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Facebook handle.
   */
  facebook_handle: string | null;

  /**
   * Instagram handle.
   */
  instagram_handle: string | null;

  /**
   * LinkedIn handle.
   */
  linkedin_handle: string | null;

  /**
   * Logo URL.
   */
  logo_url: string | null;

  /**
   * Resource type identifier.
   */
  object: 'account_branding';

  /**
   * Support phone number.
   */
  phone_number: string | null;

  /**
   * Support email address.
   */
  support_email: string | null;

  /**
   * Twitter handle.
   */
  twitter_handle: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Website URL.
   */
  website_url: string | null;
}

/**
 * Portal metadata for an account.
 */
export interface AccountPortal {
  /**
   * Portal ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'account_portal';

  /**
   * Portal slug.
   */
  slug: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Address with associated geolocation.
 */
export interface Address {
  /**
   * Address ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Email address associated with the address.
   */
  email: string | null;

  /**
   * Geolocation sub-resource.
   */
  geolocation: LinesAPI.Geolocation | null;

  /**
   * Display name of the address.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'address';

  /**
   * Phone number associated with the address.
   */
  phone: string | null;

  /**
   * Address type.
   */
  type: 'standard' | 'drop_ship';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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
  property: LinesAPI.Property | null;

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
 * Production batch.
 */
export interface Batch {
  /**
   * Batch ID.
   */
  id: string;

  /**
   * Closed timestamp.
   */
  closed_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: ShipmentsActionsAPI.Department | null;

  /**
   * Input batch IDs.
   */
  input_batch_ids: Array<string>;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: LinesAPI.Item | null;

  /**
   * List represents a paginated list of resources.
   */
  lots: ProductionRunsBatchesAPI.ListBatchLot | null;

  /**
   * List represents a paginated list of resources.
   */
  machines: ShipmentsActionsAPI.ListMachine | null;

  /**
   * Resource type identifier.
   */
  object: 'batch';

  /**
   * Output batch IDs.
   */
  output_batch_ids: Array<string>;

  /**
   * Production run sub-resource.
   */
  production_run: ShipmentsActionsAPI.ProductionRun | null;

  /**
   * Production step with all nested data.
   */
  production_step: ShipmentsActionsAPI.ProductionStep | null;

  /**
   * Value with an associated unit.
   */
  quantity: LinesAPI.Quantity | null;

  /**
   * Scanned timestamp.
   */
  scanned_at: string | null;

  /**
   * Scanning station resource.
   */
  scanning_station: ShipmentsActionsAPI.ScanningStation | null;

  /**
   * Value with an associated unit.
   */
  seconds: LinesAPI.Quantity | null;

  /**
   * Last-updated timestamp.
   */
  updated_at: string;

  /**
   * Value with an associated unit.
   */
  waste: LinesAPI.Quantity | null;
}

/**
 * Batch within a production flow graph, including input and output edges.
 */
export interface BatchFlowNode {
  /**
   * Production batch.
   */
  batch: ProductionRunsBatchesAPI.Batch;

  /**
   * IDs of batches that feed into this batch.
   */
  input_batch_ids: Array<string>;

  /**
   * Resource type identifier.
   */
  object: 'batch_flow_node';

  /**
   * IDs of batches this batch feeds into.
   */
  output_batch_ids: Array<string>;
}

/**
 * Lot associated with a batch.
 */
export interface BatchLot {
  /**
   * Lot number.
   */
  lot_number: string;

  /**
   * Lot type (material or productionRun).
   */
  type: string;
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
  consumed_item: LinesAPI.Item | null;

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
  quantity: LinesAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Value with an associated unit.
   */
  waste_quantity: LinesAPI.Quantity | null;
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
  location: ShipmentsActionsAPI.Location | null;

  /**
   * List represents a paginated list of resources.
   */
  machines: ShipmentsActionsAPI.ListMachine | null;

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
  scanning_stations: ShipmentsActionsAPI.ListScanningStation | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * Geolocation sub-resource.
 */
export interface Geolocation {
  /**
   * Geolocation ID.
   */
  id: string;

  /**
   * Two-letter country code.
   */
  country: string;

  /**
   * City or locality.
   */
  locality: string | null;

  /**
   * Resource type identifier.
   */
  object: 'geolocation';

  /**
   * Postal or ZIP code.
   */
  postal_code: string | null;

  /**
   * State or administrative area.
   */
  state: string | null;

  /**
   * First line of the street address.
   */
  street_line_1: string | null;

  /**
   * Second line of the street address.
   */
  street_line_2: string | null;
}

/**
 * Request to retrieve possible next production steps for a batch.
 */
export interface GetPossibleNextStepsRequest {
  /**
   * Scanning station ID to evaluate next steps from.
   */
  scanning_station_id: string;
}

/**
 * Request to get the remaining quantity available to split from batches.
 */
export interface GetRemainingQuantityToSplitRequest {
  /**
   * Batch IDs to check remaining quantities for.
   */
  batch_ids: Array<string>;

  /**
   * Production step ID to check against.
   */
  production_step_id: string;
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
  attributes: LinesAPI.ListAttribute | null;

  /**
   * Rate resource.
   */
  burn_rate: LinesAPI.Rate | null;

  /**
   * ItemCategory resource.
   */
  category: LinesAPI.ItemCategory | null;

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
  unit_cost: LinesAPI.Rate | null;

  /**
   * Rate resource.
   */
  unit_value: LinesAPI.Rate | null;

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
  owner: LinesAPI.Owner | null;

  /**
   * List represents a paginated list of resources.
   */
  properties: LinesAPI.ListProperty | null;

  /**
   * Item category type.
   */
  type: 'material_category' | 'product_category';

  /**
   * UnitGroup is a unit group resource.
   */
  unit_group: LinesAPI.UnitGroup | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAttribute {
  /**
   * Resources in this page.
   */
  data: Array<LinesAPI.Attribute>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListBatchFlowNode {
  /**
   * Resources in this page.
   */
  data: Array<BatchFlowNode>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListBatchLot {
  /**
   * Resources in this page.
   */
  data: Array<ProductionRunsBatchesAPI.BatchLot>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListConsumption {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.Consumption>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListLocation {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.Location>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListMachine {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.Machine>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListProductionStep {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.ProductionStep>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListProperty {
  /**
   * Resources in this page.
   */
  data: Array<LinesAPI.Property>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListScanningProductionStepInfo {
  /**
   * Resources in this page.
   */
  data: Array<ScanningProductionStepInfo>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListScanningStation {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.ScanningStation>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListUnitGroupUnit {
  /**
   * Resources in this page.
   */
  data: Array<LinesAPI.UnitGroupUnit>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
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
  children: ShipmentsActionsAPI.ListLocation | null;

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
  parent: ShipmentsActionsAPI.Location | null;

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
  department: ShipmentsActionsAPI.Department | null;

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
 * Owner describes the provenance of a resource.
 */
export interface Owner {
  /**
   * Account with optional branding and portal sub-resources.
   */
  account: LinesAPI.Account | null;

  /**
   * Resource type identifier.
   */
  object: 'owner';

  /**
   * The owner type: "system" for platform defaults, "account" for account-owned
   * resources.
   */
  type: 'system' | 'account';
}

/**
 * PageInfo contains URL-based pagination metadata.
 */
export interface PageInfo {
  /**
   * Whether more results exist after this page.
   */
  has_next_page: boolean;

  /**
   * Whether results exist before this page.
   */
  has_prev_page: boolean;

  /**
   * URL to fetch the next page, `null` if no more pages.
   */
  next_page_url: string | null;

  /**
   * URL to fetch the previous page, `null` if on the first page.
   */
  previous_page_url: string | null;
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
  produced_item: LinesAPI.Item | null;

  /**
   * Value with an associated unit.
   */
  quantity: LinesAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Production run sub-resource.
 */
export interface ProductionRun {
  /**
   * Production run ID.
   */
  id: string;

  /**
   * Production run number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'production_run';
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
  consumptions: ShipmentsActionsAPI.ListConsumption | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: ShipmentsActionsAPI.Department | null;

  /**
   * List represents a paginated list of resources.
   */
  in_steps: ShipmentsActionsAPI.ListProductionStep | null;

  /**
   * Rate resource.
   */
  labor_rate: LinesAPI.Rate | null;

  /**
   * Rate resource.
   */
  labor_time: LinesAPI.Rate | null;

  /**
   * Leveling factor as a decimal string.
   */
  leveling_factor: string;

  /**
   * List represents a paginated list of resources.
   */
  machines: ShipmentsActionsAPI.ListMachine | null;

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
  out_steps: ShipmentsActionsAPI.ListProductionStep | null;

  /**
   * Rate resource.
   */
  overhead_rate: LinesAPI.Rate | null;

  /**
   * Production output of a production step.
   */
  production: ShipmentsActionsAPI.ProductionOutput | null;

  /**
   * Scanning station resource.
   */
  scanning_station: ShipmentsActionsAPI.ScanningStation | null;

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
  attributes: LinesAPI.ListAttribute | null;

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
  unit: LinesAPI.Unit | null;

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
  denominator_unit: LinesAPI.Unit | null;

  /**
   * Human-readable formatted value (e.g. "$25.50 / kg" or "100 kg / hr").
   */
  display_value: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  numerator_unit: LinesAPI.Unit | null;

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
 * Production step information for the scanning next-steps response.
 */
export interface ScanningProductionStepInfo {
  /**
   * Production step ID.
   */
  id: string;

  /**
   * Whether this step supports multi-part batches.
   */
  is_multi_part: boolean;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'scanning_production_step_info';
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
  department: ShipmentsActionsAPI.Department | null;

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
  production_steps: ShipmentsActionsAPI.ListProductionStep | null;

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
  owner: LinesAPI.Owner | null;

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
  associated_units: LinesAPI.ListUnitGroupUnit | null;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  base_unit: LinesAPI.Unit | null;

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
  owner: LinesAPI.Owner | null;

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
  unit: LinesAPI.Unit | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface BatchNextStepsParams {
  /**
   * Scanning station ID to evaluate next steps from.
   */
  scanning_station_id: string;
}

export interface BatchRemainingQuantitiesParams {
  /**
   * Batch IDs to check remaining quantities for.
   */
  batch_ids: Array<string>;

  /**
   * Production step ID to check against.
   */
  production_step_id: string;
}

Batches.Actions = Actions;

export declare namespace Batches {
  export {
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type Attribute as Attribute,
    type Batch as Batch,
    type BatchFlowNode as BatchFlowNode,
    type BatchLot as BatchLot,
    type Consumption as Consumption,
    type Department as Department,
    type Geolocation as Geolocation,
    type GetPossibleNextStepsRequest as GetPossibleNextStepsRequest,
    type GetRemainingQuantityToSplitRequest as GetRemainingQuantityToSplitRequest,
    type Item as Item,
    type ItemCategory as ItemCategory,
    type ListAttribute as ListAttribute,
    type ListBatchFlowNode as ListBatchFlowNode,
    type ListBatchLot as ListBatchLot,
    type ListConsumption as ListConsumption,
    type ListLocation as ListLocation,
    type ListMachine as ListMachine,
    type ListProductionStep as ListProductionStep,
    type ListProperty as ListProperty,
    type ListScanningProductionStepInfo as ListScanningProductionStepInfo,
    type ListScanningStation as ListScanningStation,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type Location as Location,
    type Machine as Machine,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type ProductionOutput as ProductionOutput,
    type ProductionRun as ProductionRun,
    type ProductionStep as ProductionStep,
    type Property as Property,
    type Quantity as Quantity,
    type Rate as Rate,
    type ScanningProductionStepInfo as ScanningProductionStepInfo,
    type ScanningStation as ScanningStation,
    type Unit as Unit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
    type BatchNextStepsParams as BatchNextStepsParams,
    type BatchRemainingQuantitiesParams as BatchRemainingQuantitiesParams,
  };

  export {
    Actions as Actions,
    type CloseBatchRequest as CloseBatchRequest,
    type DeleteManyBatchesRequest as DeleteManyBatchesRequest,
    type InitializeBatchRequest as InitializeBatchRequest,
    type MergeBatchesRequest as MergeBatchesRequest,
    type MoveBatchesRequest as MoveBatchesRequest,
    type SplitBatchRequest as SplitBatchRequest,
    type SplitQuantityInput as SplitQuantityInput,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionCloseParams as ActionCloseParams,
    type ActionInitializeParams as ActionInitializeParams,
    type ActionMergeParams as ActionMergeParams,
    type ActionMoveParams as ActionMoveParams,
    type ActionSplitParams as ActionSplitParams,
  };
}
