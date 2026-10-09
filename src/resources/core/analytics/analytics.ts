// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoreAPI from '../core';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as OpenOrdersAPI from './open-orders';
import {
  AnalyticsCustomer,
  AnalyticsSalesOrder,
  AnalyticsShipTo,
  AnalyzeOpenOrdersBreakdownRequest,
  AnalyzeOpenOrdersSummaryRequest,
  AnalyzeOpenOrdersSummaryResponse,
  ListOpenOrder,
  ListOpenOrderLine,
  ListOpenOrderProduct,
  ListOpenOrdersRequest,
  OpenOrder,
  OpenOrderFilters,
  OpenOrderLine,
  OpenOrderProduct,
  OpenOrderUpdateBreakdownParams,
  OpenOrderUpdateParams,
  OpenOrderUpdateSummaryParams,
  OpenOrders,
} from './open-orders';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as OpenOrderLinesAPI from './open-order-lines/open-order-lines';
import { OpenOrderLines } from './open-order-lines/open-order-lines';
import * as SalesLinesAPI from './sales-lines/sales-lines';
import {
  ListSalesEntry,
  ListSalesLinesRequest,
  SalesLineUpdateParams,
  SalesLines,
} from './sales-lines/sales-lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Analyze sales, orders, manufacturing, materials, and other business metrics.
 */
export class Analytics extends APIResource {
  salesLines: SalesLinesAPI.SalesLines = new SalesLinesAPI.SalesLines(this._client);
  openOrders: OpenOrdersAPI.OpenOrders = new OpenOrdersAPI.OpenOrders(this._client);
  openOrderLines: OpenOrderLinesAPI.OpenOrderLines = new OpenOrderLinesAPI.OpenOrderLines(this._client);

  /**
   * Returns weeks-of-sales metrics per product line, including on-hand quantity,
   * average weekly sales, and weeks of inventory remaining.
   *
   * On-hand stock is the available receipts of the line's sale products, deleted
   * items included, net of what has been drawn against them. Sales are the
   * quantities ordered on the account's orders issued in the trailing period. Both
   * are stated in the product line's base unit, converting each line and receipt
   * from its own unit.
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
   * Flags contracted customer prices that are unusually low or unprofitable.
   *
   * Two independent checks run over every account price. The first compares a price
   * against the median price other customers pay for the same product line and
   * attributes — the same pair the pricing engine matches on — so a price is only
   * ever compared against prices that buy the same thing. The second computes gross
   * margin from the cost of the products the price applies to. A price may be
   * flagged by either or both.
   *
   * Prices a customer receives through its parent account are included and marked,
   * since they are easy to miss when auditing customer by customer. Manual price
   * overrides entered on an individual order are not visible here: they bypass
   * contracted pricing entirely and are only recorded on the order line.
   *
   * This endpoint requires the permission: `costs:read`.
   *
   * @example
   * ```ts
   * const analyzeCustomerPricingResponse =
   *   await client.core.analytics.updateCustomerPricing({
   *     customer_group_ids: ['acgp_6p4z57e9alaf'],
   *     customer_ids: ['ac_opnlh43ymyee'],
   *     outlier_tolerance: '0.15',
   *     target_gross_margin: '0.30',
   *   });
   * ```
   */
  updateCustomerPricing(
    params: AnalyticsUpdateCustomerPricingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyzeCustomerPricingResponse> {
    const { include, ...body } = params ?? {};
    return this._client.put('/v1/core/analytics/customer-pricing', { query: { include }, body, ...options });
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
   * The same window is also returned sliced by customer, customer group, product
   * line, and the rule each ship-by date came from — each ordered worst-first, and
   * each derived from the same set of orders as the headline so a drilldown always
   * adds up to it. `by_product_line` is the one exception to that: an order spanning
   * two lines is counted under both, because a late order is late for every line on
   * it.
   *
   * Every filter is empty-means-all and they combine with AND. They narrow
   * `uncommitted_order_count` too, so the excluded count always describes the same
   * slice of the order book the rates do.
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
   * Demand is the quantity ordered on sales orders, by month of creation, in each
   * item's base unit; revenue is its ordered value, and sales its invoiced value by
   * month of invoice. Purchase orders are left out. An item first ordered this month
   * is forecast at zero.
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
   * Returns the account's available inventory receipts grouped by item, location,
   * lot, owner and holder, oldest receipt first.
   *
   * Each receipt counts for what is left of it after its allocations, in the item's
   * base unit and never below zero; a receipt without a unit cost is left out. The
   * weighted average unit cost is per base unit, and the inventory value is the
   * remaining quantity at that cost, in the oldest receipt's currency. A group with
   * nothing left has no inventory value and a weighted average cost of zero.
   *
   * Acting in a customer's account requires `customers:read`, and acting in a
   * supplier's account requires `suppliers:read`, instead of the permission this
   * endpoint requires in your own account.
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
   * The quantity in inventory is available to promise: available receipts less
   * reserved and open issues, each net of its allocations. The quantity in demand is
   * the open issues. Both are converted to the order point's unit, or the item's
   * base unit for a material without an order point.
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
   * Returns the customers added in a period that have placed an order, newest first
   * order first, each with the date of its first order and its lifetime sales. Sales
   * count sales orders only: lines priced above zero, outside the shipping and misc
   * product lines, over the customer's whole history rather than the period.
   * Customers that have never ordered are left out.
   *
   * This endpoint requires the permission: `customers:read`.
   *
   * @example
   * ```ts
   * const listNewCustomer =
   *   await client.core.analytics.updateNewCustomersTable({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     customer_group_ids: ['acgp_6p4z57e9alaf'],
   *   });
   * ```
   */
  updateNewCustomersTable(
    params: AnalyticsUpdateNewCustomersTableParams,
    options?: RequestOptions,
  ): APIPromise<ListNewCustomer> {
    const { cursor, limit, ...body } = params;
    return this._client.put('/v1/core/analytics/new-customers-table', {
      query: { cursor, limit },
      body,
      ...options,
    });
  }

  /**
   * Returns Overall Equipment Effectiveness (OEE) metrics by department.
   *
   * Availability is the scheduled machine time the plant actually planned, net of
   * logged machine downtime — the planned time comes from the published production
   * schedule (or `planned_time` when supplied), and a department the schedule never
   * covered has no availability rather than a fabricated one. Departments with
   * `has_downtime_data` false have no downtime measured, and their ratios are
   * returned as null rather than as 100%.
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
   * Returns open batch summaries grouped by scanning station and item.
   *
   * Each open, scanned batch counts for its quantity less what has already gone
   * downstream into output batches. Selecting items or product lines selects the
   * parts their production consumes, recursively, together with the selected items
   * themselves; a selection that leads to no part does not filter.
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
   * Costs the production scanned over a window: overall, per department, per item
   * category, and per department and category.
   *
   * Every batch scanned at a production step within the window counts, open or
   * closed. Each kind of output is charged for the runs of its step it amounts to: a
   * batch's productive quantity, and the seconds and waste it recorded, are each
   * carried into the unit the step's production is entered in and divided by what
   * one run produces. One run costs its raw material consumption (quantity plus
   * waste allowance, at each material's unit cost) and its labor time — the step's
   * labor time per unit, stretched by its leveling factor and allowances — priced at
   * the step's labor rate and again at its overhead rate.
   *
   * Labor time is read in its own units on both sides: seconds per pair on a step
   * producing eaches is half those seconds per each, and minutes or seconds are
   * carried into hours before they meet a rate. The dashboard's report, for a step
   * whose labor time is per a different unit from the one it produces in, read a
   * figure in hours as if it were in the labor time's own unit, scaling the labor
   * time, and the labor and overhead priced from it, by that unit's size in hours:
   * seconds by 1/3600. A step producing 1 pr with a labor time of 2 min/ea at $10/hr
   * is 4 minutes and $0.67 of labor here, where the dashboard reported $0.01. A
   * labor time per a unit of another dimension than the step's output, which the
   * dashboard could not cost at all, is read as per unit produced.
   *
   * Money is in `currency_unit` and labor time in `time_unit`, rounded to 10 decimal
   * places. What was produced is stated per dimension, in its base unit.
   *
   * This endpoint requires the permission: `costs:read`.
   *
   * @example
   * ```ts
   * const analyzeProductionCostsResponse =
   *   await client.core.analytics.updateProductionCosts({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     category_ids: ['ic_d06g9c6yc9ck'],
   *     department_ids: ['dp_m0jayebxnkos'],
   *     item_ids: ['it_pej07ckhvu62'],
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
   *   });
   * ```
   */
  updateProductionCosts(
    body: AnalyticsUpdateProductionCostsParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeProductionCostsResponse> {
    return this._client.put('/v1/core/analytics/production-costs', { body, ...options });
  }

  /**
   * Returns the ordered value of sales orders by the year and quarter they were
   * issued, for the last few calendar years.
   *
   * Each year's quarters and total are the ordered value of sale lines — quantity
   * times unit price, converted between units — on sales orders issued in that
   * quarter (UTC), whatever their status now. Estimates, which have not been issued,
   * and purchase orders are left out. Customers include their child accounts. Sales
   * reps see only their own orders.
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
   *     years_back: 5,
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
   * Flags what customers were actually charged, as opposed to what they are
   * contracted to be charged.
   *
   * Invoiced lines over the window are rolled up to one row per customer and SKU,
   * weighted by quantity, and each row is checked twice: against the median price
   * other customers achieved on the same SKU, and against a target gross margin
   * computed from the cost captured on the lines. Findings are ranked by money at
   * stake rather than by percentage, so a thin margin on a large account outranks a
   * worse percentage on a single small order.
   *
   * This is the only view that sees a price typed onto an individual order. A manual
   * line override bypasses contracted prices and volume discounts entirely, so it
   * never appears in an audit of configured pricing.
   *
   * This endpoint requires the permission: `costs:read`.
   *
   * @example
   * ```ts
   * const analyzeRealizedMarginsResponse =
   *   await client.core.analytics.updateRealizedMargins({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     customer_group_ids: ['acgp_6p4z57e9alaf'],
   *     customer_ids: ['ac_opnlh43ymyee'],
   *     outlier_tolerance: '0.15',
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
   *     target_gross_margin: '0.30',
   *   });
   * ```
   */
  updateRealizedMargins(
    params: AnalyticsUpdateRealizedMarginsParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeRealizedMarginsResponse> {
    const { include, ...body } = params;
    return this._client.put('/v1/core/analytics/realized-margins', { query: { include }, body, ...options });
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
   * Returns invoiced sales totalled by customer, product, product line, customer
   * group, sales rep or discount, largest current-period revenue first.
   *
   * Each group carries its current-period totals and, when a comparison period is
   * given, the same group's comparison totals, so the two line up row for row. A
   * group with no current-period revenue is left out, except when grouping by
   * product, where a product invoiced at zero is kept. Customer groups, sales reps
   * and discounts leave out sales that have none.
   *
   * This endpoint requires the permission: `invoices:read`.
   *
   * @example
   * ```ts
   * const listSalesBreakdown =
   *   await client.core.analytics.updateSalesBreakdown({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     group_by: 'customer',
   *     starts_at: '2026-05-10T00:00:00Z',
   *   });
   * ```
   */
  updateSalesBreakdown(
    params: AnalyticsUpdateSalesBreakdownParams,
    options?: RequestOptions,
  ): APIPromise<ListSalesBreakdown> {
    const { cursor, limit, ...body } = params;
    return this._client.put('/v1/core/analytics/sales-breakdown', {
      query: { cursor, limit },
      body,
      ...options,
    });
  }

  /**
   * Returns the invoices raised in a period, newest first, each with the revenue and
   * distinct item count of its lines that match the filters. Invoices with no
   * matching sale line are left out.
   *
   * This endpoint requires the permission: `invoices:read`.
   *
   * @example
   * ```ts
   * const listSalesInvoice =
   *   await client.core.analytics.updateSalesInvoices({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *   });
   * ```
   */
  updateSalesInvoices(
    params: AnalyticsUpdateSalesInvoicesParams,
    options?: RequestOptions,
  ): APIPromise<ListSalesInvoice> {
    const { cursor, limit, ...body } = params;
    return this._client.put('/v1/core/analytics/sales-invoices', {
      query: { cursor, limit },
      body,
      ...options,
    });
  }

  /**
   * Returns what was invoiced over a period as one figure and day by day, and the
   * same for a comparison period when one is given.
   *
   * Figures are computed from pre-priced invoice lines, so any window reads in about
   * the same time. Cost is null for sales reps.
   *
   * This endpoint requires the permission: `invoices:read`.
   *
   * @example
   * ```ts
   * const analyzeSalesSummaryResponse =
   *   await client.core.analytics.updateSalesSummary({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     tz_offset_minutes: -300,
   *   });
   * ```
   */
  updateSalesSummary(
    body: AnalyticsUpdateSalesSummaryParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeSalesSummaryResponse> {
    return this._client.put('/v1/core/analytics/sales-summary', { body, ...options });
  }

  /**
   * Returns actual production measured against the plan that was live at the time.
   *
   * The baseline for each week is the version that froze it — the plan committed for
   * that week — so a version published after the week ended cannot rewrite a week
   * the floor has already worked, while a plan published on the week's own start day
   * still counts as the plan it froze. `baseline_schedules` names the versions used.
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
 * A named grouping of customer accounts, used for pricing rules or to categorize
 * accounts.
 *
 * A customer carries at most one group of type `type_group` as its customer type,
 * plus any number of groups of type `pricing_group`. Membership of either kind can
 * scope a volume discount to the customer and open up product lines for it to
 * order from.
 */
export interface AccountGroup {
  /**
   * Account group ID.
   */
  id: string;

  /**
   * How sales commission applies to accounts in this group.
   *
   * - `commission_applied`: sales commission is calculated on orders from accounts
   *   in this group.
   * - `commission_exempt`: orders from accounts in this group are exempt from
   *   commission.
   *
   * Null to customer and supplier portal users, like the rest of your commission
   * settings.
   */
  commission_policy: 'commission_applied' | 'commission_exempt' | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Calendar days between an order being issued and it being due to ship, inherited
   * by every customer in this group that has neither set its own nor inherited one
   * from a parent account.
   */
  default_lead_time_days: number | null;

  /**
   * Free-form description of the account group.
   */
  description: string | null;

  /**
   * How freight charges apply to orders from accounts in this group.
   *
   * - `free_freight`: customers within this group will not have to pay for freight.
   * - `billed_freight`: freight will be applied to any order within this account
   *   group, unless overridden elsewhere.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * Display name of the account group.
   *
   * Unique within the account.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account_group';

  /**
   * How this account group is used.
   *
   * - `pricing_group`: used for pricing rules, such as a "Preferred" group that
   *   receives a special discount.
   * - `type_group`: used to categorize accounts, such as "Consumers" or
   *   "Distributors".
   *
   * A group's type is fixed when it is created and cannot be changed afterwards.
   */
  type: 'pricing_group' | 'type_group';

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
 * AnalyzeCustomerPricingRequest is the request to audit contracted customer
 * prices.
 */
export interface AnalyzeCustomerPricingRequest {
  /**
   * Restrict the analysis to customers in these customer groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Restrict the analysis to these customers. Omit to cover every customer with a
   * contracted price.
   *
   * Peer medians are still computed across all customers, so narrowing the result
   * does not change what a price is compared against.
   */
  customer_ids?: Array<string>;

  /**
   * How far below the peer median a price must sit to be flagged, as a fraction
   * between 0 and 1.
   */
  outlier_tolerance?: string;

  /**
   * The gross margin a price is expected to clear, as a fraction between 0 and 1.
   */
  target_gross_margin?: string;
}

/**
 * AnalyzeCustomerPricingResponse represents the response from the customer pricing
 * analysis.
 */
export interface AnalyzeCustomerPricingResponse {
  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  findings: ListCustomerPricingFinding | null;

  /**
   * Resource type identifier.
   */
  object: 'analyze_customer_pricing_response';

  /**
   * CustomerPricingSummary reports the shape of the analysis behind the findings.
   */
  summary: CustomerPricingSummary;
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
   * Only measure orders whose customer sits in these groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Only measure orders bought by these customers. Their child accounts are
   * included, matching how the sales analytics resolve a customer.
   */
  customer_ids?: Array<string>;

  /**
   * The period to break the results down by. Defaults to `week`.
   */
  granularity?: 'day' | 'week' | 'month';

  /**
   * Only measure orders containing at least one line in these product lines.
   */
  product_line_ids?: Array<string>;

  /**
   * Only measure orders owned by these sales reps.
   */
  sales_rep_ids?: Array<string>;
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
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  by_commitment_source: ListDeliveryBreakdown | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  by_customer: ListDeliveryBreakdown | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  by_customer_group: ListDeliveryBreakdown | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  by_product_line: ListDeliveryBreakdown | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  lateness: ListDeliveryLatenessBucket | null;

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
   *
   * `costsPerUnit` and `margin` are cost data and also require `costs:read`.
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
   * Overrides the scheduled production time per department for the period. When
   * omitted it is taken from the published production schedule, so this is only
   * needed to measure a period the schedule does not cover. Availability,
   * performance and OEE are only returned for departments the scheduled time covers.
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
 * AnalyzeProductionCostsRequest is the request to cost a window's production.
 */
export interface AnalyzeProductionCostsRequest {
  /**
   * End of the window, inclusive: batches scanned at or before it are costed.
   */
  ends_at: string;

  /**
   * Start of the window, inclusive: batches scanned at or after it are costed.
   */
  starts_at: string;

  /**
   * Restrict the report to batches of items in these categories.
   */
  category_ids?: Array<string>;

  /**
   * Restrict the report to batches scanned at these departments' stations.
   */
  department_ids?: Array<string>;

  /**
   * Restrict the report to these items' production: the items themselves and every
   * part their steps consume, recursively upstream. Combines with
   * `product_line_ids`.
   */
  item_ids?: Array<string>;

  /**
   * Restrict the report to the production of these product lines' items: the parts
   * their steps consume, recursively upstream, and any of the items no step
   * produces. An item a step produces is selected only through `item_ids`.
   *
   * Product lines that lead to no item, with no `item_ids`, do not restrict the
   * report.
   */
  product_line_ids?: Array<string>;
}

/**
 * AnalyzeProductionCostsResponse is what production cost over a window: overall,
 * by department, by item category, and by both.
 */
export interface AnalyzeProductionCostsResponse {
  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  categories: ListProductionCostCategory | null;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  currency_unit: AccountUsersAPI.Unit | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  department_categories: ListProductionCostDepartmentCategory | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  departments: ListProductionCostDepartment | null;

  /**
   * End of the window, inclusive.
   */
  ends_at: string;

  /**
   * Resource type identifier.
   */
  object: 'analyze_production_costs_response';

  /**
   * Start of the window, inclusive.
   */
  starts_at: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  time_unit: AccountUsersAPI.Unit | null;

  /**
   * ProductionCostTotals is what a production cost report's batches cost, by the
   * kind of output they went into.
   */
  totals: ProductionCostTotals | null;
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

  /**
   * Calendar years to cover, the current one included. Defaults to 5.
   */
  years_back?: number;
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
 * AnalyzeRealizedMarginsRequest is the request to audit what customers were
 * actually charged.
 */
export interface AnalyzeRealizedMarginsRequest {
  /**
   * End of the invoiced window.
   */
  ends_at: string;

  /**
   * Start of the invoiced window.
   */
  starts_at: string;

  /**
   * Restrict the result to customers in these customer groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Restrict the result to these customers.
   *
   * Peer medians are still computed across every customer that bought the SKU, so
   * narrowing the result does not change what a price is compared against.
   */
  customer_ids?: Array<string>;

  /**
   * How far below the peer median an achieved price must sit to be flagged, as a
   * fraction between 0 and 1.
   */
  outlier_tolerance?: string;

  /**
   * Restrict the result to these product lines.
   */
  product_line_ids?: Array<string>;

  /**
   * The gross margin a sale is expected to clear, as a fraction between 0 and 1.
   */
  target_gross_margin?: string;
}

/**
 * AnalyzeRealizedMarginsResponse represents the response from the realized margin
 * analysis.
 */
export interface AnalyzeRealizedMarginsResponse {
  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  findings: ListRealizedMarginFinding | null;

  /**
   * Resource type identifier.
   */
  object: 'analyze_realized_margins_response';

  /**
   * RealizedMarginSummary reports the shape of the analysis behind the findings.
   */
  summary: RealizedMarginSummary;
}

/**
 * AnalyzeSalesBreakdownRequest is the request to total invoiced sales by one
 * dimension.
 */
export interface AnalyzeSalesBreakdownRequest extends SalesComparisonPeriod, SalesReportFilters {
  /**
   * End of the period, by invoice date, inclusive.
   */
  ends_at: string;

  /**
   * The dimension to total by.
   */
  group_by: 'customer' | 'product' | 'product_line' | 'customer_group' | 'sales_rep' | 'discount';

  /**
   * Start of the period, by invoice date, inclusive.
   */
  starts_at: string;
}

/**
 * AnalyzeSalesInvoicesRequest is the request to list the invoices in a period with
 * their invoiced sales.
 */
export interface AnalyzeSalesInvoicesRequest extends SalesReportFilters {
  /**
   * End of the period, by invoice date, inclusive.
   */
  ends_at: string;

  /**
   * Start of the period, by invoice date, inclusive.
   */
  starts_at: string;
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
 * AnalyzeSalesSummaryRequest is the request to total invoiced sales over a period.
 */
export interface AnalyzeSalesSummaryRequest extends SalesComparisonPeriod, SalesReportFilters {
  /**
   * End of the period, by invoice date, inclusive.
   */
  ends_at: string;

  /**
   * Start of the period, by invoice date, inclusive.
   */
  starts_at: string;

  /**
   * The caller's UTC offset in minutes east of UTC (e.g. `-300` for US Eastern
   * standard time). Daily totals are bucketed by the caller's local day. Defaults to
   * `0`.
   */
  tz_offset_minutes?: number;
}

/**
 * What was invoiced over a period, as one figure and day by day, alongside a
 * comparison period when one was asked for.
 *
 * Invoiced sales are priced from each line's order price and cost at the moment of
 * reading, in each item's base unit. `overall` is always the sum of `periods`.
 */
export interface AnalyzeSalesSummaryResponse {
  /**
   * Invoiced sales for one window.
   */
  comparison: SalesTotals | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  comparison_periods: ListSalesTotals | null;

  /**
   * Resource type identifier.
   */
  object: 'analyze_sales_summary_response';

  /**
   * Invoiced sales for one window.
   */
  overall: SalesTotals | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  periods: ListSalesTotals | null;
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
   * Machines the plan asked for over this window.
   *
   * Every figure in this response covers those machines only. Production scanned
   * onto a machine no published version scheduled is excluded outright, so the score
   * measures the plan that was made rather than the whole plant against it.
   */
  scheduled_machine_count: number;

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
 * A shipping carrier configured for fulfilling orders.
 *
 * Carriers with a Shippo-supported `code` (`fedex`, `ups`, `usps`) are connected
 * through Shippo for live rating and label purchase; other carriers represent
 * self-managed shipping methods such as will call or local delivery.
 */
export interface Carrier {
  /**
   * Carrier ID.
   */
  id: string;

  /**
   * Your account number with this carrier.
   *
   * UPS and USPS carrier accounts are connected to Shippo using this number; FedEx
   * carriers authorize through OAuth instead, so their account number is not used to
   * connect them.
   */
  account_number: string | null;

  /**
   * Well-known carrier identifier, set only for recognized carriers and absent for
   * custom ones.
   *
   * - `fedex`, `ups`, `usps`: integrated carriers managed through Shippo (live
   *   rating and labels).
   * - `will_call`: customer picks the order up; no carrier shipment.
   * - `delivery`: delivered by your own vehicles/drivers.
   * - `ltl`, `ltl1`: less-than-truckload freight carriers.
   * - `freight_collect`: freight billed to and arranged by the receiver.
   */
  code: 'fedex' | 'ups' | 'usps' | 'will_call' | 'delivery' | 'ltl' | 'ltl1' | 'freight_collect' | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Whether customers can see and select this carrier at checkout in the customer
   * portal.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Soft-delete timestamp.
   */
  deleted_at: string | null;

  /**
   * Human-readable name for the carrier, unique among the carriers visible to your
   * account.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'carrier';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  service_levels: ListServiceLevel | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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
 * An amount calculated on demand rather than stored.
 *
 * The same shape as a quantity minus the ID, because nothing was written: it is
 * derived per request, such as a total rolled up across invoiced lines for one
 * analysis.
 */
export interface ComputedQuantity {
  /**
   * Formatted value with unit abbreviation (e.g. "1,200 pr").
   */
  display_value: string;

  /**
   * Resource type identifier.
   */
  object: 'computed_quantity';

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: AccountUsersAPI.Unit | null;

  /**
   * Raw decimal value, as a string to preserve precision.
   *
   * This is the unformatted machine value; see `display_value` for the
   * human-readable rendering.
   */
  value: string;
}

/**
 * A rate calculated on demand rather than stored.
 *
 * The same shape as a rate minus the fields only a persisted row can have: it
 * carries no ID and no timestamps because nothing was written. Used where a figure
 * is derived per request, such as an analysis comparing one customer's price
 * against the median other customers pay.
 */
export interface ComputedRate {
  /**
   * Unit of measurement used for conversions and product quantities.
   */
  denominator_unit: AccountUsersAPI.Unit | null;

  /**
   * Human-readable formatted value (e.g. "$25.50 / pr").
   */
  display_value: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  numerator_unit: AccountUsersAPI.Unit | null;

  /**
   * Resource type identifier.
   */
  object: 'computed_rate';

  /**
   * Decimal value of the rate, as a string to preserve precision.
   *
   * Expressed as the amount of the numerator unit per one denominator unit.
   */
  value: string;
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
 * A business you sell to, with its contact details, default fulfillment settings,
 * and order policies.
 */
export interface Customer {
  /**
   * Customer ID.
   */
  id: string;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  bill_to_address: APIKeysAPI.Address | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  child_accounts: ListCustomer | null;

  /**
   * How sales commission applies to this customer's orders.
   *
   * - `commission_exempt`: this customer's orders are exempt from sales commission.
   * - `commission_applied`: sales commission is calculated on this customer's
   *   orders.
   *
   * The customer counts as exempt if this field, its `type` group, or any of its
   * `price_groups` is `commission_exempt`. Exempt customers never have a sales rep
   * assigned automatically when an order is created without one.
   *
   * Null to customer and supplier portal users, like the rest of your commission
   * settings.
   */
  commission_policy: 'commission_applied' | 'commission_exempt' | null;

  /**
   * Customer contact information.
   */
  contact_info: CustomerContactInfo | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  credit_limit: AccountUsersAPI.Quantity | null;

  /**
   * Values used to fill in a new sales order for this customer when the order does
   * not supply its own.
   */
  defaults: CustomerDefaults | null;

  /**
   * Customer freight and carrier settings.
   */
  freight_preferences: CustomerFreightPreferences | null;

  /**
   * The customer's business name, as shown throughout the app and on documents.
   */
  name: string;

  /**
   * Free-form note about the customer.
   *
   * Null to customer and supplier portal users: it is your own team's note.
   */
  note: string | null;

  /**
   * Customer notification settings.
   */
  notification_preferences: CustomerNotificationPreferences | null;

  /**
   * Human-readable customer number used to identify the account, distinct from the
   * `id`.
   *
   * Unique within your account.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'customer';

  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  parent_account: Customer | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  price_groups: ListAccountGroup | null;

  /**
   * The customer's position in the account hierarchy.
   *
   * - `standalone`: no parent or child accounts.
   * - `parent`: has one or more child accounts (see `child_accounts`).
   * - `child`: belongs to a parent account (see `parent_account`).
   */
  relationship_type: 'standalone' | 'parent' | 'child';

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  ship_to_address: APIKeysAPI.Address | null;

  /**
   * The customer's account standing.
   *
   * - `normal`: standard account with no restrictions.
   * - `preferred`: account flagged for prioritized handling.
   * - `hold_shipment`: the customer's shipments should be held, typically over a
   *   credit problem, while orders can still be placed.
   * - `hold_all`: all activity for the customer should be held.
   *
   * The hold statuses are advisory: OpenMRP flags the customer's orders as being on
   * credit hold, but requests to create orders or shipments for the customer are not
   * rejected.
   */
  status: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * A named grouping of customer accounts, used for pricing rules or to categorize
   * accounts.
   *
   * A customer carries at most one group of type `type_group` as its customer type,
   * plus any number of groups of type `pricing_group`. Membership of either kind can
   * scope a volume discount to the customer and open up product lines for it to
   * order from.
   */
  type: AccountGroup | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Customer contact information.
 */
export interface CustomerContactInfo {
  /**
   * Email address.
   */
  email: string | null;

  /**
   * Resource type identifier.
   */
  object: 'customer_contact_info';

  /**
   * Phone number.
   */
  phone: string | null;

  /**
   * Website URL.
   */
  url: string | null;
}

/**
 * Values used to fill in a new sales order for this customer when the order does
 * not supply its own.
 */
export interface CustomerDefaults {
  /**
   * How this customer's orders are produced.
   *
   * - `make_to_stock`: their order history feeds the production-schedule forecast,
   *   so stock is built ahead of their demand.
   * - `make_to_order`: their history is left out of the forecast; their orders are
   *   produced only once placed, and fit into the schedule on their own ship-by
   *   dates.
   *
   * With none set here the customer inherits its account group's policy, then falls
   * back to make-to-stock. Always null to customer and supplier portal users, like
   * the rest of your production planning.
   */
  fulfillment_policy: 'make_to_stock' | 'make_to_order' | null;

  /**
   * Calendar days between an order being issued and it being due to ship.
   *
   * Sets each order's `ship_by_date` when it is issued. With none set here the
   * customer inherits its parent account's lead time, then its account group's, then
   * the account default.
   */
  lead_time_days: number | null;

  /**
   * Resource type identifier.
   */
  object: 'customer_defaults';

  /**
   * A payment term describing when payment is due (e.g. `Net 30`), assignable to
   * customers, sales orders, purchase orders, and invoices.
   */
  payment_term: PaymentTerm | null;

  /**
   * Priority level used to order work on sales orders, purchase orders, and picks.
   *
   * The levels are platform-provided and the same for every account, so they cannot
   * be created, renamed, or removed. A customer can carry a default priority that
   * pre-fills new orders for them.
   */
  priority: Priority | null;

  /**
   * The operating calendar naming the days this customer's dock accepts freight.
   *
   * A promised delivery date is worked back from a day the customer can actually
   * receive on. With none set here the customer inherits its account group's
   * calendar, then the account default, then Monday to Friday.
   */
  receive_calendar_id: string | null;

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  sales_rep: AccountUsersAPI.AccountUser | null;

  /**
   * A named freight pricing rule that decides what a buyer pays for shipping.
   *
   * A customer's default shipping term is evaluated whenever freight is quoted for
   * one of their orders. Freight exemptions on the customer, its type group, or any
   * of its price groups are checked first and zero the freight charge before the
   * shipping term is considered.
   */
  shipping_term: ShippingTerm | null;
}

/**
 * Customer freight and carrier settings.
 */
export interface CustomerFreightPreferences {
  /**
   * Carrier billing account number charged when `billing_type` is `third_party`.
   */
  billing_account: string | null;

  /**
   * Who pays the carrier for shipments.
   *
   * - `sender`: the shipper (you) pays the carrier.
   * - `third_party`: a third party is billed, using `billing_account`.
   */
  billing_type: 'sender' | 'third_party' | null;

  /**
   * A shipping carrier configured for fulfilling orders.
   *
   * Carriers with a Shippo-supported `code` (`fedex`, `ups`, `usps`) are connected
   * through Shippo for live rating and label purchase; other carriers represent
   * self-managed shipping methods such as will call or local delivery.
   */
  carrier: Carrier | null;

  /**
   * Resource type identifier.
   */
  object: 'customer_freight_preferences';

  /**
   * A shipping speed or method offered by a carrier, such as ground or overnight.
   *
   * Carriers connected through Shippo have their service levels synced from the
   * carrier itself; any carrier can also have service levels you create by hand.
   */
  service_level: ServiceLevel | null;

  /**
   * Freight policy applied to this customer's orders.
   *
   * - `free_freight`: the customer is not billed for freight.
   * - `billed_freight`: freight is billed to the customer.
   *
   * Freight is waived when this field, the customer's `type` group, any of its
   * `price_groups`, or any product line the ordered products belong to is
   * `free_freight`, so a shipment can come back freight-exempt even while this field
   * is `billed_freight`.
   */
  status: 'free_freight' | 'billed_freight';
}

/**
 * Customer notification settings.
 */
export interface CustomerNotificationPreferences {
  /**
   * Whether anyone is set up to receive invoice emails for this customer.
   *
   * Derived from the customer's notification recipients: true when at least one of
   * them is configured for invoice notifications.
   */
  accepts_invoice_emails: boolean;

  /**
   * Resource type identifier.
   */
  object: 'customer_notification_preferences';
}

/**
 * CustomerPricingFinding is one contracted price flagged by the pricing analysis.
 */
export interface CustomerPricingFinding {
  /**
   * Identifier for this finding, stable for the same price and customer across runs.
   *
   * One contracted price produces one finding per customer it reaches, so the
   * price's own ID is not unique across findings.
   */
  id: string;

  /**
   * ID of the contracted price behind this finding, which is where it has to be
   * changed.
   */
  account_price_id: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  attributes: AccountUsersAPI.ListAttribute | null;

  /**
   * How far below the peer median this price sits, as a fraction between 0 and 1.
   * Null when there is no peer median.
   */
  below_peer_median_fraction: string | null;

  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  customer: Customer | null;

  /**
   * Gross margin at this price, as a fraction between 0 and 1. Null when no
   * comparable cost could be established.
   *
   * Null unless the caller holds `costs:read`; customer and supplier portal users
   * never see it.
   */
  gross_margin: string | null;

  /**
   * Resource type identifier.
   */
  object: 'customer_pricing_finding';

  /**
   * How the customer comes to receive this price.
   */
  origin: 'direct' | 'inherited';

  /**
   * A rate calculated on demand rather than stored.
   *
   * The same shape as a rate minus the fields only a persisted row can have: it
   * carries no ID and no timestamps because nothing was written. Used where a figure
   * is derived per request, such as an analysis comparing one customer's price
   * against the median other customers pay.
   */
  peer_median_price: ComputedRate | null;

  /**
   * A named grouping of related products in your catalog.
   *
   * A product line carries the default commission and freight policies for the
   * products assigned to it, along with the unit group that determines how those
   * products are measured. Product lines are also the unit that catalog access is
   * granted over, for both customers and account groups.
   */
  product_line: ProductLine | null;

  /**
   * Why this price was flagged.
   */
  reason: 'below_peer_median' | 'below_target_margin' | 'below_peer_median_and_target_margin';

  /**
   * A rate calculated on demand rather than stored.
   *
   * The same shape as a rate minus the fields only a persisted row can have: it
   * carries no ID and no timestamps because nothing was written. Used where a figure
   * is derived per request, such as an analysis comparing one customer's price
   * against the median other customers pay.
   */
  unit_price: ComputedRate | null;
}

/**
 * CustomerPricingSummary reports the shape of the analysis behind the findings.
 */
export interface CustomerPricingSummary {
  /**
   * Prices flagged for sitting below the peer median.
   */
  below_peer_median_count: number;

  /**
   * Prices flagged for failing the target gross margin.
   */
  below_target_margin_count: number;

  /**
   * Prices whose margin could not be checked because no comparable cost was
   * available.
   */
  margin_not_assessed_count: number;

  /**
   * Anything the analysis had to leave out, so the result never overstates its own
   * coverage.
   */
  notes: Array<string>;

  /**
   * Resource type identifier.
   */
  object: 'customer_pricing_summary';

  /**
   * Contracted prices examined.
   */
  prices_analyzed: number;
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
 * Delivery performance for one slice of the order book.
 */
export interface DeliveryBreakdown {
  /**
   * Identifier of the slice — a customer, customer group, product line, or
   * commitment source. Empty when the dimension is unset on the orders in it.
   */
  key: string;

  /**
   * Display name for the slice.
   */
  label: string;

  /**
   * Resource type identifier.
   */
  object: 'delivery_breakdown';

  /**
   * Delivery reliability for one period, or for a whole window.
   */
  performance: DeliveryPerformance | null;
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
 * One band of how far the window's misses missed by.
 */
export interface DeliveryLatenessBucket {
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
  object: 'delivery_lateness_bucket';

  /**
   * Orders in the band, shipped and unshipped.
   */
  order_count: number;

  /**
   * How many of them have since shipped. The remainder are still owed, and are the
   * same orders `backlog` counts.
   */
  shipped_count: number;

  /**
   * Quantity still unpacked across the band's orders.
   */
  units: number;
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
   * Campaigns the floor ran inside the frozen window that the frozen plan never
   * called for, counted per machine-week-SKU.
   *
   * Working around a commitment breaks it as surely as editing it does, so this
   * scores alongside the hand edits rather than beside them.
   */
  off_plan_lines: number;

  /**
   * Units behind those off-plan campaigns.
   */
  off_plan_quantity: number;

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
  weighted_average_unit_cost: AnalyticsRate | null;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListAccountGroup {
  /**
   * Resources in this page.
   */
  data: Array<AccountGroup>;

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
export interface ListComputedQuantity {
  /**
   * Resources in this page.
   */
  data: Array<ComputedQuantity>;

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
export interface ListCustomer {
  /**
   * Resources in this page.
   */
  data: Array<Customer>;

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
export interface ListCustomerPricingFinding {
  /**
   * Resources in this page.
   */
  data: Array<CustomerPricingFinding>;

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
export interface ListDeliveryBreakdown {
  /**
   * Resources in this page.
   */
  data: Array<DeliveryBreakdown>;

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
export interface ListDeliveryLatenessBucket {
  /**
   * Resources in this page.
   */
  data: Array<DeliveryLatenessBucket>;

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
export interface ListNewCustomer {
  /**
   * Resources in this page.
   */
  data: Array<NewCustomer>;

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
 * ListNewCustomersRequest is the request to list the customers added in a period
 * that have ordered.
 */
export interface ListNewCustomersRequest {
  /**
   * End of the period, by when the customer was added, inclusive.
   */
  ends_at: string;

  /**
   * Start of the period, by when the customer was added, inclusive.
   */
  starts_at: string;

  /**
   * Only customers in any of these customer groups, as their group or one of their
   * price groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Only customers whose default sales rep is one of these account users.
   */
  sales_rep_ids?: Array<string>;
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListProductionCostCategory {
  /**
   * Resources in this page.
   */
  data: Array<ProductionCostCategory>;

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
export interface ListProductionCostDepartment {
  /**
   * Resources in this page.
   */
  data: Array<ProductionCostDepartment>;

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
export interface ListProductionCostDepartmentCategory {
  /**
   * Resources in this page.
   */
  data: Array<ProductionCostDepartmentCategory>;

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
export interface ListRealizedMarginFinding {
  /**
   * Resources in this page.
   */
  data: Array<RealizedMarginFinding>;

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
export interface ListSalesBreakdown {
  /**
   * Resources in this page.
   */
  data: Array<SalesBreakdown>;

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
export interface ListSalesInvoice {
  /**
   * Resources in this page.
   */
  data: Array<SalesInvoice>;

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
export interface ListSalesTotals {
  /**
   * Resources in this page.
   */
  data: Array<SalesTotals>;

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
export interface ListServiceLevel {
  /**
   * Resources in this page.
   */
  data: Array<ServiceLevel>;

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
   *
   * Null unless the caller holds `costs:read`; customer and supplier portal users
   * never see it.
   */
  costs_per_unit: number | null;

  /**
   * The labor efficiency metric value.
   */
  labor_efficiency: number;

  /**
   * The margin metric value.
   *
   * Null unless the caller holds `costs:read`; customer and supplier portal users
   * never see it.
   */
  margin: number | null;

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
 * NewCustomer is a customer added in a report's period that has ordered, with its
 * first order and lifetime sales.
 */
export interface NewCustomer {
  /**
   * The customer's account ID.
   */
  id: string;

  /**
   * When the customer was added.
   */
  added_at: string;

  /**
   * Name of the customer's group, or null when it has none.
   */
  customer_group_name: string | null;

  /**
   * When the customer's first such order was issued.
   */
  first_ordered_at: string;

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  lifetime_revenue: ComputedQuantity | null;

  /**
   * The default shipping address's locality and state, or null when it has neither.
   */
  location: string | null;

  /**
   * The customer's name: its alias, or its account's name when it has none.
   */
  name: string;

  /**
   * The customer's number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'new_customer';

  /**
   * Name of the customer's default sales rep, or null when it has none.
   */
  sales_rep_name: string | null;
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
   * Run time (capped at scheduled) divided by scheduled time.
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
   * so an estimate is labeled rather than presented as a measurement.
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
   * The scheduled machines' measured run time (first-to-last scan per machine per
   * day), in seconds. Performance's denominator.
   */
  operating_time_seconds: number;

  /**
   * Measured run time beyond the scheduled window, in seconds. A schedule-adherence
   * signal reported apart from OEE, so overtime is not counted as extra
   * availability.
   */
  overrun_seconds: number;

  /**
   * Logged downtime charged against performance, in seconds.
   */
  performance_loss_seconds: number;

  /**
   * Standard seconds earned divided by measured operating time: how fast the
   * department ran against the designed speed of its production steps.
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
   * Operating time counted toward availability: measured run time capped at
   * scheduled time, in seconds.
   */
  run_time_seconds: number;

  /**
   * Planned production time net of not-scheduled downtime, in seconds.
   * Availability's denominator.
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
   * Run time (capped at scheduled) divided by scheduled time.
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
   * The scheduled machines' measured run time, in seconds. Performance's
   * denominator.
   */
  operating_time_seconds: number;

  /**
   * Measured run time beyond the scheduled window, in seconds, reported apart from
   * OEE.
   */
  overrun_seconds: number;

  /**
   * Standard seconds earned divided by measured operating time.
   */
  performance_pct: number | null;

  /**
   * Good units divided by total units produced.
   */
  quality_pct: number | null;

  /**
   * Operating time counted toward availability: measured run time capped at
   * scheduled time, in seconds.
   */
  run_time_seconds: number;

  /**
   * Planned production time net of not-scheduled downtime, in seconds.
   * Availability's denominator.
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
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Resource type identifier.
   */
  object: 'open_batch_summary';

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  scanning_station: CoreAPI.Entity | null;

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
   *
   * Null unless the caller holds `costs:read`; customer and supplier portal users
   * never see it.
   */
  total_cost: number | null;

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
   *
   * Null unless the caller holds `costs:read`; customer and supplier portal users
   * never see it.
   */
  total_profit: number | null;

  /**
   * The unit of measure.
   */
  unit: string;

  /**
   * The unit cost.
   *
   * Null unless the caller holds `costs:read`; customer and supplier portal users
   * never see it.
   */
  unit_cost: number | null;

  /**
   * The unit price.
   */
  unit_price: number;

  /**
   * The unit profit.
   *
   * Null unless the caller holds `costs:read`; customer and supplier portal users
   * never see it.
   */
  unit_profit: number | null;
}

/**
 * A payment term describing when payment is due (e.g. `Net 30`), assignable to
 * customers, sales orders, purchase orders, and invoices.
 */
export interface PaymentTerm {
  /**
   * Payment term ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name (e.g. `Net 30`), unique among the payment terms visible to your
   * account.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'payment_term';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Whether this payment term is still in active use.
   *
   * Payment terms created through the API are always `active`, and no endpoint
   * changes a term's status. List Payment Terms returns inactive terms alongside
   * active ones, so filter them out yourself if you only want the ones still on
   * offer.
   */
  status: 'active' | 'inactive';

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

/**
 * Priority level used to order work on sales orders, purchase orders, and picks.
 *
 * The levels are platform-provided and the same for every account, so they cannot
 * be created, renamed, or removed. A customer can carry a default priority that
 * pre-fills new orders for them.
 */
export interface Priority {
  /**
   * Priority ID.
   */
  id: string;

  /**
   * Machine-readable code identifying the priority level.
   *
   * Other resources refer to a priority by this code rather than by its ID, such as
   * a sales order's `priority`, and it can be used in place of the ID when
   * retrieving a priority.
   */
  code: 'low' | 'normal' | 'high';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the priority level.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'priority';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A named grouping of related products in your catalog.
 *
 * A product line carries the default commission and freight policies for the
 * products assigned to it, along with the unit group that determines how those
 * products are measured. Product lines are also the unit that catalog access is
 * granted over, for both customers and account groups.
 */
export interface ProductLine {
  /**
   * Product line ID.
   */
  id: string;

  /**
   * Default commission policy for products in this product line.
   *
   * - `commission_exempt`: no commission applies to these products.
   * - `commission_applied`: commission applies to these products, unless overridden
   *   elsewhere.
   *
   * Null to customer and supplier portal users, like the rest of your commission
   * settings.
   */
  commission_policy: 'commission_applied' | 'commission_exempt' | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  default_lot: AccountUsersAPI.Quantity | null;

  /**
   * Free-form description of the product line.
   */
  description: string | null;

  /**
   * Default freight policy for products in this product line.
   *
   * - `free_freight`: these products do not incur a freight charge.
   * - `billed_freight`: freight is billed for these products, unless overridden
   *   elsewhere.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * How products in this line are produced when they do not say for themselves.
   *
   * - `make_to_stock`: built to the forecast, holding a safety stock against its
   *   variability.
   * - `make_to_order`: built only against orders already on the book, holding no
   *   buffer.
   *
   * Null falls through to the account default. Always null to customer and supplier
   * portal users, like the rest of your production planning.
   */
  fulfillment_policy: 'make_to_stock' | 'make_to_order' | null;

  /**
   * Display name of the product line.
   *
   * Unique among the product lines visible to your account, which includes the
   * shared system lines.
   */
  name: string;

  /**
   * Free-form notes about the product line.
   *
   * Null to customer and supplier portal users: they are your own team's notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'product_line';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * A named collection of units that share one dimension, defining which units a
   * product can be ordered in.
   *
   * Each associated unit carries its own discount and customer portal visibility,
   * applied when an order line is priced in that unit. A product takes its unit
   * group from its product line, falling back to its item category.
   */
  unit_group: AccountUsersAPI.UnitGroup | null;

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

/**
 * ProductionCost is what one kind of output cost: the material it consumed, the
 * labor and overhead its labor time was charged, and what it was.
 */
export interface ProductionCost {
  /**
   * Labor time priced at each step's labor rate, in `currency_unit`.
   */
  labor: string;

  /**
   * Labor time, after each step's leveling factor and allowances, in `time_unit`.
   */
  labor_time: string;

  /**
   * Raw material consumed, waste allowance included, in `currency_unit`.
   */
  materials: string;

  /**
   * Resource type identifier.
   */
  object: 'production_cost';

  /**
   * Labor time priced at each step's overhead rate, in `currency_unit`.
   */
  overhead: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  produced: ListComputedQuantity | null;

  /**
   * Materials, labor and overhead together, in `currency_unit`.
   */
  total: string;
}

/**
 * ProductionCostCategory is what the batches of one item category cost.
 */
export interface ProductionCostCategory {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  category: CoreAPI.Entity | null;

  /**
   * Resource type identifier.
   */
  object: 'production_cost_category';

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  productive: ProductionCost | null;

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  seconds: ProductionCost | null;

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  total: ProductionCost | null;

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  waste: ProductionCost | null;
}

/**
 * ProductionCostDepartment is what the batches scanned at one department's
 * stations cost.
 */
export interface ProductionCostDepartment {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  department: CoreAPI.Entity | null;

  /**
   * Resource type identifier.
   */
  object: 'production_cost_department';

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  productive: ProductionCost | null;

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  seconds: ProductionCost | null;

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  total: ProductionCost | null;

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  waste: ProductionCost | null;
}

/**
 * ProductionCostDepartmentCategory is what the batches of one item category
 * scanned at one department's stations cost.
 */
export interface ProductionCostDepartmentCategory {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  category: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  department: CoreAPI.Entity | null;

  /**
   * Resource type identifier.
   */
  object: 'production_cost_department_category';

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  productive: ProductionCost | null;

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  seconds: ProductionCost | null;

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  total: ProductionCost | null;

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  waste: ProductionCost | null;
}

/**
 * ProductionCostTotals is what a production cost report's batches cost, by the
 * kind of output they went into.
 */
export interface ProductionCostTotals {
  /**
   * Resource type identifier.
   */
  object: 'production_cost_totals';

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  productive: ProductionCost | null;

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  seconds: ProductionCost | null;

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  total: ProductionCost | null;

  /**
   * ProductionCost is what one kind of output cost: the material it consumed, the
   * labor and overhead its labor time was charged, and what it was.
   */
  waste: ProductionCost | null;
}

/**
 * RealizedMarginFinding is one customer/SKU trading relationship flagged by the
 * realized margin analysis.
 */
export interface RealizedMarginFinding {
  /**
   * Identifier for this finding, stable for the same customer and item across runs.
   */
  id: string;

  /**
   * A rate calculated on demand rather than stored.
   *
   * The same shape as a rate minus the fields only a persisted row can have: it
   * carries no ID and no timestamps because nothing was written. Used where a figure
   * is derived per request, such as an analysis comparing one customer's price
   * against the median other customers pay.
   */
  average_unit_price: ComputedRate | null;

  /**
   * How far below the peer median this customer's achieved price sits, as a fraction
   * between 0 and 1. Null when there is no peer median.
   */
  below_peer_median_fraction: string | null;

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  cost: ComputedQuantity | null;

  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  customer: Customer | null;

  /**
   * A named grouping of customer accounts, used for pricing rules or to categorize
   * accounts.
   *
   * A customer carries at most one group of type `type_group` as its customer type,
   * plus any number of groups of type `pricing_group`. Membership of either kind can
   * scope a volume discount to the customer and open up product lines for it to
   * order from.
   */
  customer_group: AccountGroup | null;

  /**
   * Realized gross margin, as a fraction between 0 and 1. Null when no cost was
   * captured on the lines.
   *
   * Null unless the caller holds `costs:read`; customer and supplier portal users
   * never see it.
   */
  gross_margin: string | null;

  /**
   * An entry in your catalog: something you sell, consume, or build with.
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Number of invoiced lines behind these totals.
   */
  line_count: number;

  /**
   * Resource type identifier.
   */
  object: 'realized_margin_finding';

  /**
   * A rate calculated on demand rather than stored.
   *
   * The same shape as a rate minus the fields only a persisted row can have: it
   * carries no ID and no timestamps because nothing was written. Used where a figure
   * is derived per request, such as an analysis comparing one customer's price
   * against the median other customers pay.
   */
  peer_median_price: ComputedRate | null;

  /**
   * A named grouping of related products in your catalog.
   *
   * A product line carries the default commission and freight policies for the
   * products assigned to it, along with the unit group that determines how those
   * products are measured. Product lines are also the unit that catalog access is
   * granted over, for both customers and account groups.
   */
  product_line: ProductLine | null;

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  quantity_invoiced: ComputedQuantity | null;

  /**
   * Why this trading relationship was flagged.
   */
  reason: 'below_peer_median' | 'below_target_margin' | 'below_peer_median_and_target_margin';

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  revenue: ComputedQuantity | null;
}

/**
 * RealizedMarginSummary reports the shape of the analysis behind the findings.
 */
export interface RealizedMarginSummary {
  /**
   * Relationships flagged for an achieved price below the peer median.
   */
  below_peer_median_count: number;

  /**
   * Relationships flagged for failing the target gross margin.
   */
  below_target_margin_count: number;

  /**
   * Invoiced lines examined.
   */
  lines_analyzed: number;

  /**
   * Relationships whose margin could not be checked because no cost was captured.
   */
  margin_not_assessed_count: number;

  /**
   * Anything the analysis had to leave out, so the result never overstates its own
   * coverage.
   */
  notes: Array<string>;

  /**
   * Resource type identifier.
   */
  object: 'realized_margin_summary';

  /**
   * Customer and SKU pairs examined.
   */
  relationships_analyzed: number;
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
 * Invoiced sales for one slice of the order book.
 */
export interface SalesBreakdown {
  /**
   * Invoiced sales for one window.
   */
  comparison_totals: SalesTotals | null;

  /**
   * The item's description; null unless grouped by product.
   */
  description: string | null;

  /**
   * Identifier of the slice: an item, customer, customer group, product line, sales
   * rep (account user), or discount.
   */
  key: string;

  /**
   * Display name for the slice. For an item this is its SKU.
   */
  label: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_breakdown';

  /**
   * Invoiced sales for one window.
   */
  totals: SalesTotals | null;

  /**
   * Abbreviation of the item's base unit, which `quantity_invoiced` is counted in;
   * null unless grouped by product.
   */
  unit_abbreviation: string | null;
}

/**
 * SalesComparisonPeriod is an optional second period reported beside the first.
 * Set both bounds or neither.
 */
export interface SalesComparisonPeriod {
  /**
   * End of the comparison period, inclusive.
   */
  comparison_ends_at?: string;

  /**
   * Start of the comparison period, inclusive.
   */
  comparison_starts_at?: string;
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
   *
   * Null unless the caller holds `costs:read`; customer and supplier portal users
   * never see it.
   */
  total_cost: number | null;

  /**
   * The total invoiced amount.
   */
  total_invoiced: number;

  /**
   * The total profit.
   *
   * Null unless the caller holds `costs:read`; customer and supplier portal users
   * never see it.
   */
  total_profit: number | null;

  /**
   * The unit of measure.
   */
  unit: string;

  /**
   * The unit cost.
   *
   * Null unless the caller holds `costs:read`; customer and supplier portal users
   * never see it.
   */
  unit_cost: number | null;

  /**
   * The unit price.
   */
  unit_price: number;

  /**
   * The unit profit.
   *
   * Null unless the caller holds `costs:read`; customer and supplier portal users
   * never see it.
   */
  unit_profit: number | null;
}

/**
 * One invoice's invoiced sales.
 */
export interface SalesInvoice {
  /**
   * Unique identifier of the invoice.
   */
  id: string;

  /**
   * The buying customer's account ID.
   */
  customer_id: string;

  /**
   * The buying customer's name.
   */
  customer_name: string;

  /**
   * When the invoice was raised.
   */
  invoiced_at: string;

  /**
   * Number of distinct items on the invoice's matching lines.
   */
  item_count: number;

  /**
   * The invoice number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_invoice';

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  revenue: ComputedQuantity | null;
}

/**
 * SalesReportFilters are the entity filters every sales report accepts. Every list
 * is empty-means-all and they combine with AND.
 */
export interface SalesReportFilters {
  /**
   * Only count sales to customers in these groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Only count sales to these customers. Their child accounts are included.
   */
  customer_ids?: Array<string>;

  /**
   * Only count lines for these items.
   */
  item_ids?: Array<string>;

  /**
   * Only count lines in these product lines.
   */
  product_line_ids?: Array<string>;

  /**
   * Only count orders owned by these sales reps (account users). A sales rep calling
   * always sees only their own sales.
   */
  sales_rep_ids?: Array<string>;
}

/**
 * Invoiced sales for one window.
 */
export interface SalesTotals {
  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  cost: ComputedQuantity | null;

  /**
   * Number of distinct invoices behind these totals.
   */
  invoice_count: number;

  /**
   * Number of invoiced lines behind these totals.
   */
  line_count: number;

  /**
   * Resource type identifier.
   */
  object: 'sales_totals';

  /**
   * First day of the period, as midnight UTC of the caller's local day; null on a
   * whole-window figure.
   */
  period_start: string | null;

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  quantity_invoiced: ComputedQuantity | null;

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  revenue: ComputedQuantity | null;
}

/**
 * A shipping speed or method offered by a carrier, such as ground or overnight.
 *
 * Carriers connected through Shippo have their service levels synced from the
 * carrier itself; any carrier can also have service levels you create by hand.
 */
export interface ServiceLevel {
  /**
   * Service level ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Whether customers can see and select this service level at checkout in the
   * customer portal.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Business days this service typically takes in transit, used to work an order's
   * ship-by date back from a promised delivery date.
   *
   * A fallback for lanes the carrier has not quoted. Null means transit is unknown
   * for this service rather than instant, so a ship-by date falls back to the
   * promised delivery date itself.
   */
  default_transit_days: number | null;

  /**
   * Whether this is the carrier's default service level, pre-selected when the
   * carrier is chosen.
   *
   * Each carrier has at most one default; setting a new default clears the previous
   * one. A default service level cannot be deleted until another service level takes
   * its place or the flag is cleared.
   */
  is_default: boolean;

  /**
   * Human-readable name for the service level, shown to customers at checkout when
   * the service level is visible.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'service_level';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Carrier-specific code identifying this service level (e.g. `fedex_ground`,
   * `ups_next_day_air`).
   *
   * For service levels synced from a connected carrier this is the carrier's own
   * token, which is what rate shopping and label purchase are keyed on; for service
   * levels you create yourself it is the `code` you supplied.
   */
  service_level_token: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A named freight pricing rule that decides what a buyer pays for shipping.
 *
 * A customer's default shipping term is evaluated whenever freight is quoted for
 * one of their orders. Freight exemptions on the customer, its type group, or any
 * of its price groups are checked first and zero the freight charge before the
 * shipping term is considered.
 */
export interface ShippingTerm {
  /**
   * Shipping term ID.
   */
  id: string;

  /**
   * When this shipping term was created.
   */
  created_at: string;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  flat_rate: AccountUsersAPI.Quantity | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  free_shipping_service_levels: ListServiceLevel | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  minimum_order_value: AccountUsersAPI.Quantity | null;

  /**
   * Human-readable name for the shipping term, used to identify it when assigning
   * shipping terms to customers and orders.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'shipping_term';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Freight pricing model applied by this shipping term.
   *
   * - `free_freight`: the buyer is never charged for shipping.
   * - `flat_rate_freight`: the buyer is charged the fixed amount in `flat_rate`,
   *   regardless of what the carrier would have charged.
   * - `carrier_rate_freight`: the buyer is charged the rate the carrier quotes for
   *   the order's carrier and service level.
   */
  type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';

  /**
   * When this shipping term was last updated.
   */
  updated_at: string;
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
   * The number of weeks to use for the sales period. Defaults to 4.
   *
   * A period is a divisor of demand, so zero and negative values are rejected rather
   * than quietly substituted with the default — a caller who asked for an impossible
   * period should be told, not handed the answer to a different question.
   */
  period_in_weeks?: number;
}

export interface AnalyticsUpdateCustomerPricingParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    'customer' | 'product_line' | 'attributes' | 'unit_price.numerator_unit' | 'unit_price.denominator_unit'
  >;

  /**
   * Body param: Restrict the analysis to customers in these customer groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Body param: Restrict the analysis to these customers. Omit to cover every
   * customer with a contracted price.
   *
   * Peer medians are still computed across all customers, so narrowing the result
   * does not change what a price is compared against.
   */
  customer_ids?: Array<string>;

  /**
   * Body param: How far below the peer median a price must sit to be flagged, as a
   * fraction between 0 and 1.
   */
  outlier_tolerance?: string;

  /**
   * Body param: The gross margin a price is expected to clear, as a fraction between
   * 0 and 1.
   */
  target_gross_margin?: string;
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
   * Only measure orders whose customer sits in these groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Only measure orders bought by these customers. Their child accounts are
   * included, matching how the sales analytics resolve a customer.
   */
  customer_ids?: Array<string>;

  /**
   * The period to break the results down by. Defaults to `week`.
   */
  granularity?: 'day' | 'week' | 'month';

  /**
   * Only measure orders containing at least one line in these product lines.
   */
  product_line_ids?: Array<string>;

  /**
   * Only measure orders owned by these sales reps.
   */
  sales_rep_ids?: Array<string>;
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
   *
   * `costsPerUnit` and `margin` are cost data and also require `costs:read`.
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

export interface AnalyticsUpdateNewCustomersTableParams {
  /**
   * Body param: End of the period, by when the customer was added, inclusive.
   */
  ends_at: string;

  /**
   * Body param: Start of the period, by when the customer was added, inclusive.
   */
  starts_at: string;

  /**
   * Query param: Opaque cursor from a previous page's `next_page_url` or
   * `previous_page_url`. Omit for the first page.
   */
  cursor?: string;

  /**
   * Query param: Maximum number of customers to return.
   */
  limit?: number;

  /**
   * Body param: Only customers in any of these customer groups, as their group or
   * one of their price groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Body param: Only customers whose default sales rep is one of these account
   * users.
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
   * Overrides the scheduled production time per department for the period. When
   * omitted it is taken from the published production schedule, so this is only
   * needed to measure a period the schedule does not cover. Availability,
   * performance and OEE are only returned for departments the scheduled time covers.
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
   * End of the window, inclusive: batches scanned at or before it are costed.
   */
  ends_at: string;

  /**
   * Start of the window, inclusive: batches scanned at or after it are costed.
   */
  starts_at: string;

  /**
   * Restrict the report to batches of items in these categories.
   */
  category_ids?: Array<string>;

  /**
   * Restrict the report to batches scanned at these departments' stations.
   */
  department_ids?: Array<string>;

  /**
   * Restrict the report to these items' production: the items themselves and every
   * part their steps consume, recursively upstream. Combines with
   * `product_line_ids`.
   */
  item_ids?: Array<string>;

  /**
   * Restrict the report to the production of these product lines' items: the parts
   * their steps consume, recursively upstream, and any of the items no step
   * produces. An item a step produces is selected only through `item_ids`.
   *
   * Product lines that lead to no item, with no `item_ids`, do not restrict the
   * report.
   */
  product_line_ids?: Array<string>;
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

  /**
   * Calendar years to cover, the current one included. Defaults to 5.
   */
  years_back?: number;
}

export interface AnalyticsUpdateRealizedMarginsParams {
  /**
   * Body param: End of the invoiced window.
   */
  ends_at: string;

  /**
   * Body param: Start of the invoiced window.
   */
  starts_at: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'customer' | 'customer_group' | 'item' | 'product_line'>;

  /**
   * Body param: Restrict the result to customers in these customer groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Body param: Restrict the result to these customers.
   *
   * Peer medians are still computed across every customer that bought the SKU, so
   * narrowing the result does not change what a price is compared against.
   */
  customer_ids?: Array<string>;

  /**
   * Body param: How far below the peer median an achieved price must sit to be
   * flagged, as a fraction between 0 and 1.
   */
  outlier_tolerance?: string;

  /**
   * Body param: Restrict the result to these product lines.
   */
  product_line_ids?: Array<string>;

  /**
   * Body param: The gross margin a sale is expected to clear, as a fraction between
   * 0 and 1.
   */
  target_gross_margin?: string;
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

export interface AnalyticsUpdateSalesBreakdownParams {
  /**
   * Body param: End of the period, by invoice date, inclusive.
   */
  ends_at: string;

  /**
   * Body param: The dimension to total by.
   */
  group_by: 'customer' | 'product' | 'product_line' | 'customer_group' | 'sales_rep' | 'discount';

  /**
   * Body param: Start of the period, by invoice date, inclusive.
   */
  starts_at: string;

  /**
   * Query param: Opaque cursor from a previous page's `next_page_url` or
   * `previous_page_url`. Omit for the first page.
   */
  cursor?: string;

  /**
   * Query param: Maximum number of groups to return.
   */
  limit?: number;

  /**
   * Body param: End of the comparison period, inclusive.
   */
  comparison_ends_at?: string;

  /**
   * Body param: Start of the comparison period, inclusive.
   */
  comparison_starts_at?: string;

  /**
   * Body param: Only count sales to customers in these groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Body param: Only count sales to these customers. Their child accounts are
   * included.
   */
  customer_ids?: Array<string>;

  /**
   * Body param: Only count lines for these items.
   */
  item_ids?: Array<string>;

  /**
   * Body param: Only count lines in these product lines.
   */
  product_line_ids?: Array<string>;

  /**
   * Body param: Only count orders owned by these sales reps (account users). A sales
   * rep calling always sees only their own sales.
   */
  sales_rep_ids?: Array<string>;
}

export interface AnalyticsUpdateSalesInvoicesParams {
  /**
   * Body param: End of the period, by invoice date, inclusive.
   */
  ends_at: string;

  /**
   * Body param: Start of the period, by invoice date, inclusive.
   */
  starts_at: string;

  /**
   * Query param: Opaque cursor from a previous page's `next_page_url` or
   * `previous_page_url`. Omit for the first page.
   */
  cursor?: string;

  /**
   * Query param: Maximum number of invoices to return.
   */
  limit?: number;

  /**
   * Body param: Only count sales to customers in these groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Body param: Only count sales to these customers. Their child accounts are
   * included.
   */
  customer_ids?: Array<string>;

  /**
   * Body param: Only count lines for these items.
   */
  item_ids?: Array<string>;

  /**
   * Body param: Only count lines in these product lines.
   */
  product_line_ids?: Array<string>;

  /**
   * Body param: Only count orders owned by these sales reps (account users). A sales
   * rep calling always sees only their own sales.
   */
  sales_rep_ids?: Array<string>;
}

export interface AnalyticsUpdateSalesSummaryParams {
  /**
   * End of the period, by invoice date, inclusive.
   */
  ends_at: string;

  /**
   * Start of the period, by invoice date, inclusive.
   */
  starts_at: string;

  /**
   * End of the comparison period, inclusive.
   */
  comparison_ends_at?: string;

  /**
   * Start of the comparison period, inclusive.
   */
  comparison_starts_at?: string;

  /**
   * Only count sales to customers in these groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Only count sales to these customers. Their child accounts are included.
   */
  customer_ids?: Array<string>;

  /**
   * Only count lines for these items.
   */
  item_ids?: Array<string>;

  /**
   * Only count lines in these product lines.
   */
  product_line_ids?: Array<string>;

  /**
   * Only count orders owned by these sales reps (account users). A sales rep calling
   * always sees only their own sales.
   */
  sales_rep_ids?: Array<string>;

  /**
   * The caller's UTC offset in minutes east of UTC (e.g. `-300` for US Eastern
   * standard time). Daily totals are bucketed by the caller's local day. Defaults to
   * `0`.
   */
  tz_offset_minutes?: number;
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

Analytics.SalesLines = SalesLines;
Analytics.OpenOrders = OpenOrders;
Analytics.OpenOrderLines = OpenOrderLines;

export declare namespace Analytics {
  export {
    type AccountGroup as AccountGroup,
    type AnalyticsItem as AnalyticsItem,
    type AnalyticsLot as AnalyticsLot,
    type AnalyticsRate as AnalyticsRate,
    type AnalyticsUnitGroup as AnalyticsUnitGroup,
    type AnalyticsUnitGroupUnit as AnalyticsUnitGroupUnit,
    type AnalyzeCustomerPricingRequest as AnalyzeCustomerPricingRequest,
    type AnalyzeCustomerPricingResponse as AnalyzeCustomerPricingResponse,
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
    type AnalyzeRealizedMarginsRequest as AnalyzeRealizedMarginsRequest,
    type AnalyzeRealizedMarginsResponse as AnalyzeRealizedMarginsResponse,
    type AnalyzeSalesBreakdownRequest as AnalyzeSalesBreakdownRequest,
    type AnalyzeSalesInvoicesRequest as AnalyzeSalesInvoicesRequest,
    type AnalyzeSalesRequest as AnalyzeSalesRequest,
    type AnalyzeSalesResponse as AnalyzeSalesResponse,
    type AnalyzeSalesSummaryRequest as AnalyzeSalesSummaryRequest,
    type AnalyzeSalesSummaryResponse as AnalyzeSalesSummaryResponse,
    type AnalyzeScheduleAttainmentRequest as AnalyzeScheduleAttainmentRequest,
    type AnalyzeScheduleAttainmentResponse as AnalyzeScheduleAttainmentResponse,
    type AnalyzeWeeksOfSalesResponse as AnalyzeWeeksOfSalesResponse,
    type AttainmentBucket as AttainmentBucket,
    type Carrier as Carrier,
    type ChartData as ChartData,
    type ComputedQuantity as ComputedQuantity,
    type ComputedRate as ComputedRate,
    type Coordinate as Coordinate,
    type Customer as Customer,
    type CustomerContactInfo as CustomerContactInfo,
    type CustomerDefaults as CustomerDefaults,
    type CustomerFreightPreferences as CustomerFreightPreferences,
    type CustomerNotificationPreferences as CustomerNotificationPreferences,
    type CustomerPricingFinding as CustomerPricingFinding,
    type CustomerPricingSummary as CustomerPricingSummary,
    type DateTimeCoordinate as DateTimeCoordinate,
    type DeliveryBacklogBucket as DeliveryBacklogBucket,
    type DeliveryBreakdown as DeliveryBreakdown,
    type DeliveryChartData as DeliveryChartData,
    type DeliveryLatenessBucket as DeliveryLatenessBucket,
    type DeliveryPerformance as DeliveryPerformance,
    type DeliveryStatistics as DeliveryStatistics,
    type DemandForecastForecastPoint as DemandForecastForecastPoint,
    type DemandForecastPoint as DemandForecastPoint,
    type DemandForecastRow as DemandForecastRow,
    type FrozenAdherence as FrozenAdherence,
    type InventoryReceiptSummaryEntry as InventoryReceiptSummaryEntry,
    type ListAccountGroup as ListAccountGroup,
    type ListAttainmentBucket as ListAttainmentBucket,
    type ListComputedQuantity as ListComputedQuantity,
    type ListCustomer as ListCustomer,
    type ListCustomerPricingFinding as ListCustomerPricingFinding,
    type ListDeliveryBacklogBucket as ListDeliveryBacklogBucket,
    type ListDeliveryBreakdown as ListDeliveryBreakdown,
    type ListDeliveryLatenessBucket as ListDeliveryLatenessBucket,
    type ListDeliveryPerformance as ListDeliveryPerformance,
    type ListDemandForecastRow as ListDemandForecastRow,
    type ListFrozenAdherence as ListFrozenAdherence,
    type ListNewCustomer as ListNewCustomer,
    type ListNewCustomersRequest as ListNewCustomersRequest,
    type ListOeeDepartment as ListOeeDepartment,
    type ListOeeDowntimeReason as ListOeeDowntimeReason,
    type ListOeeTrendPeriod as ListOeeTrendPeriod,
    type ListProductionCostCategory as ListProductionCostCategory,
    type ListProductionCostDepartment as ListProductionCostDepartment,
    type ListProductionCostDepartmentCategory as ListProductionCostDepartmentCategory,
    type ListRealizedMarginFinding as ListRealizedMarginFinding,
    type ListSalesBreakdown as ListSalesBreakdown,
    type ListSalesInvoice as ListSalesInvoice,
    type ListSalesTotals as ListSalesTotals,
    type ListServiceLevel as ListServiceLevel,
    type ManufacturingMetrics as ManufacturingMetrics,
    type MaterialAnalyticsEntry as MaterialAnalyticsEntry,
    type NewCustomer as NewCustomer,
    type NewCustomersData as NewCustomersData,
    type OeeDepartment as OeeDepartment,
    type OeeDepartmentPlannedTime as OeeDepartmentPlannedTime,
    type OeeDowntimeReason as OeeDowntimeReason,
    type OeeTrendPeriod as OeeTrendPeriod,
    type OpenBatchSummary as OpenBatchSummary,
    type OrderEntry as OrderEntry,
    type PaymentTerm as PaymentTerm,
    type Priority as Priority,
    type ProductLine as ProductLine,
    type ProductionCost as ProductionCost,
    type ProductionCostCategory as ProductionCostCategory,
    type ProductionCostDepartment as ProductionCostDepartment,
    type ProductionCostDepartmentCategory as ProductionCostDepartmentCategory,
    type ProductionCostTotals as ProductionCostTotals,
    type RealizedMarginFinding as RealizedMarginFinding,
    type RealizedMarginSummary as RealizedMarginSummary,
    type RevenueForecastPoint as RevenueForecastPoint,
    type SalesBreakdown as SalesBreakdown,
    type SalesComparisonPeriod as SalesComparisonPeriod,
    type SalesEntry as SalesEntry,
    type SalesInvoice as SalesInvoice,
    type SalesReportFilters as SalesReportFilters,
    type SalesTotals as SalesTotals,
    type ServiceLevel as ServiceLevel,
    type ShippingTerm as ShippingTerm,
    type WeeksOfSalesItem as WeeksOfSalesItem,
    type AnalyticsRetrieveWeeksOfSalesParams as AnalyticsRetrieveWeeksOfSalesParams,
    type AnalyticsUpdateCustomerPricingParams as AnalyticsUpdateCustomerPricingParams,
    type AnalyticsUpdateDeliveriesParams as AnalyticsUpdateDeliveriesParams,
    type AnalyticsUpdateDeliveryPerformanceParams as AnalyticsUpdateDeliveryPerformanceParams,
    type AnalyticsUpdateDemandForecastParams as AnalyticsUpdateDemandForecastParams,
    type AnalyticsUpdateInventoryReceiptsParams as AnalyticsUpdateInventoryReceiptsParams,
    type AnalyticsUpdateManufacturingParams as AnalyticsUpdateManufacturingParams,
    type AnalyticsUpdateManufacturingBatchParams as AnalyticsUpdateManufacturingBatchParams,
    type AnalyticsUpdateMaterialsParams as AnalyticsUpdateMaterialsParams,
    type AnalyticsUpdateNewCustomersParams as AnalyticsUpdateNewCustomersParams,
    type AnalyticsUpdateNewCustomersTableParams as AnalyticsUpdateNewCustomersTableParams,
    type AnalyticsUpdateOeeParams as AnalyticsUpdateOeeParams,
    type AnalyticsUpdateOeeTrendParams as AnalyticsUpdateOeeTrendParams,
    type AnalyticsUpdateOpenBatchesParams as AnalyticsUpdateOpenBatchesParams,
    type AnalyticsUpdateOrdersParams as AnalyticsUpdateOrdersParams,
    type AnalyticsUpdateProductionCostsParams as AnalyticsUpdateProductionCostsParams,
    type AnalyticsUpdateQuarterlyOrdersParams as AnalyticsUpdateQuarterlyOrdersParams,
    type AnalyticsUpdateRealizedMarginsParams as AnalyticsUpdateRealizedMarginsParams,
    type AnalyticsUpdateSalesParams as AnalyticsUpdateSalesParams,
    type AnalyticsUpdateSalesBreakdownParams as AnalyticsUpdateSalesBreakdownParams,
    type AnalyticsUpdateSalesInvoicesParams as AnalyticsUpdateSalesInvoicesParams,
    type AnalyticsUpdateSalesSummaryParams as AnalyticsUpdateSalesSummaryParams,
    type AnalyticsUpdateScheduleAttainmentParams as AnalyticsUpdateScheduleAttainmentParams,
  };

  export {
    SalesLines as SalesLines,
    type ListSalesEntry as ListSalesEntry,
    type ListSalesLinesRequest as ListSalesLinesRequest,
    type SalesLineUpdateParams as SalesLineUpdateParams,
  };

  export {
    OpenOrders as OpenOrders,
    type AnalyticsCustomer as AnalyticsCustomer,
    type AnalyticsSalesOrder as AnalyticsSalesOrder,
    type AnalyticsShipTo as AnalyticsShipTo,
    type AnalyzeOpenOrdersBreakdownRequest as AnalyzeOpenOrdersBreakdownRequest,
    type AnalyzeOpenOrdersSummaryRequest as AnalyzeOpenOrdersSummaryRequest,
    type AnalyzeOpenOrdersSummaryResponse as AnalyzeOpenOrdersSummaryResponse,
    type ListOpenOrder as ListOpenOrder,
    type ListOpenOrderLine as ListOpenOrderLine,
    type ListOpenOrderProduct as ListOpenOrderProduct,
    type ListOpenOrdersRequest as ListOpenOrdersRequest,
    type OpenOrder as OpenOrder,
    type OpenOrderFilters as OpenOrderFilters,
    type OpenOrderLine as OpenOrderLine,
    type OpenOrderProduct as OpenOrderProduct,
    type OpenOrderUpdateParams as OpenOrderUpdateParams,
    type OpenOrderUpdateBreakdownParams as OpenOrderUpdateBreakdownParams,
    type OpenOrderUpdateSummaryParams as OpenOrderUpdateSummaryParams,
  };

  export { OpenOrderLines as OpenOrderLines };
}
