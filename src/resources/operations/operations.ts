// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as AnalyticsAPI from './analytics';
import { Analytics, AnalyticsUpdateOpenBatchesParams, AnalyticsUpdateOpenBatchesResponse } from './analytics';
import * as DcLocationsAPI from './dc-locations';
import {
  DcLocation,
  DcLocationDcLocationsParams,
  DcLocationDeleteResponse,
  DcLocationRetrieveDcLocationsParams,
  DcLocationRetrieveDcLocationsResponse,
  DcLocationRetrieveParams,
  DcLocationUpdateParams,
  DcLocations,
} from './dc-locations';
import * as DeliveriesAPI from './deliveries';
import { Deliveries, DeliveryListParams, DeliveryListResponse, DeliveryRetrieveResponse } from './deliveries';
import * as DepartmentsAPI from './departments';
import {
  Department,
  DepartmentCreateParams,
  DepartmentDeleteResponse,
  DepartmentListParams,
  DepartmentRetrieveParams,
  DepartmentUpdateParams,
  Departments,
  ListDepartment,
} from './departments';
import * as EdiRunsAPI from './edi-runs';
import { EdiRun, EdiRunRetrieveEdiRunsParams, EdiRunRetrieveEdiRunsResponse, EdiRuns } from './edi-runs';
import * as LocationTypesAPI from './location-types';
import {
  LocationType,
  LocationTypeRetrieveLocationTypesParams,
  LocationTypeRetrieveLocationTypesResponse,
  LocationTypes,
} from './location-types';
import * as LocationsAPI from './locations';
import {
  ListLocation,
  Location,
  LocationCreateParams,
  LocationDeleteResponse,
  LocationListParams,
  LocationRetrieveParams,
  LocationUpdateParams,
  Locations,
} from './locations';
import * as MachinesAPI from './machines';
import {
  ListMachine,
  Machine,
  MachineCreateParams,
  MachineDeleteResponse,
  MachineListParams,
  MachineRetrieveParams,
  MachineUpdateParams,
  Machines,
} from './machines';
import * as ScanningStationsAPI from './scanning-stations';
import {
  ListScanningStation,
  ScanningStation,
  ScanningStationConsumptionsParams,
  ScanningStationConsumptionsResponse,
  ScanningStationDeleteResponse,
  ScanningStationRetrieveBatchesParams,
  ScanningStationRetrieveParams,
  ScanningStationRetrieveScanningStationsParams,
  ScanningStationScanningStationsParams,
  ScanningStationUpdateParams,
  ScanningStationUpdateProductionStepsParams,
  ScanningStationUpdateProductionStepsResponse,
  ScanningStations,
} from './scanning-stations';
import * as ShippingCasesAPI from './shipping-cases';
import {
  ShippingCase,
  ShippingCaseDeleteResponse,
  ShippingCaseRetrieveLabelResponse,
  ShippingCaseRetrieveParams,
  ShippingCaseUpdateParams,
  ShippingCases,
} from './shipping-cases';
import * as ShippingTermsAPI from './shipping-terms';
import {
  QuantityInput,
  ShippingTerm,
  ShippingTermDeleteResponse,
  ShippingTermRetrieveParams,
  ShippingTermRetrieveShippingTermsParams,
  ShippingTermRetrieveShippingTermsResponse,
  ShippingTermShippingTermsParams,
  ShippingTermUpdateParams,
  ShippingTerms,
} from './shipping-terms';
import * as ItemsAPI from '../catalog/items/items';
import * as UnitsAPI from '../catalog/units/units';
import * as BatchesAPI from './batches/batches';
import {
  BatchNextStepsParams,
  BatchNextStepsResponse,
  BatchRemainingQuantitiesParams,
  BatchRetrieveFlowResponse,
  Batches,
  Quantity,
} from './batches/batches';
import * as CarriersAPI from './carriers/carriers';
import {
  Carrier,
  CarrierCreateParams,
  CarrierDeleteResponse,
  CarrierListParams,
  CarrierListResponse,
  CarrierRetrieveOAuthStatusResponse,
  CarrierRetrieveParams,
  CarrierUpdateParams,
  Carriers,
} from './carriers/carriers';
import * as EdiAPI from './edi/edi';
import { Edi } from './edi/edi';
import * as InventoryChangeLogsAPI from './inventory-change-logs/inventory-change-logs';
import {
  InventoryChangeLog,
  InventoryChangeLogRetrieveInventoryChangeLogsParams,
  InventoryChangeLogRetrieveInventoryChangeLogsResponse,
  InventoryChangeLogRetrieveParams,
  InventoryChangeLogs,
} from './inventory-change-logs/inventory-change-logs';
import * as PicksAPI from './picks/picks';
import {
  PickDetail,
  PickListParams,
  PickListResponse,
  PickRetrieveParams,
  PickRetrieveShipmentsParams,
  PickRetrieveShipmentsResponse,
  PickUpdateParams,
  Picks,
} from './picks/picks';
import * as ProductionFlowsAPI from './production-flows/production-flows';
import {
  ProductionFlowRetrieveParams,
  ProductionFlowRetrieveResponse,
  ProductionFlows,
} from './production-flows/production-flows';
import * as ProductionRunsAPI from './production-runs/production-runs';
import {
  ProductionRunDeleteResponse,
  ProductionRunDetail,
  ProductionRunProductionRunsParams,
  ProductionRunRetrieveParams,
  ProductionRunRetrieveProductionRunsParams,
  ProductionRunRetrieveProductionRunsResponse,
  ProductionRunUpdateParams,
  ProductionRuns,
} from './production-runs/production-runs';
import * as ProductionStepsAPI from './production-steps/production-steps';
import {
  CreateRateInput,
  ListProductionStep,
  ProductionStep,
  ProductionStepDeleteResponse,
  ProductionStepProductionStepsParams,
  ProductionStepRetrieveParams,
  ProductionStepRetrieveProductionStepsParams,
  ProductionStepUpdateParams,
  ProductionSteps,
} from './production-steps/production-steps';
import * as PurchaseOrdersAPI from './purchase-orders/purchase-orders';
import {
  ListSalesOrderStatus,
  PurchaseOrderDeleteResponse,
  PurchaseOrderDetail,
  PurchaseOrderPurchaseOrdersParams,
  PurchaseOrderRetrieveParams,
  PurchaseOrderRetrievePurchaseOrdersParams,
  PurchaseOrderRetrievePurchaseOrdersResponse,
  PurchaseOrderRetrieveStatusesParams,
  PurchaseOrderUpdateParams,
  PurchaseOrders,
  SalesOrderStatusDetail,
  SalesOrderType,
  Supplier,
} from './purchase-orders/purchase-orders';
import * as ReceivingOrdersAPI from './receiving-orders/receiving-orders';
import {
  ReceivingOrder,
  ReceivingOrderRetrieveReceivingOrdersParams,
  ReceivingOrderRetrieveReceivingOrdersResponse,
  ReceivingOrders,
} from './receiving-orders/receiving-orders';
import * as ShipmentsAPI from './shipments/shipments';
import {
  ShipmentDeleteResponse,
  ShipmentDetail,
  ShipmentListParams,
  ShipmentListResponse,
  ShipmentRetrieveParams,
  ShipmentUpdateParams,
  Shipments,
} from './shipments/shipments';
import * as SuppliersAPI from './suppliers/suppliers';
import {
  SupplierCreateParams,
  SupplierDetail,
  SupplierListParams,
  SupplierListResponse,
  SupplierRetrieveParams,
  SupplierUpdateParams,
  Suppliers,
} from './suppliers/suppliers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Operations extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  batches: BatchesAPI.Batches = new BatchesAPI.Batches(this._client);
  carriers: CarriersAPI.Carriers = new CarriersAPI.Carriers(this._client);
  dcLocations: DcLocationsAPI.DcLocations = new DcLocationsAPI.DcLocations(this._client);
  deliveries: DeliveriesAPI.Deliveries = new DeliveriesAPI.Deliveries(this._client);
  departments: DepartmentsAPI.Departments = new DepartmentsAPI.Departments(this._client);
  ediRuns: EdiRunsAPI.EdiRuns = new EdiRunsAPI.EdiRuns(this._client);
  edi: EdiAPI.Edi = new EdiAPI.Edi(this._client);
  inventoryChangeLogs: InventoryChangeLogsAPI.InventoryChangeLogs =
    new InventoryChangeLogsAPI.InventoryChangeLogs(this._client);
  locationTypes: LocationTypesAPI.LocationTypes = new LocationTypesAPI.LocationTypes(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  machines: MachinesAPI.Machines = new MachinesAPI.Machines(this._client);
  picks: PicksAPI.Picks = new PicksAPI.Picks(this._client);
  productionFlows: ProductionFlowsAPI.ProductionFlows = new ProductionFlowsAPI.ProductionFlows(this._client);
  productionRuns: ProductionRunsAPI.ProductionRuns = new ProductionRunsAPI.ProductionRuns(this._client);
  productionSteps: ProductionStepsAPI.ProductionSteps = new ProductionStepsAPI.ProductionSteps(this._client);
  purchaseOrders: PurchaseOrdersAPI.PurchaseOrders = new PurchaseOrdersAPI.PurchaseOrders(this._client);
  receivingOrders: ReceivingOrdersAPI.ReceivingOrders = new ReceivingOrdersAPI.ReceivingOrders(this._client);
  scanningStations: ScanningStationsAPI.ScanningStations = new ScanningStationsAPI.ScanningStations(
    this._client,
  );
  shipments: ShipmentsAPI.Shipments = new ShipmentsAPI.Shipments(this._client);
  shippingCases: ShippingCasesAPI.ShippingCases = new ShippingCasesAPI.ShippingCases(this._client);
  shippingTerms: ShippingTermsAPI.ShippingTerms = new ShippingTermsAPI.ShippingTerms(this._client);
  suppliers: SuppliersAPI.Suppliers = new SuppliersAPI.Suppliers(this._client);

  /**
   * Partially updates a quantity.
   *
   * @example
   * ```ts
   * const quantity = await client.operations.update('id', {
   *   unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *   value: '50.000000000000000000000000000000',
   * });
   * ```
   */
  update(
    id: string,
    params: OperationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchesAPI.Quantity> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/quantities/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of items with on-hand inventory quantities for the
   * account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.retrieveInventories();
   * ```
   */
  retrieveInventories(
    query: OperationRetrieveInventoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OperationRetrieveInventoriesResponse> {
    return this._client.get('/v1/operations/inventories', { query, ...options });
  }
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
  denominator_unit: UnitsAPI.Unit | null;

  /**
   * Human-readable formatted value (e.g. "$25.50 / kg" or "100 kg / hr").
   */
  display_value: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  numerator_unit: UnitsAPI.Unit | null;

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
 * Paginated list of inventory items.
 */
export interface OperationRetrieveInventoriesResponse {
  /**
   * Total count.
   */
  count: number;

  /**
   * Inventory items.
   */
  data: Array<OperationRetrieveInventoriesResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace OperationRetrieveInventoriesResponse {
  /**
   * Item with on-hand inventory quantity.
   */
  export interface Data {
    /**
     * Item is an inventory item (product, material, or part).
     */
    item: ItemsAPI.Item;

    /**
     * Resource type identifier.
     */
    object: 'inventory_item';

    /**
     * Value with an associated unit.
     */
    quantity: BatchesAPI.Quantity | null;
  }
}

export interface OperationUpdateParams {
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

Operations.Analytics = Analytics;
Operations.Batches = Batches;
Operations.Carriers = Carriers;
Operations.DcLocations = DcLocations;
Operations.Deliveries = Deliveries;
Operations.Departments = Departments;
Operations.EdiRuns = EdiRuns;
Operations.Edi = Edi;
Operations.InventoryChangeLogs = InventoryChangeLogs;
Operations.LocationTypes = LocationTypes;
Operations.Locations = Locations;
Operations.Machines = Machines;
Operations.Picks = Picks;
Operations.ProductionFlows = ProductionFlows;
Operations.ProductionRuns = ProductionRuns;
Operations.ProductionSteps = ProductionSteps;
Operations.PurchaseOrders = PurchaseOrders;
Operations.ReceivingOrders = ReceivingOrders;
Operations.ScanningStations = ScanningStations;
Operations.Shipments = Shipments;
Operations.ShippingCases = ShippingCases;
Operations.ShippingTerms = ShippingTerms;
Operations.Suppliers = Suppliers;

export declare namespace Operations {
  export {
    type Rate as Rate,
    type OperationRetrieveInventoriesResponse as OperationRetrieveInventoriesResponse,
    type OperationUpdateParams as OperationUpdateParams,
    type OperationRetrieveInventoriesParams as OperationRetrieveInventoriesParams,
  };

  export {
    Analytics as Analytics,
    type AnalyticsUpdateOpenBatchesResponse as AnalyticsUpdateOpenBatchesResponse,
    type AnalyticsUpdateOpenBatchesParams as AnalyticsUpdateOpenBatchesParams,
  };

  export {
    Batches as Batches,
    type Quantity as Quantity,
    type BatchNextStepsResponse as BatchNextStepsResponse,
    type BatchRetrieveFlowResponse as BatchRetrieveFlowResponse,
    type BatchNextStepsParams as BatchNextStepsParams,
    type BatchRemainingQuantitiesParams as BatchRemainingQuantitiesParams,
  };

  export {
    Carriers as Carriers,
    type Carrier as Carrier,
    type CarrierListResponse as CarrierListResponse,
    type CarrierDeleteResponse as CarrierDeleteResponse,
    type CarrierRetrieveOAuthStatusResponse as CarrierRetrieveOAuthStatusResponse,
    type CarrierCreateParams as CarrierCreateParams,
    type CarrierRetrieveParams as CarrierRetrieveParams,
    type CarrierUpdateParams as CarrierUpdateParams,
    type CarrierListParams as CarrierListParams,
  };

  export {
    DcLocations as DcLocations,
    type DcLocation as DcLocation,
    type DcLocationDeleteResponse as DcLocationDeleteResponse,
    type DcLocationRetrieveDcLocationsResponse as DcLocationRetrieveDcLocationsResponse,
    type DcLocationRetrieveParams as DcLocationRetrieveParams,
    type DcLocationUpdateParams as DcLocationUpdateParams,
    type DcLocationDcLocationsParams as DcLocationDcLocationsParams,
    type DcLocationRetrieveDcLocationsParams as DcLocationRetrieveDcLocationsParams,
  };

  export {
    Deliveries as Deliveries,
    type DeliveryRetrieveResponse as DeliveryRetrieveResponse,
    type DeliveryListResponse as DeliveryListResponse,
    type DeliveryListParams as DeliveryListParams,
  };

  export {
    Departments as Departments,
    type Department as Department,
    type ListDepartment as ListDepartment,
    type DepartmentDeleteResponse as DepartmentDeleteResponse,
    type DepartmentCreateParams as DepartmentCreateParams,
    type DepartmentRetrieveParams as DepartmentRetrieveParams,
    type DepartmentUpdateParams as DepartmentUpdateParams,
    type DepartmentListParams as DepartmentListParams,
  };

  export {
    EdiRuns as EdiRuns,
    type EdiRun as EdiRun,
    type EdiRunRetrieveEdiRunsResponse as EdiRunRetrieveEdiRunsResponse,
    type EdiRunRetrieveEdiRunsParams as EdiRunRetrieveEdiRunsParams,
  };

  export { Edi as Edi };

  export {
    InventoryChangeLogs as InventoryChangeLogs,
    type InventoryChangeLog as InventoryChangeLog,
    type InventoryChangeLogRetrieveInventoryChangeLogsResponse as InventoryChangeLogRetrieveInventoryChangeLogsResponse,
    type InventoryChangeLogRetrieveParams as InventoryChangeLogRetrieveParams,
    type InventoryChangeLogRetrieveInventoryChangeLogsParams as InventoryChangeLogRetrieveInventoryChangeLogsParams,
  };

  export {
    LocationTypes as LocationTypes,
    type LocationType as LocationType,
    type LocationTypeRetrieveLocationTypesResponse as LocationTypeRetrieveLocationTypesResponse,
    type LocationTypeRetrieveLocationTypesParams as LocationTypeRetrieveLocationTypesParams,
  };

  export {
    Locations as Locations,
    type ListLocation as ListLocation,
    type Location as Location,
    type LocationDeleteResponse as LocationDeleteResponse,
    type LocationCreateParams as LocationCreateParams,
    type LocationRetrieveParams as LocationRetrieveParams,
    type LocationUpdateParams as LocationUpdateParams,
    type LocationListParams as LocationListParams,
  };

  export {
    Machines as Machines,
    type ListMachine as ListMachine,
    type Machine as Machine,
    type MachineDeleteResponse as MachineDeleteResponse,
    type MachineCreateParams as MachineCreateParams,
    type MachineRetrieveParams as MachineRetrieveParams,
    type MachineUpdateParams as MachineUpdateParams,
    type MachineListParams as MachineListParams,
  };

  export {
    Picks as Picks,
    type PickDetail as PickDetail,
    type PickListResponse as PickListResponse,
    type PickRetrieveShipmentsResponse as PickRetrieveShipmentsResponse,
    type PickRetrieveParams as PickRetrieveParams,
    type PickUpdateParams as PickUpdateParams,
    type PickListParams as PickListParams,
    type PickRetrieveShipmentsParams as PickRetrieveShipmentsParams,
  };

  export {
    ProductionFlows as ProductionFlows,
    type ProductionFlowRetrieveResponse as ProductionFlowRetrieveResponse,
    type ProductionFlowRetrieveParams as ProductionFlowRetrieveParams,
  };

  export {
    ProductionRuns as ProductionRuns,
    type ProductionRunDetail as ProductionRunDetail,
    type ProductionRunDeleteResponse as ProductionRunDeleteResponse,
    type ProductionRunRetrieveProductionRunsResponse as ProductionRunRetrieveProductionRunsResponse,
    type ProductionRunRetrieveParams as ProductionRunRetrieveParams,
    type ProductionRunUpdateParams as ProductionRunUpdateParams,
    type ProductionRunProductionRunsParams as ProductionRunProductionRunsParams,
    type ProductionRunRetrieveProductionRunsParams as ProductionRunRetrieveProductionRunsParams,
  };

  export {
    ProductionSteps as ProductionSteps,
    type CreateRateInput as CreateRateInput,
    type ListProductionStep as ListProductionStep,
    type ProductionStep as ProductionStep,
    type ProductionStepDeleteResponse as ProductionStepDeleteResponse,
    type ProductionStepRetrieveParams as ProductionStepRetrieveParams,
    type ProductionStepUpdateParams as ProductionStepUpdateParams,
    type ProductionStepProductionStepsParams as ProductionStepProductionStepsParams,
    type ProductionStepRetrieveProductionStepsParams as ProductionStepRetrieveProductionStepsParams,
  };

  export {
    PurchaseOrders as PurchaseOrders,
    type ListSalesOrderStatus as ListSalesOrderStatus,
    type PurchaseOrderDetail as PurchaseOrderDetail,
    type SalesOrderStatusDetail as SalesOrderStatusDetail,
    type SalesOrderType as SalesOrderType,
    type Supplier as Supplier,
    type PurchaseOrderDeleteResponse as PurchaseOrderDeleteResponse,
    type PurchaseOrderRetrievePurchaseOrdersResponse as PurchaseOrderRetrievePurchaseOrdersResponse,
    type PurchaseOrderRetrieveParams as PurchaseOrderRetrieveParams,
    type PurchaseOrderUpdateParams as PurchaseOrderUpdateParams,
    type PurchaseOrderPurchaseOrdersParams as PurchaseOrderPurchaseOrdersParams,
    type PurchaseOrderRetrievePurchaseOrdersParams as PurchaseOrderRetrievePurchaseOrdersParams,
    type PurchaseOrderRetrieveStatusesParams as PurchaseOrderRetrieveStatusesParams,
  };

  export {
    ReceivingOrders as ReceivingOrders,
    type ReceivingOrder as ReceivingOrder,
    type ReceivingOrderRetrieveReceivingOrdersResponse as ReceivingOrderRetrieveReceivingOrdersResponse,
    type ReceivingOrderRetrieveReceivingOrdersParams as ReceivingOrderRetrieveReceivingOrdersParams,
  };

  export {
    ScanningStations as ScanningStations,
    type ListScanningStation as ListScanningStation,
    type ScanningStation as ScanningStation,
    type ScanningStationDeleteResponse as ScanningStationDeleteResponse,
    type ScanningStationConsumptionsResponse as ScanningStationConsumptionsResponse,
    type ScanningStationUpdateProductionStepsResponse as ScanningStationUpdateProductionStepsResponse,
    type ScanningStationRetrieveParams as ScanningStationRetrieveParams,
    type ScanningStationUpdateParams as ScanningStationUpdateParams,
    type ScanningStationConsumptionsParams as ScanningStationConsumptionsParams,
    type ScanningStationRetrieveBatchesParams as ScanningStationRetrieveBatchesParams,
    type ScanningStationRetrieveScanningStationsParams as ScanningStationRetrieveScanningStationsParams,
    type ScanningStationScanningStationsParams as ScanningStationScanningStationsParams,
    type ScanningStationUpdateProductionStepsParams as ScanningStationUpdateProductionStepsParams,
  };

  export {
    Shipments as Shipments,
    type ShipmentDetail as ShipmentDetail,
    type ShipmentListResponse as ShipmentListResponse,
    type ShipmentDeleteResponse as ShipmentDeleteResponse,
    type ShipmentRetrieveParams as ShipmentRetrieveParams,
    type ShipmentUpdateParams as ShipmentUpdateParams,
    type ShipmentListParams as ShipmentListParams,
  };

  export {
    ShippingCases as ShippingCases,
    type ShippingCase as ShippingCase,
    type ShippingCaseDeleteResponse as ShippingCaseDeleteResponse,
    type ShippingCaseRetrieveLabelResponse as ShippingCaseRetrieveLabelResponse,
    type ShippingCaseRetrieveParams as ShippingCaseRetrieveParams,
    type ShippingCaseUpdateParams as ShippingCaseUpdateParams,
  };

  export {
    ShippingTerms as ShippingTerms,
    type QuantityInput as QuantityInput,
    type ShippingTerm as ShippingTerm,
    type ShippingTermDeleteResponse as ShippingTermDeleteResponse,
    type ShippingTermRetrieveShippingTermsResponse as ShippingTermRetrieveShippingTermsResponse,
    type ShippingTermRetrieveParams as ShippingTermRetrieveParams,
    type ShippingTermUpdateParams as ShippingTermUpdateParams,
    type ShippingTermRetrieveShippingTermsParams as ShippingTermRetrieveShippingTermsParams,
    type ShippingTermShippingTermsParams as ShippingTermShippingTermsParams,
  };

  export {
    Suppliers as Suppliers,
    type SupplierDetail as SupplierDetail,
    type SupplierListResponse as SupplierListResponse,
    type SupplierCreateParams as SupplierCreateParams,
    type SupplierRetrieveParams as SupplierRetrieveParams,
    type SupplierUpdateParams as SupplierUpdateParams,
    type SupplierListParams as SupplierListParams,
  };
}
