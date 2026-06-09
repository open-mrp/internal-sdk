// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
  BatchRemainingQuantitiesParams,
  Batches,
  GetPossibleNextStepsRequest,
  GetRemainingQuantityToSplitRequest,
  ListBatchFlowNode,
  ListBatchLot,
  ListScanningProductionStepInfo,
  ProductionRun,
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
  ListProductionRunSummary,
  ProductionRunCreateParams,
  ProductionRunDeleteResponse,
  ProductionRunDetail,
  ProductionRunListParams,
  ProductionRunRetrieveParams,
  ProductionRunSummary,
  ProductionRunUpdateParams,
  ProductionRuns,
  UpdateProductionRunRequest,
} from './production-runs/production-runs';
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
   * Returns a paginated list of items with on-hand inventory quantities for the
   * account.
   *
   * @example
   * ```ts
   * const listInventoriesResponse =
   *   await client.operations.retrieveInventories();
   * ```
   */
  retrieveInventories(
    query: OperationRetrieveInventoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListInventoriesResponse> {
    return this._client.get('/v1/operations/inventories', { query, ...options });
  }

  /**
   * Partially updates a quantity.
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
   * @example
   * ```ts
   * const rate = await client.operations.updateRates(
   *   'ra_015aa0a9522cf222024fd21d1a',
   *   {
   *     numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
   *     value: '25.500000000000000000000000000000',
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
 * Item with on-hand inventory quantity.
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
 * Paginated list of inventory items.
 */
export interface ListInventoriesResponse {
  /**
   * Total count.
   */
  count: number;

  /**
   * Inventory items.
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
 * Request to partially update a quantity.
 */
export interface UpdateQuantityRequest {
  /**
   * Owner resource ID.
   */
  object_id?: string;

  /**
   * Owner resource type (e.g. "item", "production_step").
   */
  object_type?: string;

  /**
   * Unit ID.
   */
  unit_id?: string;

  /**
   * Decimal value.
   */
  value?: string;
}

/**
 * Request to partially update a rate.
 */
export interface UpdateRateRequest {
  /**
   * Denominator unit ID.
   */
  denominator_unit_id?: string;

  /**
   * Numerator unit ID.
   */
  numerator_unit_id?: string;

  /**
   * Parent resource ID.
   */
  object_id?: string;

  /**
   * Parent resource type (e.g. "item", "production_step").
   */
  object_type?: string;

  /**
   * Decimal value of the rate.
   */
  value?: string;
}

export interface OperationRetrieveInventoriesParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'quantity.unit'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface OperationUpdateQuantitiesParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'unit'>;

  /**
   * Body param: Owner resource ID.
   */
  object_id?: string;

  /**
   * Body param: Owner resource type (e.g. "item", "production_step").
   */
  object_type?: string;

  /**
   * Body param: Unit ID.
   */
  unit_id?: string;

  /**
   * Body param: Decimal value.
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
   * Body param: Denominator unit ID.
   */
  denominator_unit_id?: string;

  /**
   * Body param: Numerator unit ID.
   */
  numerator_unit_id?: string;

  /**
   * Body param: Parent resource ID.
   */
  object_id?: string;

  /**
   * Body param: Parent resource type (e.g. "item", "production_step").
   */
  object_type?: string;

  /**
   * Body param: Decimal value of the rate.
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
    type InventoryItem as InventoryItem,
    type ListInventoriesResponse as ListInventoriesResponse,
    type UpdateQuantityRequest as UpdateQuantityRequest,
    type UpdateRateRequest as UpdateRateRequest,
    type OperationRetrieveInventoriesParams as OperationRetrieveInventoriesParams,
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
    type GetPossibleNextStepsRequest as GetPossibleNextStepsRequest,
    type GetRemainingQuantityToSplitRequest as GetRemainingQuantityToSplitRequest,
    type ListBatchFlowNode as ListBatchFlowNode,
    type ListBatchLot as ListBatchLot,
    type ListScanningProductionStepInfo as ListScanningProductionStepInfo,
    type ProductionRun as ProductionRun,
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
    type ListProductionRunSummary as ListProductionRunSummary,
    type ProductionRunDetail as ProductionRunDetail,
    type ProductionRunSummary as ProductionRunSummary,
    type UpdateProductionRunRequest as UpdateProductionRunRequest,
    type ProductionRunDeleteResponse as ProductionRunDeleteResponse,
    type ProductionRunCreateParams as ProductionRunCreateParams,
    type ProductionRunRetrieveParams as ProductionRunRetrieveParams,
    type ProductionRunUpdateParams as ProductionRunUpdateParams,
    type ProductionRunListParams as ProductionRunListParams,
  };

  export {
    PurchaseOrders as PurchaseOrders,
    type CreatePurchaseOrderLineInput as CreatePurchaseOrderLineInput,
    type CreatePurchaseOrderRequest as CreatePurchaseOrderRequest,
    type ListPurchaseOrder as ListPurchaseOrder,
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
