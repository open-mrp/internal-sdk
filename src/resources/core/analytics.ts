// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from './analytics';
import * as MemoriesAPI from '../ai/memories';
import * as ScanningStationsAPI from '../operations/scanning-stations';
import * as ItemsAPI from '../catalog/items/items';
import * as BatchesAPI from '../operations/batches/batches';
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
   * const response =
   *   await client.core.analytics.retrieveWeeksOfSales();
   * ```
   */
  retrieveWeeksOfSales(
    query: AnalyticsRetrieveWeeksOfSalesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsRetrieveWeeksOfSalesResponse> {
    return this._client.get('/v1/core/analytics/weeks-of-sales', { query, ...options });
  }

  /**
   * Returns delivery performance statistics over a date range, including on-time
   * rates, average delivery times, and time-to-first-shipment metrics.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.analytics.updateDeliveries({
   *     end_date: '2026-05-10T00:23:00Z',
   *     start_date: '2026-05-10T00:00:00Z',
   *     customer_group_ids: ['acgp_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
   *     override_promised_dates: true,
   *     product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     sales_rep_ids: ['acus_01gf7a8200er3ar3pkfrb6kk29'],
   *     target_delivery_time_days: 7,
   *   });
   * ```
   */
  updateDeliveries(
    body: AnalyticsUpdateDeliveriesParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsUpdateDeliveriesResponse> {
    return this._client.put('/v1/core/analytics/deliveries', { body, ...options });
  }

  /**
   * Returns demand forecasts for items, including historical data and projected
   * demand with confidence bounds.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.analytics.updateDemandForecast({
   *     forecast_months: 3,
   *     history_months: 6,
   *     item_ids: ['it_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
   *   });
   * ```
   */
  updateDemandForecast(
    body: AnalyticsUpdateDemandForecastParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsUpdateDemandForecastResponse> {
    return this._client.put('/v1/core/analytics/demand-forecast', { body, ...options });
  }

  /**
   * Returns inventory receipt summaries including remaining quantities, costs, and
   * values.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.analytics.updateInventoryReceipts({
   *     item_ids: ['it_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     location_ids: ['lc_01gf7a8200er3ar3pkfrb6kk30'],
   *     lot_ids: ['lot_01jm4r6700f8nwq3v5hx2d9ktp'],
   *   });
   * ```
   */
  updateInventoryReceipts(
    body: AnalyticsUpdateInventoryReceiptsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsUpdateInventoryReceiptsResponse> {
    return this._client.put('/v1/core/analytics/inventory-receipts', { body, ...options });
  }

  /**
   * Returns a single manufacturing analytics metric for a specified date range and
   * type.
   *
   * @example
   * ```ts
   * const response =
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
  ): APIPromise<AnalyticsUpdateManufacturingResponse> {
    return this._client.put('/v1/core/analytics/manufacturing', { body, ...options });
  }

  /**
   * Returns manufacturing metrics for a current period compared against a comparison
   * period, including production, costs per unit, margin, quality, and labor
   * efficiency.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.analytics.updateManufacturingBatch({
   *     comparison_end_date: '2026-04-10T00:23:00Z',
   *     comparison_start_date: '2026-04-10T00:00:00Z',
   *     end_date: '2026-05-10T00:23:00Z',
   *     start_date: '2026-05-10T00:00:00Z',
   *     customer_group_ids: ['acgp_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
   *     item_ids: ['it_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
   *   });
   * ```
   */
  updateManufacturingBatch(
    body: AnalyticsUpdateManufacturingBatchParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsUpdateManufacturingBatchResponse> {
    return this._client.put('/v1/core/analytics/manufacturing-batch', { body, ...options });
  }

  /**
   * Returns material inventory and demand analytics per material, including
   * quantities, unit groups, and supplier information.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.analytics.updateMaterials({
   *     sales_order_ids: ['or_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     supplier_ids: ['ac_02kn5s7811g9qwce7cizr4e0mq'],
   *   });
   * ```
   */
  updateMaterials(
    body: AnalyticsUpdateMaterialsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsUpdateMaterialsResponse> {
    return this._client.put('/v1/core/analytics/materials', { body, ...options });
  }

  /**
   * Returns time series data of new customer acquisitions over a specified date
   * range.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.analytics.updateNewCustomers({
   *     end_date: '2026-05-10T00:23:00Z',
   *     start_date: '2026-05-10T00:00:00Z',
   *     customer_group_ids: ['acgp_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     sales_rep_ids: ['acus_01gf7a8200er3ar3pkfrb6kk29'],
   *   });
   * ```
   */
  updateNewCustomers(
    body: AnalyticsUpdateNewCustomersParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsUpdateNewCustomersResponse> {
    return this._client.put('/v1/core/analytics/new-customers', { body, ...options });
  }

  /**
   * Returns Overall Equipment Effectiveness (OEE) metrics by department, including
   * good units, waste units, and estimated runtime hours.
   *
   * @example
   * ```ts
   * const response = await client.core.analytics.updateOee({
   *   end_date: '2026-05-10T00:23:00Z',
   *   start_date: '2026-05-10T00:00:00Z',
   *   department_ids: ['dp_01gf7a8200er3ar3pkfrb6kk30'],
   * });
   * ```
   */
  updateOee(
    body: AnalyticsUpdateOeeParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsUpdateOeeResponse> {
    return this._client.put('/v1/core/analytics/oee', { body, ...options });
  }

  /**
   * Returns open batch summaries grouped by scanning station.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.analytics.updateOpenBatches({
   *     item_ids: ['it_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
   *   });
   * ```
   */
  updateOpenBatches(
    body: AnalyticsUpdateOpenBatchesParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsUpdateOpenBatchesResponse> {
    return this._client.put('/v1/core/analytics/open-batches', { body, ...options });
  }

  /**
   * Returns detailed order entry records.
   *
   * @example
   * ```ts
   * const response = await client.core.analytics.updateOrders({
   *   customer_group_ids: ['acgp_01jm4r6700f8nwq3v5hx2d9ktp'],
   *   customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
   *   product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
   *   sales_rep_ids: ['acus_01gf7a8200er3ar3pkfrb6kk29'],
   * });
   * ```
   */
  updateOrders(
    body: AnalyticsUpdateOrdersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsUpdateOrdersResponse> {
    return this._client.put('/v1/core/analytics/orders', { body, ...options });
  }

  /**
   * Returns aggregated production cost breakdowns by department and category.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.analytics.updateProductionCosts({
   *     category_ids: ['ic_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     department_ids: ['dp_01gf7a8200er3ar3pkfrb6kk30'],
   *     end_date: '2026-05-10T00:23:00Z',
   *     item_ids: ['it_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     start_date: '2026-05-10T00:00:00Z',
   *   });
   * ```
   */
  updateProductionCosts(
    body: AnalyticsUpdateProductionCostsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsUpdateProductionCostsResponse> {
    return this._client.put('/v1/core/analytics/production-costs', { body, ...options });
  }

  /**
   * Returns yearly order totals broken down by quarter.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.analytics.updateQuarterlyOrders({
   *     customer_group_ids: ['acgp_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
   *     item_ids: ['it_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     sales_rep_ids: ['acus_01gf7a8200er3ar3pkfrb6kk29'],
   *   });
   * ```
   */
  updateQuarterlyOrders(
    body: AnalyticsUpdateQuarterlyOrdersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsUpdateQuarterlyOrdersResponse> {
    return this._client.put('/v1/core/analytics/quarterly-orders', { body, ...options });
  }

  /**
   * Returns detailed sales entry records over a specified date range.
   *
   * @example
   * ```ts
   * const response = await client.core.analytics.updateSales({
   *   end_date: '2026-05-10T00:23:00Z',
   *   start_date: '2026-05-10T00:00:00Z',
   *   customer_group_ids: ['acgp_01jm4r6700f8nwq3v5hx2d9ktp'],
   *   customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
   *   product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
   *   query: '6061',
   *   sales_rep_ids: ['acus_01gf7a8200er3ar3pkfrb6kk29'],
   * });
   * ```
   */
  updateSales(
    body: AnalyticsUpdateSalesParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsUpdateSalesResponse> {
    return this._client.put('/v1/core/analytics/sales', { body, ...options });
  }
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
 * ChartData represents data for a chart visualization.
 */
export interface ChartData {
  /**
   * The chart data points.
   */
  data: Array<ChartData.Data>;

  /**
   * The chart name/label.
   */
  name: string;

  /**
   * The chart type.
   */
  type: string;
}

export namespace ChartData {
  /**
   * Coordinate represents a single data point on a chart.
   */
  export interface Data {
    /**
     * The x-axis value.
     */
    x: number;

    /**
     * The y-axis value.
     */
    y: number;
  }
}

/**
 * CostBreakdown represents a detailed cost breakdown with sub-quantities.
 */
export interface CostBreakdown {
  /**
   * Value with an associated unit.
   */
  labor: BatchesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  materials: BatchesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  overhead: BatchesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity: BatchesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  time: BatchesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  total: BatchesAPI.Quantity | null;
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
  item: ItemsAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'open_batch_summary';

  /**
   * Scanning station resource.
   */
  scanning_station: ScanningStationsAPI.ScanningStation | null;

  /**
   * Unit abbreviation.
   */
  unit: string;
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
 * AnalyzeWeeksOfSalesResponse represents the response from the weeks-of-sales
 * analytics endpoint.
 */
export interface AnalyticsRetrieveWeeksOfSalesResponse {
  /**
   * The total count.
   */
  count: number;

  /**
   * The weeks-of-sales items.
   */
  data: Array<AnalyticsRetrieveWeeksOfSalesResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'analyze_weeks_of_sales_response';
}

export namespace AnalyticsRetrieveWeeksOfSalesResponse {
  /**
   * WeeksOfSalesItem represents a single product line's weeks-of-sales metrics.
   */
  export interface Data {
    /**
     * Value with an associated unit.
     */
    average_sales_quantity: BatchesAPI.Quantity | null;

    /**
     * Entity is a polymorphic reference to any resource in the system.
     */
    product_line: MemoriesAPI.Entity | null;

    /**
     * Value with an associated unit.
     */
    quantity_on_hand: BatchesAPI.Quantity | null;

    /**
     * The number of weeks of inventory on hand.
     */
    weeks_of_sales: number;
  }
}

/**
 * AnalyzeDeliveriesResponse represents the response from the analyze deliveries
 * endpoint.
 */
export interface AnalyticsUpdateDeliveriesResponse {
  /**
   * DeliveryChartData contains chart data for delivery analytics.
   */
  chart_data: AnalyticsUpdateDeliveriesResponse.ChartData;

  /**
   * Resource type identifier.
   */
  object: 'analyze_deliveries_response';

  /**
   * DeliveryStatistics represents delivery performance statistics.
   */
  statistics: AnalyticsUpdateDeliveriesResponse.Statistics;
}

export namespace AnalyticsUpdateDeliveriesResponse {
  /**
   * DeliveryChartData contains chart data for delivery analytics.
   */
  export interface ChartData {
    /**
     * ChartData represents data for a chart visualization.
     */
    average_delivery_time: AnalyticsAPI.ChartData;

    /**
     * ChartData represents data for a chart visualization.
     */
    average_first_shipment_time: AnalyticsAPI.ChartData;

    /**
     * ChartData represents data for a chart visualization.
     */
    on_time_delivery: AnalyticsAPI.ChartData;
  }

  /**
   * DeliveryStatistics represents delivery performance statistics.
   */
  export interface Statistics {
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
}

/**
 * AnalyzeDemandForecastResponse represents the response from the demand forecast
 * endpoint.
 */
export interface AnalyticsUpdateDemandForecastResponse {
  /**
   * The fraction of the current month elapsed.
   */
  current_month_fraction: number;

  /**
   * The demand forecast rows.
   */
  data: Array<AnalyticsUpdateDemandForecastResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

export namespace AnalyticsUpdateDemandForecastResponse {
  /**
   * DemandForecastRow represents a single item's demand forecast data.
   */
  export interface Data {
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
    forecast: Array<AnalyticsAPI.DemandForecastForecastPoint>;

    /**
     * The historical demand data points.
     */
    history: Array<Data.History>;

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
    revenue_forecast: Array<AnalyticsAPI.DemandForecastForecastPoint>;

    /**
     * The historical revenue data points.
     */
    revenue_history: Array<AnalyticsAPI.RevenueForecastPoint>;

    /**
     * The forecasted sales data points.
     */
    sales_forecast: Array<AnalyticsAPI.DemandForecastForecastPoint>;

    /**
     * The historical sales data points.
     */
    sales_history: Array<AnalyticsAPI.RevenueForecastPoint>;

    /**
     * The unit of measure.
     */
    unit: string;
  }

  export namespace Data {
    /**
     * DemandForecastPoint represents a historical demand data point.
     */
    export interface History {
      /**
       * The date.
       */
      date: string;

      /**
       * The demand value.
       */
      demand: number;
    }
  }
}

/**
 * AnalyzeInventoryReceiptsResponse represents the response from the analyze
 * inventory receipts endpoint.
 */
export interface AnalyticsUpdateInventoryReceiptsResponse {
  /**
   * The inventory receipt summary data.
   */
  data: Array<AnalyticsUpdateInventoryReceiptsResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

export namespace AnalyticsUpdateInventoryReceiptsResponse {
  /**
   * InventoryReceiptSummaryEntry represents a summary of inventory receipts.
   */
  export interface Data {
    /**
     * Entity is a polymorphic reference to any resource in the system.
     */
    holder_account: MemoriesAPI.Entity | null;

    /**
     * Value with an associated unit.
     */
    inventory_value: BatchesAPI.Quantity | null;

    /**
     * AnalyticsItem represents a lightweight item reference.
     */
    item: Data.Item;

    /**
     * Entity is a polymorphic reference to any resource in the system.
     */
    location: MemoriesAPI.Entity | null;

    /**
     * AnalyticsLot represents a lot for analytics.
     */
    lot: Data.Lot | null;

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
    remaining_quantity: BatchesAPI.Quantity | null;

    /**
     * AnalyticsRate represents a rate with numerator and denominator quantities.
     */
    weighted_average_unit_cost: Data.WeightedAverageUnitCost;
  }

  export namespace Data {
    /**
     * AnalyticsItem represents a lightweight item reference.
     */
    export interface Item {
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
    export interface Lot {
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
    export interface WeightedAverageUnitCost {
      /**
       * Value with an associated unit.
       */
      denominator: BatchesAPI.Quantity | null;

      /**
       * Value with an associated unit.
       */
      numerator: BatchesAPI.Quantity | null;
    }
  }
}

/**
 * AnalyzeManufacturingResponse represents the response from the analyze
 * manufacturing endpoint.
 */
export interface AnalyticsUpdateManufacturingResponse {
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
 * AnalyzeManufacturingBatchResponse represents the response from the analyze
 * manufacturing batch endpoint.
 */
export interface AnalyticsUpdateManufacturingBatchResponse {
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
 * AnalyzeMaterialsResponse represents the response from the analyze materials
 * endpoint.
 */
export interface AnalyticsUpdateMaterialsResponse {
  /**
   * The material analytics data.
   */
  data: Array<AnalyticsUpdateMaterialsResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

export namespace AnalyticsUpdateMaterialsResponse {
  /**
   * MaterialAnalyticsEntry represents a single material analytics entry.
   */
  export interface Data {
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
    lead_time: BatchesAPI.Quantity | null;

    /**
     * Value with an associated unit.
     */
    order_point: BatchesAPI.Quantity | null;

    /**
     * Value with an associated unit.
     */
    quantity_in_demand: BatchesAPI.Quantity | null;

    /**
     * Value with an associated unit.
     */
    quantity_in_inventory: BatchesAPI.Quantity | null;

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
    unit_group: Data.UnitGroup;
  }

  export namespace Data {
    /**
     * AnalyticsUnitGroup represents a unit group for analytics.
     */
    export interface UnitGroup {
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
      units: Array<UnitGroup.Unit>;
    }

    export namespace UnitGroup {
      /**
       * AnalyticsUnitGroupUnit represents a unit within a unit group.
       */
      export interface Unit {
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
    }
  }
}

/**
 * AnalyzeNewCustomersResponse represents the response from the analyze new
 * customers endpoint.
 */
export interface AnalyticsUpdateNewCustomersResponse {
  /**
   * NewCustomersData represents new customer time series data.
   */
  new_customers: AnalyticsUpdateNewCustomersResponse.NewCustomers;

  /**
   * Resource type identifier.
   */
  object: 'analyze_new_customers_response';
}

export namespace AnalyticsUpdateNewCustomersResponse {
  /**
   * NewCustomersData represents new customer time series data.
   */
  export interface NewCustomers {
    /**
     * The data points.
     */
    data: Array<NewCustomers.Data>;

    /**
     * The label for the data series.
     */
    label: string;
  }

  export namespace NewCustomers {
    /**
     * DateTimeCoordinate represents a time-value data point.
     */
    export interface Data {
      /**
       * The timestamp.
       */
      x: string;

      /**
       * The value.
       */
      y: number;
    }
  }
}

/**
 * AnalyzeOeeResponse represents the response from the analyze OEE endpoint.
 */
export interface AnalyticsUpdateOeeResponse {
  /**
   * The OEE data by department.
   */
  departments: Array<AnalyticsUpdateOeeResponse.Department>;

  /**
   * Resource type identifier.
   */
  object: 'analyze_oee_response';
}

export namespace AnalyticsUpdateOeeResponse {
  /**
   * OeeDepartment represents OEE metrics for a single department.
   */
  export interface Department {
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
}

/**
 * AnalyzeOpenBatchesResponse represents the response from the analyze open batches
 * endpoint. Uses the existing OpenBatchSummary type from batch_resource.go.
 */
export interface AnalyticsUpdateOpenBatchesResponse {
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
 * AnalyzeOrdersResponse represents the response from the analyze orders endpoint.
 */
export interface AnalyticsUpdateOrdersResponse {
  /**
   * The order entry data.
   */
  data: Array<AnalyticsUpdateOrdersResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

export namespace AnalyticsUpdateOrdersResponse {
  /**
   * OrderEntry represents a single order entry for analytics.
   */
  export interface Data {
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
}

/**
 * AnalyzeProductionCostsResponse represents the response from the analyze
 * production costs endpoint.
 */
export interface AnalyticsUpdateProductionCostsResponse {
  /**
   * The production cost data.
   */
  data: Array<AnalyticsUpdateProductionCostsResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

export namespace AnalyticsUpdateProductionCostsResponse {
  /**
   * ProductionCostItem represents an aggregated production cost entry.
   */
  export interface Data {
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
    productive_costs: AnalyticsAPI.CostBreakdown;

    /**
     * CostBreakdown represents a detailed cost breakdown with sub-quantities.
     */
    seconds_costs: AnalyticsAPI.CostBreakdown;

    /**
     * CostBreakdown represents a detailed cost breakdown with sub-quantities.
     */
    total_costs: AnalyticsAPI.CostBreakdown;

    /**
     * CostBreakdown represents a detailed cost breakdown with sub-quantities.
     */
    waste_costs: AnalyticsAPI.CostBreakdown;
  }
}

/**
 * AnalyzeQuarterlyOrdersResponse represents the response from the analyze
 * quarterly orders endpoint.
 */
export interface AnalyticsUpdateQuarterlyOrdersResponse {
  /**
   * The yearly sales data keyed by year string.
   */
  data: { [key: string]: AnalyticsUpdateQuarterlyOrdersResponse.Data };

  /**
   * Resource type identifier.
   */
  object: 'analyze_quarterly_orders_response';
}

export namespace AnalyticsUpdateQuarterlyOrdersResponse {
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
 * AnalyzeSalesResponse represents the response from the analyze sales endpoint.
 */
export interface AnalyticsUpdateSalesResponse {
  /**
   * The sales entry data.
   */
  data: Array<AnalyticsUpdateSalesResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

export namespace AnalyticsUpdateSalesResponse {
  /**
   * SalesEntry represents a single sales transaction entry for analytics.
   */
  export interface Data {
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
}
