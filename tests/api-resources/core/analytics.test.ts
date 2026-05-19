// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analytics', () => {
  test('retrieveWeeksOfSales', async () => {
    const responsePromise = client.core.analytics.retrieveWeeksOfSales();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveWeeksOfSales: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.analytics.retrieveWeeksOfSales(
        { period_in_weeks: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('updateDeliveries: only required params', async () => {
    const responsePromise = client.core.analytics.updateDeliveries({
      customer_group_ids: ['string'],
      customer_ids: ['string'],
      end_date: '2019-12-27T18:11:19.117Z',
      product_line_ids: ['string'],
      sales_rep_ids: ['string'],
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateDeliveries: required and optional params', async () => {
    const response = await client.core.analytics.updateDeliveries({
      customer_group_ids: ['string'],
      customer_ids: ['string'],
      end_date: '2019-12-27T18:11:19.117Z',
      product_line_ids: ['string'],
      sales_rep_ids: ['string'],
      start_date: '2019-12-27T18:11:19.117Z',
      override_promised_dates: true,
      target_delivery_time_days: 0,
    });
  });

  test('updateDemandForecast: only required params', async () => {
    const responsePromise = client.core.analytics.updateDemandForecast({
      item_ids: ['string'],
      product_line_ids: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateDemandForecast: required and optional params', async () => {
    const response = await client.core.analytics.updateDemandForecast({
      item_ids: ['string'],
      product_line_ids: ['string'],
      forecast_months: 0,
      history_months: 0,
    });
  });

  test('updateInventoryReceipts: only required params', async () => {
    const responsePromise = client.core.analytics.updateInventoryReceipts({
      item_ids: ['string'],
      location_ids: ['string'],
      lot_ids: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateInventoryReceipts: required and optional params', async () => {
    const response = await client.core.analytics.updateInventoryReceipts({
      item_ids: ['string'],
      location_ids: ['string'],
      lot_ids: ['string'],
    });
  });

  test('updateManufacturing: only required params', async () => {
    const responsePromise = client.core.analytics.updateManufacturing({
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
      type: 'type',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateManufacturing: required and optional params', async () => {
    const response = await client.core.analytics.updateManufacturing({
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
      type: 'type',
    });
  });

  test('updateManufacturingBatch: only required params', async () => {
    const responsePromise = client.core.analytics.updateManufacturingBatch({
      comparison_end_date: '2019-12-27T18:11:19.117Z',
      comparison_start_date: '2019-12-27T18:11:19.117Z',
      customer_group_ids: ['string'],
      customer_ids: ['string'],
      end_date: '2019-12-27T18:11:19.117Z',
      item_ids: ['string'],
      product_line_ids: ['string'],
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateManufacturingBatch: required and optional params', async () => {
    const response = await client.core.analytics.updateManufacturingBatch({
      comparison_end_date: '2019-12-27T18:11:19.117Z',
      comparison_start_date: '2019-12-27T18:11:19.117Z',
      customer_group_ids: ['string'],
      customer_ids: ['string'],
      end_date: '2019-12-27T18:11:19.117Z',
      item_ids: ['string'],
      product_line_ids: ['string'],
      start_date: '2019-12-27T18:11:19.117Z',
    });
  });

  test('updateMaterials: only required params', async () => {
    const responsePromise = client.core.analytics.updateMaterials({
      sales_order_ids: ['string'],
      supplier_ids: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateMaterials: required and optional params', async () => {
    const response = await client.core.analytics.updateMaterials({
      sales_order_ids: ['string'],
      supplier_ids: ['string'],
    });
  });

  test('updateNewCustomers: only required params', async () => {
    const responsePromise = client.core.analytics.updateNewCustomers({
      customer_group_ids: ['string'],
      end_date: '2019-12-27T18:11:19.117Z',
      sales_rep_ids: ['string'],
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateNewCustomers: required and optional params', async () => {
    const response = await client.core.analytics.updateNewCustomers({
      customer_group_ids: ['string'],
      end_date: '2019-12-27T18:11:19.117Z',
      sales_rep_ids: ['string'],
      start_date: '2019-12-27T18:11:19.117Z',
    });
  });

  test('updateOee: only required params', async () => {
    const responsePromise = client.core.analytics.updateOee({
      department_ids: ['string'],
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateOee: required and optional params', async () => {
    const response = await client.core.analytics.updateOee({
      department_ids: ['string'],
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
    });
  });

  test('updateOpenBatches: only required params', async () => {
    const responsePromise = client.core.analytics.updateOpenBatches({
      item_ids: ['it_01jm4r6700f8nwq3v5hx2d9ktp'],
      product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateOpenBatches: required and optional params', async () => {
    const response = await client.core.analytics.updateOpenBatches({
      item_ids: ['it_01jm4r6700f8nwq3v5hx2d9ktp'],
      product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
    });
  });

  test('updateOrders: only required params', async () => {
    const responsePromise = client.core.analytics.updateOrders({
      customer_group_ids: ['string'],
      customer_ids: ['string'],
      product_line_ids: ['string'],
      sales_rep_ids: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateOrders: required and optional params', async () => {
    const response = await client.core.analytics.updateOrders({
      customer_group_ids: ['string'],
      customer_ids: ['string'],
      product_line_ids: ['string'],
      sales_rep_ids: ['string'],
    });
  });

  test('updateProductionCosts: only required params', async () => {
    const responsePromise = client.core.analytics.updateProductionCosts({
      category_ids: ['string'],
      department_ids: ['string'],
      item_ids: ['string'],
      product_line_ids: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateProductionCosts: required and optional params', async () => {
    const response = await client.core.analytics.updateProductionCosts({
      category_ids: ['string'],
      department_ids: ['string'],
      item_ids: ['string'],
      product_line_ids: ['string'],
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
    });
  });

  test('updateQuarterlyOrders: only required params', async () => {
    const responsePromise = client.core.analytics.updateQuarterlyOrders({
      customer_group_ids: ['string'],
      customer_ids: ['string'],
      item_ids: ['string'],
      product_line_ids: ['string'],
      sales_rep_ids: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateQuarterlyOrders: required and optional params', async () => {
    const response = await client.core.analytics.updateQuarterlyOrders({
      customer_group_ids: ['string'],
      customer_ids: ['string'],
      item_ids: ['string'],
      product_line_ids: ['string'],
      sales_rep_ids: ['string'],
    });
  });

  test('updateSales: only required params', async () => {
    const responsePromise = client.core.analytics.updateSales({
      customer_group_ids: ['string'],
      customer_ids: ['string'],
      end_date: '2019-12-27T18:11:19.117Z',
      product_line_ids: ['string'],
      sales_rep_ids: ['string'],
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateSales: required and optional params', async () => {
    const response = await client.core.analytics.updateSales({
      customer_group_ids: ['string'],
      customer_ids: ['string'],
      end_date: '2019-12-27T18:11:19.117Z',
      product_line_ids: ['string'],
      sales_rep_ids: ['string'],
      start_date: '2019-12-27T18:11:19.117Z',
      query: 'query',
    });
  });
});
