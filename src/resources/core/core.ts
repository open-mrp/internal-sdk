// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionEmailRecordParams,
  ActionEmailRecordResponse,
  ActionRequestDemoParams,
  ActionSubmitFeedbackParams,
  ActionUpdateCheckDuplicatesParams,
  ActionUpdateCheckDuplicatesResponse,
  Actions,
  MessageResource,
} from './actions';
import * as AnalyticsAPI from './analytics';
import {
  Analytics,
  AnalyticsRetrieveWeeksOfSalesParams,
  AnalyticsRetrieveWeeksOfSalesResponse,
  AnalyticsUpdateDeliveriesParams,
  AnalyticsUpdateDeliveriesResponse,
  AnalyticsUpdateDemandForecastParams,
  AnalyticsUpdateDemandForecastResponse,
  AnalyticsUpdateInventoryReceiptsParams,
  AnalyticsUpdateInventoryReceiptsResponse,
  AnalyticsUpdateManufacturingBatchParams,
  AnalyticsUpdateManufacturingBatchResponse,
  AnalyticsUpdateManufacturingParams,
  AnalyticsUpdateManufacturingResponse,
  AnalyticsUpdateMaterialsParams,
  AnalyticsUpdateMaterialsResponse,
  AnalyticsUpdateNewCustomersParams,
  AnalyticsUpdateNewCustomersResponse,
  AnalyticsUpdateOeeParams,
  AnalyticsUpdateOeeResponse,
  AnalyticsUpdateOpenBatchesParams,
  AnalyticsUpdateOpenBatchesResponse,
  AnalyticsUpdateOrdersParams,
  AnalyticsUpdateOrdersResponse,
  AnalyticsUpdateProductionCostsParams,
  AnalyticsUpdateProductionCostsResponse,
  AnalyticsUpdateQuarterlyOrdersParams,
  AnalyticsUpdateQuarterlyOrdersResponse,
  AnalyticsUpdateSalesParams,
  AnalyticsUpdateSalesResponse,
  AnalyzeOpenBatchesRequest,
  ChartData,
  CostBreakdown,
  DemandForecastForecastPoint,
  ManufacturingMetrics,
  OpenBatchSummary,
  RevenueForecastPoint,
} from './analytics';
import * as AuditEventsAPI from './audit-events';
import {
  AuditEvent,
  AuditEventRetrieveAuditEventsParams,
  AuditEventRetrieveAuditEventsResponse,
  AuditEventRetrieveParams,
  AuditEventRetrieveResourceTypesResponse,
  AuditEvents,
} from './audit-events';
import * as EmailLogsAPI from './email-logs';
import {
  EmailLog,
  EmailLogRetrieveEmailLogsParams,
  EmailLogRetrieveEmailLogsResponse,
  EmailLogRetrieveParams,
  EmailLogs,
} from './email-logs';
import * as RequestLogsAPI from './request-logs';
import {
  RequestLog,
  RequestLogRetrieveParams,
  RequestLogRetrieveRequestLogsParams,
  RequestLogRetrieveRequestLogsResponse,
  RequestLogs,
} from './request-logs';
import * as SandboxesAPI from './sandboxes';
import {
  Sandbox,
  SandboxCreateParams,
  SandboxDeleteResponse,
  SandboxListParams,
  SandboxListResponse,
  SandboxRetrieveParams,
  Sandboxes,
} from './sandboxes';
import * as SysPropertiesAPI from './sys-properties';
import {
  SysProperties,
  SysProperty,
  SysPropertyRetrieveLatestValueResponse,
  SysPropertyRetrieveSysPropertiesParams,
  SysPropertyRetrieveSysPropertiesResponse,
  SysPropertyUpdateParams,
} from './sys-properties';
import * as AddressesAPI from './addresses/addresses';
import {
  AddressRetrieveParams,
  AddressRetrieveResponse,
  AddressRetrieveSuggestionsParams,
  AddressRetrieveSuggestionsResponse,
  Addresses,
} from './addresses/addresses';

export class Core extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  auditEvents: AuditEventsAPI.AuditEvents = new AuditEventsAPI.AuditEvents(this._client);
  emailLogs: EmailLogsAPI.EmailLogs = new EmailLogsAPI.EmailLogs(this._client);
  requestLogs: RequestLogsAPI.RequestLogs = new RequestLogsAPI.RequestLogs(this._client);
  sandboxes: SandboxesAPI.Sandboxes = new SandboxesAPI.Sandboxes(this._client);
  sysProperties: SysPropertiesAPI.SysProperties = new SysPropertiesAPI.SysProperties(this._client);
}

Core.Actions = Actions;
Core.Addresses = Addresses;
Core.Analytics = Analytics;
Core.AuditEvents = AuditEvents;
Core.EmailLogs = EmailLogs;
Core.RequestLogs = RequestLogs;
Core.Sandboxes = Sandboxes;
Core.SysProperties = SysProperties;

export declare namespace Core {
  export {
    Actions as Actions,
    type MessageResource as MessageResource,
    type ActionEmailRecordResponse as ActionEmailRecordResponse,
    type ActionUpdateCheckDuplicatesResponse as ActionUpdateCheckDuplicatesResponse,
    type ActionEmailRecordParams as ActionEmailRecordParams,
    type ActionRequestDemoParams as ActionRequestDemoParams,
    type ActionSubmitFeedbackParams as ActionSubmitFeedbackParams,
    type ActionUpdateCheckDuplicatesParams as ActionUpdateCheckDuplicatesParams,
  };

  export {
    Addresses as Addresses,
    type AddressRetrieveResponse as AddressRetrieveResponse,
    type AddressRetrieveSuggestionsResponse as AddressRetrieveSuggestionsResponse,
    type AddressRetrieveParams as AddressRetrieveParams,
    type AddressRetrieveSuggestionsParams as AddressRetrieveSuggestionsParams,
  };

  export {
    Analytics as Analytics,
    type AnalyzeOpenBatchesRequest as AnalyzeOpenBatchesRequest,
    type ChartData as ChartData,
    type CostBreakdown as CostBreakdown,
    type DemandForecastForecastPoint as DemandForecastForecastPoint,
    type ManufacturingMetrics as ManufacturingMetrics,
    type OpenBatchSummary as OpenBatchSummary,
    type RevenueForecastPoint as RevenueForecastPoint,
    type AnalyticsRetrieveWeeksOfSalesResponse as AnalyticsRetrieveWeeksOfSalesResponse,
    type AnalyticsUpdateDeliveriesResponse as AnalyticsUpdateDeliveriesResponse,
    type AnalyticsUpdateDemandForecastResponse as AnalyticsUpdateDemandForecastResponse,
    type AnalyticsUpdateInventoryReceiptsResponse as AnalyticsUpdateInventoryReceiptsResponse,
    type AnalyticsUpdateManufacturingResponse as AnalyticsUpdateManufacturingResponse,
    type AnalyticsUpdateManufacturingBatchResponse as AnalyticsUpdateManufacturingBatchResponse,
    type AnalyticsUpdateMaterialsResponse as AnalyticsUpdateMaterialsResponse,
    type AnalyticsUpdateNewCustomersResponse as AnalyticsUpdateNewCustomersResponse,
    type AnalyticsUpdateOeeResponse as AnalyticsUpdateOeeResponse,
    type AnalyticsUpdateOpenBatchesResponse as AnalyticsUpdateOpenBatchesResponse,
    type AnalyticsUpdateOrdersResponse as AnalyticsUpdateOrdersResponse,
    type AnalyticsUpdateProductionCostsResponse as AnalyticsUpdateProductionCostsResponse,
    type AnalyticsUpdateQuarterlyOrdersResponse as AnalyticsUpdateQuarterlyOrdersResponse,
    type AnalyticsUpdateSalesResponse as AnalyticsUpdateSalesResponse,
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
    AuditEvents as AuditEvents,
    type AuditEvent as AuditEvent,
    type AuditEventRetrieveAuditEventsResponse as AuditEventRetrieveAuditEventsResponse,
    type AuditEventRetrieveResourceTypesResponse as AuditEventRetrieveResourceTypesResponse,
    type AuditEventRetrieveParams as AuditEventRetrieveParams,
    type AuditEventRetrieveAuditEventsParams as AuditEventRetrieveAuditEventsParams,
  };

  export {
    EmailLogs as EmailLogs,
    type EmailLog as EmailLog,
    type EmailLogRetrieveEmailLogsResponse as EmailLogRetrieveEmailLogsResponse,
    type EmailLogRetrieveParams as EmailLogRetrieveParams,
    type EmailLogRetrieveEmailLogsParams as EmailLogRetrieveEmailLogsParams,
  };

  export {
    RequestLogs as RequestLogs,
    type RequestLog as RequestLog,
    type RequestLogRetrieveRequestLogsResponse as RequestLogRetrieveRequestLogsResponse,
    type RequestLogRetrieveParams as RequestLogRetrieveParams,
    type RequestLogRetrieveRequestLogsParams as RequestLogRetrieveRequestLogsParams,
  };

  export {
    Sandboxes as Sandboxes,
    type Sandbox as Sandbox,
    type SandboxListResponse as SandboxListResponse,
    type SandboxDeleteResponse as SandboxDeleteResponse,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxRetrieveParams as SandboxRetrieveParams,
    type SandboxListParams as SandboxListParams,
  };

  export {
    SysProperties as SysProperties,
    type SysProperty as SysProperty,
    type SysPropertyRetrieveLatestValueResponse as SysPropertyRetrieveLatestValueResponse,
    type SysPropertyRetrieveSysPropertiesResponse as SysPropertyRetrieveSysPropertiesResponse,
    type SysPropertyUpdateParams as SysPropertyUpdateParams,
    type SysPropertyRetrieveSysPropertiesParams as SysPropertyRetrieveSysPropertiesParams,
  };
}
