// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from './analytics';
import {
  Analytics,
  AnalyticsUpdateOpenBatchesParams,
  AnalyzeOpenBatchesRequest,
  Consumption,
  Department,
  ListConsumption,
  ListLocation,
  ListMachine,
  ListOpenBatchSummary,
  ListProductionStep,
  ListScanningStation,
  Location,
  Machine,
  OpenBatchSummary,
  ProductionOutput,
  ProductionStep,
  ScanningStation,
} from './analytics';
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
  AccountGroup,
  AccountUser,
  Actor,
  Carrier,
  Consumption as DeliveriesAPIConsumption,
  Customer,
  CustomerContactInfo,
  CustomerDefaults,
  CustomerFreightPreferences,
  CustomerNotificationPreferences,
  Deliveries,
  Delivery,
  DeliveryLine,
  DeliveryListParams,
  DeliverySummary,
  Department as DeliveriesAPIDepartment,
  ListAccountGroup,
  ListConsumption as DeliveriesAPIListConsumption,
  ListCustomer,
  ListDeliveryLine,
  ListDeliverySummary,
  ListLocation as DeliveriesAPIListLocation,
  ListMachine as DeliveriesAPIListMachine,
  ListProductionStep as DeliveriesAPIListProductionStep,
  ListSalesOrderLineDetail,
  ListScanningStation as DeliveriesAPIListScanningStation,
  ListServiceLevel,
  Location as DeliveriesAPILocation,
  Lot,
  Machine as DeliveriesAPIMachine,
  OrderDiscount,
  PaymentTerm,
  Pick,
  Priority,
  ProductionOutput as DeliveriesAPIProductionOutput,
  ProductionRun,
  ProductionStep as DeliveriesAPIProductionStep,
  Role,
  SalesOrderDetail,
  SalesOrderLineDetail,
  SalesOrderStatusDetail,
  SalesOrderType,
  ScanningStation as DeliveriesAPIScanningStation,
  ServiceLevel,
  ShippingTerm,
} from './deliveries';
import * as DepartmentsAPI from './departments';
import {
  Consumption as DepartmentsAPIConsumption,
  CreateDepartmentRequest,
  Department as DepartmentsAPIDepartment,
  DepartmentCreateParams,
  DepartmentDeleteResponse,
  DepartmentListParams,
  DepartmentRetrieveParams,
  DepartmentUpdateParams,
  Departments,
  ListConsumption as DepartmentsAPIListConsumption,
  ListDepartment,
  ListLocation as DepartmentsAPIListLocation,
  ListMachine as DepartmentsAPIListMachine,
  ListProductionStep as DepartmentsAPIListProductionStep,
  ListScanningStation as DepartmentsAPIListScanningStation,
  Location as DepartmentsAPILocation,
  Machine as DepartmentsAPIMachine,
  ProductionOutput as DepartmentsAPIProductionOutput,
  ProductionStep as DepartmentsAPIProductionStep,
  ScanningStation as DepartmentsAPIScanningStation,
  UpdateDepartmentRequest,
} from './departments';
import * as EdiRunsAPI from './edi-runs';
import { EdiRun, EdiRunListParams, EdiRuns, ListEdiRun } from './edi-runs';
import * as LocationTypesAPI from './location-types';
import { ListLocationType, LocationType, LocationTypeListParams, LocationTypes } from './location-types';
import * as LocationsAPI from './locations';
import {
  CreateLocationRequest,
  ListLocation as LocationsAPIListLocation,
  Location as LocationsAPILocation,
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
  Consumption as MachinesAPIConsumption,
  CreateMachineRequest,
  Department as MachinesAPIDepartment,
  ListConsumption as MachinesAPIListConsumption,
  ListLocation as MachinesAPIListLocation,
  ListMachine as MachinesAPIListMachine,
  ListProductionStep as MachinesAPIListProductionStep,
  ListScanningStation as MachinesAPIListScanningStation,
  Location as MachinesAPILocation,
  Machine as MachinesAPIMachine,
  MachineCreateParams,
  MachineDeleteResponse,
  MachineListParams,
  MachineRetrieveParams,
  MachineUpdateParams,
  Machines,
  ProductionOutput as MachinesAPIProductionOutput,
  ProductionStep as MachinesAPIProductionStep,
  ScanningStation as MachinesAPIScanningStation,
  UpdateMachineRequest,
} from './machines';
import * as ScanningStationsAPI from './scanning-stations';
import {
  Batch,
  BatchLot,
  ConnectProductionStepsRequest,
  Consumption as ScanningStationsAPIConsumption,
  CreateScanningStationRequest,
  Department as ScanningStationsAPIDepartment,
  GetScanningStationConsumptionRequest,
  ListBatch,
  ListBatchLot,
  ListConsumption as ScanningStationsAPIListConsumption,
  ListLocation as ScanningStationsAPIListLocation,
  ListMachine as ScanningStationsAPIListMachine,
  ListProductionStep as ScanningStationsAPIListProductionStep,
  ListScanningConsumption,
  ListScanningStation as ScanningStationsAPIListScanningStation,
  Location as ScanningStationsAPILocation,
  Machine as ScanningStationsAPIMachine,
  ProductionOutput as ScanningStationsAPIProductionOutput,
  ProductionRun as ScanningStationsAPIProductionRun,
  ProductionStep as ScanningStationsAPIProductionStep,
  ScanningConsumption,
  ScanningStation as ScanningStationsAPIScanningStation,
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
  SplitQuantityInput,
  UpdateScanningStationRequest,
} from './scanning-stations';
import * as ShippingCasesAPI from './shipping-cases';
import {
  AccountGroup as ShippingCasesAPIAccountGroup,
  AccountUser as ShippingCasesAPIAccountUser,
  Actor as ShippingCasesAPIActor,
  AdjustmentType,
  Carrier as ShippingCasesAPICarrier,
  Consumption as ShippingCasesAPIConsumption,
  Customer as ShippingCasesAPICustomer,
  CustomerContactInfo as ShippingCasesAPICustomerContactInfo,
  CustomerDefaults as ShippingCasesAPICustomerDefaults,
  CustomerFreightPreferences as ShippingCasesAPICustomerFreightPreferences,
  CustomerNotificationPreferences as ShippingCasesAPICustomerNotificationPreferences,
  Department as ShippingCasesAPIDepartment,
  Invoice,
  InvoiceAllocation,
  InvoiceLine,
  InvoiceSummary,
  ListAccountGroup as ShippingCasesAPIListAccountGroup,
  ListConsumption as ShippingCasesAPIListConsumption,
  ListCustomer as ShippingCasesAPIListCustomer,
  ListDepartment as ShippingCasesAPIListDepartment,
  ListInvoiceAllocation,
  ListInvoiceLine,
  ListLocation as ShippingCasesAPIListLocation,
  ListMachine as ShippingCasesAPIListMachine,
  ListPickLineDetail,
  ListProductionStep as ShippingCasesAPIListProductionStep,
  ListSalesOrderLineDetail as ShippingCasesAPIListSalesOrderLineDetail,
  ListScanningStation as ShippingCasesAPIListScanningStation,
  ListServiceLevel as ShippingCasesAPIListServiceLevel,
  ListShipmentLine,
  ListShippingCaseDetail,
  ListTransactionAllocation,
  Location as ShippingCasesAPILocation,
  Machine as ShippingCasesAPIMachine,
  OrderDiscount as ShippingCasesAPIOrderDiscount,
  PaymentTerm as ShippingCasesAPIPaymentTerm,
  Pick as ShippingCasesAPIPick,
  PickDetail,
  PickLineDetail,
  Priority as ShippingCasesAPIPriority,
  ProductionOutput as ShippingCasesAPIProductionOutput,
  ProductionRun as ShippingCasesAPIProductionRun,
  ProductionStep as ShippingCasesAPIProductionStep,
  Role as ShippingCasesAPIRole,
  SalesOrderDetail as ShippingCasesAPISalesOrderDetail,
  SalesOrderLineDetail as ShippingCasesAPISalesOrderLineDetail,
  SalesOrderStatusDetail as ShippingCasesAPISalesOrderStatusDetail,
  SalesOrderType as ShippingCasesAPISalesOrderType,
  ScanningStation as ShippingCasesAPIScanningStation,
  ServiceLevel as ShippingCasesAPIServiceLevel,
  ShipmentBilling,
  ShipmentDetail,
  ShipmentLine,
  ShipmentStatus,
  ShippingCase,
  ShippingCaseDeleteResponse,
  ShippingCaseDetail,
  ShippingCaseLabelURL,
  ShippingCaseRetrieveParams,
  ShippingCaseUpdateParams,
  ShippingCases,
  ShippingTerm as ShippingCasesAPIShippingTerm,
  TransactionAllocation,
  TransactionDetail,
  TransactionMethod,
  TransactionType,
  UpdateShippingCaseRequest,
} from './shipping-cases';
import * as ShippingTermsAPI from './shipping-terms';
import {
  CreateShippingTermRequest,
  ListServiceLevel as ShippingTermsAPIListServiceLevel,
  ListShippingTerm,
  QuantityInput,
  ServiceLevel as ShippingTermsAPIServiceLevel,
  ShippingTerm as ShippingTermsAPIShippingTerm,
  ShippingTermCreateParams,
  ShippingTermDeleteResponse,
  ShippingTermListParams,
  ShippingTermRetrieveParams,
  ShippingTermUpdateParams,
  ShippingTerms,
  UpdateShippingTermRequest,
} from './shipping-terms';
import * as BatchesAPI from './batches/batches';
import {
  Batch as BatchesAPIBatch,
  BatchFlowNode,
  BatchLot as BatchesAPIBatchLot,
  BatchNextStepsParams,
  BatchRemainingQuantitiesParams,
  Batches,
  Consumption as BatchesAPIConsumption,
  Department as BatchesAPIDepartment,
  GetPossibleNextStepsRequest,
  GetRemainingQuantityToSplitRequest,
  ListBatchFlowNode,
  ListBatchLot as BatchesAPIListBatchLot,
  ListConsumption as BatchesAPIListConsumption,
  ListLocation as BatchesAPIListLocation,
  ListMachine as BatchesAPIListMachine,
  ListProductionStep as BatchesAPIListProductionStep,
  ListScanningProductionStepInfo,
  ListScanningStation as BatchesAPIListScanningStation,
  Location as BatchesAPILocation,
  Machine as BatchesAPIMachine,
  ProductionOutput as BatchesAPIProductionOutput,
  ProductionRun as BatchesAPIProductionRun,
  ProductionStep as BatchesAPIProductionStep,
  ScanningProductionStepInfo,
  ScanningStation as BatchesAPIScanningStation,
} from './batches/batches';
import * as CarriersAPI from './carriers/carriers';
import {
  Carrier as CarriersAPICarrier,
  CarrierCreateParams,
  CarrierDeleteResponse,
  CarrierListParams,
  CarrierRetrieveParams,
  CarrierUpdateParams,
  Carriers,
  CreateCarrierRequest,
  ListCarrier,
  ListServiceLevel as CarriersAPIListServiceLevel,
  OAuthStatusResponse,
  ServiceLevel as CarriersAPIServiceLevel,
  UpdateCarrierRequest,
} from './carriers/carriers';
import * as EdiAPI from './edi/edi';
import { Edi } from './edi/edi';
import * as InventoryChangeLogsAPI from './inventory-change-logs/inventory-change-logs';
import {
  Consumption as InventoryChangeLogsAPIConsumption,
  Department as InventoryChangeLogsAPIDepartment,
  InventoryChangeLog,
  InventoryChangeLogListParams,
  InventoryChangeLogRetrieveParams,
  InventoryChangeLogs,
  ListConsumption as InventoryChangeLogsAPIListConsumption,
  ListInventoryChangeLog,
  ListLocation as InventoryChangeLogsAPIListLocation,
  ListMachine as InventoryChangeLogsAPIListMachine,
  ListProductionStep as InventoryChangeLogsAPIListProductionStep,
  ListScanningStation as InventoryChangeLogsAPIListScanningStation,
  Location as InventoryChangeLogsAPILocation,
  Machine as InventoryChangeLogsAPIMachine,
  ProductionOutput as InventoryChangeLogsAPIProductionOutput,
  ProductionStep as InventoryChangeLogsAPIProductionStep,
  ScanningStation as InventoryChangeLogsAPIScanningStation,
  User,
} from './inventory-change-logs/inventory-change-logs';
import * as PicksAPI from './picks/picks';
import {
  AccountGroup as PicksAPIAccountGroup,
  AccountUser as PicksAPIAccountUser,
  Actor as PicksAPIActor,
  Carrier as PicksAPICarrier,
  Consumption as PicksAPIConsumption,
  Customer as PicksAPICustomer,
  CustomerContactInfo as PicksAPICustomerContactInfo,
  CustomerDefaults as PicksAPICustomerDefaults,
  CustomerFreightPreferences as PicksAPICustomerFreightPreferences,
  CustomerNotificationPreferences as PicksAPICustomerNotificationPreferences,
  Department as PicksAPIDepartment,
  ListAccountGroup as PicksAPIListAccountGroup,
  ListConsumption as PicksAPIListConsumption,
  ListCustomer as PicksAPIListCustomer,
  ListDepartment as PicksAPIListDepartment,
  ListLocation as PicksAPIListLocation,
  ListMachine as PicksAPIListMachine,
  ListPickLineDetail as PicksAPIListPickLineDetail,
  ListPickSummary,
  ListProductionStep as PicksAPIListProductionStep,
  ListSalesOrderLineDetail as PicksAPIListSalesOrderLineDetail,
  ListScanningStation as PicksAPIListScanningStation,
  ListServiceLevel as PicksAPIListServiceLevel,
  Location as PicksAPILocation,
  Machine as PicksAPIMachine,
  OrderDiscount as PicksAPIOrderDiscount,
  PaymentTerm as PicksAPIPaymentTerm,
  Pick as PicksAPIPick,
  PickDetail as PicksAPIPickDetail,
  PickLineDetail as PicksAPIPickLineDetail,
  PickListParams,
  PickRetrieveParams,
  PickRetrieveShipmentsParams,
  PickShipmentsResponse,
  PickSummary,
  PickUpdateParams,
  Picks,
  Priority as PicksAPIPriority,
  ProductionOutput as PicksAPIProductionOutput,
  ProductionRun as PicksAPIProductionRun,
  ProductionStep as PicksAPIProductionStep,
  Role as PicksAPIRole,
  SalesOrderDetail as PicksAPISalesOrderDetail,
  SalesOrderLineDetail as PicksAPISalesOrderLineDetail,
  SalesOrderStatusDetail as PicksAPISalesOrderStatusDetail,
  SalesOrderType as PicksAPISalesOrderType,
  ScanningStation as PicksAPIScanningStation,
  ServiceLevel as PicksAPIServiceLevel,
  ShippingTerm as PicksAPIShippingTerm,
  UpdatePickRequest,
} from './picks/picks';
import * as ProductionFlowsAPI from './production-flows/production-flows';
import {
  Consumption as ProductionFlowsAPIConsumption,
  Department as ProductionFlowsAPIDepartment,
  ListConsumption as ProductionFlowsAPIListConsumption,
  ListLocation as ProductionFlowsAPIListLocation,
  ListMachine as ProductionFlowsAPIListMachine,
  ListProductionFlowConsumption,
  ListProductionFlowStep,
  ListProductionStep as ProductionFlowsAPIListProductionStep,
  ListScanningStation as ProductionFlowsAPIListScanningStation,
  Location as ProductionFlowsAPILocation,
  Machine as ProductionFlowsAPIMachine,
  ProductionFlow,
  ProductionFlowConsumption,
  ProductionFlowProduction,
  ProductionFlowRetrieveByItemParams,
  ProductionFlowStep,
  ProductionFlows,
  ProductionOutput as ProductionFlowsAPIProductionOutput,
  ProductionStep as ProductionFlowsAPIProductionStep,
  ScanningStation as ProductionFlowsAPIScanningStation,
} from './production-flows/production-flows';
import * as ProductionRunsAPI from './production-runs/production-runs';
import {
  AccountUser as ProductionRunsAPIAccountUser,
  Consumption as ProductionRunsAPIConsumption,
  CreateProductionRunRequest,
  Department as ProductionRunsAPIDepartment,
  ListConsumption as ProductionRunsAPIListConsumption,
  ListLocation as ProductionRunsAPIListLocation,
  ListMachine as ProductionRunsAPIListMachine,
  ListProductionRunSummary,
  ListProductionStep as ProductionRunsAPIListProductionStep,
  ListScanningStation as ProductionRunsAPIListScanningStation,
  Location as ProductionRunsAPILocation,
  Machine as ProductionRunsAPIMachine,
  ProductionOutput as ProductionRunsAPIProductionOutput,
  ProductionRunCreateParams,
  ProductionRunDeleteResponse,
  ProductionRunDetail,
  ProductionRunListParams,
  ProductionRunRetrieveParams,
  ProductionRunSummary,
  ProductionRunUpdateParams,
  ProductionRuns,
  ProductionStep as ProductionRunsAPIProductionStep,
  Role as ProductionRunsAPIRole,
  ScanningStation as ProductionRunsAPIScanningStation,
  UpdateProductionRunRequest,
} from './production-runs/production-runs';
import * as ProductionStepsAPI from './production-steps/production-steps';
import {
  Consumption as ProductionStepsAPIConsumption,
  CreateConsumptionInput,
  CreateProductionInput,
  CreateProductionStepRequest,
  CreateRateInput,
  Department as ProductionStepsAPIDepartment,
  ListConsumption as ProductionStepsAPIListConsumption,
  ListLocation as ProductionStepsAPIListLocation,
  ListMachine as ProductionStepsAPIListMachine,
  ListProductionStep as ProductionStepsAPIListProductionStep,
  ListScanningStation as ProductionStepsAPIListScanningStation,
  Location as ProductionStepsAPILocation,
  Machine as ProductionStepsAPIMachine,
  ProductionOutput as ProductionStepsAPIProductionOutput,
  ProductionStep as ProductionStepsAPIProductionStep,
  ProductionStepCreateParams,
  ProductionStepDeleteResponse,
  ProductionStepListParams,
  ProductionStepRetrieveParams,
  ProductionStepUpdateParams,
  ProductionSteps,
  ScanningStation as ProductionStepsAPIScanningStation,
  UpdateProductionStepRequest,
} from './production-steps/production-steps';
import * as PurchaseOrdersAPI from './purchase-orders/purchase-orders';
import {
  AccountGroup as PurchaseOrdersAPIAccountGroup,
  AccountUser as PurchaseOrdersAPIAccountUser,
  Actor as PurchaseOrdersAPIActor,
  Carrier as PurchaseOrdersAPICarrier,
  Consumption as PurchaseOrdersAPIConsumption,
  CreatePurchaseOrderLineInput,
  CreatePurchaseOrderRequest,
  Customer as PurchaseOrdersAPICustomer,
  CustomerContactInfo as PurchaseOrdersAPICustomerContactInfo,
  CustomerDefaults as PurchaseOrdersAPICustomerDefaults,
  CustomerFreightPreferences as PurchaseOrdersAPICustomerFreightPreferences,
  CustomerNotificationPreferences as PurchaseOrdersAPICustomerNotificationPreferences,
  Department as PurchaseOrdersAPIDepartment,
  EmailContact,
  ListAccountGroup as PurchaseOrdersAPIListAccountGroup,
  ListConsumption as PurchaseOrdersAPIListConsumption,
  ListCustomer as PurchaseOrdersAPIListCustomer,
  ListEmailContact,
  ListLocation as PurchaseOrdersAPIListLocation,
  ListMachine as PurchaseOrdersAPIListMachine,
  ListProductionStep as PurchaseOrdersAPIListProductionStep,
  ListPurchaseOrderLineDetail,
  ListPurchaseOrderSummary,
  ListReceivingOrderLine,
  ListSalesOrderLineDetail as PurchaseOrdersAPIListSalesOrderLineDetail,
  ListSalesOrderStatus,
  ListScanningStation as PurchaseOrdersAPIListScanningStation,
  ListServiceLevel as PurchaseOrdersAPIListServiceLevel,
  Location as PurchaseOrdersAPILocation,
  Machine as PurchaseOrdersAPIMachine,
  OrderDiscount as PurchaseOrdersAPIOrderDiscount,
  OrderLineInput,
  PaymentTerm as PurchaseOrdersAPIPaymentTerm,
  Pick as PurchaseOrdersAPIPick,
  Priority as PurchaseOrdersAPIPriority,
  ProductionOutput as PurchaseOrdersAPIProductionOutput,
  ProductionRun as PurchaseOrdersAPIProductionRun,
  ProductionStep as PurchaseOrdersAPIProductionStep,
  PurchaseOrderCreateParams,
  PurchaseOrderDeleteResponse,
  PurchaseOrderDetail,
  PurchaseOrderLineDetail,
  PurchaseOrderListParams,
  PurchaseOrderRetrieveParams,
  PurchaseOrderRetrieveStatusesParams,
  PurchaseOrderSummary,
  PurchaseOrderUpdateParams,
  PurchaseOrders,
  ReceivingOrder,
  ReceivingOrderLine,
  Role as PurchaseOrdersAPIRole,
  SalesOrderDetail as PurchaseOrdersAPISalesOrderDetail,
  SalesOrderLineDetail as PurchaseOrdersAPISalesOrderLineDetail,
  SalesOrderStatus,
  SalesOrderStatusDetail as PurchaseOrdersAPISalesOrderStatusDetail,
  SalesOrderType as PurchaseOrdersAPISalesOrderType,
  ScanningStation as PurchaseOrdersAPIScanningStation,
  ServiceLevel as PurchaseOrdersAPIServiceLevel,
  ShippingTerm as PurchaseOrdersAPIShippingTerm,
  Supplier,
  UpdatePurchaseOrderRequest,
} from './purchase-orders/purchase-orders';
import * as ReceivingOrdersAPI from './receiving-orders/receiving-orders';
import {
  AccountGroup as ReceivingOrdersAPIAccountGroup,
  AccountUser as ReceivingOrdersAPIAccountUser,
  Actor as ReceivingOrdersAPIActor,
  Carrier as ReceivingOrdersAPICarrier,
  Consumption as ReceivingOrdersAPIConsumption,
  Customer as ReceivingOrdersAPICustomer,
  CustomerContactInfo as ReceivingOrdersAPICustomerContactInfo,
  CustomerDefaults as ReceivingOrdersAPICustomerDefaults,
  CustomerFreightPreferences as ReceivingOrdersAPICustomerFreightPreferences,
  CustomerNotificationPreferences as ReceivingOrdersAPICustomerNotificationPreferences,
  Department as ReceivingOrdersAPIDepartment,
  ListAccountGroup as ReceivingOrdersAPIListAccountGroup,
  ListConsumption as ReceivingOrdersAPIListConsumption,
  ListCustomer as ReceivingOrdersAPIListCustomer,
  ListLocation as ReceivingOrdersAPIListLocation,
  ListMachine as ReceivingOrdersAPIListMachine,
  ListProductionStep as ReceivingOrdersAPIListProductionStep,
  ListReceivingOrderLine as ReceivingOrdersAPIListReceivingOrderLine,
  ListReceivingOrderSummary,
  ListSalesOrderLineDetail as ReceivingOrdersAPIListSalesOrderLineDetail,
  ListScanningStation as ReceivingOrdersAPIListScanningStation,
  ListServiceLevel as ReceivingOrdersAPIListServiceLevel,
  Location as ReceivingOrdersAPILocation,
  Machine as ReceivingOrdersAPIMachine,
  OrderDiscount as ReceivingOrdersAPIOrderDiscount,
  PaymentTerm as ReceivingOrdersAPIPaymentTerm,
  Pick as ReceivingOrdersAPIPick,
  Priority as ReceivingOrdersAPIPriority,
  ProductionOutput as ReceivingOrdersAPIProductionOutput,
  ProductionRun as ReceivingOrdersAPIProductionRun,
  ProductionStep as ReceivingOrdersAPIProductionStep,
  ReceivingOrder as ReceivingOrdersAPIReceivingOrder,
  ReceivingOrderLine as ReceivingOrdersAPIReceivingOrderLine,
  ReceivingOrderListParams,
  ReceivingOrderSummary,
  ReceivingOrders,
  Role as ReceivingOrdersAPIRole,
  SalesOrderDetail as ReceivingOrdersAPISalesOrderDetail,
  SalesOrderLineDetail as ReceivingOrdersAPISalesOrderLineDetail,
  SalesOrderStatusDetail as ReceivingOrdersAPISalesOrderStatusDetail,
  SalesOrderType as ReceivingOrdersAPISalesOrderType,
  ScanningStation as ReceivingOrdersAPIScanningStation,
  ServiceLevel as ReceivingOrdersAPIServiceLevel,
  ShippingTerm as ReceivingOrdersAPIShippingTerm,
} from './receiving-orders/receiving-orders';
import * as LinesAPI from './shipments/lines';
import * as ShipmentsAPI from './shipments/shipments';
import {
  AccountGroup as ShipmentsAPIAccountGroup,
  AccountUser as ShipmentsAPIAccountUser,
  Actor as ShipmentsAPIActor,
  AdjustmentType as ShipmentsAPIAdjustmentType,
  Carrier as ShipmentsAPICarrier,
  Consumption as ShipmentsAPIConsumption,
  Customer as ShipmentsAPICustomer,
  CustomerContactInfo as ShipmentsAPICustomerContactInfo,
  CustomerDefaults as ShipmentsAPICustomerDefaults,
  CustomerFreightPreferences as ShipmentsAPICustomerFreightPreferences,
  CustomerNotificationPreferences as ShipmentsAPICustomerNotificationPreferences,
  Department as ShipmentsAPIDepartment,
  Invoice as ShipmentsAPIInvoice,
  InvoiceAllocation as ShipmentsAPIInvoiceAllocation,
  InvoiceLine as ShipmentsAPIInvoiceLine,
  InvoiceSummary as ShipmentsAPIInvoiceSummary,
  ListAccountGroup as ShipmentsAPIListAccountGroup,
  ListConsumption as ShipmentsAPIListConsumption,
  ListCustomer as ShipmentsAPIListCustomer,
  ListDepartment as ShipmentsAPIListDepartment,
  ListInvoiceAllocation as ShipmentsAPIListInvoiceAllocation,
  ListInvoiceLine as ShipmentsAPIListInvoiceLine,
  ListLocation as ShipmentsAPIListLocation,
  ListMachine as ShipmentsAPIListMachine,
  ListPickLineDetail as ShipmentsAPIListPickLineDetail,
  ListProductionStep as ShipmentsAPIListProductionStep,
  ListSalesOrderLineDetail as ShipmentsAPIListSalesOrderLineDetail,
  ListScanningStation as ShipmentsAPIListScanningStation,
  ListServiceLevel as ShipmentsAPIListServiceLevel,
  ListShipmentLine as ShipmentsAPIListShipmentLine,
  ListShipmentSummary,
  ListShippingCaseDetail as ShipmentsAPIListShippingCaseDetail,
  ListTransactionAllocation as ShipmentsAPIListTransactionAllocation,
  Location as ShipmentsAPILocation,
  Machine as ShipmentsAPIMachine,
  OrderDiscount as ShipmentsAPIOrderDiscount,
  PaymentTerm as ShipmentsAPIPaymentTerm,
  Pick as ShipmentsAPIPick,
  PickDetail as ShipmentsAPIPickDetail,
  PickLineDetail as ShipmentsAPIPickLineDetail,
  Priority as ShipmentsAPIPriority,
  ProductionOutput as ShipmentsAPIProductionOutput,
  ProductionRun as ShipmentsAPIProductionRun,
  ProductionStep as ShipmentsAPIProductionStep,
  Role as ShipmentsAPIRole,
  SalesOrderDetail as ShipmentsAPISalesOrderDetail,
  SalesOrderLineDetail as ShipmentsAPISalesOrderLineDetail,
  SalesOrderStatusDetail as ShipmentsAPISalesOrderStatusDetail,
  SalesOrderType as ShipmentsAPISalesOrderType,
  ScanningStation as ShipmentsAPIScanningStation,
  ServiceLevel as ShipmentsAPIServiceLevel,
  ShipmentBilling as ShipmentsAPIShipmentBilling,
  ShipmentDeleteResponse,
  ShipmentDetail as ShipmentsAPIShipmentDetail,
  ShipmentLine as ShipmentsAPIShipmentLine,
  ShipmentListParams,
  ShipmentRetrieveParams,
  ShipmentStatus as ShipmentsAPIShipmentStatus,
  ShipmentSummary,
  ShipmentUpdateParams,
  Shipments,
  ShippingCaseDetail as ShipmentsAPIShippingCaseDetail,
  ShippingTerm as ShipmentsAPIShippingTerm,
  TransactionAllocation as ShipmentsAPITransactionAllocation,
  TransactionDetail as ShipmentsAPITransactionDetail,
  TransactionMethod as ShipmentsAPITransactionMethod,
  TransactionType as ShipmentsAPITransactionType,
  UpdateShipmentRequest,
} from './shipments/shipments';
import * as SuppliersAPI from './suppliers/suppliers';
import {
  AddressInput,
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
  ): APIPromise<LinesAPI.Quantity> {
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
  ): APIPromise<LinesAPI.Rate> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/rates/${id}`, { query: { include }, body, ...options });
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
 * Item with on-hand inventory quantity.
 */
export interface InventoryItem {
  /**
   * Item is an inventory item (product, material, or part).
   */
  item: LinesAPI.Item;

  /**
   * Resource type identifier.
   */
  object: 'inventory_item';

  /**
   * Value with an associated unit.
   */
  quantity: LinesAPI.Quantity | null;
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
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type Attribute as Attribute,
    type Geolocation as Geolocation,
    type InventoryItem as InventoryItem,
    type Item as Item,
    type ItemCategory as ItemCategory,
    type ListAttribute as ListAttribute,
    type ListInventoriesResponse as ListInventoriesResponse,
    type ListProperty as ListProperty,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type Property as Property,
    type Quantity as Quantity,
    type Rate as Rate,
    type Unit as Unit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
    type UpdateQuantityRequest as UpdateQuantityRequest,
    type UpdateRateRequest as UpdateRateRequest,
    type OperationRetrieveInventoriesParams as OperationRetrieveInventoriesParams,
    type OperationUpdateQuantitiesParams as OperationUpdateQuantitiesParams,
    type OperationUpdateRatesParams as OperationUpdateRatesParams,
  };

  export {
    ShippingTerms as ShippingTerms,
    type CreateShippingTermRequest as CreateShippingTermRequest,
    type ShippingTermsAPIListServiceLevel as ListServiceLevel,
    type ListShippingTerm as ListShippingTerm,
    type QuantityInput as QuantityInput,
    type ShippingTermsAPIServiceLevel as ServiceLevel,
    type ShippingTermsAPIShippingTerm as ShippingTerm,
    type UpdateShippingTermRequest as UpdateShippingTermRequest,
    type ShippingTermDeleteResponse as ShippingTermDeleteResponse,
    type ShippingTermCreateParams as ShippingTermCreateParams,
    type ShippingTermRetrieveParams as ShippingTermRetrieveParams,
    type ShippingTermUpdateParams as ShippingTermUpdateParams,
    type ShippingTermListParams as ShippingTermListParams,
  };

  export {
    Carriers as Carriers,
    type CarriersAPICarrier as Carrier,
    type CreateCarrierRequest as CreateCarrierRequest,
    type ListCarrier as ListCarrier,
    type CarriersAPIListServiceLevel as ListServiceLevel,
    type OAuthStatusResponse as OAuthStatusResponse,
    type CarriersAPIServiceLevel as ServiceLevel,
    type UpdateCarrierRequest as UpdateCarrierRequest,
    type CarrierDeleteResponse as CarrierDeleteResponse,
    type CarrierCreateParams as CarrierCreateParams,
    type CarrierRetrieveParams as CarrierRetrieveParams,
    type CarrierUpdateParams as CarrierUpdateParams,
    type CarrierListParams as CarrierListParams,
  };

  export {
    Suppliers as Suppliers,
    type AddressInput as AddressInput,
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
    type BatchesAPIBatch as Batch,
    type BatchFlowNode as BatchFlowNode,
    type BatchesAPIBatchLot as BatchLot,
    type BatchesAPIConsumption as Consumption,
    type BatchesAPIDepartment as Department,
    type GetPossibleNextStepsRequest as GetPossibleNextStepsRequest,
    type GetRemainingQuantityToSplitRequest as GetRemainingQuantityToSplitRequest,
    type ListBatchFlowNode as ListBatchFlowNode,
    type BatchesAPIListBatchLot as ListBatchLot,
    type BatchesAPIListConsumption as ListConsumption,
    type BatchesAPIListLocation as ListLocation,
    type BatchesAPIListMachine as ListMachine,
    type BatchesAPIListProductionStep as ListProductionStep,
    type ListScanningProductionStepInfo as ListScanningProductionStepInfo,
    type BatchesAPIListScanningStation as ListScanningStation,
    type BatchesAPILocation as Location,
    type BatchesAPIMachine as Machine,
    type BatchesAPIProductionOutput as ProductionOutput,
    type BatchesAPIProductionRun as ProductionRun,
    type BatchesAPIProductionStep as ProductionStep,
    type ScanningProductionStepInfo as ScanningProductionStepInfo,
    type BatchesAPIScanningStation as ScanningStation,
    type BatchNextStepsParams as BatchNextStepsParams,
    type BatchRemainingQuantitiesParams as BatchRemainingQuantitiesParams,
  };

  export {
    ScanningStations as ScanningStations,
    type Batch as Batch,
    type BatchLot as BatchLot,
    type ConnectProductionStepsRequest as ConnectProductionStepsRequest,
    type ScanningStationsAPIConsumption as Consumption,
    type CreateScanningStationRequest as CreateScanningStationRequest,
    type ScanningStationsAPIDepartment as Department,
    type GetScanningStationConsumptionRequest as GetScanningStationConsumptionRequest,
    type ListBatch as ListBatch,
    type ListBatchLot as ListBatchLot,
    type ScanningStationsAPIListConsumption as ListConsumption,
    type ScanningStationsAPIListLocation as ListLocation,
    type ScanningStationsAPIListMachine as ListMachine,
    type ScanningStationsAPIListProductionStep as ListProductionStep,
    type ListScanningConsumption as ListScanningConsumption,
    type ScanningStationsAPIListScanningStation as ListScanningStation,
    type ScanningStationsAPILocation as Location,
    type ScanningStationsAPIMachine as Machine,
    type ScanningStationsAPIProductionOutput as ProductionOutput,
    type ScanningStationsAPIProductionRun as ProductionRun,
    type ScanningStationsAPIProductionStep as ProductionStep,
    type ScanningConsumption as ScanningConsumption,
    type ScanningStationsAPIScanningStation as ScanningStation,
    type SplitQuantityInput as SplitQuantityInput,
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
    type AnalyzeOpenBatchesRequest as AnalyzeOpenBatchesRequest,
    type Consumption as Consumption,
    type Department as Department,
    type ListConsumption as ListConsumption,
    type ListLocation as ListLocation,
    type ListMachine as ListMachine,
    type ListOpenBatchSummary as ListOpenBatchSummary,
    type ListProductionStep as ListProductionStep,
    type ListScanningStation as ListScanningStation,
    type Location as Location,
    type Machine as Machine,
    type OpenBatchSummary as OpenBatchSummary,
    type ProductionOutput as ProductionOutput,
    type ProductionStep as ProductionStep,
    type ScanningStation as ScanningStation,
    type AnalyticsUpdateOpenBatchesParams as AnalyticsUpdateOpenBatchesParams,
  };

  export {
    Departments as Departments,
    type DepartmentsAPIConsumption as Consumption,
    type CreateDepartmentRequest as CreateDepartmentRequest,
    type DepartmentsAPIDepartment as Department,
    type DepartmentsAPIListConsumption as ListConsumption,
    type ListDepartment as ListDepartment,
    type DepartmentsAPIListLocation as ListLocation,
    type DepartmentsAPIListMachine as ListMachine,
    type DepartmentsAPIListProductionStep as ListProductionStep,
    type DepartmentsAPIListScanningStation as ListScanningStation,
    type DepartmentsAPILocation as Location,
    type DepartmentsAPIMachine as Machine,
    type DepartmentsAPIProductionOutput as ProductionOutput,
    type DepartmentsAPIProductionStep as ProductionStep,
    type DepartmentsAPIScanningStation as ScanningStation,
    type UpdateDepartmentRequest as UpdateDepartmentRequest,
    type DepartmentDeleteResponse as DepartmentDeleteResponse,
    type DepartmentCreateParams as DepartmentCreateParams,
    type DepartmentRetrieveParams as DepartmentRetrieveParams,
    type DepartmentUpdateParams as DepartmentUpdateParams,
    type DepartmentListParams as DepartmentListParams,
  };

  export {
    ProductionSteps as ProductionSteps,
    type ProductionStepsAPIConsumption as Consumption,
    type CreateConsumptionInput as CreateConsumptionInput,
    type CreateProductionInput as CreateProductionInput,
    type CreateProductionStepRequest as CreateProductionStepRequest,
    type CreateRateInput as CreateRateInput,
    type ProductionStepsAPIDepartment as Department,
    type ProductionStepsAPIListConsumption as ListConsumption,
    type ProductionStepsAPIListLocation as ListLocation,
    type ProductionStepsAPIListMachine as ListMachine,
    type ProductionStepsAPIListProductionStep as ListProductionStep,
    type ProductionStepsAPIListScanningStation as ListScanningStation,
    type ProductionStepsAPILocation as Location,
    type ProductionStepsAPIMachine as Machine,
    type ProductionStepsAPIProductionOutput as ProductionOutput,
    type ProductionStepsAPIProductionStep as ProductionStep,
    type ProductionStepsAPIScanningStation as ScanningStation,
    type UpdateProductionStepRequest as UpdateProductionStepRequest,
    type ProductionStepDeleteResponse as ProductionStepDeleteResponse,
    type ProductionStepCreateParams as ProductionStepCreateParams,
    type ProductionStepRetrieveParams as ProductionStepRetrieveParams,
    type ProductionStepUpdateParams as ProductionStepUpdateParams,
    type ProductionStepListParams as ProductionStepListParams,
  };

  export {
    Deliveries as Deliveries,
    type AccountGroup as AccountGroup,
    type AccountUser as AccountUser,
    type Actor as Actor,
    type Carrier as Carrier,
    type DeliveriesAPIConsumption as Consumption,
    type Customer as Customer,
    type CustomerContactInfo as CustomerContactInfo,
    type CustomerDefaults as CustomerDefaults,
    type CustomerFreightPreferences as CustomerFreightPreferences,
    type CustomerNotificationPreferences as CustomerNotificationPreferences,
    type Delivery as Delivery,
    type DeliveryLine as DeliveryLine,
    type DeliverySummary as DeliverySummary,
    type DeliveriesAPIDepartment as Department,
    type ListAccountGroup as ListAccountGroup,
    type DeliveriesAPIListConsumption as ListConsumption,
    type ListCustomer as ListCustomer,
    type ListDeliveryLine as ListDeliveryLine,
    type ListDeliverySummary as ListDeliverySummary,
    type DeliveriesAPIListLocation as ListLocation,
    type DeliveriesAPIListMachine as ListMachine,
    type DeliveriesAPIListProductionStep as ListProductionStep,
    type ListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type DeliveriesAPIListScanningStation as ListScanningStation,
    type ListServiceLevel as ListServiceLevel,
    type DeliveriesAPILocation as Location,
    type Lot as Lot,
    type DeliveriesAPIMachine as Machine,
    type OrderDiscount as OrderDiscount,
    type PaymentTerm as PaymentTerm,
    type Pick as Pick,
    type Priority as Priority,
    type DeliveriesAPIProductionOutput as ProductionOutput,
    type ProductionRun as ProductionRun,
    type DeliveriesAPIProductionStep as ProductionStep,
    type Role as Role,
    type SalesOrderDetail as SalesOrderDetail,
    type SalesOrderLineDetail as SalesOrderLineDetail,
    type SalesOrderStatusDetail as SalesOrderStatusDetail,
    type SalesOrderType as SalesOrderType,
    type DeliveriesAPIScanningStation as ScanningStation,
    type ServiceLevel as ServiceLevel,
    type ShippingTerm as ShippingTerm,
    type DeliveryListParams as DeliveryListParams,
  };

  export {
    InventoryChangeLogs as InventoryChangeLogs,
    type InventoryChangeLogsAPIConsumption as Consumption,
    type InventoryChangeLogsAPIDepartment as Department,
    type InventoryChangeLog as InventoryChangeLog,
    type InventoryChangeLogsAPIListConsumption as ListConsumption,
    type ListInventoryChangeLog as ListInventoryChangeLog,
    type InventoryChangeLogsAPIListLocation as ListLocation,
    type InventoryChangeLogsAPIListMachine as ListMachine,
    type InventoryChangeLogsAPIListProductionStep as ListProductionStep,
    type InventoryChangeLogsAPIListScanningStation as ListScanningStation,
    type InventoryChangeLogsAPILocation as Location,
    type InventoryChangeLogsAPIMachine as Machine,
    type InventoryChangeLogsAPIProductionOutput as ProductionOutput,
    type InventoryChangeLogsAPIProductionStep as ProductionStep,
    type InventoryChangeLogsAPIScanningStation as ScanningStation,
    type User as User,
    type InventoryChangeLogRetrieveParams as InventoryChangeLogRetrieveParams,
    type InventoryChangeLogListParams as InventoryChangeLogListParams,
  };

  export {
    Machines as Machines,
    type MachinesAPIConsumption as Consumption,
    type CreateMachineRequest as CreateMachineRequest,
    type MachinesAPIDepartment as Department,
    type MachinesAPIListConsumption as ListConsumption,
    type MachinesAPIListLocation as ListLocation,
    type MachinesAPIListMachine as ListMachine,
    type MachinesAPIListProductionStep as ListProductionStep,
    type MachinesAPIListScanningStation as ListScanningStation,
    type MachinesAPILocation as Location,
    type MachinesAPIMachine as Machine,
    type MachinesAPIProductionOutput as ProductionOutput,
    type MachinesAPIProductionStep as ProductionStep,
    type MachinesAPIScanningStation as ScanningStation,
    type UpdateMachineRequest as UpdateMachineRequest,
    type MachineDeleteResponse as MachineDeleteResponse,
    type MachineCreateParams as MachineCreateParams,
    type MachineRetrieveParams as MachineRetrieveParams,
    type MachineUpdateParams as MachineUpdateParams,
    type MachineListParams as MachineListParams,
  };

  export {
    ReceivingOrders as ReceivingOrders,
    type ReceivingOrdersAPIAccountGroup as AccountGroup,
    type ReceivingOrdersAPIAccountUser as AccountUser,
    type ReceivingOrdersAPIActor as Actor,
    type ReceivingOrdersAPICarrier as Carrier,
    type ReceivingOrdersAPIConsumption as Consumption,
    type ReceivingOrdersAPICustomer as Customer,
    type ReceivingOrdersAPICustomerContactInfo as CustomerContactInfo,
    type ReceivingOrdersAPICustomerDefaults as CustomerDefaults,
    type ReceivingOrdersAPICustomerFreightPreferences as CustomerFreightPreferences,
    type ReceivingOrdersAPICustomerNotificationPreferences as CustomerNotificationPreferences,
    type ReceivingOrdersAPIDepartment as Department,
    type ReceivingOrdersAPIListAccountGroup as ListAccountGroup,
    type ReceivingOrdersAPIListConsumption as ListConsumption,
    type ReceivingOrdersAPIListCustomer as ListCustomer,
    type ReceivingOrdersAPIListLocation as ListLocation,
    type ReceivingOrdersAPIListMachine as ListMachine,
    type ReceivingOrdersAPIListProductionStep as ListProductionStep,
    type ReceivingOrdersAPIListReceivingOrderLine as ListReceivingOrderLine,
    type ListReceivingOrderSummary as ListReceivingOrderSummary,
    type ReceivingOrdersAPIListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type ReceivingOrdersAPIListScanningStation as ListScanningStation,
    type ReceivingOrdersAPIListServiceLevel as ListServiceLevel,
    type ReceivingOrdersAPILocation as Location,
    type ReceivingOrdersAPIMachine as Machine,
    type ReceivingOrdersAPIOrderDiscount as OrderDiscount,
    type ReceivingOrdersAPIPaymentTerm as PaymentTerm,
    type ReceivingOrdersAPIPick as Pick,
    type ReceivingOrdersAPIPriority as Priority,
    type ReceivingOrdersAPIProductionOutput as ProductionOutput,
    type ReceivingOrdersAPIProductionRun as ProductionRun,
    type ReceivingOrdersAPIProductionStep as ProductionStep,
    type ReceivingOrdersAPIReceivingOrder as ReceivingOrder,
    type ReceivingOrdersAPIReceivingOrderLine as ReceivingOrderLine,
    type ReceivingOrderSummary as ReceivingOrderSummary,
    type ReceivingOrdersAPIRole as Role,
    type ReceivingOrdersAPISalesOrderDetail as SalesOrderDetail,
    type ReceivingOrdersAPISalesOrderLineDetail as SalesOrderLineDetail,
    type ReceivingOrdersAPISalesOrderStatusDetail as SalesOrderStatusDetail,
    type ReceivingOrdersAPISalesOrderType as SalesOrderType,
    type ReceivingOrdersAPIScanningStation as ScanningStation,
    type ReceivingOrdersAPIServiceLevel as ServiceLevel,
    type ReceivingOrdersAPIShippingTerm as ShippingTerm,
    type ReceivingOrderListParams as ReceivingOrderListParams,
  };

  export {
    ProductionFlows as ProductionFlows,
    type ProductionFlowsAPIConsumption as Consumption,
    type ProductionFlowsAPIDepartment as Department,
    type ProductionFlowsAPIListConsumption as ListConsumption,
    type ProductionFlowsAPIListLocation as ListLocation,
    type ProductionFlowsAPIListMachine as ListMachine,
    type ListProductionFlowConsumption as ListProductionFlowConsumption,
    type ListProductionFlowStep as ListProductionFlowStep,
    type ProductionFlowsAPIListProductionStep as ListProductionStep,
    type ProductionFlowsAPIListScanningStation as ListScanningStation,
    type ProductionFlowsAPILocation as Location,
    type ProductionFlowsAPIMachine as Machine,
    type ProductionFlow as ProductionFlow,
    type ProductionFlowConsumption as ProductionFlowConsumption,
    type ProductionFlowProduction as ProductionFlowProduction,
    type ProductionFlowStep as ProductionFlowStep,
    type ProductionFlowsAPIProductionOutput as ProductionOutput,
    type ProductionFlowsAPIProductionStep as ProductionStep,
    type ProductionFlowsAPIScanningStation as ScanningStation,
    type ProductionFlowRetrieveByItemParams as ProductionFlowRetrieveByItemParams,
  };

  export {
    ProductionRuns as ProductionRuns,
    type ProductionRunsAPIAccountUser as AccountUser,
    type ProductionRunsAPIConsumption as Consumption,
    type CreateProductionRunRequest as CreateProductionRunRequest,
    type ProductionRunsAPIDepartment as Department,
    type ProductionRunsAPIListConsumption as ListConsumption,
    type ProductionRunsAPIListLocation as ListLocation,
    type ProductionRunsAPIListMachine as ListMachine,
    type ListProductionRunSummary as ListProductionRunSummary,
    type ProductionRunsAPIListProductionStep as ListProductionStep,
    type ProductionRunsAPIListScanningStation as ListScanningStation,
    type ProductionRunsAPILocation as Location,
    type ProductionRunsAPIMachine as Machine,
    type ProductionRunsAPIProductionOutput as ProductionOutput,
    type ProductionRunDetail as ProductionRunDetail,
    type ProductionRunSummary as ProductionRunSummary,
    type ProductionRunsAPIProductionStep as ProductionStep,
    type ProductionRunsAPIRole as Role,
    type ProductionRunsAPIScanningStation as ScanningStation,
    type UpdateProductionRunRequest as UpdateProductionRunRequest,
    type ProductionRunDeleteResponse as ProductionRunDeleteResponse,
    type ProductionRunCreateParams as ProductionRunCreateParams,
    type ProductionRunRetrieveParams as ProductionRunRetrieveParams,
    type ProductionRunUpdateParams as ProductionRunUpdateParams,
    type ProductionRunListParams as ProductionRunListParams,
  };

  export {
    PurchaseOrders as PurchaseOrders,
    type PurchaseOrdersAPIAccountGroup as AccountGroup,
    type PurchaseOrdersAPIAccountUser as AccountUser,
    type PurchaseOrdersAPIActor as Actor,
    type PurchaseOrdersAPICarrier as Carrier,
    type PurchaseOrdersAPIConsumption as Consumption,
    type CreatePurchaseOrderLineInput as CreatePurchaseOrderLineInput,
    type CreatePurchaseOrderRequest as CreatePurchaseOrderRequest,
    type PurchaseOrdersAPICustomer as Customer,
    type PurchaseOrdersAPICustomerContactInfo as CustomerContactInfo,
    type PurchaseOrdersAPICustomerDefaults as CustomerDefaults,
    type PurchaseOrdersAPICustomerFreightPreferences as CustomerFreightPreferences,
    type PurchaseOrdersAPICustomerNotificationPreferences as CustomerNotificationPreferences,
    type PurchaseOrdersAPIDepartment as Department,
    type EmailContact as EmailContact,
    type PurchaseOrdersAPIListAccountGroup as ListAccountGroup,
    type PurchaseOrdersAPIListConsumption as ListConsumption,
    type PurchaseOrdersAPIListCustomer as ListCustomer,
    type ListEmailContact as ListEmailContact,
    type PurchaseOrdersAPIListLocation as ListLocation,
    type PurchaseOrdersAPIListMachine as ListMachine,
    type PurchaseOrdersAPIListProductionStep as ListProductionStep,
    type ListPurchaseOrderLineDetail as ListPurchaseOrderLineDetail,
    type ListPurchaseOrderSummary as ListPurchaseOrderSummary,
    type ListReceivingOrderLine as ListReceivingOrderLine,
    type PurchaseOrdersAPIListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type ListSalesOrderStatus as ListSalesOrderStatus,
    type PurchaseOrdersAPIListScanningStation as ListScanningStation,
    type PurchaseOrdersAPIListServiceLevel as ListServiceLevel,
    type PurchaseOrdersAPILocation as Location,
    type PurchaseOrdersAPIMachine as Machine,
    type PurchaseOrdersAPIOrderDiscount as OrderDiscount,
    type OrderLineInput as OrderLineInput,
    type PurchaseOrdersAPIPaymentTerm as PaymentTerm,
    type PurchaseOrdersAPIPick as Pick,
    type PurchaseOrdersAPIPriority as Priority,
    type PurchaseOrdersAPIProductionOutput as ProductionOutput,
    type PurchaseOrdersAPIProductionRun as ProductionRun,
    type PurchaseOrdersAPIProductionStep as ProductionStep,
    type PurchaseOrderDetail as PurchaseOrderDetail,
    type PurchaseOrderLineDetail as PurchaseOrderLineDetail,
    type PurchaseOrderSummary as PurchaseOrderSummary,
    type ReceivingOrder as ReceivingOrder,
    type ReceivingOrderLine as ReceivingOrderLine,
    type PurchaseOrdersAPIRole as Role,
    type PurchaseOrdersAPISalesOrderDetail as SalesOrderDetail,
    type PurchaseOrdersAPISalesOrderLineDetail as SalesOrderLineDetail,
    type SalesOrderStatus as SalesOrderStatus,
    type PurchaseOrdersAPISalesOrderStatusDetail as SalesOrderStatusDetail,
    type PurchaseOrdersAPISalesOrderType as SalesOrderType,
    type PurchaseOrdersAPIScanningStation as ScanningStation,
    type PurchaseOrdersAPIServiceLevel as ServiceLevel,
    type PurchaseOrdersAPIShippingTerm as ShippingTerm,
    type Supplier as Supplier,
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
    type PicksAPIAccountGroup as AccountGroup,
    type PicksAPIAccountUser as AccountUser,
    type PicksAPIActor as Actor,
    type PicksAPICarrier as Carrier,
    type PicksAPIConsumption as Consumption,
    type PicksAPICustomer as Customer,
    type PicksAPICustomerContactInfo as CustomerContactInfo,
    type PicksAPICustomerDefaults as CustomerDefaults,
    type PicksAPICustomerFreightPreferences as CustomerFreightPreferences,
    type PicksAPICustomerNotificationPreferences as CustomerNotificationPreferences,
    type PicksAPIDepartment as Department,
    type PicksAPIListAccountGroup as ListAccountGroup,
    type PicksAPIListConsumption as ListConsumption,
    type PicksAPIListCustomer as ListCustomer,
    type PicksAPIListDepartment as ListDepartment,
    type PicksAPIListLocation as ListLocation,
    type PicksAPIListMachine as ListMachine,
    type PicksAPIListPickLineDetail as ListPickLineDetail,
    type ListPickSummary as ListPickSummary,
    type PicksAPIListProductionStep as ListProductionStep,
    type PicksAPIListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type PicksAPIListScanningStation as ListScanningStation,
    type PicksAPIListServiceLevel as ListServiceLevel,
    type PicksAPILocation as Location,
    type PicksAPIMachine as Machine,
    type PicksAPIOrderDiscount as OrderDiscount,
    type PicksAPIPaymentTerm as PaymentTerm,
    type PicksAPIPick as Pick,
    type PicksAPIPickDetail as PickDetail,
    type PicksAPIPickLineDetail as PickLineDetail,
    type PickShipmentsResponse as PickShipmentsResponse,
    type PickSummary as PickSummary,
    type PicksAPIPriority as Priority,
    type PicksAPIProductionOutput as ProductionOutput,
    type PicksAPIProductionRun as ProductionRun,
    type PicksAPIProductionStep as ProductionStep,
    type PicksAPIRole as Role,
    type PicksAPISalesOrderDetail as SalesOrderDetail,
    type PicksAPISalesOrderLineDetail as SalesOrderLineDetail,
    type PicksAPISalesOrderStatusDetail as SalesOrderStatusDetail,
    type PicksAPISalesOrderType as SalesOrderType,
    type PicksAPIScanningStation as ScanningStation,
    type PicksAPIServiceLevel as ServiceLevel,
    type PicksAPIShippingTerm as ShippingTerm,
    type UpdatePickRequest as UpdatePickRequest,
    type PickRetrieveParams as PickRetrieveParams,
    type PickUpdateParams as PickUpdateParams,
    type PickListParams as PickListParams,
    type PickRetrieveShipmentsParams as PickRetrieveShipmentsParams,
  };

  export {
    Locations as Locations,
    type CreateLocationRequest as CreateLocationRequest,
    type LocationsAPIListLocation as ListLocation,
    type LocationsAPILocation as Location,
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
    type ShippingCasesAPIAccountGroup as AccountGroup,
    type ShippingCasesAPIAccountUser as AccountUser,
    type ShippingCasesAPIActor as Actor,
    type AdjustmentType as AdjustmentType,
    type ShippingCasesAPICarrier as Carrier,
    type ShippingCasesAPIConsumption as Consumption,
    type ShippingCasesAPICustomer as Customer,
    type ShippingCasesAPICustomerContactInfo as CustomerContactInfo,
    type ShippingCasesAPICustomerDefaults as CustomerDefaults,
    type ShippingCasesAPICustomerFreightPreferences as CustomerFreightPreferences,
    type ShippingCasesAPICustomerNotificationPreferences as CustomerNotificationPreferences,
    type ShippingCasesAPIDepartment as Department,
    type Invoice as Invoice,
    type InvoiceAllocation as InvoiceAllocation,
    type InvoiceLine as InvoiceLine,
    type InvoiceSummary as InvoiceSummary,
    type ShippingCasesAPIListAccountGroup as ListAccountGroup,
    type ShippingCasesAPIListConsumption as ListConsumption,
    type ShippingCasesAPIListCustomer as ListCustomer,
    type ShippingCasesAPIListDepartment as ListDepartment,
    type ListInvoiceAllocation as ListInvoiceAllocation,
    type ListInvoiceLine as ListInvoiceLine,
    type ShippingCasesAPIListLocation as ListLocation,
    type ShippingCasesAPIListMachine as ListMachine,
    type ListPickLineDetail as ListPickLineDetail,
    type ShippingCasesAPIListProductionStep as ListProductionStep,
    type ShippingCasesAPIListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type ShippingCasesAPIListScanningStation as ListScanningStation,
    type ShippingCasesAPIListServiceLevel as ListServiceLevel,
    type ListShipmentLine as ListShipmentLine,
    type ListShippingCaseDetail as ListShippingCaseDetail,
    type ListTransactionAllocation as ListTransactionAllocation,
    type ShippingCasesAPILocation as Location,
    type ShippingCasesAPIMachine as Machine,
    type ShippingCasesAPIOrderDiscount as OrderDiscount,
    type ShippingCasesAPIPaymentTerm as PaymentTerm,
    type ShippingCasesAPIPick as Pick,
    type PickDetail as PickDetail,
    type PickLineDetail as PickLineDetail,
    type ShippingCasesAPIPriority as Priority,
    type ShippingCasesAPIProductionOutput as ProductionOutput,
    type ShippingCasesAPIProductionRun as ProductionRun,
    type ShippingCasesAPIProductionStep as ProductionStep,
    type ShippingCasesAPIRole as Role,
    type ShippingCasesAPISalesOrderDetail as SalesOrderDetail,
    type ShippingCasesAPISalesOrderLineDetail as SalesOrderLineDetail,
    type ShippingCasesAPISalesOrderStatusDetail as SalesOrderStatusDetail,
    type ShippingCasesAPISalesOrderType as SalesOrderType,
    type ShippingCasesAPIScanningStation as ScanningStation,
    type ShippingCasesAPIServiceLevel as ServiceLevel,
    type ShipmentBilling as ShipmentBilling,
    type ShipmentDetail as ShipmentDetail,
    type ShipmentLine as ShipmentLine,
    type ShipmentStatus as ShipmentStatus,
    type ShippingCase as ShippingCase,
    type ShippingCaseDetail as ShippingCaseDetail,
    type ShippingCaseLabelURL as ShippingCaseLabelURL,
    type ShippingCasesAPIShippingTerm as ShippingTerm,
    type TransactionAllocation as TransactionAllocation,
    type TransactionDetail as TransactionDetail,
    type TransactionMethod as TransactionMethod,
    type TransactionType as TransactionType,
    type UpdateShippingCaseRequest as UpdateShippingCaseRequest,
    type ShippingCaseDeleteResponse as ShippingCaseDeleteResponse,
    type ShippingCaseRetrieveParams as ShippingCaseRetrieveParams,
    type ShippingCaseUpdateParams as ShippingCaseUpdateParams,
  };

  export {
    Shipments as Shipments,
    type ShipmentsAPIAccountGroup as AccountGroup,
    type ShipmentsAPIAccountUser as AccountUser,
    type ShipmentsAPIActor as Actor,
    type ShipmentsAPIAdjustmentType as AdjustmentType,
    type ShipmentsAPICarrier as Carrier,
    type ShipmentsAPIConsumption as Consumption,
    type ShipmentsAPICustomer as Customer,
    type ShipmentsAPICustomerContactInfo as CustomerContactInfo,
    type ShipmentsAPICustomerDefaults as CustomerDefaults,
    type ShipmentsAPICustomerFreightPreferences as CustomerFreightPreferences,
    type ShipmentsAPICustomerNotificationPreferences as CustomerNotificationPreferences,
    type ShipmentsAPIDepartment as Department,
    type ShipmentsAPIInvoice as Invoice,
    type ShipmentsAPIInvoiceAllocation as InvoiceAllocation,
    type ShipmentsAPIInvoiceLine as InvoiceLine,
    type ShipmentsAPIInvoiceSummary as InvoiceSummary,
    type ShipmentsAPIListAccountGroup as ListAccountGroup,
    type ShipmentsAPIListConsumption as ListConsumption,
    type ShipmentsAPIListCustomer as ListCustomer,
    type ShipmentsAPIListDepartment as ListDepartment,
    type ShipmentsAPIListInvoiceAllocation as ListInvoiceAllocation,
    type ShipmentsAPIListInvoiceLine as ListInvoiceLine,
    type ShipmentsAPIListLocation as ListLocation,
    type ShipmentsAPIListMachine as ListMachine,
    type ShipmentsAPIListPickLineDetail as ListPickLineDetail,
    type ShipmentsAPIListProductionStep as ListProductionStep,
    type ShipmentsAPIListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type ShipmentsAPIListScanningStation as ListScanningStation,
    type ShipmentsAPIListServiceLevel as ListServiceLevel,
    type ShipmentsAPIListShipmentLine as ListShipmentLine,
    type ListShipmentSummary as ListShipmentSummary,
    type ShipmentsAPIListShippingCaseDetail as ListShippingCaseDetail,
    type ShipmentsAPIListTransactionAllocation as ListTransactionAllocation,
    type ShipmentsAPILocation as Location,
    type ShipmentsAPIMachine as Machine,
    type ShipmentsAPIOrderDiscount as OrderDiscount,
    type ShipmentsAPIPaymentTerm as PaymentTerm,
    type ShipmentsAPIPick as Pick,
    type ShipmentsAPIPickDetail as PickDetail,
    type ShipmentsAPIPickLineDetail as PickLineDetail,
    type ShipmentsAPIPriority as Priority,
    type ShipmentsAPIProductionOutput as ProductionOutput,
    type ShipmentsAPIProductionRun as ProductionRun,
    type ShipmentsAPIProductionStep as ProductionStep,
    type ShipmentsAPIRole as Role,
    type ShipmentsAPISalesOrderDetail as SalesOrderDetail,
    type ShipmentsAPISalesOrderLineDetail as SalesOrderLineDetail,
    type ShipmentsAPISalesOrderStatusDetail as SalesOrderStatusDetail,
    type ShipmentsAPISalesOrderType as SalesOrderType,
    type ShipmentsAPIScanningStation as ScanningStation,
    type ShipmentsAPIServiceLevel as ServiceLevel,
    type ShipmentsAPIShipmentBilling as ShipmentBilling,
    type ShipmentsAPIShipmentDetail as ShipmentDetail,
    type ShipmentsAPIShipmentLine as ShipmentLine,
    type ShipmentsAPIShipmentStatus as ShipmentStatus,
    type ShipmentSummary as ShipmentSummary,
    type ShipmentsAPIShippingCaseDetail as ShippingCaseDetail,
    type ShipmentsAPIShippingTerm as ShippingTerm,
    type ShipmentsAPITransactionAllocation as TransactionAllocation,
    type ShipmentsAPITransactionDetail as TransactionDetail,
    type ShipmentsAPITransactionMethod as TransactionMethod,
    type ShipmentsAPITransactionType as TransactionType,
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
