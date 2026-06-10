// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionCheckDuplicatesParams,
  ActionEmailRecordParams,
  ActionEmailRecordResponse,
  ActionRequestDemoParams,
  ActionSubmitFeedbackParams,
  Actions,
  CheckDuplicateRequest,
  CheckDuplicateResult,
  EmailRecordRequest,
  MessageResource,
  RequestDemoRequest,
  SubmitFeedbackRequest,
} from './actions';
import * as AnalyticsAPI from './analytics';
import {
  Analytics,
  AnalyticsItem,
  AnalyticsLot,
  AnalyticsRate,
  AnalyticsRetrieveWeeksOfSalesParams,
  AnalyticsUnitGroup,
  AnalyticsUnitGroupUnit,
  AnalyticsUpdateDeliveriesParams,
  AnalyticsUpdateDemandForecastParams,
  AnalyticsUpdateInventoryReceiptsParams,
  AnalyticsUpdateManufacturingBatchParams,
  AnalyticsUpdateManufacturingParams,
  AnalyticsUpdateMaterialsParams,
  AnalyticsUpdateNewCustomersParams,
  AnalyticsUpdateOeeParams,
  AnalyticsUpdateOpenBatchesParams,
  AnalyticsUpdateOrdersParams,
  AnalyticsUpdateProductionCostsParams,
  AnalyticsUpdateQuarterlyOrdersParams,
  AnalyticsUpdateSalesParams,
  AnalyzeDeliveriesRequest,
  AnalyzeDeliveriesResponse,
  AnalyzeDemandForecastRequest,
  AnalyzeDemandForecastResponse,
  AnalyzeInventoryReceiptsRequest,
  AnalyzeInventoryReceiptsResponse,
  AnalyzeManufacturingBatchRequest,
  AnalyzeManufacturingBatchResponse,
  AnalyzeManufacturingRequest,
  AnalyzeManufacturingResponse,
  AnalyzeMaterialsRequest,
  AnalyzeMaterialsResponse,
  AnalyzeNewCustomersRequest,
  AnalyzeNewCustomersResponse,
  AnalyzeOeeRequest,
  AnalyzeOeeResponse,
  AnalyzeOpenBatchesRequest,
  AnalyzeOpenBatchesResponse,
  AnalyzeOrdersRequest,
  AnalyzeOrdersResponse,
  AnalyzeProductionCostsRequest,
  AnalyzeProductionCostsResponse,
  AnalyzeQuarterlyOrdersRequest,
  AnalyzeQuarterlyOrdersResponse,
  AnalyzeSalesRequest,
  AnalyzeSalesResponse,
  AnalyzeWeeksOfSalesResponse,
  ChartData,
  Coordinate,
  CostBreakdown,
  DateTimeCoordinate,
  DeliveryChartData,
  DeliveryStatistics,
  DemandForecastForecastPoint,
  DemandForecastPoint,
  DemandForecastRow,
  InventoryReceiptSummaryEntry,
  ManufacturingMetrics,
  MaterialAnalyticsEntry,
  NewCustomersData,
  OeeDepartment,
  OpenBatchSummary,
  OrderEntry,
  ProductionCostItem,
  RevenueForecastPoint,
  SalesEntry,
  WeeksOfSalesItem,
} from './analytics';
import * as AuditEventsAPI from './audit-events';
import {
  AuditEvent,
  AuditEventListParams,
  AuditEventRetrieveParams,
  AuditEvents,
  AuditFieldChange,
  ListAuditEvent,
  ListAuditFieldChange,
  ListObjectType,
} from './audit-events';
import * as EmailLogsAPI from './email-logs';
import { EmailLog, EmailLogListParams, EmailLogRetrieveParams, EmailLogs, ListEmailLog } from './email-logs';
import * as RequestLogsAPI from './request-logs';
import {
  Actor,
  ListRequestLog,
  RequestLog,
  RequestLogListParams,
  RequestLogRetrieveParams,
  RequestLogs,
} from './request-logs';
import * as SandboxesAPI from './sandboxes';
import {
  CreateSandboxRequest,
  ListSandbox,
  Sandbox,
  SandboxCreateParams,
  SandboxDeleteResponse,
  SandboxListParams,
  SandboxRetrieveParams,
  Sandboxes,
} from './sandboxes';
import * as SysPropertiesAPI from './sys-properties';
import {
  ListSysProperty,
  SysProperties,
  SysProperty,
  SysPropertyListParams,
  SysPropertyType,
  SysPropertyUpdateParams,
  SysPropertyValue,
  UpdateSysPropertyRequest,
} from './sys-properties';
import * as AddressesAPI from './addresses/addresses';
import {
  AddressComponents,
  AddressDetailsResult,
  AddressRetrieveDetailsParams,
  AddressRetrieveSuggestionsParams,
  AddressSuggestion,
  Addresses,
  ListAddressSuggestion,
} from './addresses/addresses';

export class Core extends APIResource {
  sandboxes: SandboxesAPI.Sandboxes = new SandboxesAPI.Sandboxes(this._client);
  requestLogs: RequestLogsAPI.RequestLogs = new RequestLogsAPI.RequestLogs(this._client);
  auditEvents: AuditEventsAPI.AuditEvents = new AuditEventsAPI.AuditEvents(this._client);
  sysProperties: SysPropertiesAPI.SysProperties = new SysPropertiesAPI.SysProperties(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  emailLogs: EmailLogsAPI.EmailLogs = new EmailLogsAPI.EmailLogs(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
}

Core.Sandboxes = Sandboxes;
Core.RequestLogs = RequestLogs;
Core.AuditEvents = AuditEvents;
Core.SysProperties = SysProperties;
Core.Addresses = Addresses;
Core.EmailLogs = EmailLogs;
Core.Analytics = Analytics;
Core.Actions = Actions;

export declare namespace Core {
  export {
    Sandboxes as Sandboxes,
    type CreateSandboxRequest as CreateSandboxRequest,
    type ListSandbox as ListSandbox,
    type Sandbox as Sandbox,
    type SandboxDeleteResponse as SandboxDeleteResponse,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxRetrieveParams as SandboxRetrieveParams,
    type SandboxListParams as SandboxListParams,
  };

  export {
    RequestLogs as RequestLogs,
    type Actor as Actor,
    type ListRequestLog as ListRequestLog,
    type RequestLog as RequestLog,
    type RequestLogRetrieveParams as RequestLogRetrieveParams,
    type RequestLogListParams as RequestLogListParams,
  };

  export {
    AuditEvents as AuditEvents,
    type AuditEvent as AuditEvent,
    type AuditFieldChange as AuditFieldChange,
    type ListAuditEvent as ListAuditEvent,
    type ListAuditFieldChange as ListAuditFieldChange,
    type ListObjectType as ListObjectType,
    type AuditEventRetrieveParams as AuditEventRetrieveParams,
    type AuditEventListParams as AuditEventListParams,
  };

  export {
    SysProperties as SysProperties,
    type ListSysProperty as ListSysProperty,
    type SysProperty as SysProperty,
    type SysPropertyType as SysPropertyType,
    type SysPropertyValue as SysPropertyValue,
    type UpdateSysPropertyRequest as UpdateSysPropertyRequest,
    type SysPropertyUpdateParams as SysPropertyUpdateParams,
    type SysPropertyListParams as SysPropertyListParams,
  };

  export {
    Addresses as Addresses,
    type AddressComponents as AddressComponents,
    type AddressDetailsResult as AddressDetailsResult,
    type AddressSuggestion as AddressSuggestion,
    type ListAddressSuggestion as ListAddressSuggestion,
    type AddressRetrieveDetailsParams as AddressRetrieveDetailsParams,
    type AddressRetrieveSuggestionsParams as AddressRetrieveSuggestionsParams,
  };

  export {
    EmailLogs as EmailLogs,
    type EmailLog as EmailLog,
    type ListEmailLog as ListEmailLog,
    type EmailLogRetrieveParams as EmailLogRetrieveParams,
    type EmailLogListParams as EmailLogListParams,
  };

  export {
    Analytics as Analytics,
    type AnalyticsItem as AnalyticsItem,
    type AnalyticsLot as AnalyticsLot,
    type AnalyticsRate as AnalyticsRate,
    type AnalyticsUnitGroup as AnalyticsUnitGroup,
    type AnalyticsUnitGroupUnit as AnalyticsUnitGroupUnit,
    type AnalyzeDeliveriesRequest as AnalyzeDeliveriesRequest,
    type AnalyzeDeliveriesResponse as AnalyzeDeliveriesResponse,
    type AnalyzeDemandForecastRequest as AnalyzeDemandForecastRequest,
    type AnalyzeDemandForecastResponse as AnalyzeDemandForecastResponse,
    type AnalyzeInventoryReceiptsRequest as AnalyzeInventoryReceiptsRequest,
    type AnalyzeInventoryReceiptsResponse as AnalyzeInventoryReceiptsResponse,
    type AnalyzeManufacturingBatchRequest as AnalyzeManufacturingBatchRequest,
    type AnalyzeManufacturingBatchResponse as AnalyzeManufacturingBatchResponse,
    type AnalyzeManufacturingRequest as AnalyzeManufacturingRequest,
    type AnalyzeManufacturingResponse as AnalyzeManufacturingResponse,
    type AnalyzeMaterialsRequest as AnalyzeMaterialsRequest,
    type AnalyzeMaterialsResponse as AnalyzeMaterialsResponse,
    type AnalyzeNewCustomersRequest as AnalyzeNewCustomersRequest,
    type AnalyzeNewCustomersResponse as AnalyzeNewCustomersResponse,
    type AnalyzeOeeRequest as AnalyzeOeeRequest,
    type AnalyzeOeeResponse as AnalyzeOeeResponse,
    type AnalyzeOpenBatchesRequest as AnalyzeOpenBatchesRequest,
    type AnalyzeOpenBatchesResponse as AnalyzeOpenBatchesResponse,
    type AnalyzeOrdersRequest as AnalyzeOrdersRequest,
    type AnalyzeOrdersResponse as AnalyzeOrdersResponse,
    type AnalyzeProductionCostsRequest as AnalyzeProductionCostsRequest,
    type AnalyzeProductionCostsResponse as AnalyzeProductionCostsResponse,
    type AnalyzeQuarterlyOrdersRequest as AnalyzeQuarterlyOrdersRequest,
    type AnalyzeQuarterlyOrdersResponse as AnalyzeQuarterlyOrdersResponse,
    type AnalyzeSalesRequest as AnalyzeSalesRequest,
    type AnalyzeSalesResponse as AnalyzeSalesResponse,
    type AnalyzeWeeksOfSalesResponse as AnalyzeWeeksOfSalesResponse,
    type ChartData as ChartData,
    type Coordinate as Coordinate,
    type CostBreakdown as CostBreakdown,
    type DateTimeCoordinate as DateTimeCoordinate,
    type DeliveryChartData as DeliveryChartData,
    type DeliveryStatistics as DeliveryStatistics,
    type DemandForecastForecastPoint as DemandForecastForecastPoint,
    type DemandForecastPoint as DemandForecastPoint,
    type DemandForecastRow as DemandForecastRow,
    type InventoryReceiptSummaryEntry as InventoryReceiptSummaryEntry,
    type ManufacturingMetrics as ManufacturingMetrics,
    type MaterialAnalyticsEntry as MaterialAnalyticsEntry,
    type NewCustomersData as NewCustomersData,
    type OeeDepartment as OeeDepartment,
    type OpenBatchSummary as OpenBatchSummary,
    type OrderEntry as OrderEntry,
    type ProductionCostItem as ProductionCostItem,
    type RevenueForecastPoint as RevenueForecastPoint,
    type SalesEntry as SalesEntry,
    type WeeksOfSalesItem as WeeksOfSalesItem,
    type AnalyticsRetrieveWeeksOfSalesParams as AnalyticsRetrieveWeeksOfSalesParams,
    type AnalyticsUpdateDeliveriesParams as AnalyticsUpdateDeliveriesParams,
    type AnalyticsUpdateDemandForecastParams as AnalyticsUpdateDemandForecastParams,
    type AnalyticsUpdateInventoryReceiptsParams as AnalyticsUpdateInventoryReceiptsParams,
    type AnalyticsUpdateManufacturingParams as AnalyticsUpdateManufacturingParams,
    type AnalyticsUpdateManufacturingBatchParams as AnalyticsUpdateManufacturingBatchParams,
    type AnalyticsUpdateMaterialsParams as AnalyticsUpdateMaterialsParams,
    type AnalyticsUpdateNewCustomersParams as AnalyticsUpdateNewCustomersParams,
    type AnalyticsUpdateOeeParams as AnalyticsUpdateOeeParams,
    type AnalyticsUpdateOpenBatchesParams as AnalyticsUpdateOpenBatchesParams,
    type AnalyticsUpdateOrdersParams as AnalyticsUpdateOrdersParams,
    type AnalyticsUpdateProductionCostsParams as AnalyticsUpdateProductionCostsParams,
    type AnalyticsUpdateQuarterlyOrdersParams as AnalyticsUpdateQuarterlyOrdersParams,
    type AnalyticsUpdateSalesParams as AnalyticsUpdateSalesParams,
  };

  export {
    Actions as Actions,
    type CheckDuplicateRequest as CheckDuplicateRequest,
    type CheckDuplicateResult as CheckDuplicateResult,
    type EmailRecordRequest as EmailRecordRequest,
    type MessageResource as MessageResource,
    type RequestDemoRequest as RequestDemoRequest,
    type SubmitFeedbackRequest as SubmitFeedbackRequest,
    type ActionEmailRecordResponse as ActionEmailRecordResponse,
    type ActionCheckDuplicatesParams as ActionCheckDuplicatesParams,
    type ActionEmailRecordParams as ActionEmailRecordParams,
    type ActionRequestDemoParams as ActionRequestDemoParams,
    type ActionSubmitFeedbackParams as ActionSubmitFeedbackParams,
  };
}
