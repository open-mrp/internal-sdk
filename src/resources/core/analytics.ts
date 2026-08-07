// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CoreAPI from './core';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../identity/account-users/account-users';
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
   * This endpoint requires the permission: `inventory:read`.
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
   * This endpoint requires the permission: `invoices:read`.
   *
   * @example
   * ```ts
   * const analyzeDeliveriesResponse =
   *   await client.core.analytics.updateDeliveries({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     customer_group_ids: ['acgp_6p4z57e9alaf'],
   *     customer_ids: ['ac_opnlh43ymyee'],
   *     override_promised_dates: true,
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
   *     sales_rep_ids: ['acus_e5zu8bde0z3h'],
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
   * Returns how reliably promised delivery dates were met.
   *
   * Orders are counted in the period their promise came due, not the period they
   * shipped — an order promised in March and shipped in May is March's miss. On time
   * means the first shipment left on or before the promised date, because the
   * promise is that the order starts moving by then; judging on the last shipment
   * would fail an order the customer received on time in two boxes. On time in full
   * adds that the whole ordered quantity was packed.
   *
   * The denominator is orders that were due, not orders that shipped, so an order
   * past its date and still unshipped counts against the rate rather than being held
   * back until it moves. Excluding open orders would let a plant with a growing late
   * backlog report perfect delivery.
   *
   * Only orders carrying a ship-by commitment participate. An order with no
   * commitment cannot be late, and counting it as on time would inflate the rate
   * with orders nobody promised anything about — `uncommitted_order_count` says how
   * many were excluded, so the gap is visible rather than silent.
   *
   * Every rate is null rather than zero when nothing was due, and average lateness
   * is measured over late orders only.
   *
   * This endpoint requires the permission: `sales_orders:read`.
   *
   * @example
   * ```ts
   * const analyzeDeliveryPerformanceResponse =
   *   await client.core.analytics.updateDeliveryPerformance({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     granularity: 'week',
   *   });
   * ```
   */
  updateDeliveryPerformance(
    body: AnalyticsUpdateDeliveryPerformanceParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeDeliveryPerformanceResponse> {
    return this._client.put('/v1/core/analytics/delivery-performance', { body, ...options });
  }

  /**
   * Returns demand forecasts for items, including historical data and projected
   * demand with confidence bounds.
   *
   * This endpoint requires the permission: `invoices:read`.
   *
   * @example
   * ```ts
   * const analyzeDemandForecastResponse =
   *   await client.core.analytics.updateDemandForecast({
   *     forecast_months: 3,
   *     history_months: 6,
   *     item_ids: ['it_pej07ckhvu62'],
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
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
   * This endpoint requires the permission: `materials:read`.
   *
   * @example
   * ```ts
   * const analyzeInventoryReceiptsResponse =
   *   await client.core.analytics.updateInventoryReceipts({
   *     item_ids: ['it_pej07ckhvu62'],
   *     location_ids: ['lc_yonnys0hx3ju'],
   *     lot_ids: ['lot_t1ge2m2qt3cw'],
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
   * This endpoint requires the permission: `invoices:read`.
   *
   * @example
   * ```ts
   * const analyzeManufacturingResponse =
   *   await client.core.analytics.updateManufacturing({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
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
   * This endpoint requires the permission: `invoices:read`.
   *
   * @example
   * ```ts
   * const analyzeManufacturingBatchResponse =
   *   await client.core.analytics.updateManufacturingBatch({
   *     comparison_ends_at: '2026-04-10T00:23:00Z',
   *     comparison_starts_at: '2026-04-10T00:00:00Z',
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     customer_group_ids: ['acgp_6p4z57e9alaf'],
   *     customer_ids: ['ac_opnlh43ymyee'],
   *     item_ids: ['it_pej07ckhvu62'],
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
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
   * This endpoint requires the permission: `materials:read`.
   *
   * @example
   * ```ts
   * const analyzeMaterialsResponse =
   *   await client.core.analytics.updateMaterials({
   *     sales_order_ids: ['or_9lqo07quiwyb'],
   *     supplier_ids: ['ac_gwy8tfbc074f'],
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
   * This endpoint requires the permission: `customers:read`.
   *
   * @example
   * ```ts
   * const analyzeNewCustomersResponse =
   *   await client.core.analytics.updateNewCustomers({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     customer_group_ids: ['acgp_6p4z57e9alaf'],
   *     sales_rep_ids: ['acus_e5zu8bde0z3h'],
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
   * Returns Overall Equipment Effectiveness (OEE) metrics by department.
   *
   * Availability is measured from logged machine downtime rather than inferred, so
   * it requires both `planned_time` for the department and downtime events in the
   * period. Departments with `has_downtime_data` false have no availability
   * measurement, and their ratios are returned as null rather than as 100%.
   *
   * This endpoint requires the permission: `machine_downtime:read`.
   *
   * @example
   * ```ts
   * const analyzeOeeResponse =
   *   await client.core.analytics.updateOee({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     department_ids: ['dp_m0jayebxnkos'],
   *   });
   * ```
   */
  updateOee(body: AnalyticsUpdateOeeParams, options?: RequestOptions): APIPromise<AnalyzeOeeResponse> {
    return this._client.put('/v1/core/analytics/oee', { body, ...options });
  }

  /**
   * Returns Overall Equipment Effectiveness (OEE) by production week.
   *
   * Each period carries the same four terms `/v1/core/analytics/oee` reports for a
   * single window, rolled up across departments and weighted by seconds rather than
   * averaged, so a department that ran for an hour does not weigh as heavily as one
   * that ran all week. Weeks start on Monday, and the first and last period of a
   * window are clipped to the window itself.
   *
   * Only departments with scheduled time take part: a department with no machines
   * has no availability, so counting its output in quality would leave the three
   * terms describing different plants. Compare two windows by calling this twice.
   *
   * This endpoint requires the permission: `machine_downtime:read`.
   *
   * @example
   * ```ts
   * const analyzeOeeTrendResponse =
   *   await client.core.analytics.updateOeeTrend({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     department_ids: ['dp_m0jayebxnkos'],
   *   });
   * ```
   */
  updateOeeTrend(
    body: AnalyticsUpdateOeeTrendParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeOeeTrendResponse> {
    return this._client.put('/v1/core/analytics/oee-trend', { body, ...options });
  }

  /**
   * Returns open batch summaries grouped by scanning station.
   *
   * This endpoint requires the permission: `batches:read`.
   *
   * @example
   * ```ts
   * const analyzeOpenBatchesResponse =
   *   await client.core.analytics.updateOpenBatches({
   *     item_ids: ['it_pej07ckhvu62'],
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
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
   * This endpoint requires the permission: `sales_orders:read`.
   *
   * @example
   * ```ts
   * const analyzeOrdersResponse =
   *   await client.core.analytics.updateOrders({
   *     customer_group_ids: ['acgp_6p4z57e9alaf'],
   *     customer_ids: ['ac_opnlh43ymyee'],
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
   *     sales_rep_ids: ['acus_e5zu8bde0z3h'],
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
   * This endpoint requires the permission: `batches:read`.
   *
   * @example
   * ```ts
   * const analyzeProductionCostsResponse =
   *   await client.core.analytics.updateProductionCosts({
   *     category_ids: ['ic_d06g9c6yc9ck'],
   *     department_ids: ['dp_m0jayebxnkos'],
   *     ends_at: '2026-05-10T00:23:00Z',
   *     item_ids: ['it_pej07ckhvu62'],
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
   *     starts_at: '2026-05-10T00:00:00Z',
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
   * This endpoint requires the permission: `invoices:read`.
   *
   * @example
   * ```ts
   * const analyzeQuarterlyOrdersResponse =
   *   await client.core.analytics.updateQuarterlyOrders({
   *     customer_group_ids: ['acgp_6p4z57e9alaf'],
   *     customer_ids: ['ac_opnlh43ymyee'],
   *     item_ids: ['it_pej07ckhvu62'],
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
   *     sales_rep_ids: ['acus_e5zu8bde0z3h'],
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
   * This endpoint requires the permission: `invoices:read`.
   *
   * @example
   * ```ts
   * const analyzeSalesResponse =
   *   await client.core.analytics.updateSales({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     customer_group_ids: ['acgp_6p4z57e9alaf'],
   *     customer_ids: ['ac_opnlh43ymyee'],
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
   *     query: '6061',
   *     sales_rep_ids: ['acus_e5zu8bde0z3h'],
   *   });
   * ```
   */
  updateSales(body: AnalyticsUpdateSalesParams, options?: RequestOptions): APIPromise<AnalyzeSalesResponse> {
    return this._client.put('/v1/core/analytics/sales', { body, ...options });
  }

  /**
   * Returns actual production measured against the plan that was live at the time.
   *
   * The baseline for each week is the schedule version published on or before that
   * week began, so republishing mid-horizon cannot rewrite a week the floor has
   * already worked. `baseline_schedules` names the versions used.
   *
   * Two ratios are returned because either alone misleads: `attainment_pct` caps
   * each campaign at what was asked for, so over-building one SKU cannot hide a miss
   * on another, while `output_ratio_pct` is uncapped and is what reveals
   * over-production. Production with no matching planned campaign is reported as
   * `unplanned_quantity` rather than discarded — that number is the clearest signal
   * a schedule is being worked around.
   *
   * Every ratio is null rather than zero when nothing was planned, and
   * `has_baseline` is false when nothing was ever published over the period.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const analyzeScheduleAttainmentResponse =
   *   await client.core.analytics.updateScheduleAttainment({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     group_by: 'week',
   *   });
   * ```
   */
  updateScheduleAttainment(
    body: AnalyticsUpdateScheduleAttainmentParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeScheduleAttainmentResponse> {
    return this._client.put('/v1/core/analytics/schedule-attainment', { body, ...options });
  }
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
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  denominator: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  numerator: AccountUsersAPI.Quantity | null;
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
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

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
 * AnalyzeDeliveryPerformanceRequest is the request to measure promises against
 * shipments.
 */
export interface AnalyzeDeliveryPerformanceRequest {
  /**
   * The end date for the analysis period.
   */
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * The period to break the results down by. Defaults to `week`.
   */
  granularity?: 'day' | 'week' | 'month';
}

/**
 * How reliably promised delivery dates were met.
 */
export interface AnalyzeDeliveryPerformanceResponse {
  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  backlog: ListDeliveryBacklogBucket | null;

  /**
   * Resource type identifier.
   */
  object: 'analyze_delivery_performance_response';

  /**
   * Delivery reliability for one period, or for a whole window.
   */
  overall: DeliveryPerformance | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  periods: ListDeliveryPerformance | null;

  /**
   * Issued orders in the window carrying no ship-by date, excluded from every rate
   * above.
   *
   * Reported so the exclusion is visible: a delivery score computed over half the
   * order book, silently, is worse than one that says which half. A non-zero count
   * here means orders placed before commitments were tracked still need a ship-by
   * date.
   */
  uncommitted_order_count: number;
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
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  data: ListDemandForecastRow | null;

  /**
   * Resource type identifier.
   */
  object: 'analyze_demand_forecast_response';
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
  comparison_ends_at: string;

  /**
   * The start date for the comparison period.
   */
  comparison_starts_at: string;

  /**
   * The end date for the current analysis period.
   */
  ends_at: string;

  /**
   * The start date for the current analysis period.
   */
  starts_at: string;

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
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

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
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

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
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * Optional department IDs to filter by.
   */
  department_ids?: Array<string>;

  /**
   * Scheduled production time per department for the period. Availability,
   * performance and OEE are only returned for departments this covers.
   */
  planned_time?: Array<OeeDepartmentPlannedTime>;
}

/**
 * AnalyzeOeeResponse represents the response from the analyze OEE endpoint.
 */
export interface AnalyzeOeeResponse {
  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  departments: ListOeeDepartment | null;

  /**
   * Resource type identifier.
   */
  object: 'analyze_oee_response';
}

/**
 * AnalyzeOeeTrendRequest is the request to analyze Overall Equipment Effectiveness
 * (OEE) over time.
 */
export interface AnalyzeOeeTrendRequest {
  /**
   * The end date for the analysis period.
   */
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * Restrict the analysis to these departments.
   */
  department_ids?: Array<string>;
}

/**
 * AnalyzeOeeTrendResponse represents the response from the OEE trend endpoint.
 */
export interface AnalyzeOeeTrendResponse {
  /**
   * Resource type identifier.
   */
  object: 'analyze_oee_trend_response';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  periods: ListOeeTrendPeriod | null;
}

/**
 * Request to analyze open batches.
 */
export interface AnalyzeOpenBatchesRequest {
  /**
   * Restrict the summaries to batches of these items; omit to include all items.
   */
  item_ids: Array<string>;

  /**
   * Restrict the summaries to batches whose item belongs to these product lines;
   * omit to include all product lines.
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
  data: Array<OpenBatchSummary>;

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
  ends_at?: string;

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
  starts_at?: string;
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
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

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
 * AnalyzeScheduleAttainmentRequest is the request to measure production against
 * plan.
 */
export interface AnalyzeScheduleAttainmentRequest {
  /**
   * The end date for the analysis period.
   */
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * Only measure production in these departments.
   */
  department_ids?: Array<string>;

  /**
   * The dimension to break the results down by. Defaults to `week`.
   */
  group_by?: 'week' | 'machine' | 'department' | 'item';

  /**
   * Only measure production on these machines.
   */
  machine_ids?: Array<string>;
}

/**
 * Actual production measured against the plan that was live at the time.
 *
 * The baseline for each week is the version that was published on or before that
 * week began, so republishing mid-horizon cannot rewrite a week the floor has
 * already worked. `baseline_schedules` names the versions used, so any number here
 * can be traced back to the plan that produced it.
 */
export interface AnalyzeScheduleAttainmentResponse {
  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  baseline_schedules: CoreAPI.ListEntity | null;

  /**
   * Whether the period had a plan to measure against. When `no_baseline`, every
   * ratio is null and the period has no plan rather than a missed one.
   */
  baseline_status: 'measured' | 'no_baseline';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  buckets: ListAttainmentBucket | null;

  /**
   * End of the measured period.
   */
  ends_at: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  frozen_adherence: ListFrozenAdherence | null;

  /**
   * The dimension the breakdown is grouped by.
   */
  group_by: 'week' | 'machine' | 'department' | 'item';

  /**
   * Resource type identifier.
   */
  object: 'analyze_schedule_attainment_response';

  /**
   * Start of the measured period.
   */
  starts_at: string;

  /**
   * One row of a schedule-attainment breakdown.
   *
   * Both ratios are reported because either alone misleads. `attainment_pct` caps
   * each SKU at what was asked for, so over-building one easy item cannot paper over
   * a total miss on another; `output_ratio_pct` does not cap, so it is the only one
   * that reveals over-production.
   */
  totals: AttainmentBucket;
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
 * One row of a schedule-attainment breakdown.
 *
 * Both ratios are reported because either alone misleads. `attainment_pct` caps
 * each SKU at what was asked for, so over-building one easy item cannot paper over
 * a total miss on another; `output_ratio_pct` does not cap, so it is the only one
 * that reveals over-production.
 */
export interface AttainmentBucket {
  /**
   * Units actually produced.
   */
  actual_quantity: number;

  /**
   * Share of the plan that was met. Null when nothing was planned.
   */
  attainment_pct: number | null;

  /**
   * Batches scanned in this bucket.
   */
  batch_count: number;

  /**
   * Identifies the bucket within the chosen grouping — a week start, machine ID,
   * department ID or item ID.
   */
  key: string;

  /**
   * Display label for the bucket.
   */
  label: string;

  /**
   * Units produced that were planned for, capped per campaign at what was asked.
   */
  matched_quantity: number;

  /**
   * Output as a share of plan, uncapped. Null when nothing was planned.
   */
  output_ratio_pct: number | null;

  /**
   * Planned campaigns in this bucket.
   */
  planned_lines: number;

  /**
   * Units the live plan called for.
   */
  planned_quantity: number;

  /**
   * Machine hours the plan called for.
   */
  planned_run_hours: number;

  /**
   * Units produced with no matching planned campaign.
   */
  unplanned_quantity: number;

  /**
   * Units scrapped.
   */
  waste_quantity: number;

  /**
   * First day of the week, when grouping by week.
   */
  week_starts_at: string | null;
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
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  labor: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  materials: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  overhead: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  time: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  total: AccountUsersAPI.Quantity | null;
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
 * One age band of orders past their promise and still unshipped.
 */
export interface DeliveryBacklogBucket {
  /**
   * Name of the band.
   */
  label: string;

  /**
   * Upper bound in days late; `0` means unbounded.
   */
  max_days_late: number;

  /**
   * Lower bound of the band in days late.
   */
  min_days_late: number;

  /**
   * Resource type identifier.
   */
  object: 'delivery_backlog_bucket';

  /**
   * Orders in the band.
   */
  order_count: number;

  /**
   * Quantity still owed across them, which is what remains unpacked rather than what
   * was ordered.
   */
  units: number;
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
 * Delivery reliability for one period, or for a whole window.
 */
export interface DeliveryPerformance {
  /**
   * Average lead time these orders were promised.
   *
   * The gap between this and `average_lead_time_days` is what a lead time is
   * renegotiated on.
   */
  average_committed_lead_time_days: number | null;

  /**
   * Average days late, over late orders only.
   *
   * Averaging over every order would dilute a real problem into a number that looks
   * fine.
   */
  average_days_late: number | null;

  /**
   * Average days from issue to first shipment, over orders that have shipped.
   */
  average_lead_time_days: number | null;

  /**
   * Orders whose promised ship date fell in this period.
   *
   * This is the denominator for both rates below — orders that were due, not orders
   * that shipped. Measuring against shipments only would let unshipped late orders
   * disappear from the score.
   */
  committed_order_count: number;

  /**
   * How many shipped late, plus those already past their date and still unshipped.
   */
  late_order_count: number;

  /**
   * How many due in this period have not shipped at all.
   *
   * These count against on-time: a promise not yet met is not a promise kept.
   */
  not_yet_shipped_count: number;

  /**
   * Resource type identifier.
   */
  object: 'delivery_performance';

  /**
   * How many shipped on time and complete.
   */
  on_time_in_full_count: number;

  /**
   * Share of due orders that shipped on time and complete, as a percentage.
   */
  on_time_in_full_pct: number | null;

  /**
   * How many shipped on or before the promised date.
   */
  on_time_order_count: number;

  /**
   * Share of due orders that shipped on time, as a percentage.
   *
   * Null rather than zero when nothing was due, so a quiet week does not render as
   * total failure.
   */
  on_time_pct: number | null;

  /**
   * First day of the period; absent on the overall figure.
   */
  period_start: string | null;

  /**
   * How many of them have shipped at all.
   */
  shipped_order_count: number;
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
  at: string;

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
  at: string;

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
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * The product description.
   */
  product_description: string | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  product_line: CoreAPI.Entity | null;

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
 * How well a published commitment survived the week it covered.
 */
export interface FrozenAdherence {
  /**
   * Total absolute unit change across frozen-week deviations.
   */
  abs_delta_units: number;

  /**
   * Campaigns added into the frozen window after publish.
   */
  added_lines: number;

  /**
   * Frozen campaigns that were changed after publish.
   */
  deviated_lines: number;

  /**
   * Campaigns frozen at publish.
   */
  frozen_line_count: number;

  /**
   * Units frozen at publish.
   */
  frozen_planned_quantity: number;

  /**
   * Last day of the frozen window.
   */
  frozen_through_at: string | null;

  /**
   * Share of frozen campaigns that survived untouched. Null when nothing was frozen.
   */
  line_adherence_pct: number | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  schedule: CoreAPI.Entity | null;

  /**
   * Share of frozen units that survived untouched. Null when nothing was frozen.
   */
  units_adherence_pct: number | null;

  /**
   * Version number of that schedule.
   */
  version: number;
}

/**
 * InventoryReceiptSummaryEntry represents a summary of inventory receipts.
 */
export interface InventoryReceiptSummaryEntry {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  holder_account: CoreAPI.Entity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  inventory_value: AccountUsersAPI.Quantity | null;

  /**
   * AnalyticsItem represents a lightweight item reference.
   */
  item: AnalyticsItem;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  location: CoreAPI.Entity | null;

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
  owner_account: CoreAPI.Entity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  remaining_quantity: AccountUsersAPI.Quantity | null;

  /**
   * AnalyticsRate represents a rate with numerator and denominator quantities.
   */
  weighted_average_unit_cost: AnalyticsRate;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListAttainmentBucket {
  /**
   * Resources in this page.
   */
  data: Array<AttainmentBucket>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListDeliveryBacklogBucket {
  /**
   * Resources in this page.
   */
  data: Array<DeliveryBacklogBucket>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListDeliveryPerformance {
  /**
   * Resources in this page.
   */
  data: Array<DeliveryPerformance>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListDemandForecastRow {
  /**
   * Resources in this page.
   */
  data: Array<DemandForecastRow>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListFrozenAdherence {
  /**
   * Resources in this page.
   */
  data: Array<FrozenAdherence>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListOeeDepartment {
  /**
   * Resources in this page.
   */
  data: Array<OeeDepartment>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListOeeDowntimeReason {
  /**
   * Resources in this page.
   */
  data: Array<OeeDowntimeReason>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListOeeTrendPeriod {
  /**
   * Resources in this page.
   */
  data: Array<OeeTrendPeriod>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
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
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  lead_time: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  order_point: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity_in_demand: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity_in_inventory: AccountUsersAPI.Quantity | null;

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
   * Data-quality warnings for this grouping. Empty when the numbers can be taken at
   * face value.
   */
  anomalies: Array<'performance_above_capacity'>;

  /**
   * Logged downtime charged against availability, in seconds.
   */
  availability_loss_seconds: number;

  /**
   * Run time divided by scheduled time.
   */
  availability_pct: number | null;

  /**
   * Time spent changing over between products, in seconds.
   */
  changeover_seconds: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  department: CoreAPI.Entity | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  downtime_breakdown: ListOeeDowntimeReason | null;

  /**
   * Number of downtime events logged in the period.
   */
  downtime_event_count: number;

  /**
   * The estimated runtime in hours.
   */
  estimated_runtime_hours: number;

  /**
   * The number of good units produced.
   */
  good_units: number;

  /**
   * Whether availability was measured from logged downtime or estimated from
   * runtime. A department with no logged downtime computes as perfectly available,
   * so an estimate is labelled rather than presented as a measurement.
   */
  measurement_status: 'measured' | 'estimated';

  /**
   * Time nobody planned to run, removed from the OEE denominator rather than counted
   * as a loss.
   */
  not_scheduled_seconds: number;

  /**
   * Availability multiplied by performance multiplied by quality.
   */
  oee_pct: number | null;

  /**
   * Logged downtime charged against performance, in seconds.
   */
  performance_loss_seconds: number;

  /**
   * Standard seconds earned divided by run time: how fast the department ran against
   * the designed speed of its production steps.
   */
  performance_pct: number | null;

  /**
   * Logged downtime charged against quality, in seconds.
   */
  quality_loss_seconds: number;

  /**
   * Good units divided by total units produced.
   */
  quality_pct: number | null;

  /**
   * Scheduled time net of availability losses, in seconds.
   */
  run_time_seconds: number;

  /**
   * Planned time net of not-scheduled downtime, in seconds.
   */
  scheduled_seconds: number;

  /**
   * The number of seconds units.
   */
  seconds_units: number;

  /**
   * The time this output should have taken at each production step's own labor rate:
   * ideal cycle time multiplied by the units produced. This is the numerator of
   * Performance.
   */
  standard_seconds_earned: number;

  /**
   * The number of waste units.
   */
  waste_units: number;
}

/**
 * OeeDepartmentPlannedTime supplies the scheduled production time for one
 * department.
 */
export interface OeeDepartmentPlannedTime {
  /**
   * The department ID.
   */
  department_id: string;

  /**
   * Scheduled production hours for the period.
   */
  planned_hours: number;
}

/**
 * OeeDowntimeReason represents one reason's contribution to a department's
 * downtime.
 */
export interface OeeDowntimeReason {
  /**
   * Downtime attributed to this reason, in seconds.
   */
  downtime_seconds: number;

  /**
   * Number of events logged against this reason.
   */
  event_count: number;

  /**
   * Which OEE term this reason charges.
   */
  oee_bucket: 'availability' | 'performance' | 'quality' | 'not_scheduled';

  /**
   * Why the machine stopped.
   */
  reason:
    | 'breakdown'
    | 'changeover'
    | 'material_shortage'
    | 'no_operator'
    | 'planned_maintenance'
    | 'minor_stop'
    | 'quality_hold'
    | 'no_schedule';
}

/**
 * OeeTrendPeriod represents one production week of OEE, rolled up across the
 * departments that had scheduled time in it. Departments with no scheduled time
 * have no OEE and take no part in the roll-up, so their output is not counted here
 * either.
 */
export interface OeeTrendPeriod {
  /**
   * Logged downtime charged against availability, in seconds.
   */
  availability_loss_seconds: number;

  /**
   * Run time divided by scheduled time.
   */
  availability_pct: number | null;

  /**
   * Number of downtime events overlapping this period.
   */
  downtime_event_count: number;

  /**
   * The instant this period ends, exclusive.
   */
  ends_at: string;

  /**
   * The number of good units produced.
   */
  good_units: number;

  /**
   * Whether availability was measured from logged downtime or estimated from
   * runtime.
   */
  measurement_status: 'measured' | 'estimated';

  /**
   * Time nobody planned to run, removed from the denominator rather than counted as
   * a loss.
   */
  not_scheduled_seconds: number;

  /**
   * Availability multiplied by performance multiplied by quality.
   */
  oee_pct: number | null;

  /**
   * Standard seconds earned divided by run time.
   */
  performance_pct: number | null;

  /**
   * Good units divided by total units produced.
   */
  quality_pct: number | null;

  /**
   * Scheduled time net of availability losses, in seconds.
   */
  run_time_seconds: number;

  /**
   * Planned time net of not-scheduled downtime, in seconds.
   */
  scheduled_seconds: number;

  /**
   * The number of seconds units.
   */
  seconds_units: number;

  /**
   * The time this output should have taken at each production step's own labor rate:
   * ideal cycle time multiplied by the units produced.
   */
  standard_seconds_earned: number;

  /**
   * The first instant this period covers. Weeks start on Monday; the first and last
   * periods of a window are clipped to the window itself.
   */
  starts_at: string;

  /**
   * The number of waste units.
   */
  waste_units: number;
}

/**
 * Work in progress still sitting at one scanning station, aggregated for a single
 * item.
 */
export interface OpenBatchSummary {
  /**
   * Quantity still waiting at this scanning station, as a decimal measure expressed
   * in `unit`.
   *
   * Each contributing batch counts for its own quantity less whatever has already
   * been passed downstream into output batches, so the total reflects what is left
   * to work on rather than everything ever produced at the station.
   */
  count: string;

  /**
   * Name of the department the scanning station belongs to.
   */
  department_name: string;

  /**
   * An entry in your catalog: something you sell, consume, or build with.
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'open_batch_summary';

  /**
   * A station on the production floor where operators scan batches to perform a
   * batch operation, such as initializing or moving a batch.
   */
  scanning_station: AccountUsersAPI.ScanningStation | null;

  /**
   * Unit abbreviation that `count` is expressed in (for example `kg`).
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
 * ProductionCostItem represents an aggregated production cost entry.
 */
export interface ProductionCostItem {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  category: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  department: CoreAPI.Entity | null;

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
 * RevenueForecastPoint represents a historical revenue data point.
 */
export interface RevenueForecastPoint {
  /**
   * The date.
   */
  at: string;

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
 * WeeksOfSalesItem represents a single product line's weeks-of-sales metrics.
 */
export interface WeeksOfSalesItem {
  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  average_sales_quantity: AccountUsersAPI.Quantity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  product_line: CoreAPI.Entity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity_on_hand: AccountUsersAPI.Quantity | null;

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
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

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

export interface AnalyticsUpdateDeliveryPerformanceParams {
  /**
   * The end date for the analysis period.
   */
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * The period to break the results down by. Defaults to `week`.
   */
  granularity?: 'day' | 'week' | 'month';
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
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * The type of manufacturing analytics to compute.
   */
  type: string;
}

export interface AnalyticsUpdateManufacturingBatchParams {
  /**
   * The end date for the comparison period.
   */
  comparison_ends_at: string;

  /**
   * The start date for the comparison period.
   */
  comparison_starts_at: string;

  /**
   * The end date for the current analysis period.
   */
  ends_at: string;

  /**
   * The start date for the current analysis period.
   */
  starts_at: string;

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
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

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
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * Optional department IDs to filter by.
   */
  department_ids?: Array<string>;

  /**
   * Scheduled production time per department for the period. Availability,
   * performance and OEE are only returned for departments this covers.
   */
  planned_time?: Array<OeeDepartmentPlannedTime>;
}

export interface AnalyticsUpdateOeeTrendParams {
  /**
   * The end date for the analysis period.
   */
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * Restrict the analysis to these departments.
   */
  department_ids?: Array<string>;
}

export interface AnalyticsUpdateOpenBatchesParams {
  /**
   * Restrict the summaries to batches of these items; omit to include all items.
   */
  item_ids: Array<string>;

  /**
   * Restrict the summaries to batches whose item belongs to these product lines;
   * omit to include all product lines.
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
  ends_at?: string;

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
  starts_at?: string;
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
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

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

export interface AnalyticsUpdateScheduleAttainmentParams {
  /**
   * The end date for the analysis period.
   */
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * Only measure production in these departments.
   */
  department_ids?: Array<string>;

  /**
   * The dimension to break the results down by. Defaults to `week`.
   */
  group_by?: 'week' | 'machine' | 'department' | 'item';

  /**
   * Only measure production on these machines.
   */
  machine_ids?: Array<string>;
}

export declare namespace Analytics {
  export {
    type AnalyticsItem as AnalyticsItem,
    type AnalyticsLot as AnalyticsLot,
    type AnalyticsRate as AnalyticsRate,
    type AnalyticsUnitGroup as AnalyticsUnitGroup,
    type AnalyticsUnitGroupUnit as AnalyticsUnitGroupUnit,
    type AnalyzeDeliveriesRequest as AnalyzeDeliveriesRequest,
    type AnalyzeDeliveriesResponse as AnalyzeDeliveriesResponse,
    type AnalyzeDeliveryPerformanceRequest as AnalyzeDeliveryPerformanceRequest,
    type AnalyzeDeliveryPerformanceResponse as AnalyzeDeliveryPerformanceResponse,
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
    type AnalyzeOeeTrendRequest as AnalyzeOeeTrendRequest,
    type AnalyzeOeeTrendResponse as AnalyzeOeeTrendResponse,
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
    type AnalyzeScheduleAttainmentRequest as AnalyzeScheduleAttainmentRequest,
    type AnalyzeScheduleAttainmentResponse as AnalyzeScheduleAttainmentResponse,
    type AnalyzeWeeksOfSalesResponse as AnalyzeWeeksOfSalesResponse,
    type AttainmentBucket as AttainmentBucket,
    type ChartData as ChartData,
    type Coordinate as Coordinate,
    type CostBreakdown as CostBreakdown,
    type DateTimeCoordinate as DateTimeCoordinate,
    type DeliveryBacklogBucket as DeliveryBacklogBucket,
    type DeliveryChartData as DeliveryChartData,
    type DeliveryPerformance as DeliveryPerformance,
    type DeliveryStatistics as DeliveryStatistics,
    type DemandForecastForecastPoint as DemandForecastForecastPoint,
    type DemandForecastPoint as DemandForecastPoint,
    type DemandForecastRow as DemandForecastRow,
    type FrozenAdherence as FrozenAdherence,
    type InventoryReceiptSummaryEntry as InventoryReceiptSummaryEntry,
    type ListAttainmentBucket as ListAttainmentBucket,
    type ListDeliveryBacklogBucket as ListDeliveryBacklogBucket,
    type ListDeliveryPerformance as ListDeliveryPerformance,
    type ListDemandForecastRow as ListDemandForecastRow,
    type ListFrozenAdherence as ListFrozenAdherence,
    type ListOeeDepartment as ListOeeDepartment,
    type ListOeeDowntimeReason as ListOeeDowntimeReason,
    type ListOeeTrendPeriod as ListOeeTrendPeriod,
    type ManufacturingMetrics as ManufacturingMetrics,
    type MaterialAnalyticsEntry as MaterialAnalyticsEntry,
    type NewCustomersData as NewCustomersData,
    type OeeDepartment as OeeDepartment,
    type OeeDepartmentPlannedTime as OeeDepartmentPlannedTime,
    type OeeDowntimeReason as OeeDowntimeReason,
    type OeeTrendPeriod as OeeTrendPeriod,
    type OpenBatchSummary as OpenBatchSummary,
    type OrderEntry as OrderEntry,
    type ProductionCostItem as ProductionCostItem,
    type RevenueForecastPoint as RevenueForecastPoint,
    type SalesEntry as SalesEntry,
    type WeeksOfSalesItem as WeeksOfSalesItem,
    type AnalyticsRetrieveWeeksOfSalesParams as AnalyticsRetrieveWeeksOfSalesParams,
    type AnalyticsUpdateDeliveriesParams as AnalyticsUpdateDeliveriesParams,
    type AnalyticsUpdateDeliveryPerformanceParams as AnalyticsUpdateDeliveryPerformanceParams,
    type AnalyticsUpdateDemandForecastParams as AnalyticsUpdateDemandForecastParams,
    type AnalyticsUpdateInventoryReceiptsParams as AnalyticsUpdateInventoryReceiptsParams,
    type AnalyticsUpdateManufacturingParams as AnalyticsUpdateManufacturingParams,
    type AnalyticsUpdateManufacturingBatchParams as AnalyticsUpdateManufacturingBatchParams,
    type AnalyticsUpdateMaterialsParams as AnalyticsUpdateMaterialsParams,
    type AnalyticsUpdateNewCustomersParams as AnalyticsUpdateNewCustomersParams,
    type AnalyticsUpdateOeeParams as AnalyticsUpdateOeeParams,
    type AnalyticsUpdateOeeTrendParams as AnalyticsUpdateOeeTrendParams,
    type AnalyticsUpdateOpenBatchesParams as AnalyticsUpdateOpenBatchesParams,
    type AnalyticsUpdateOrdersParams as AnalyticsUpdateOrdersParams,
    type AnalyticsUpdateProductionCostsParams as AnalyticsUpdateProductionCostsParams,
    type AnalyticsUpdateQuarterlyOrdersParams as AnalyticsUpdateQuarterlyOrdersParams,
    type AnalyticsUpdateSalesParams as AnalyticsUpdateSalesParams,
    type AnalyticsUpdateScheduleAttainmentParams as AnalyticsUpdateScheduleAttainmentParams,
  };
}
