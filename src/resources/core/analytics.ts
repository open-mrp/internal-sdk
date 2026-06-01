// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MemoriesAPI from '../ai/memories';
import * as OperationsAnalyticsAPI from '../operations/analytics';
import * as EdiRunsAPI from '../operations/edi-runs';
import * as ActionsAPI from '../operations/shipments/actions';
import * as LinesAPI from '../operations/shipments/lines';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Analyze sales, orders, manufacturing, materials, and other business metrics.
 */
export class Analytics extends APIResource {
  /**
   * Returns weeks-of-sales metrics per product line, including on-hand quantity,
   * average weekly sales, and weeks of inventory remaining.
   *
   * @example
   * ```ts
   * const analyzeWeeksOfSalesResponse =
   *   await client.core.analytics.retrieveWeeksOfSales();
   * ```
   */
  retrieveWeeksOfSales(
    query: AnalyticsRetrieveWeeksOfSalesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyzeWeeksOfSalesResponse> {
    return this._client.get('/v1/core/analytics/weeks-of-sales', { query, ...options });
  }

  /**
   * Returns delivery performance statistics over a date range, including on-time
   * rates, average delivery times, and time-to-first-shipment metrics.
   *
   * @example
   * ```ts
   * const analyzeDeliveriesResponse =
   *   await client.core.analytics.updateDeliveries({
   *     end_date: '2026-05-10T00:23:00Z',
   *     start_date: '2026-05-10T00:00:00Z',
   *     customer_group_ids: ['acgp_018e88072d1320808dc979cfac'],
   *     customer_ids: ['ac_0170df1ac58e4d24c66fc89f5f'],
   *     override_promised_dates: true,
   *     product_line_ids: ['pl_01996357326a0d3f7b129542ea'],
   *     sales_rep_ids: ['acus_01ea9983ddb41dacc44ecf997c'],
   *     target_delivery_time_days: 7,
   *   });
   * ```
   */
  updateDeliveries(
    body: AnalyticsUpdateDeliveriesParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeDeliveriesResponse> {
    return this._client.put('/v1/core/analytics/deliveries', { body, ...options });
  }

  /**
   * Returns demand forecasts for items, including historical data and projected
   * demand with confidence bounds.
   *
   * @example
   * ```ts
   * const analyzeDemandForecastResponse =
   *   await client.core.analytics.updateDemandForecast({
   *     forecast_months: 3,
   *     history_months: 6,
   *     item_ids: ['it_0131e386ac683e8c29a71f6f1f'],
   *     product_line_ids: ['pl_01996357326a0d3f7b129542ea'],
   *   });
   * ```
   */
  updateDemandForecast(
    body: AnalyticsUpdateDemandForecastParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyzeDemandForecastResponse> {
    return this._client.put('/v1/core/analytics/demand-forecast', { body, ...options });
  }

  /**
   * Returns inventory receipt summaries including remaining quantities, costs, and
   * values.
   *
   * @example
   * ```ts
   * const analyzeInventoryReceiptsResponse =
   *   await client.core.analytics.updateInventoryReceipts({
   *     item_ids: ['it_0131e386ac683e8c29a71f6f1f'],
   *     location_ids: ['lc_014d187d99b31926f0c74af9d8'],
   *     lot_ids: ['lot_01efb5e19625fdc035bb0670df'],
   *   });
   * ```
   */
  updateInventoryReceipts(
    body: AnalyticsUpdateInventoryReceiptsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyzeInventoryReceiptsResponse> {
    return this._client.put('/v1/core/analytics/inventory-receipts', { body, ...options });
  }

  /**
   * Returns a single manufacturing analytics metric for a specified date range and
   * type.
   *
   * @example
   * ```ts
   * const analyzeManufacturingResponse =
   *   await client.core.analytics.updateManufacturing({
   *     end_date: '2026-05-10T00:23:00Z',
   *     start_date: '2026-05-10T00:00:00Z',
   *     type: 'production',
   *   });
   * ```
   */
  updateManufacturing(
    body: AnalyticsUpdateManufacturingParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeManufacturingResponse> {
    return this._client.put('/v1/core/analytics/manufacturing', { body, ...options });
  }

  /**
   * Returns manufacturing metrics for a current period compared against a comparison
   * period, including production, costs per unit, margin, quality, and labor
   * efficiency.
   *
   * @example
   * ```ts
   * const analyzeManufacturingBatchResponse =
   *   await client.core.analytics.updateManufacturingBatch({
   *     comparison_end_date: '2026-04-10T00:23:00Z',
   *     comparison_start_date: '2026-04-10T00:00:00Z',
   *     end_date: '2026-05-10T00:23:00Z',
   *     start_date: '2026-05-10T00:00:00Z',
   *     customer_group_ids: ['acgp_018e88072d1320808dc979cfac'],
   *     customer_ids: ['ac_0170df1ac58e4d24c66fc89f5f'],
   *     item_ids: ['it_0131e386ac683e8c29a71f6f1f'],
   *     product_line_ids: ['pl_01996357326a0d3f7b129542ea'],
   *   });
   * ```
   */
  updateManufacturingBatch(
    body: AnalyticsUpdateManufacturingBatchParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeManufacturingBatchResponse> {
    return this._client.put('/v1/core/analytics/manufacturing-batch', { body, ...options });
  }

  /**
   * Returns material inventory and demand analytics per material, including
   * quantities, unit groups, and supplier information.
   *
   * @example
   * ```ts
   * const analyzeMaterialsResponse =
   *   await client.core.analytics.updateMaterials({
   *     sales_order_ids: ['or_01d5034136c3ccc048abecc312'],
   *     supplier_ids: ['ac_0177902104bccac5fbb173cd96'],
   *   });
   * ```
   */
  updateMaterials(
    body: AnalyticsUpdateMaterialsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyzeMaterialsResponse> {
    return this._client.put('/v1/core/analytics/materials', { body, ...options });
  }

  /**
   * Returns time series data of new customer acquisitions over a specified date
   * range.
   *
   * @example
   * ```ts
   * const analyzeNewCustomersResponse =
   *   await client.core.analytics.updateNewCustomers({
   *     end_date: '2026-05-10T00:23:00Z',
   *     start_date: '2026-05-10T00:00:00Z',
   *     customer_group_ids: ['acgp_018e88072d1320808dc979cfac'],
   *     sales_rep_ids: ['acus_01ea9983ddb41dacc44ecf997c'],
   *   });
   * ```
   */
  updateNewCustomers(
    body: AnalyticsUpdateNewCustomersParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeNewCustomersResponse> {
    return this._client.put('/v1/core/analytics/new-customers', { body, ...options });
  }

  /**
   * Returns Overall Equipment Effectiveness (OEE) metrics by department, including
   * good units, waste units, and estimated runtime hours.
   *
   * @example
   * ```ts
   * const analyzeOeeResponse =
   *   await client.core.analytics.updateOee({
   *     end_date: '2026-05-10T00:23:00Z',
   *     start_date: '2026-05-10T00:00:00Z',
   *     department_ids: ['dp_01791c25ab59da4704cba61874'],
   *   });
   * ```
   */
  updateOee(body: AnalyticsUpdateOeeParams, options?: RequestOptions): APIPromise<AnalyzeOeeResponse> {
    return this._client.put('/v1/core/analytics/oee', { body, ...options });
  }

  /**
   * Returns open batch summaries grouped by scanning station.
   *
   * @example
   * ```ts
   * const analyzeOpenBatchesResponse =
   *   await client.core.analytics.updateOpenBatches({
   *     item_ids: ['it_0131e386ac683e8c29a71f6f1f'],
   *     product_line_ids: ['pl_01996357326a0d3f7b129542ea'],
   *   });
   * ```
   */
  updateOpenBatches(
    body: AnalyticsUpdateOpenBatchesParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeOpenBatchesResponse> {
    return this._client.put('/v1/core/analytics/open-batches', { body, ...options });
  }

  /**
   * Returns detailed order entry records.
   *
   * @example
   * ```ts
   * const analyzeOrdersResponse =
   *   await client.core.analytics.updateOrders({
   *     customer_group_ids: ['acgp_018e88072d1320808dc979cfac'],
   *     customer_ids: ['ac_0170df1ac58e4d24c66fc89f5f'],
   *     product_line_ids: ['pl_01996357326a0d3f7b129542ea'],
   *     sales_rep_ids: ['acus_01ea9983ddb41dacc44ecf997c'],
   *   });
   * ```
   */
  updateOrders(
    body: AnalyticsUpdateOrdersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyzeOrdersResponse> {
    return this._client.put('/v1/core/analytics/orders', { body, ...options });
  }

  /**
   * Returns aggregated production cost breakdowns by department and category.
   *
   * @example
   * ```ts
   * const analyzeProductionCostsResponse =
   *   await client.core.analytics.updateProductionCosts({
   *     category_ids: ['ic_01ae7bd7bfd21ca0ab81e1357e'],
   *     department_ids: ['dp_01791c25ab59da4704cba61874'],
   *     end_date: '2026-05-10T00:23:00Z',
   *     item_ids: ['it_0131e386ac683e8c29a71f6f1f'],
   *     product_line_ids: ['pl_01996357326a0d3f7b129542ea'],
   *     start_date: '2026-05-10T00:00:00Z',
   *   });
   * ```
   */
  updateProductionCosts(
    body: AnalyticsUpdateProductionCostsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyzeProductionCostsResponse> {
    return this._client.put('/v1/core/analytics/production-costs', { body, ...options });
  }

  /**
   * Returns yearly order totals broken down by quarter.
   *
   * @example
   * ```ts
   * const analyzeQuarterlyOrdersResponse =
   *   await client.core.analytics.updateQuarterlyOrders({
   *     customer_group_ids: ['acgp_018e88072d1320808dc979cfac'],
   *     customer_ids: ['ac_0170df1ac58e4d24c66fc89f5f'],
   *     item_ids: ['it_0131e386ac683e8c29a71f6f1f'],
   *     product_line_ids: ['pl_01996357326a0d3f7b129542ea'],
   *     sales_rep_ids: ['acus_01ea9983ddb41dacc44ecf997c'],
   *   });
   * ```
   */
  updateQuarterlyOrders(
    body: AnalyticsUpdateQuarterlyOrdersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyzeQuarterlyOrdersResponse> {
    return this._client.put('/v1/core/analytics/quarterly-orders', { body, ...options });
  }

  /**
   * Returns detailed sales entry records over a specified date range.
   *
   * @example
   * ```ts
   * const analyzeSalesResponse =
   *   await client.core.analytics.updateSales({
   *     end_date: '2026-05-10T00:23:00Z',
   *     start_date: '2026-05-10T00:00:00Z',
   *     customer_group_ids: ['acgp_018e88072d1320808dc979cfac'],
   *     customer_ids: ['ac_0170df1ac58e4d24c66fc89f5f'],
   *     product_line_ids: ['pl_01996357326a0d3f7b129542ea'],
   *     query: '6061',
   *     sales_rep_ids: ['acus_01ea9983ddb41dacc44ecf997c'],
   *   });
   * ```
   */
  updateSales(body: AnalyticsUpdateSalesParams, options?: RequestOptions): APIPromise<AnalyzeSalesResponse> {
    return this._client.put('/v1/core/analytics/sales', { body, ...options });
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
 * AnalyticsItem represents a lightweight item reference.
 */
export interface AnalyticsItem {
  /**
   * The item ID.
   */
  id: string;

  /**
   * The item description.
   */
  description: string | null;

  /**
   * Resource type identifier.
   */
  object: 'item';

  /**
   * The item SKU.
   */
  sku: string;
}

/**
 * AnalyticsLot represents a lot for analytics.
 */
export interface AnalyticsLot {
  /**
   * The lot ID.
   */
  id: string;

  /**
   * The lot number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'lot';
}

/**
 * AnalyticsRate represents a rate with numerator and denominator quantities.
 */
export interface AnalyticsRate {
  /**
   * Value with an associated unit.
   */
  denominator: LinesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  numerator: LinesAPI.Quantity | null;
}

/**
 * AnalyticsUnitGroup represents a unit group for analytics.
 */
export interface AnalyticsUnitGroup {
  /**
   * The unit group ID.
   */
  id: string;

  /**
   * The unit group name.
   */
  name: string;

  /**
   * The units in the group.
   */
  units: Array<AnalyticsUnitGroupUnit>;
}

/**
 * AnalyticsUnitGroupUnit represents a unit within a unit group.
 */
export interface AnalyticsUnitGroupUnit {
  /**
   * The unit ID.
   */
  id: string;

  /**
   * The unit abbreviation.
   */
  abbreviation: string;

  /**
   * The conversion factor.
   */
  conversion_factor: number;

  /**
   * Whether this is the base unit.
   */
  is_base_unit: boolean;

  /**
   * The unit name.
   */
  name: string;
}

/**
 * AnalyzeDeliveriesRequest is the request to analyze delivery performance.
 */
export interface AnalyzeDeliveriesRequest {
  /**
   * The end date for the analysis period.
   */
  end_date: string;

  /**
   * The start date for the analysis period.
   */
  start_date: string;

  /**
   * Optional customer group IDs to filter by.
   */
  customer_group_ids?: Array<string>;

  /**
   * Optional customer IDs to filter by.
   */
  customer_ids?: Array<string>;

  /**
   * Whether to override promised dates with the target delivery time.
   */
  override_promised_dates?: boolean;

  /**
   * Optional product line IDs to filter by.
   */
  product_line_ids?: Array<string>;

  /**
   * Optional sales rep IDs to filter by.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Optional target delivery time in days.
   */
  target_delivery_time_days?: number;
}

/**
 * AnalyzeDeliveriesResponse represents the response from the analyze deliveries
 * endpoint.
 */
export interface AnalyzeDeliveriesResponse {
  /**
   * DeliveryChartData contains chart data for delivery analytics.
   */
  chart_data: DeliveryChartData;

  /**
   * Resource type identifier.
   */
  object: 'analyze_deliveries_response';

  /**
   * DeliveryStatistics represents delivery performance statistics.
   */
  statistics: DeliveryStatistics;
}

/**
 * AnalyzeDemandForecastRequest is the request to generate a demand forecast.
 */
export interface AnalyzeDemandForecastRequest {
  /**
   * Optional number of months to forecast.
   */
  forecast_months?: number;

  /**
   * Optional number of months of historical data to use.
   */
  history_months?: number;

  /**
   * Optional item IDs to filter by.
   */
  item_ids?: Array<string>;

  /**
   * Optional product line IDs to filter by.
   */
  product_line_ids?: Array<string>;
}

/**
 * AnalyzeDemandForecastResponse represents the response from the demand forecast
 * endpoint.
 */
export interface AnalyzeDemandForecastResponse {
  /**
   * The fraction of the current month elapsed.
   */
  current_month_fraction: number;

  /**
   * The demand forecast rows.
   */
  data: Array<DemandForecastRow>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

/**
 * AnalyzeInventoryReceiptsRequest is the request to analyze inventory receipts.
 */
export interface AnalyzeInventoryReceiptsRequest {
  /**
   * Optional item IDs to filter by.
   */
  item_ids?: Array<string>;

  /**
   * Optional location IDs to filter by.
   */
  location_ids?: Array<string>;

  /**
   * Optional lot IDs to filter by.
   */
  lot_ids?: Array<string>;
}

/**
 * AnalyzeInventoryReceiptsResponse represents the response from the analyze
 * inventory receipts endpoint.
 */
export interface AnalyzeInventoryReceiptsResponse {
  /**
   * The inventory receipt summary data.
   */
  data: Array<InventoryReceiptSummaryEntry>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

/**
 * AnalyzeManufacturingBatchRequest is the request to analyze manufacturing metrics
 * with a comparison period.
 */
export interface AnalyzeManufacturingBatchRequest {
  /**
   * The end date for the comparison period.
   */
  comparison_end_date: string;

  /**
   * The start date for the comparison period.
   */
  comparison_start_date: string;

  /**
   * The end date for the current analysis period.
   */
  end_date: string;

  /**
   * The start date for the current analysis period.
   */
  start_date: string;

  /**
   * Optional customer group IDs to filter by.
   */
  customer_group_ids?: Array<string>;

  /**
   * Optional customer IDs to filter by.
   */
  customer_ids?: Array<string>;

  /**
   * Optional item IDs to filter by.
   */
  item_ids?: Array<string>;

  /**
   * Optional product line IDs to filter by.
   */
  product_line_ids?: Array<string>;
}

/**
 * AnalyzeManufacturingBatchResponse represents the response from the analyze
 * manufacturing batch endpoint.
 */
export interface AnalyzeManufacturingBatchResponse {
  /**
   * ManufacturingMetrics represents manufacturing performance metrics for a period.
   */
  comparison: ManufacturingMetrics;

  /**
   * ManufacturingMetrics represents manufacturing performance metrics for a period.
   */
  current: ManufacturingMetrics;

  /**
   * Resource type identifier.
   */
  object: 'analyze_manufacturing_batch_response';
}

/**
 * AnalyzeManufacturingRequest is the request to analyze a single manufacturing
 * metric.
 */
export interface AnalyzeManufacturingRequest {
  /**
   * The end date for the analysis period.
   */
  end_date: string;

  /**
   * The start date for the analysis period.
   */
  start_date: string;

  /**
   * The type of manufacturing analytics to compute.
   */
  type: string;
}

/**
 * AnalyzeManufacturingResponse represents the response from the analyze
 * manufacturing endpoint.
 */
export interface AnalyzeManufacturingResponse {
  /**
   * Resource type identifier.
   */
  object: 'analyze_manufacturing_response';

  /**
   * The computed manufacturing value.
   */
  value: number;
}

/**
 * AnalyzeMaterialsRequest is the request to analyze material inventory and demand.
 */
export interface AnalyzeMaterialsRequest {
  /**
   * Optional sales order IDs to filter by.
   */
  sales_order_ids?: Array<string>;

  /**
   * Optional supplier IDs to filter by.
   */
  supplier_ids?: Array<string>;
}

/**
 * AnalyzeMaterialsResponse represents the response from the analyze materials
 * endpoint.
 */
export interface AnalyzeMaterialsResponse {
  /**
   * The material analytics data.
   */
  data: Array<MaterialAnalyticsEntry>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

/**
 * AnalyzeNewCustomersRequest is the request to analyze new customer acquisition.
 */
export interface AnalyzeNewCustomersRequest {
  /**
   * The end date for the analysis period.
   */
  end_date: string;

  /**
   * The start date for the analysis period.
   */
  start_date: string;

  /**
   * Optional customer group IDs to filter by.
   */
  customer_group_ids?: Array<string>;

  /**
   * Optional sales rep IDs to filter by.
   */
  sales_rep_ids?: Array<string>;
}

/**
 * AnalyzeNewCustomersResponse represents the response from the analyze new
 * customers endpoint.
 */
export interface AnalyzeNewCustomersResponse {
  /**
   * NewCustomersData represents new customer time series data.
   */
  new_customers: NewCustomersData;

  /**
   * Resource type identifier.
   */
  object: 'analyze_new_customers_response';
}

/**
 * AnalyzeOeeRequest is the request to analyze Overall Equipment Effectiveness
 * (OEE).
 */
export interface AnalyzeOeeRequest {
  /**
   * The end date for the analysis period.
   */
  end_date: string;

  /**
   * The start date for the analysis period.
   */
  start_date: string;

  /**
   * Optional department IDs to filter by.
   */
  department_ids?: Array<string>;
}

/**
 * AnalyzeOeeResponse represents the response from the analyze OEE endpoint.
 */
export interface AnalyzeOeeResponse {
  /**
   * The OEE data by department.
   */
  departments: Array<OeeDepartment>;

  /**
   * Resource type identifier.
   */
  object: 'analyze_oee_response';
}

/**
 * Request to analyze open batches.
 */
export interface AnalyzeOpenBatchesRequest {
  /**
   * Item IDs to filter by.
   */
  item_ids: Array<string>;

  /**
   * Product line IDs to filter by.
   */
  product_line_ids: Array<string>;
}

/**
 * AnalyzeOpenBatchesResponse represents the response from the analyze open batches
 * endpoint. Uses the existing OpenBatchSummary type from batch_resource.go.
 */
export interface AnalyzeOpenBatchesResponse {
  /**
   * The open batch summary data.
   */
  data: Array<OperationsAnalyticsAPI.OpenBatchSummary>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

/**
 * AnalyzeOrdersRequest is the request to analyze order data.
 */
export interface AnalyzeOrdersRequest {
  /**
   * Optional customer group IDs to filter by.
   */
  customer_group_ids?: Array<string>;

  /**
   * Optional customer IDs to filter by.
   */
  customer_ids?: Array<string>;

  /**
   * Optional product line IDs to filter by.
   */
  product_line_ids?: Array<string>;

  /**
   * Optional sales rep IDs to filter by.
   */
  sales_rep_ids?: Array<string>;
}

/**
 * AnalyzeOrdersResponse represents the response from the analyze orders endpoint.
 */
export interface AnalyzeOrdersResponse {
  /**
   * The order entry data.
   */
  data: Array<OrderEntry>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

/**
 * AnalyzeProductionCostsRequest is the request to analyze production costs.
 */
export interface AnalyzeProductionCostsRequest {
  /**
   * Optional category IDs to filter by.
   */
  category_ids?: Array<string>;

  /**
   * Optional department IDs to filter by.
   */
  department_ids?: Array<string>;

  /**
   * Optional end date for the analysis period.
   */
  end_date?: string;

  /**
   * Optional item IDs to filter by.
   */
  item_ids?: Array<string>;

  /**
   * Optional product line IDs to filter by.
   */
  product_line_ids?: Array<string>;

  /**
   * Optional start date for the analysis period.
   */
  start_date?: string;
}

/**
 * AnalyzeProductionCostsResponse represents the response from the analyze
 * production costs endpoint.
 */
export interface AnalyzeProductionCostsResponse {
  /**
   * The production cost data.
   */
  data: Array<ProductionCostItem>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

/**
 * AnalyzeQuarterlyOrdersRequest is the request to analyze quarterly order data.
 */
export interface AnalyzeQuarterlyOrdersRequest {
  /**
   * Optional customer group IDs to filter by.
   */
  customer_group_ids?: Array<string>;

  /**
   * Optional customer IDs to filter by.
   */
  customer_ids?: Array<string>;

  /**
   * Optional item IDs to filter by.
   */
  item_ids?: Array<string>;

  /**
   * Optional product line IDs to filter by.
   */
  product_line_ids?: Array<string>;

  /**
   * Optional sales rep IDs to filter by.
   */
  sales_rep_ids?: Array<string>;
}

/**
 * AnalyzeQuarterlyOrdersResponse represents the response from the analyze
 * quarterly orders endpoint.
 */
export interface AnalyzeQuarterlyOrdersResponse {
  /**
   * The yearly sales data keyed by year string.
   */
  data: { [key: string]: AnalyzeQuarterlyOrdersResponse.Data };

  /**
   * Resource type identifier.
   */
  object: 'analyze_quarterly_orders_response';
}

export namespace AnalyzeQuarterlyOrdersResponse {
  /**
   * QuarterlySalesData represents sales data broken down by quarter.
   */
  export interface Data {
    /**
     * First quarter total.
     */
    q1: number;

    /**
     * Second quarter total.
     */
    q2: number;

    /**
     * Third quarter total.
     */
    q3: number;

    /**
     * Fourth quarter total.
     */
    q4: number;

    /**
     * Annual total.
     */
    total: number;
  }
}

/**
 * AnalyzeSalesRequest is the request to analyze sales data over a date range.
 */
export interface AnalyzeSalesRequest {
  /**
   * The end date for the analysis period.
   */
  end_date: string;

  /**
   * The start date for the analysis period.
   */
  start_date: string;

  /**
   * Optional customer group IDs to filter by.
   */
  customer_group_ids?: Array<string>;

  /**
   * Optional customer IDs to filter by.
   */
  customer_ids?: Array<string>;

  /**
   * Optional product line IDs to filter by.
   */
  product_line_ids?: Array<string>;

  /**
   * Optional search query.
   */
  query?: string;

  /**
   * Optional sales rep IDs to filter by.
   */
  sales_rep_ids?: Array<string>;
}

/**
 * AnalyzeSalesResponse represents the response from the analyze sales endpoint.
 */
export interface AnalyzeSalesResponse {
  /**
   * The sales entry data.
   */
  data: Array<SalesEntry>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

/**
 * AnalyzeWeeksOfSalesResponse represents the response from the weeks-of-sales
 * analytics endpoint.
 */
export interface AnalyzeWeeksOfSalesResponse {
  /**
   * The total count.
   */
  count: number;

  /**
   * The weeks-of-sales items.
   */
  data: Array<WeeksOfSalesItem>;

  /**
   * Resource type identifier.
   */
  object: 'analyze_weeks_of_sales_response';
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
 * ChartData represents data for a chart visualization.
 */
export interface ChartData {
  /**
   * The chart data points.
   */
  data: Array<Coordinate>;

  /**
   * The chart name/label.
   */
  name: string;

  /**
   * The chart type.
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
 * Coordinate represents a single data point on a chart.
 */
export interface Coordinate {
  /**
   * The x-axis value.
   */
  x: number;

  /**
   * The y-axis value.
   */
  y: number;
}

/**
 * CostBreakdown represents a detailed cost breakdown with sub-quantities.
 */
export interface CostBreakdown {
  /**
   * Value with an associated unit.
   */
  labor: LinesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  materials: LinesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  overhead: LinesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity: LinesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  time: LinesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  total: LinesAPI.Quantity | null;
}

/**
 * DateTimeCoordinate represents a time-value data point.
 */
export interface DateTimeCoordinate {
  /**
   * The timestamp.
   */
  x: string;

  /**
   * The value.
   */
  y: number;
}

/**
 * DeliveryChartData contains chart data for delivery analytics.
 */
export interface DeliveryChartData {
  /**
   * ChartData represents data for a chart visualization.
   */
  average_delivery_time: ChartData;

  /**
   * ChartData represents data for a chart visualization.
   */
  average_first_shipment_time: ChartData;

  /**
   * ChartData represents data for a chart visualization.
   */
  on_time_delivery: ChartData;
}

/**
 * DeliveryStatistics represents delivery performance statistics.
 */
export interface DeliveryStatistics {
  /**
   * Average time to completion in days.
   */
  average_time_to_completion: number | null;

  /**
   * Average time to first shipment in days.
   */
  average_time_to_first_shipment: number | null;

  /**
   * On-time delivery percentage.
   */
  on_time_delivery_percentage: number | null;

  /**
   * On-time first shipment percentage.
   */
  on_time_first_shipment_percentage: number | null;

  /**
   * Number of orders completed within the promise date.
   */
  orders_completed_within_promise_date: number;

  /**
   * Number of orders partially fulfilled within the promise date.
   */
  orders_partially_fulfilled_in_promise_date: number;

  /**
   * Number of orders with completion.
   */
  orders_with_completion: number;

  /**
   * Number of orders with first shipment.
   */
  orders_with_first_shipment: number;

  /**
   * Number of orders with a promise date.
   */
  orders_with_promise_date: number;

  /**
   * Total number of orders.
   */
  total_orders: number;
}

/**
 * DemandForecastForecastPoint represents a forecasted data point with confidence
 * bounds.
 */
export interface DemandForecastForecastPoint {
  /**
   * The date.
   */
  date: string;

  /**
   * The forecast value.
   */
  forecast: number;

  /**
   * The lower confidence bound.
   */
  lower_bound: number;

  /**
   * The upper confidence bound.
   */
  upper_bound: number;
}

/**
 * DemandForecastPoint represents a historical demand data point.
 */
export interface DemandForecastPoint {
  /**
   * The date.
   */
  date: string;

  /**
   * The demand value.
   */
  demand: number;
}

/**
 * DemandForecastRow represents a single item's demand forecast data.
 */
export interface DemandForecastRow {
  /**
   * The currency.
   */
  currency: string;

  /**
   * The current month demand.
   */
  current_month_demand: number;

  /**
   * The current month revenue.
   */
  current_month_revenue: number;

  /**
   * The current month sales.
   */
  current_month_sales: number;

  /**
   * The forecasted demand data points.
   */
  forecast: Array<DemandForecastForecastPoint>;

  /**
   * The historical demand data points.
   */
  history: Array<DemandForecastPoint>;

  /**
   * The item ID.
   */
  item_id: string;

  /**
   * The product description.
   */
  product_description: string | null;

  /**
   * The product line ID.
   */
  product_line_id: string | null;

  /**
   * The product SKU.
   */
  product_sku: string;

  /**
   * The forecasted revenue data points.
   */
  revenue_forecast: Array<DemandForecastForecastPoint>;

  /**
   * The historical revenue data points.
   */
  revenue_history: Array<RevenueForecastPoint>;

  /**
   * The forecasted sales data points.
   */
  sales_forecast: Array<DemandForecastForecastPoint>;

  /**
   * The historical sales data points.
   */
  sales_history: Array<RevenueForecastPoint>;

  /**
   * The unit of measure.
   */
  unit: string;
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
  location: ActionsAPI.Location | null;

  /**
   * List represents a paginated list of resources.
   */
  machines: ActionsAPI.ListMachine | null;

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
  scanning_stations: ActionsAPI.ListScanningStation | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * Entity is a polymorphic reference to any resource in the system.
 */
export interface Entity {
  /**
   * Unique identifier for the entity.
   */
  id: string;

  /**
   * Secondary human-readable identifier (e.g. email address, username, redacted API
   * key value).
   */
  handle: string | null;

  /**
   * Human-readable display name for the entity (e.g. a user's full name, a sales
   * order number).
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'entity';

  /**
   * The resource kind that this entity references (e.g. "user", "customer",
   * "sales_order").
   */
  type:
    | 'account'
    | 'actor'
    | 'entity'
    | 'user'
    | 'address'
    | 'api_key'
    | 'created_api_key'
    | 'refresh_token'
    | 'list'
    | 'sandbox'
    | 'registration_session'
    | 'pricing_plan'
    | 'plan_change'
    | 'enterprise_inquiry'
    | 'request_log'
    | 'audit_event'
    | 'audit_field_change'
    | 'role'
    | 'unit'
    | 'account_affiliation'
    | 'agent_definition'
    | 'available_tool'
    | 'agent_definition_tool'
    | 'agent_account_status'
    | 'agent_run'
    | 'agent_action'
    | 'agent_run_step'
    | 'agent_token_usage'
    | 'agent_memory'
    | 'agent_alert'
    | 'tool_group'
    | 'payment_term'
    | 'shipping_term'
    | 'quantity'
    | 'account_group'
    | 'account_status'
    | 'geolocation'
    | 'account_user'
    | 'department'
    | 'account_integration'
    | 'account_price'
    | 'product_line'
    | 'item_category'
    | 'attribute'
    | 'rate'
    | 'account_group_product_line_access'
    | 'sales_target'
    | 'adjustment_type'
    | 'account_branding'
    | 'account_portal'
    | 'account_logo_url'
    | 'public_account'
    | 'property'
    | 'carrier'
    | 'service_level'
    | 'item'
    | 'item_inventory'
    | 'product'
    | 'batch'
    | 'batch_flow_node'
    | 'scanning_consumption'
    | 'open_batch_summary'
    | 'scanning_production_step_info'
    | 'scanning_station'
    | 'production_step'
    | 'production_run'
    | 'machine'
    | 'child_account'
    | 'unit_group'
    | 'unit_group_unit'
    | 'consumption'
    | 'customer_product_line_access'
    | 'customer'
    | 'frequently_ordered_product'
    | 'priority'
    | 'delivery'
    | 'delivery_line'
    | 'sales_order'
    | 'sales_order_line'
    | 'sales_order_type'
    | 'location'
    | 'location_type'
    | 'lot'
    | 'email_log'
    | 'inventory_change_log'
    | 'invoice'
    | 'invoice_summary'
    | 'invoice_line'
    | 'invoice_allocation'
    | 'invoice_for_payment'
    | 'shipment'
    | 'shipment_summary'
    | 'shipment_line'
    | 'shipping_case'
    | 'shipping_case_label_url'
    | 'settlement'
    | 'settlement_summary'
    | 'role_permission'
    | 'registration_flow'
    | 'registration_flow_option'
    | 'transaction'
    | 'transaction_summary'
    | 'transaction_method'
    | 'transaction_type'
    | 'transaction_allocation'
    | 'usage_item'
    | 'agent_token_detail'
    | 'account_usage_response'
    | 'subscription_info'
    | 'billing_portal_session_response'
    | 'switch_plan_response'
    | 'ensure_billing_customer_response'
    | 'spending_cap_response'
    | 'agent_spend_info'
    | 'webhook_response'
    | 'address_suggestion'
    | 'address_components'
    | 'address_details_result'
    | 'validated_address'
    | 'plan_limit'
    | 'plan_change_proration'
    | 'plan_change_line_item'
    | 'setup_billing_response'
    | 'confirm_payment_response'
    | 'oauth_response'
    | 'oauth_status_response'
    | 'stripe_publishable_key'
    | 'stripe_status'
    | 'healthcheck'
    | 'agent_definition_config'
    | 'trigger_config'
    | 'customer_contact_info'
    | 'customer_freight_preferences'
    | 'customer_defaults'
    | 'customer_notification_preferences'
    | 'order_discount'
    | 'sales_order_status'
    | 'material'
    | 'supplier_material'
    | 'part'
    | 'permission_group'
    | 'permission'
    | 'pick'
    | 'pick_line'
    | 'product_type'
    | 'production'
    | 'production_flow'
    | 'map'
    | 'purchase_order'
    | 'purchase_order_line'
    | 'supplier'
    | 'supplier_summary'
    | 'receivable_entry'
    | 'receiving_order'
    | 'receiving_order_line'
    | 'email_contact'
    | 'allocation_entry'
    | 'open_credit_entry'
    | 'volume_discount'
    | 'volume_discount_tier'
    | 'analyze_deliveries_response'
    | 'analyze_manufacturing_response'
    | 'analyze_manufacturing_batch_response'
    | 'analyze_quarterly_orders_response'
    | 'analyze_new_customers_response'
    | 'analyze_oee_response'
    | 'catalog_product_line'
    | 'catalog_category'
    | 'catalog_product'
    | 'catalog_property'
    | 'catalog_attribute'
    | 'dc_location'
    | 'edi_run'
    | 'inventory_item'
    | 'analyze_weeks_of_sales_response'
    | 'bulk_reconcile_items_response'
    | 'sys_property'
    | 'sys_property_type'
    | 'sys_property_value'
    | 'territory'
    | 'tenancy'
    | 'checkout_session'
    | 'estimate_rate_result'
    | 'rate_shop_option'
    | 'rate_shop_result'
    | 'owner'
    | 'message'
    | 'account_plan';
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
 * InventoryReceiptSummaryEntry represents a summary of inventory receipts.
 */
export interface InventoryReceiptSummaryEntry {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  holder_account: MemoriesAPI.Entity | null;

  /**
   * Value with an associated unit.
   */
  inventory_value: LinesAPI.Quantity | null;

  /**
   * AnalyticsItem represents a lightweight item reference.
   */
  item: AnalyticsItem;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  location: MemoriesAPI.Entity | null;

  /**
   * AnalyticsLot represents a lot for analytics.
   */
  lot: AnalyticsLot | null;

  /**
   * The date of the newest receipt.
   */
  newest_receipt_at: string | null;

  /**
   * The date of the oldest receipt.
   */
  oldest_receipt_at: string | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  owner_account: MemoriesAPI.Entity | null;

  /**
   * Value with an associated unit.
   */
  remaining_quantity: LinesAPI.Quantity | null;

  /**
   * AnalyticsRate represents a rate with numerator and denominator quantities.
   */
  weighted_average_unit_cost: AnalyticsRate;
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
export interface ListConsumption {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.Consumption>;

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
  data: Array<ActionsAPI.Location>;

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
  data: Array<ActionsAPI.Machine>;

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
  data: Array<ActionsAPI.ProductionStep>;

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
export interface ListScanningStation {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.ScanningStation>;

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
  children: ActionsAPI.ListLocation | null;

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
  parent: ActionsAPI.Location | null;

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
  department: ActionsAPI.Department | null;

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
 * ManufacturingMetrics represents manufacturing performance metrics for a period.
 */
export interface ManufacturingMetrics {
  /**
   * The costs per unit metric value.
   */
  costs_per_unit: number;

  /**
   * The labor efficiency metric value.
   */
  labor_efficiency: number;

  /**
   * The margin metric value.
   */
  margin: number;

  /**
   * The production metric value.
   */
  production: number;

  /**
   * The quality metric value.
   */
  quality: number;
}

/**
 * MaterialAnalyticsEntry represents a single material analytics entry.
 */
export interface MaterialAnalyticsEntry {
  /**
   * Unique identifier for this entry.
   */
  id: string;

  /**
   * The description.
   */
  description: string | null;

  /**
   * The item ID.
   */
  item_id: string;

  /**
   * Value with an associated unit.
   */
  lead_time: LinesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  order_point: LinesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity_in_demand: LinesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity_in_inventory: LinesAPI.Quantity | null;

  /**
   * The SKU.
   */
  sku: string;

  /**
   * The supplier names.
   */
  supplier_names: Array<string>;

  /**
   * The supplier part numbers.
   */
  supplier_part_numbers: Array<string>;

  /**
   * AnalyticsUnitGroup represents a unit group for analytics.
   */
  unit_group: AnalyticsUnitGroup;
}

/**
 * NewCustomersData represents new customer time series data.
 */
export interface NewCustomersData {
  /**
   * The data points.
   */
  data: Array<DateTimeCoordinate>;

  /**
   * The label for the data series.
   */
  label: string;
}

/**
 * OeeDepartment represents OEE metrics for a single department.
 */
export interface OeeDepartment {
  /**
   * The department ID.
   */
  department_id: string;

  /**
   * The department name.
   */
  department_name: string;

  /**
   * The estimated runtime in hours.
   */
  estimated_runtime_hours: number;

  /**
   * The number of good units produced.
   */
  good_units: number;

  /**
   * The number of seconds units.
   */
  seconds_units: number;

  /**
   * The number of waste units.
   */
  waste_units: number;
}

/**
 * Aggregated summary of open batches.
 */
export interface OpenBatchSummary {
  /**
   * Count of open batches.
   */
  count: string;

  /**
   * Department name.
   */
  department_name: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: LinesAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'open_batch_summary';

  /**
   * Scanning station resource.
   */
  scanning_station: ActionsAPI.ScanningStation | null;

  /**
   * Unit abbreviation.
   */
  unit: string;
}

/**
 * OrderEntry represents a single order entry for analytics.
 */
export interface OrderEntry {
  /**
   * Unique identifier for this entry.
   */
  id: string;

  /**
   * The category name.
   */
  category_name: string;

  /**
   * The date the order was completed.
   */
  completed_at: string | null;

  /**
   * The date the customer was created.
   */
  customer_created_at: string;

  /**
   * The customer group name.
   */
  customer_group_name: string | null;

  /**
   * The customer ID.
   */
  customer_id: string;

  /**
   * The customer name.
   */
  customer_name: string;

  /**
   * The customer number.
   */
  customer_number: string;

  /**
   * The customer purchase order number.
   */
  customer_po: string | null;

  /**
   * The customer type group ID.
   */
  customer_type_group_id: string | null;

  /**
   * The order discount code.
   */
  discount_code: string | null;

  /**
   * The date of the first shipment.
   */
  first_ship_at: string | null;

  /**
   * The date the order was issued.
   */
  issued_at: string | null;

  /**
   * The item ID.
   */
  item_id: string;

  /**
   * The order ID.
   */
  order_id: string;

  /**
   * The order number.
   */
  order_number: string;

  /**
   * The parent customer ID.
   */
  parent_customer_id: string | null;

  /**
   * The product description.
   */
  product_description: string | null;

  /**
   * The product line name.
   */
  product_line: string | null;

  /**
   * The product line ID.
   */
  product_line_id: string | null;

  /**
   * The product SKU.
   */
  product_sku: string;

  /**
   * The product ID.
   */
  product_type_id: string;

  /**
   * The promised delivery date.
   */
  promised_at: string | null;

  /**
   * The quantity back ordered.
   */
  quantity_back_ordered: number;

  /**
   * The quantity invoiced.
   */
  quantity_invoiced: number;

  /**
   * The quantity ordered.
   */
  quantity_ordered: number;

  /**
   * The sales representative ID.
   */
  sales_rep_id: string | null;

  /**
   * The sales representative username.
   */
  sales_rep_username: string | null;

  /**
   * The ship-to city.
   */
  ship_to_city: string | null;

  /**
   * The ship-to country.
   */
  ship_to_country: string | null;

  /**
   * The ship-to state.
   */
  ship_to_state: string | null;

  /**
   * The ship-to zipcode.
   */
  ship_to_zipcode: string | null;

  /**
   * The total back ordered amount.
   */
  total_back_ordered: number;

  /**
   * The total cost.
   */
  total_cost: number;

  /**
   * The total invoiced amount.
   */
  total_invoiced: number;

  /**
   * The total ordered amount.
   */
  total_ordered: number;

  /**
   * The total profit.
   */
  total_profit: number;

  /**
   * The unit of measure.
   */
  unit: string;

  /**
   * The unit cost.
   */
  unit_cost: number;

  /**
   * The unit price.
   */
  unit_price: number;

  /**
   * The unit profit.
   */
  unit_profit: number;
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
 * ProductionCostItem represents an aggregated production cost entry.
 */
export interface ProductionCostItem {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  category: MemoriesAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  department: MemoriesAPI.Entity | null;

  /**
   * CostBreakdown represents a detailed cost breakdown with sub-quantities.
   */
  productive_costs: CostBreakdown;

  /**
   * CostBreakdown represents a detailed cost breakdown with sub-quantities.
   */
  seconds_costs: CostBreakdown;

  /**
   * CostBreakdown represents a detailed cost breakdown with sub-quantities.
   */
  total_costs: CostBreakdown;

  /**
   * CostBreakdown represents a detailed cost breakdown with sub-quantities.
   */
  waste_costs: CostBreakdown;
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
  consumptions: ActionsAPI.ListConsumption | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: ActionsAPI.Department | null;

  /**
   * List represents a paginated list of resources.
   */
  in_steps: ActionsAPI.ListProductionStep | null;

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
  machines: ActionsAPI.ListMachine | null;

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
  out_steps: ActionsAPI.ListProductionStep | null;

  /**
   * Rate resource.
   */
  overhead_rate: LinesAPI.Rate | null;

  /**
   * Production output of a production step.
   */
  production: ActionsAPI.ProductionOutput | null;

  /**
   * Scanning station resource.
   */
  scanning_station: ActionsAPI.ScanningStation | null;

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
 * RevenueForecastPoint represents a historical revenue data point.
 */
export interface RevenueForecastPoint {
  /**
   * The date.
   */
  date: string;

  /**
   * The revenue value.
   */
  revenue: number;
}

/**
 * SalesEntry represents a single sales transaction entry for analytics.
 */
export interface SalesEntry {
  /**
   * Unique identifier for this entry.
   */
  id: string;

  /**
   * The category name.
   */
  category_name: string;

  /**
   * The date the order was completed.
   */
  completed_at: string | null;

  /**
   * The date the customer was created.
   */
  customer_created_at: string;

  /**
   * The customer group name.
   */
  customer_group_name: string | null;

  /**
   * The customer ID.
   */
  customer_id: string;

  /**
   * The customer name.
   */
  customer_name: string;

  /**
   * The customer number.
   */
  customer_number: string;

  /**
   * The customer purchase order number.
   */
  customer_po: string | null;

  /**
   * The customer type group ID.
   */
  customer_type_group_id: string | null;

  /**
   * The order discount code.
   */
  discount_code: string | null;

  /**
   * The date of the first shipment.
   */
  first_ship_at: string | null;

  /**
   * The invoice ID.
   */
  invoice_id: string;

  /**
   * The invoice number.
   */
  invoice_number: string;

  /**
   * The date the invoice was created.
   */
  invoiced_at: string;

  /**
   * The date the order was issued.
   */
  issued_at: string | null;

  /**
   * The item ID.
   */
  item_id: string;

  /**
   * The order ID.
   */
  order_id: string;

  /**
   * The order number.
   */
  order_number: string;

  /**
   * The parent customer ID.
   */
  parent_customer_id: string | null;

  /**
   * The product description.
   */
  product_description: string | null;

  /**
   * The product line name.
   */
  product_line: string | null;

  /**
   * The product line ID.
   */
  product_line_id: string | null;

  /**
   * The product SKU.
   */
  product_sku: string;

  /**
   * The product ID.
   */
  product_type_id: string;

  /**
   * The promised delivery date.
   */
  promised_at: string | null;

  /**
   * The quantity invoiced.
   */
  quantity_invoiced: number;

  /**
   * The sales representative ID.
   */
  sales_rep_id: string | null;

  /**
   * The sales representative username.
   */
  sales_rep_username: string | null;

  /**
   * The ship-to city.
   */
  ship_to_city: string | null;

  /**
   * The ship-to country.
   */
  ship_to_country: string | null;

  /**
   * The ship-to state.
   */
  ship_to_state: string | null;

  /**
   * The ship-to zipcode.
   */
  ship_to_zipcode: string | null;

  /**
   * The total cost.
   */
  total_cost: number;

  /**
   * The total invoiced amount.
   */
  total_invoiced: number;

  /**
   * The total profit.
   */
  total_profit: number;

  /**
   * The unit of measure.
   */
  unit: string;

  /**
   * The unit cost.
   */
  unit_cost: number;

  /**
   * The unit price.
   */
  unit_price: number;

  /**
   * The unit profit.
   */
  unit_profit: number;
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
  department: ActionsAPI.Department | null;

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
  production_steps: ActionsAPI.ListProductionStep | null;

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

/**
 * WeeksOfSalesItem represents a single product line's weeks-of-sales metrics.
 */
export interface WeeksOfSalesItem {
  /**
   * Value with an associated unit.
   */
  average_sales_quantity: LinesAPI.Quantity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  product_line: MemoriesAPI.Entity | null;

  /**
   * Value with an associated unit.
   */
  quantity_on_hand: LinesAPI.Quantity | null;

  /**
   * The number of weeks of inventory on hand.
   */
  weeks_of_sales: number;
}

export interface AnalyticsRetrieveWeeksOfSalesParams {
  /**
   * The number of weeks to use for the sales period. Defaults to 4, minimum 1.
   */
  period_in_weeks?: number;
}

export interface AnalyticsUpdateDeliveriesParams {
  /**
   * The end date for the analysis period.
   */
  end_date: string;

  /**
   * The start date for the analysis period.
   */
  start_date: string;

  /**
   * Optional customer group IDs to filter by.
   */
  customer_group_ids?: Array<string>;

  /**
   * Optional customer IDs to filter by.
   */
  customer_ids?: Array<string>;

  /**
   * Whether to override promised dates with the target delivery time.
   */
  override_promised_dates?: boolean;

  /**
   * Optional product line IDs to filter by.
   */
  product_line_ids?: Array<string>;

  /**
   * Optional sales rep IDs to filter by.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Optional target delivery time in days.
   */
  target_delivery_time_days?: number;
}

export interface AnalyticsUpdateDemandForecastParams {
  /**
   * Optional number of months to forecast.
   */
  forecast_months?: number;

  /**
   * Optional number of months of historical data to use.
   */
  history_months?: number;

  /**
   * Optional item IDs to filter by.
   */
  item_ids?: Array<string>;

  /**
   * Optional product line IDs to filter by.
   */
  product_line_ids?: Array<string>;
}

export interface AnalyticsUpdateInventoryReceiptsParams {
  /**
   * Optional item IDs to filter by.
   */
  item_ids?: Array<string>;

  /**
   * Optional location IDs to filter by.
   */
  location_ids?: Array<string>;

  /**
   * Optional lot IDs to filter by.
   */
  lot_ids?: Array<string>;
}

export interface AnalyticsUpdateManufacturingParams {
  /**
   * The end date for the analysis period.
   */
  end_date: string;

  /**
   * The start date for the analysis period.
   */
  start_date: string;

  /**
   * The type of manufacturing analytics to compute.
   */
  type: string;
}

export interface AnalyticsUpdateManufacturingBatchParams {
  /**
   * The end date for the comparison period.
   */
  comparison_end_date: string;

  /**
   * The start date for the comparison period.
   */
  comparison_start_date: string;

  /**
   * The end date for the current analysis period.
   */
  end_date: string;

  /**
   * The start date for the current analysis period.
   */
  start_date: string;

  /**
   * Optional customer group IDs to filter by.
   */
  customer_group_ids?: Array<string>;

  /**
   * Optional customer IDs to filter by.
   */
  customer_ids?: Array<string>;

  /**
   * Optional item IDs to filter by.
   */
  item_ids?: Array<string>;

  /**
   * Optional product line IDs to filter by.
   */
  product_line_ids?: Array<string>;
}

export interface AnalyticsUpdateMaterialsParams {
  /**
   * Optional sales order IDs to filter by.
   */
  sales_order_ids?: Array<string>;

  /**
   * Optional supplier IDs to filter by.
   */
  supplier_ids?: Array<string>;
}

export interface AnalyticsUpdateNewCustomersParams {
  /**
   * The end date for the analysis period.
   */
  end_date: string;

  /**
   * The start date for the analysis period.
   */
  start_date: string;

  /**
   * Optional customer group IDs to filter by.
   */
  customer_group_ids?: Array<string>;

  /**
   * Optional sales rep IDs to filter by.
   */
  sales_rep_ids?: Array<string>;
}

export interface AnalyticsUpdateOeeParams {
  /**
   * The end date for the analysis period.
   */
  end_date: string;

  /**
   * The start date for the analysis period.
   */
  start_date: string;

  /**
   * Optional department IDs to filter by.
   */
  department_ids?: Array<string>;
}

export interface AnalyticsUpdateOpenBatchesParams {
  /**
   * Item IDs to filter by.
   */
  item_ids: Array<string>;

  /**
   * Product line IDs to filter by.
   */
  product_line_ids: Array<string>;
}

export interface AnalyticsUpdateOrdersParams {
  /**
   * Optional customer group IDs to filter by.
   */
  customer_group_ids?: Array<string>;

  /**
   * Optional customer IDs to filter by.
   */
  customer_ids?: Array<string>;

  /**
   * Optional product line IDs to filter by.
   */
  product_line_ids?: Array<string>;

  /**
   * Optional sales rep IDs to filter by.
   */
  sales_rep_ids?: Array<string>;
}

export interface AnalyticsUpdateProductionCostsParams {
  /**
   * Optional category IDs to filter by.
   */
  category_ids?: Array<string>;

  /**
   * Optional department IDs to filter by.
   */
  department_ids?: Array<string>;

  /**
   * Optional end date for the analysis period.
   */
  end_date?: string;

  /**
   * Optional item IDs to filter by.
   */
  item_ids?: Array<string>;

  /**
   * Optional product line IDs to filter by.
   */
  product_line_ids?: Array<string>;

  /**
   * Optional start date for the analysis period.
   */
  start_date?: string;
}

export interface AnalyticsUpdateQuarterlyOrdersParams {
  /**
   * Optional customer group IDs to filter by.
   */
  customer_group_ids?: Array<string>;

  /**
   * Optional customer IDs to filter by.
   */
  customer_ids?: Array<string>;

  /**
   * Optional item IDs to filter by.
   */
  item_ids?: Array<string>;

  /**
   * Optional product line IDs to filter by.
   */
  product_line_ids?: Array<string>;

  /**
   * Optional sales rep IDs to filter by.
   */
  sales_rep_ids?: Array<string>;
}

export interface AnalyticsUpdateSalesParams {
  /**
   * The end date for the analysis period.
   */
  end_date: string;

  /**
   * The start date for the analysis period.
   */
  start_date: string;

  /**
   * Optional customer group IDs to filter by.
   */
  customer_group_ids?: Array<string>;

  /**
   * Optional customer IDs to filter by.
   */
  customer_ids?: Array<string>;

  /**
   * Optional product line IDs to filter by.
   */
  product_line_ids?: Array<string>;

  /**
   * Optional search query.
   */
  query?: string;

  /**
   * Optional sales rep IDs to filter by.
   */
  sales_rep_ids?: Array<string>;
}

export declare namespace Analytics {
  export {
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
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
    type Attribute as Attribute,
    type ChartData as ChartData,
    type Consumption as Consumption,
    type Coordinate as Coordinate,
    type CostBreakdown as CostBreakdown,
    type DateTimeCoordinate as DateTimeCoordinate,
    type DeliveryChartData as DeliveryChartData,
    type DeliveryStatistics as DeliveryStatistics,
    type DemandForecastForecastPoint as DemandForecastForecastPoint,
    type DemandForecastPoint as DemandForecastPoint,
    type DemandForecastRow as DemandForecastRow,
    type Department as Department,
    type Entity as Entity,
    type Geolocation as Geolocation,
    type InventoryReceiptSummaryEntry as InventoryReceiptSummaryEntry,
    type Item as Item,
    type ItemCategory as ItemCategory,
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
    type ManufacturingMetrics as ManufacturingMetrics,
    type MaterialAnalyticsEntry as MaterialAnalyticsEntry,
    type NewCustomersData as NewCustomersData,
    type OeeDepartment as OeeDepartment,
    type OpenBatchSummary as OpenBatchSummary,
    type OrderEntry as OrderEntry,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type ProductionCostItem as ProductionCostItem,
    type ProductionOutput as ProductionOutput,
    type ProductionStep as ProductionStep,
    type Property as Property,
    type Quantity as Quantity,
    type Rate as Rate,
    type RevenueForecastPoint as RevenueForecastPoint,
    type SalesEntry as SalesEntry,
    type ScanningStation as ScanningStation,
    type Unit as Unit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
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
}
