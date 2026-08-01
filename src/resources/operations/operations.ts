// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CoreAPI from '../core/core';
import * as AnalyticsAPI from './analytics';
import { Analytics, AnalyticsUpdateOpenBatchesParams, ListOpenBatchSummary } from './analytics';
import * as DcLocationsAPI from './dc-locations';
import {
  CreateDcLocationRequest,
  DcLocation,
  DcLocationCreateParams,
  DcLocationCustomer,
  DcLocationDeleteResponse,
  DcLocationListParams,
  DcLocationUpdateParams,
  DcLocations,
  ListDcLocation,
  UpdateDcLocationRequest,
} from './dc-locations';
import * as DeliveriesAPI from './deliveries';
import {
  Deliveries,
  Delivery,
  DeliveryLine,
  DeliveryListParams,
  DeliveryRetrieveParams,
  EmailContact,
  ListDelivery,
  ListDeliveryLine,
  ListEmailContact,
  ListPurchaseOrderLine,
  ListReceivingOrderLine,
  Lot,
  PurchaseOrder,
  PurchaseOrderLine,
  ReceivingOrder,
  ReceivingOrderLine,
  Supplier,
} from './deliveries';
import * as DemandOverridesAPI from './demand-overrides';
import {
  CreateDemandOverrideRequest,
  DemandOverride,
  DemandOverrideCreateParams,
  DemandOverrideDeleteResponse,
  DemandOverrideListParams,
  DemandOverrideRetrieveParams,
  DemandOverrideUpdateParams,
  DemandOverrides,
  ListDemandOverride,
  UpdateDemandOverrideRequest,
} from './demand-overrides';
import * as DepartmentsAPI from './departments';
import {
  CreateDepartmentRequest,
  DepartmentCreateParams,
  DepartmentDeleteResponse,
  DepartmentListParams,
  DepartmentRetrieveParams,
  DepartmentUpdateParams,
  Departments,
  UpdateDepartmentRequest,
} from './departments';
import * as EdiRunsAPI from './edi-runs';
import { EdiRun, EdiRunListParams, EdiRuns, ListEdiRun } from './edi-runs';
import * as LocationTypesAPI from './location-types';
import { ListLocationType, LocationType, LocationTypeListParams, LocationTypes } from './location-types';
import * as LocationsAPI from './locations';
import {
  CreateLocationRequest,
  LocationCreateParams,
  LocationDeleteResponse,
  LocationListParams,
  LocationRetrieveParams,
  LocationUpdateParams,
  Locations,
  UpdateLocationRequest,
} from './locations';
import * as MachineDowntimeEventsAPI from './machine-downtime-events';
import {
  CreateMachineDowntimeEventRequest,
  ListMachineDowntimeEvent,
  MachineDowntimeEvent,
  MachineDowntimeEventCreateParams,
  MachineDowntimeEventDeleteResponse,
  MachineDowntimeEventListParams,
  MachineDowntimeEventRetrieveParams,
  MachineDowntimeEventUpdateParams,
  MachineDowntimeEvents,
  UpdateMachineDowntimeEventRequest,
} from './machine-downtime-events';
import * as MachinesAPI from './machines';
import {
  CreateMachineRequest,
  MachineCreateParams,
  MachineDeleteResponse,
  MachineListParams,
  MachineRetrieveParams,
  MachineUpdateParams,
  Machines,
  UpdateMachineRequest,
} from './machines';
import * as ScanningStationsAPI from './scanning-stations';
import {
  ConnectProductionStepsRequest,
  CreateScanningStationRequest,
  GetScanningStationConsumptionRequest,
  ListBatch,
  ListScanningConsumption,
  ScanningConsumption,
  ScanningStationConsumptionsParams,
  ScanningStationCreateParams,
  ScanningStationDeleteResponse,
  ScanningStationListParams,
  ScanningStationRetrieveBatchesParams,
  ScanningStationRetrieveParams,
  ScanningStationUpdateParams,
  ScanningStationUpdateProductionStepsParams,
  ScanningStationUpdateProductionStepsResponse,
  ScanningStations,
  UpdateScanningStationRequest,
} from './scanning-stations';
import * as ShippingCasesAPI from './shipping-cases';
import {
  ShippingCase,
  ShippingCaseDeleteResponse,
  ShippingCaseLabelURL,
  ShippingCaseRetrieveParams,
  ShippingCaseUpdateParams,
  ShippingCases,
  UpdateShippingCaseRequest,
} from './shipping-cases';
import * as ShippingTermsAPI from './shipping-terms';
import {
  CreateShippingTermRequest,
  ListShippingTerm,
  ShippingTermCreateParams,
  ShippingTermDeleteResponse,
  ShippingTermListParams,
  ShippingTermRetrieveParams,
  ShippingTermUpdateParams,
  ShippingTerms,
  UpdateShippingTermRequest,
} from './shipping-terms';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import * as BatchesAPI from './batches/batches';
import {
  Batch,
  BatchFlowNode,
  BatchLot,
  BatchNextStepsParams,
  BatchReference,
  BatchRemainingQuantitiesParams,
  Batches,
  GetPossibleNextStepsRequest,
  GetRemainingQuantityToSplitRequest,
  ListBatchFlowNode,
  ListBatchLot,
  ListBatchReference,
  ListScanningProductionStepInfo,
  ProductionRunReference,
  ScanningProductionStepInfo,
} from './batches/batches';
import * as CarriersAPI from './carriers/carriers';
import {
  CarrierCreateParams,
  CarrierDeleteResponse,
  CarrierListParams,
  CarrierRetrieveParams,
  CarrierUpdateParams,
  Carriers,
  CreateCarrierRequest,
  ListCarrier,
  OAuthStatusResponse,
  UpdateCarrierRequest,
} from './carriers/carriers';
import * as EdiAPI from './edi/edi';
import { Edi } from './edi/edi';
import * as InventoryChangeLogsAPI from './inventory-change-logs/inventory-change-logs';
import {
  InventoryChangeLog,
  InventoryChangeLogListParams,
  InventoryChangeLogRetrieveParams,
  InventoryChangeLogs,
  ListInventoryChangeLog,
} from './inventory-change-logs/inventory-change-logs';
import * as PicksAPI from './picks/picks';
import {
  ListPick,
  PickListParams,
  PickRetrieveParams,
  PickRetrieveShipmentsParams,
  PickShipmentsResponse,
  PickUpdateParams,
  Picks,
  UpdatePickRequest,
} from './picks/picks';
import * as ProductionFlowsAPI from './production-flows/production-flows';
import {
  ListProductionFlowConsumption,
  ListProductionFlowStep,
  ProductionFlow,
  ProductionFlowConsumption,
  ProductionFlowProduction,
  ProductionFlowRetrieveByItemParams,
  ProductionFlowStep,
  ProductionFlows,
} from './production-flows/production-flows';
import * as ProductionRunsAPI from './production-runs/production-runs';
import {
  CreateProductionRunRequest,
  ListProductionRun,
  ProductionRunCreateParams,
  ProductionRunDeleteResponse,
  ProductionRunListParams,
  ProductionRunRetrieveParams,
  ProductionRunUpdateParams,
  ProductionRuns,
  UpdateProductionRunRequest,
} from './production-runs/production-runs';
import * as ProductionScheduleSettingsAPI from './production-schedule-settings/production-schedule-settings';
import {
  ProductionScheduleSettingUpdateParams,
  ProductionScheduleSettings,
  UpdateProductionScheduleSettingsRequest,
} from './production-schedule-settings/production-schedule-settings';
import * as ProductionSchedulesAPI from './production-schedules/production-schedules';
import {
  GenerateProductionScheduleRequest,
  ListProductionSchedule,
  ListProductionScheduleDerivedLine,
  ListProductionScheduleDeviation,
  ListProductionScheduleFinishedPolicy,
  ListProductionScheduleItemPolicy,
  ListReleaseScheduleBatch,
  ListReleasedScheduleLine,
  ListScheduleAppliedOverride,
  ProductionSchedule,
  ProductionScheduleCreateParams,
  ProductionScheduleDeleteResponse,
  ProductionScheduleDerivedLine,
  ProductionScheduleDeviation,
  ProductionScheduleFinishedPolicy,
  ProductionScheduleItemPolicy,
  ProductionScheduleListParams,
  ProductionScheduleRetrieveDerivedLinesParams,
  ProductionScheduleRetrieveDeviationsParams,
  ProductionScheduleRetrieveWeekReleasePreviewParams,
  ProductionSchedules,
  ReleaseScheduleBatch,
  ReleaseScheduleWeekPreview,
  ReleasedScheduleLine,
  ScheduleAppliedOverride,
  ScheduleDiagnostics,
} from './production-schedules/production-schedules';
import * as ProductionStepsAPI from './production-steps/production-steps';
import {
  CreateConsumptionInput,
  CreateProductionInput,
  CreateProductionStepRequest,
  CreateRateInput,
  ProductionStepCreateParams,
  ProductionStepDeleteResponse,
  ProductionStepListParams,
  ProductionStepRetrieveParams,
  ProductionStepUpdateParams,
  ProductionSteps,
  UpdateProductionStepRequest,
} from './production-steps/production-steps';
import * as PurchaseOrdersAPI from './purchase-orders/purchase-orders';
import {
  CreatePurchaseOrderLineInput,
  CreatePurchaseOrderRequest,
  ListPurchaseOrder,
  OrderLineInput,
  PurchaseOrderCreateParams,
  PurchaseOrderDeleteResponse,
  PurchaseOrderListParams,
  PurchaseOrderRetrieveParams,
  PurchaseOrderRetrieveStatusesParams,
  PurchaseOrderUpdateParams,
  PurchaseOrders,
  UpdatePurchaseOrderRequest,
} from './purchase-orders/purchase-orders';
import * as ReceivingOrdersAPI from './receiving-orders/receiving-orders';
import {
  ListReceivingOrder,
  ReceivingOrderListParams,
  ReceivingOrderRetrieveParams,
  ReceivingOrders,
} from './receiving-orders/receiving-orders';
import * as ShipmentsAPI from './shipments/shipments';
import {
  ListShipment,
  ShipmentDeleteResponse,
  ShipmentListParams,
  ShipmentRetrieveParams,
  ShipmentUpdateParams,
  Shipments,
  UpdateShipmentRequest,
} from './shipments/shipments';
import * as SuppliersAPI from './suppliers/suppliers';
import {
  CreateSupplierRequest,
  ListSupplierSummary,
  SupplierCreateParams,
  SupplierDetail,
  SupplierListParams,
  SupplierRetrieveParams,
  SupplierSummary,
  SupplierUpdateParams,
  Suppliers,
  UpdateSupplierRequest,
} from './suppliers/suppliers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Operations extends APIResource {
  shippingTerms: ShippingTermsAPI.ShippingTerms = new ShippingTermsAPI.ShippingTerms(this._client);
  carriers: CarriersAPI.Carriers = new CarriersAPI.Carriers(this._client);
  suppliers: SuppliersAPI.Suppliers = new SuppliersAPI.Suppliers(this._client);
  batches: BatchesAPI.Batches = new BatchesAPI.Batches(this._client);
  scanningStations: ScanningStationsAPI.ScanningStations = new ScanningStationsAPI.ScanningStations(
    this._client,
  );
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  departments: DepartmentsAPI.Departments = new DepartmentsAPI.Departments(this._client);
  productionSteps: ProductionStepsAPI.ProductionSteps = new ProductionStepsAPI.ProductionSteps(this._client);
  deliveries: DeliveriesAPI.Deliveries = new DeliveriesAPI.Deliveries(this._client);
  inventoryChangeLogs: InventoryChangeLogsAPI.InventoryChangeLogs =
    new InventoryChangeLogsAPI.InventoryChangeLogs(this._client);
  machines: MachinesAPI.Machines = new MachinesAPI.Machines(this._client);
  receivingOrders: ReceivingOrdersAPI.ReceivingOrders = new ReceivingOrdersAPI.ReceivingOrders(this._client);
  productionFlows: ProductionFlowsAPI.ProductionFlows = new ProductionFlowsAPI.ProductionFlows(this._client);
  productionRuns: ProductionRunsAPI.ProductionRuns = new ProductionRunsAPI.ProductionRuns(this._client);
  machineDowntimeEvents: MachineDowntimeEventsAPI.MachineDowntimeEvents =
    new MachineDowntimeEventsAPI.MachineDowntimeEvents(this._client);
  demandOverrides: DemandOverridesAPI.DemandOverrides = new DemandOverridesAPI.DemandOverrides(this._client);
  productionSchedules: ProductionSchedulesAPI.ProductionSchedules =
    new ProductionSchedulesAPI.ProductionSchedules(this._client);
  productionScheduleSettings: ProductionScheduleSettingsAPI.ProductionScheduleSettings =
    new ProductionScheduleSettingsAPI.ProductionScheduleSettings(this._client);
  purchaseOrders: PurchaseOrdersAPI.PurchaseOrders = new PurchaseOrdersAPI.PurchaseOrders(this._client);
  picks: PicksAPI.Picks = new PicksAPI.Picks(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  locationTypes: LocationTypesAPI.LocationTypes = new LocationTypesAPI.LocationTypes(this._client);
  shippingCases: ShippingCasesAPI.ShippingCases = new ShippingCasesAPI.ShippingCases(this._client);
  shipments: ShipmentsAPI.Shipments = new ShipmentsAPI.Shipments(this._client);
  edi: EdiAPI.Edi = new EdiAPI.Edi(this._client);
  dcLocations: DcLocationsAPI.DcLocations = new DcLocationsAPI.DcLocations(this._client);
  ediRuns: EdiRunsAPI.EdiRuns = new EdiRunsAPI.EdiRuns(this._client);

  /**
   * Returns the demand override types, which describe how an override's value
   * adjusts the forecast.
   *
   * This endpoint requires the permission: `demand_overrides:read`.
   *
   * @example
   * ```ts
   * const listDemandOverrideType =
   *   await client.operations.retrieveDemandOverrideTypes();
   * ```
   */
  retrieveDemandOverrideTypes(options?: RequestOptions): APIPromise<ListDemandOverrideType> {
    return this._client.get('/v1/operations/demand-override-types', options);
  }

  /**
   * Returns a paginated list of items with on-hand inventory quantities for the
   * account.
   *
   * Every item in the account appears once; items with no recorded inventory report
   * a zero quantity.
   *
   * This endpoint requires the permission: `items:read`.
   *
   * @example
   * ```ts
   * const listInventoryItem =
   *   await client.operations.retrieveInventories();
   * ```
   */
  retrieveInventories(
    query: OperationRetrieveInventoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListInventoryItem> {
    return this._client.get('/v1/operations/inventories', { query, ...options });
  }

  /**
   * Returns the downtime reasons available when logging a stoppage.
   *
   * The list is the same for every account and is ordered for display.
   *
   * This endpoint requires the permission: `machine_downtime:read`.
   *
   * @example
   * ```ts
   * const listMachineDowntimeReason =
   *   await client.operations.retrieveMachineDowntimeReasons();
   * ```
   */
  retrieveMachineDowntimeReasons(options?: RequestOptions): APIPromise<ListMachineDowntimeReason> {
    return this._client.get('/v1/operations/machine-downtime-reasons', options);
  }

  /**
   * Returns what every machine is running right now, how much is left on it, and
   * what is queued behind that.
   *
   * Assembled from the published schedule, the batches the floor has scanned against
   * each campaign, and any open downtime. A campaign is `current` once its week is
   * released and while it still has batches to scan; when the last one is scanned it
   * hands over to the next, so this advances on its own as a shift progresses.
   *
   * A machine with an open stoppage reads `down` even when it has a released
   * campaign, because a broken machine is not producing whatever the plan says. A
   * machine with nothing released reads `idle`, which is a state worth seeing rather
   * than an absence from the list.
   *
   * Reads the published version rather than the newest draft: the floor works to
   * what was committed, and a draft regenerating underneath a wall display would
   * make machines appear to change job on their own. With nothing published every
   * machine reads idle rather than the request failing.
   *
   * This endpoint requires the permission: `machines:read`.
   *
   * @example
   * ```ts
   * const listMachineStatus =
   *   await client.operations.retrieveMachineStatus();
   * ```
   */
  retrieveMachineStatus(
    query: OperationRetrieveMachineStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListMachineStatus> {
    return this._client.get('/v1/operations/machine-status', { query, ...options });
  }

  /**
   * Returns the kinds of hand change a schedule deviation can record.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const listScheduleDeviationType =
   *   await client.operations.retrieveScheduleDeviationTypes();
   * ```
   */
  retrieveScheduleDeviationTypes(options?: RequestOptions): APIPromise<ListScheduleDeviationType> {
    return this._client.get('/v1/operations/schedule-deviation-types', options);
  }

  /**
   * Partially updates a quantity.
   *
   * This endpoint requires the permissions: `items:update`,
   * `production_steps:update`.
   *
   * @example
   * ```ts
   * const quantity = await client.operations.updateQuantities(
   *   'qty_015a85becc1a6afdfb1afc27ff',
   *   {
   *     unit_id: 'un_01966263f74a5a0cae356000a1',
   *     value: '50.000000000000000000000000000000',
   *   },
   * );
   * ```
   */
  updateQuantities(
    id: string,
    params: OperationUpdateQuantitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Quantity> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/quantities/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Partially updates a rate.
   *
   * This endpoint requires the permissions: `items:update`,
   * `production_steps:update`.
   *
   * @example
   * ```ts
   * const rate = await client.operations.updateRates(
   *   'ra_015aa0a9522cf222024fd21d1a',
   *   {
   *     numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
   *     value: '25.50',
   *   },
   * );
   * ```
   */
  updateRates(
    id: string,
    params: OperationUpdateRatesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Rate> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/rates/${id}`, { query: { include }, body, ...options });
  }
}

/**
 * A way of adjusting planned demand.
 *
 * `absolute` replaces the forecast for the period, `delta_units` adds to it, and
 * `delta_percent` scales it. When several overrides land on the same month they
 * are applied in that order.
 */
export interface DemandOverrideType {
  /**
   * Override type ID.
   */
  id: string;

  /**
   * Stable code used when creating an override.
   */
  code: 'absolute' | 'delta_units' | 'delta_percent';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the type.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'demand_override_type';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * An item together with its current on-hand inventory quantity.
 */
export interface InventoryItem {
  /**
   * Item is an inventory item (product, material, or part).
   */
  item: AccountUsersAPI.Item;

  /**
   * Resource type identifier.
   */
  object: 'inventory_item';

  /**
   * Value with an associated unit.
   */
  quantity: AccountUsersAPI.Quantity | null;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListDemandOverrideType {
  /**
   * Resources in this page.
   */
  data: Array<DemandOverrideType>;

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
export interface ListInventoryItem {
  /**
   * Resources in this page.
   */
  data: Array<InventoryItem>;

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
export interface ListMachineDowntimeReason {
  /**
   * Resources in this page.
   */
  data: Array<MachineDowntimeReason>;

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
export interface ListMachineStatus {
  /**
   * Resources in this page.
   */
  data: Array<MachineStatus>;

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
export interface ListScheduleDeviationType {
  /**
   * Resources in this page.
   */
  data: Array<ScheduleDeviationType>;

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
 * One campaign on a machine, with how far through it the floor is.
 */
export interface MachineCampaign {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Quantity the plan asked for.
   */
  planned_quantity: number;

  /**
   * Constraint hours the campaign consumes.
   */
  planned_run_hours: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  production_run: CoreAPI.Entity | null;

  /**
   * Batches issued to the floor for this campaign.
   */
  released_batch_count: number;

  /**
   * Quantity still to make.
   *
   * Never negative: an over-run shows up in `scanned_quantity` rather than as
   * negative remaining work.
   */
  remaining_quantity: number;

  /**
   * Batches of this campaign the floor has scanned.
   */
  scanned_batch_count: number;

  /**
   * Quantity the floor has scanned so far.
   */
  scanned_quantity: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  schedule_line: CoreAPI.Entity | null;

  /**
   * SKU of the item.
   */
  sku: string;

  /**
   * Where the campaign is in its lifecycle.
   */
  status: 'planned' | 'released' | 'in_progress' | 'complete' | 'cancelled';

  /**
   * Unit the quantities are counted in.
   */
  unit: string | null;

  /**
   * Zero-based week offset from the start of the horizon.
   */
  week_index: number;

  /**
   * First day of the week the campaign belongs to.
   */
  week_starts_at: string;
}

/**
 * A reason a machine stopped running.
 *
 * The `oee_bucket` decides which OEE term the stoppage charges: `availability`
 * losses reduce run time, `performance` losses are minor stops and speed loss,
 * `quality` losses cover rework and holds, and `not_scheduled` time is removed
 * from the OEE calculation entirely rather than counted against it.
 */
export interface MachineDowntimeReason {
  /**
   * Downtime reason ID.
   */
  id: string;

  /**
   * Stable code used when logging downtime.
   */
  code:
    | 'breakdown'
    | 'changeover'
    | 'material_shortage'
    | 'no_operator'
    | 'planned_maintenance'
    | 'minor_stop'
    | 'quality_hold'
    | 'no_schedule';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the reason.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'machine_downtime_reason';

  /**
   * Which OEE term this reason charges.
   */
  oee_bucket: 'availability' | 'performance' | 'quality' | 'not_scheduled';

  /**
   * Whether the stoppage was scheduled in advance, such as preventive maintenance.
   */
  planning_status: 'planned' | 'unplanned';

  /**
   * Display order, ascending.
   */
  sort_order: number;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * The reason for a stoppage, as carried on a downtime event.
 *
 * A denormalized view of the reason taxonomy: the stable code plus the display
 * name and OEE bucket resolved from it at read time.
 */
export interface MachineDowntimeReasonSummary {
  /**
   * Stable code identifying the reason.
   */
  code:
    | 'breakdown'
    | 'changeover'
    | 'material_shortage'
    | 'no_operator'
    | 'planned_maintenance'
    | 'minor_stop'
    | 'quality_hold'
    | 'no_schedule';

  /**
   * Display name of the reason.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'machine_downtime_reason';

  /**
   * Which OEE term this reason charges.
   */
  oee_bucket: 'availability' | 'performance' | 'quality' | 'not_scheduled' | null;
}

/**
 * An open stoppage on a machine.
 */
export interface MachineDowntimeSummary {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  event: CoreAPI.Entity | null;

  /**
   * Free-text note left by whoever logged it.
   */
  note: string | null;

  /**
   * The reason for a stoppage, as carried on a downtime event.
   *
   * A denormalized view of the reason taxonomy: the stable code plus the display
   * name and OEE bucket resolved from it at read time.
   */
  reason: MachineDowntimeReasonSummary | null;

  /**
   * When the machine went down.
   */
  started_at: string;
}

/**
 * What one machine is doing right now.
 *
 * Assembled from the published schedule, the batches the floor has scanned against
 * it, and any open downtime. A machine with an open stoppage reads `down` even
 * when it has a released campaign, because a broken machine is not producing
 * whatever the plan says.
 */
export interface MachineStatus {
  /**
   * One campaign on a machine, with how far through it the floor is.
   */
  current: MachineCampaign | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  department: CoreAPI.Entity | null;

  /**
   * An open stoppage on a machine.
   */
  downtime: MachineDowntimeSummary | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  machine: CoreAPI.Entity | null;

  /**
   * One campaign on a machine, with how far through it the floor is.
   */
  next: MachineCampaign | null;

  /**
   * Resource type identifier.
   */
  object: 'machine_status';

  /**
   * What the machine is doing.
   *
   * - `running`: a released campaign with work still to scan.
   * - `idle`: nothing released to it.
   * - `down`: an open downtime event, which outranks running.
   */
  status: 'running' | 'idle' | 'down';

  /**
   * Unit the week's quantities are counted in.
   */
  unit: string | null;

  /**
   * Planned for this machine this week.
   */
  week_planned_quantity: number;

  /**
   * Constraint hours planned on this machine this week.
   */
  week_planned_run_hours: number;

  /**
   * Scanned on this machine this week.
   */
  week_scanned_quantity: number;
}

/**
 * A kind of hand change to a plan.
 */
export interface ScheduleDeviationType {
  /**
   * Deviation type ID.
   */
  id: string;

  /**
   * Stable code recorded on a deviation.
   */
  code: 'line_added' | 'line_removed' | 'quantity_changed' | 'machine_changed' | 'resequenced' | 'week_moved';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the type.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'schedule_deviation_type';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to partially update a quantity.
 */
export interface UpdateQuantityRequest {
  /**
   * ID of the resource that owns this quantity.
   *
   * Used together with `object_type` to verify the owning resource exists; it does
   * not reassign the quantity.
   */
  object_id?: string;

  /**
   * Type of the resource that owns this quantity.
   *
   * Determines the permission required for the update. Must be `item` or
   * `production_step`.
   */
  object_type?: string;

  /**
   * ID of the new unit of measure for the quantity.
   */
  unit_id?: string;

  /**
   * New decimal value for the quantity, as a string to preserve precision.
   */
  value?: string;
}

/**
 * Request to partially update a rate.
 */
export interface UpdateRateRequest {
  /**
   * ID of the new unit for the rate's denominator (the per-unit basis).
   */
  denominator_unit_id?: string;

  /**
   * ID of the new unit for the rate's numerator (e.g. the currency of a price).
   */
  numerator_unit_id?: string;

  /**
   * ID of the resource that owns this rate.
   *
   * Used together with `object_type` to verify the owning resource exists; it does
   * not reassign the rate.
   */
  object_id?: string;

  /**
   * Type of the resource that owns this rate.
   *
   * Determines the permission required for the update. Must be `item` or
   * `production_step`.
   */
  object_type?: string;

  /**
   * New decimal value for the rate, expressed as the amount of the numerator unit
   * per one denominator unit.
   */
  value?: string;
}

export interface OperationRetrieveInventoriesParams {
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
  include?: Array<'quantity.unit'>;

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
}

export interface OperationRetrieveMachineStatusParams {
  /**
   * The moment to read the floor at. Defaults to now.
   */
  as_of?: string;

  /**
   * Only include machines in these departments.
   */
  department_ids?: Array<string>;
}

export interface OperationUpdateQuantitiesParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'unit'>;

  /**
   * Body param: ID of the resource that owns this quantity.
   *
   * Used together with `object_type` to verify the owning resource exists; it does
   * not reassign the quantity.
   */
  object_id?: string;

  /**
   * Body param: Type of the resource that owns this quantity.
   *
   * Determines the permission required for the update. Must be `item` or
   * `production_step`.
   */
  object_type?: string;

  /**
   * Body param: ID of the new unit of measure for the quantity.
   */
  unit_id?: string;

  /**
   * Body param: New decimal value for the quantity, as a string to preserve
   * precision.
   */
  value?: string;
}

export interface OperationUpdateRatesParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'numerator_unit' | 'denominator_unit'>;

  /**
   * Body param: ID of the new unit for the rate's denominator (the per-unit basis).
   */
  denominator_unit_id?: string;

  /**
   * Body param: ID of the new unit for the rate's numerator (e.g. the currency of a
   * price).
   */
  numerator_unit_id?: string;

  /**
   * Body param: ID of the resource that owns this rate.
   *
   * Used together with `object_type` to verify the owning resource exists; it does
   * not reassign the rate.
   */
  object_id?: string;

  /**
   * Body param: Type of the resource that owns this rate.
   *
   * Determines the permission required for the update. Must be `item` or
   * `production_step`.
   */
  object_type?: string;

  /**
   * Body param: New decimal value for the rate, expressed as the amount of the
   * numerator unit per one denominator unit.
   */
  value?: string;
}

Operations.ShippingTerms = ShippingTerms;
Operations.Carriers = Carriers;
Operations.Suppliers = Suppliers;
Operations.Batches = Batches;
Operations.ScanningStations = ScanningStations;
Operations.Analytics = Analytics;
Operations.Departments = Departments;
Operations.ProductionSteps = ProductionSteps;
Operations.Deliveries = Deliveries;
Operations.InventoryChangeLogs = InventoryChangeLogs;
Operations.Machines = Machines;
Operations.ReceivingOrders = ReceivingOrders;
Operations.ProductionFlows = ProductionFlows;
Operations.ProductionRuns = ProductionRuns;
Operations.MachineDowntimeEvents = MachineDowntimeEvents;
Operations.DemandOverrides = DemandOverrides;
Operations.ProductionSchedules = ProductionSchedules;
Operations.PurchaseOrders = PurchaseOrders;
Operations.Picks = Picks;
Operations.Locations = Locations;
Operations.LocationTypes = LocationTypes;
Operations.ShippingCases = ShippingCases;
Operations.Shipments = Shipments;
Operations.Edi = Edi;
Operations.DcLocations = DcLocations;
Operations.EdiRuns = EdiRuns;

export declare namespace Operations {
  export {
    type DemandOverrideType as DemandOverrideType,
    type InventoryItem as InventoryItem,
    type ListDemandOverrideType as ListDemandOverrideType,
    type ListInventoryItem as ListInventoryItem,
    type ListMachineDowntimeReason as ListMachineDowntimeReason,
    type ListMachineStatus as ListMachineStatus,
    type ListScheduleDeviationType as ListScheduleDeviationType,
    type MachineCampaign as MachineCampaign,
    type MachineDowntimeReason as MachineDowntimeReason,
    type MachineDowntimeReasonSummary as MachineDowntimeReasonSummary,
    type MachineDowntimeSummary as MachineDowntimeSummary,
    type MachineStatus as MachineStatus,
    type ScheduleDeviationType as ScheduleDeviationType,
    type UpdateQuantityRequest as UpdateQuantityRequest,
    type UpdateRateRequest as UpdateRateRequest,
    type OperationRetrieveInventoriesParams as OperationRetrieveInventoriesParams,
    type OperationRetrieveMachineStatusParams as OperationRetrieveMachineStatusParams,
    type OperationUpdateQuantitiesParams as OperationUpdateQuantitiesParams,
    type OperationUpdateRatesParams as OperationUpdateRatesParams,
  };

  export {
    ShippingTerms as ShippingTerms,
    type CreateShippingTermRequest as CreateShippingTermRequest,
    type ListShippingTerm as ListShippingTerm,
    type UpdateShippingTermRequest as UpdateShippingTermRequest,
    type ShippingTermDeleteResponse as ShippingTermDeleteResponse,
    type ShippingTermCreateParams as ShippingTermCreateParams,
    type ShippingTermRetrieveParams as ShippingTermRetrieveParams,
    type ShippingTermUpdateParams as ShippingTermUpdateParams,
    type ShippingTermListParams as ShippingTermListParams,
  };

  export {
    Carriers as Carriers,
    type CreateCarrierRequest as CreateCarrierRequest,
    type ListCarrier as ListCarrier,
    type OAuthStatusResponse as OAuthStatusResponse,
    type UpdateCarrierRequest as UpdateCarrierRequest,
    type CarrierDeleteResponse as CarrierDeleteResponse,
    type CarrierCreateParams as CarrierCreateParams,
    type CarrierRetrieveParams as CarrierRetrieveParams,
    type CarrierUpdateParams as CarrierUpdateParams,
    type CarrierListParams as CarrierListParams,
  };

  export {
    Suppliers as Suppliers,
    type CreateSupplierRequest as CreateSupplierRequest,
    type ListSupplierSummary as ListSupplierSummary,
    type SupplierDetail as SupplierDetail,
    type SupplierSummary as SupplierSummary,
    type UpdateSupplierRequest as UpdateSupplierRequest,
    type SupplierCreateParams as SupplierCreateParams,
    type SupplierRetrieveParams as SupplierRetrieveParams,
    type SupplierUpdateParams as SupplierUpdateParams,
    type SupplierListParams as SupplierListParams,
  };

  export {
    Batches as Batches,
    type Batch as Batch,
    type BatchFlowNode as BatchFlowNode,
    type BatchLot as BatchLot,
    type BatchReference as BatchReference,
    type GetPossibleNextStepsRequest as GetPossibleNextStepsRequest,
    type GetRemainingQuantityToSplitRequest as GetRemainingQuantityToSplitRequest,
    type ListBatchFlowNode as ListBatchFlowNode,
    type ListBatchLot as ListBatchLot,
    type ListBatchReference as ListBatchReference,
    type ListScanningProductionStepInfo as ListScanningProductionStepInfo,
    type ProductionRunReference as ProductionRunReference,
    type ScanningProductionStepInfo as ScanningProductionStepInfo,
    type BatchNextStepsParams as BatchNextStepsParams,
    type BatchRemainingQuantitiesParams as BatchRemainingQuantitiesParams,
  };

  export {
    ScanningStations as ScanningStations,
    type ConnectProductionStepsRequest as ConnectProductionStepsRequest,
    type CreateScanningStationRequest as CreateScanningStationRequest,
    type GetScanningStationConsumptionRequest as GetScanningStationConsumptionRequest,
    type ListBatch as ListBatch,
    type ListScanningConsumption as ListScanningConsumption,
    type ScanningConsumption as ScanningConsumption,
    type UpdateScanningStationRequest as UpdateScanningStationRequest,
    type ScanningStationDeleteResponse as ScanningStationDeleteResponse,
    type ScanningStationUpdateProductionStepsResponse as ScanningStationUpdateProductionStepsResponse,
    type ScanningStationCreateParams as ScanningStationCreateParams,
    type ScanningStationRetrieveParams as ScanningStationRetrieveParams,
    type ScanningStationUpdateParams as ScanningStationUpdateParams,
    type ScanningStationListParams as ScanningStationListParams,
    type ScanningStationConsumptionsParams as ScanningStationConsumptionsParams,
    type ScanningStationRetrieveBatchesParams as ScanningStationRetrieveBatchesParams,
    type ScanningStationUpdateProductionStepsParams as ScanningStationUpdateProductionStepsParams,
  };

  export {
    Analytics as Analytics,
    type ListOpenBatchSummary as ListOpenBatchSummary,
    type AnalyticsUpdateOpenBatchesParams as AnalyticsUpdateOpenBatchesParams,
  };

  export {
    Departments as Departments,
    type CreateDepartmentRequest as CreateDepartmentRequest,
    type UpdateDepartmentRequest as UpdateDepartmentRequest,
    type DepartmentDeleteResponse as DepartmentDeleteResponse,
    type DepartmentCreateParams as DepartmentCreateParams,
    type DepartmentRetrieveParams as DepartmentRetrieveParams,
    type DepartmentUpdateParams as DepartmentUpdateParams,
    type DepartmentListParams as DepartmentListParams,
  };

  export {
    ProductionSteps as ProductionSteps,
    type CreateConsumptionInput as CreateConsumptionInput,
    type CreateProductionInput as CreateProductionInput,
    type CreateProductionStepRequest as CreateProductionStepRequest,
    type CreateRateInput as CreateRateInput,
    type UpdateProductionStepRequest as UpdateProductionStepRequest,
    type ProductionStepDeleteResponse as ProductionStepDeleteResponse,
    type ProductionStepCreateParams as ProductionStepCreateParams,
    type ProductionStepRetrieveParams as ProductionStepRetrieveParams,
    type ProductionStepUpdateParams as ProductionStepUpdateParams,
    type ProductionStepListParams as ProductionStepListParams,
  };

  export {
    Deliveries as Deliveries,
    type Delivery as Delivery,
    type DeliveryLine as DeliveryLine,
    type EmailContact as EmailContact,
    type ListDelivery as ListDelivery,
    type ListDeliveryLine as ListDeliveryLine,
    type ListEmailContact as ListEmailContact,
    type ListPurchaseOrderLine as ListPurchaseOrderLine,
    type ListReceivingOrderLine as ListReceivingOrderLine,
    type Lot as Lot,
    type PurchaseOrder as PurchaseOrder,
    type PurchaseOrderLine as PurchaseOrderLine,
    type ReceivingOrder as ReceivingOrder,
    type ReceivingOrderLine as ReceivingOrderLine,
    type Supplier as Supplier,
    type DeliveryRetrieveParams as DeliveryRetrieveParams,
    type DeliveryListParams as DeliveryListParams,
  };

  export {
    InventoryChangeLogs as InventoryChangeLogs,
    type InventoryChangeLog as InventoryChangeLog,
    type ListInventoryChangeLog as ListInventoryChangeLog,
    type InventoryChangeLogRetrieveParams as InventoryChangeLogRetrieveParams,
    type InventoryChangeLogListParams as InventoryChangeLogListParams,
  };

  export {
    Machines as Machines,
    type CreateMachineRequest as CreateMachineRequest,
    type UpdateMachineRequest as UpdateMachineRequest,
    type MachineDeleteResponse as MachineDeleteResponse,
    type MachineCreateParams as MachineCreateParams,
    type MachineRetrieveParams as MachineRetrieveParams,
    type MachineUpdateParams as MachineUpdateParams,
    type MachineListParams as MachineListParams,
  };

  export {
    ReceivingOrders as ReceivingOrders,
    type ListReceivingOrder as ListReceivingOrder,
    type ReceivingOrderRetrieveParams as ReceivingOrderRetrieveParams,
    type ReceivingOrderListParams as ReceivingOrderListParams,
  };

  export {
    ProductionFlows as ProductionFlows,
    type ListProductionFlowConsumption as ListProductionFlowConsumption,
    type ListProductionFlowStep as ListProductionFlowStep,
    type ProductionFlow as ProductionFlow,
    type ProductionFlowConsumption as ProductionFlowConsumption,
    type ProductionFlowProduction as ProductionFlowProduction,
    type ProductionFlowStep as ProductionFlowStep,
    type ProductionFlowRetrieveByItemParams as ProductionFlowRetrieveByItemParams,
  };

  export {
    ProductionRuns as ProductionRuns,
    type CreateProductionRunRequest as CreateProductionRunRequest,
    type ListProductionRun as ListProductionRun,
    type UpdateProductionRunRequest as UpdateProductionRunRequest,
    type ProductionRunDeleteResponse as ProductionRunDeleteResponse,
    type ProductionRunCreateParams as ProductionRunCreateParams,
    type ProductionRunRetrieveParams as ProductionRunRetrieveParams,
    type ProductionRunUpdateParams as ProductionRunUpdateParams,
    type ProductionRunListParams as ProductionRunListParams,
  };

  export {
    MachineDowntimeEvents as MachineDowntimeEvents,
    type CreateMachineDowntimeEventRequest as CreateMachineDowntimeEventRequest,
    type ListMachineDowntimeEvent as ListMachineDowntimeEvent,
    type MachineDowntimeEvent as MachineDowntimeEvent,
    type UpdateMachineDowntimeEventRequest as UpdateMachineDowntimeEventRequest,
    type MachineDowntimeEventDeleteResponse as MachineDowntimeEventDeleteResponse,
    type MachineDowntimeEventCreateParams as MachineDowntimeEventCreateParams,
    type MachineDowntimeEventRetrieveParams as MachineDowntimeEventRetrieveParams,
    type MachineDowntimeEventUpdateParams as MachineDowntimeEventUpdateParams,
    type MachineDowntimeEventListParams as MachineDowntimeEventListParams,
  };

  export {
    DemandOverrides as DemandOverrides,
    type CreateDemandOverrideRequest as CreateDemandOverrideRequest,
    type DemandOverride as DemandOverride,
    type ListDemandOverride as ListDemandOverride,
    type UpdateDemandOverrideRequest as UpdateDemandOverrideRequest,
    type DemandOverrideDeleteResponse as DemandOverrideDeleteResponse,
    type DemandOverrideCreateParams as DemandOverrideCreateParams,
    type DemandOverrideRetrieveParams as DemandOverrideRetrieveParams,
    type DemandOverrideUpdateParams as DemandOverrideUpdateParams,
    type DemandOverrideListParams as DemandOverrideListParams,
  };

  export {
    ProductionSchedules as ProductionSchedules,
    type GenerateProductionScheduleRequest as GenerateProductionScheduleRequest,
    type ListProductionSchedule as ListProductionSchedule,
    type ListProductionScheduleDerivedLine as ListProductionScheduleDerivedLine,
    type ListProductionScheduleDeviation as ListProductionScheduleDeviation,
    type ListProductionScheduleFinishedPolicy as ListProductionScheduleFinishedPolicy,
    type ListProductionScheduleItemPolicy as ListProductionScheduleItemPolicy,
    type ListReleaseScheduleBatch as ListReleaseScheduleBatch,
    type ListReleasedScheduleLine as ListReleasedScheduleLine,
    type ListScheduleAppliedOverride as ListScheduleAppliedOverride,
    type ProductionSchedule as ProductionSchedule,
    type ProductionScheduleDerivedLine as ProductionScheduleDerivedLine,
    type ProductionScheduleDeviation as ProductionScheduleDeviation,
    type ProductionScheduleFinishedPolicy as ProductionScheduleFinishedPolicy,
    type ProductionScheduleItemPolicy as ProductionScheduleItemPolicy,
    type ReleaseScheduleBatch as ReleaseScheduleBatch,
    type ReleaseScheduleWeekPreview as ReleaseScheduleWeekPreview,
    type ReleasedScheduleLine as ReleasedScheduleLine,
    type ScheduleAppliedOverride as ScheduleAppliedOverride,
    type ScheduleDiagnostics as ScheduleDiagnostics,
    type ProductionScheduleDeleteResponse as ProductionScheduleDeleteResponse,
    type ProductionScheduleCreateParams as ProductionScheduleCreateParams,
    type ProductionScheduleListParams as ProductionScheduleListParams,
    type ProductionScheduleRetrieveDerivedLinesParams as ProductionScheduleRetrieveDerivedLinesParams,
    type ProductionScheduleRetrieveDeviationsParams as ProductionScheduleRetrieveDeviationsParams,
    type ProductionScheduleRetrieveWeekReleasePreviewParams as ProductionScheduleRetrieveWeekReleasePreviewParams,
  };

  export {
    type ProductionScheduleSettings as ProductionScheduleSettings,
    type UpdateProductionScheduleSettingsRequest as UpdateProductionScheduleSettingsRequest,
    type ProductionScheduleSettingUpdateParams as ProductionScheduleSettingUpdateParams,
  };

  export {
    PurchaseOrders as PurchaseOrders,
    type CreatePurchaseOrderLineInput as CreatePurchaseOrderLineInput,
    type CreatePurchaseOrderRequest as CreatePurchaseOrderRequest,
    type ListPurchaseOrder as ListPurchaseOrder,
    type OrderLineInput as OrderLineInput,
    type UpdatePurchaseOrderRequest as UpdatePurchaseOrderRequest,
    type PurchaseOrderDeleteResponse as PurchaseOrderDeleteResponse,
    type PurchaseOrderCreateParams as PurchaseOrderCreateParams,
    type PurchaseOrderRetrieveParams as PurchaseOrderRetrieveParams,
    type PurchaseOrderUpdateParams as PurchaseOrderUpdateParams,
    type PurchaseOrderListParams as PurchaseOrderListParams,
    type PurchaseOrderRetrieveStatusesParams as PurchaseOrderRetrieveStatusesParams,
  };

  export {
    Picks as Picks,
    type ListPick as ListPick,
    type PickShipmentsResponse as PickShipmentsResponse,
    type UpdatePickRequest as UpdatePickRequest,
    type PickRetrieveParams as PickRetrieveParams,
    type PickUpdateParams as PickUpdateParams,
    type PickListParams as PickListParams,
    type PickRetrieveShipmentsParams as PickRetrieveShipmentsParams,
  };

  export {
    Locations as Locations,
    type CreateLocationRequest as CreateLocationRequest,
    type UpdateLocationRequest as UpdateLocationRequest,
    type LocationDeleteResponse as LocationDeleteResponse,
    type LocationCreateParams as LocationCreateParams,
    type LocationRetrieveParams as LocationRetrieveParams,
    type LocationUpdateParams as LocationUpdateParams,
    type LocationListParams as LocationListParams,
  };

  export {
    LocationTypes as LocationTypes,
    type ListLocationType as ListLocationType,
    type LocationType as LocationType,
    type LocationTypeListParams as LocationTypeListParams,
  };

  export {
    ShippingCases as ShippingCases,
    type ShippingCase as ShippingCase,
    type ShippingCaseLabelURL as ShippingCaseLabelURL,
    type UpdateShippingCaseRequest as UpdateShippingCaseRequest,
    type ShippingCaseDeleteResponse as ShippingCaseDeleteResponse,
    type ShippingCaseRetrieveParams as ShippingCaseRetrieveParams,
    type ShippingCaseUpdateParams as ShippingCaseUpdateParams,
  };

  export {
    Shipments as Shipments,
    type ListShipment as ListShipment,
    type UpdateShipmentRequest as UpdateShipmentRequest,
    type ShipmentDeleteResponse as ShipmentDeleteResponse,
    type ShipmentRetrieveParams as ShipmentRetrieveParams,
    type ShipmentUpdateParams as ShipmentUpdateParams,
    type ShipmentListParams as ShipmentListParams,
  };

  export { Edi as Edi };

  export {
    DcLocations as DcLocations,
    type CreateDcLocationRequest as CreateDcLocationRequest,
    type DcLocation as DcLocation,
    type DcLocationCustomer as DcLocationCustomer,
    type ListDcLocation as ListDcLocation,
    type UpdateDcLocationRequest as UpdateDcLocationRequest,
    type DcLocationDeleteResponse as DcLocationDeleteResponse,
    type DcLocationCreateParams as DcLocationCreateParams,
    type DcLocationUpdateParams as DcLocationUpdateParams,
    type DcLocationListParams as DcLocationListParams,
  };

  export {
    EdiRuns as EdiRuns,
    type EdiRun as EdiRun,
    type ListEdiRun as ListEdiRun,
    type EdiRunListParams as EdiRunListParams,
  };
}
