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
      end_date: '2026-05-10T00:23:00Z',
      start_date: '2026-05-10T00:00:00Z',
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
      end_date: '2026-05-10T00:23:00Z',
      start_date: '2026-05-10T00:00:00Z',
      customer_group_ids: ['acgp_01jm4r6700f8nwq3v5hx2d9ktp'],
      customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
      override_promised_dates: true,
      product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
      sales_rep_ids: ['acus_01gf7a8200er3ar3pkfrb6kk29'],
      target_delivery_time_days: 7,
    });
  });

  test('updateDemandForecast', async () => {
    const responsePromise = client.core.analytics.updateDemandForecast();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateDemandForecast: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.analytics.updateDemandForecast(
        {
          forecast_months: 3,
          history_months: 6,
          item_ids: ['it_01jm4r6700f8nwq3v5hx2d9ktp'],
          product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('updateInventoryReceipts', async () => {
    const responsePromise = client.core.analytics.updateInventoryReceipts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateInventoryReceipts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.analytics.updateInventoryReceipts(
        {
          item_ids: ['it_01jm4r6700f8nwq3v5hx2d9ktp'],
          location_ids: ['lc_01gf7a8200er3ar3pkfrb6kk30'],
          lot_ids: ['lot_01jm4r6700f8nwq3v5hx2d9ktp'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('updateManufacturing: only required params', async () => {
    const responsePromise = client.core.analytics.updateManufacturing({
      end_date: '2026-05-10T00:23:00Z',
      start_date: '2026-05-10T00:00:00Z',
      type: 'production',
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
      end_date: '2026-05-10T00:23:00Z',
      start_date: '2026-05-10T00:00:00Z',
      type: 'production',
    });
  });

  test('updateManufacturingBatch: only required params', async () => {
    const responsePromise = client.core.analytics.updateManufacturingBatch({
      comparison_end_date: '2026-04-10T00:23:00Z',
      comparison_start_date: '2026-04-10T00:00:00Z',
      end_date: '2026-05-10T00:23:00Z',
      start_date: '2026-05-10T00:00:00Z',
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
      comparison_end_date: '2026-04-10T00:23:00Z',
      comparison_start_date: '2026-04-10T00:00:00Z',
      end_date: '2026-05-10T00:23:00Z',
      start_date: '2026-05-10T00:00:00Z',
      customer_group_ids: ['acgp_01jm4r6700f8nwq3v5hx2d9ktp'],
      customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
      item_ids: ['it_01jm4r6700f8nwq3v5hx2d9ktp'],
      product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
    });
  });

  test('updateMaterials', async () => {
    const responsePromise = client.core.analytics.updateMaterials();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateMaterials: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.analytics.updateMaterials(
        {
          sales_order_ids: ['or_01jm4r6700f8nwq3v5hx2d9ktp'],
          supplier_ids: ['ac_02kn5s7811g9qwce7cizr4e0mq'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('updateNewCustomers: only required params', async () => {
    const responsePromise = client.core.analytics.updateNewCustomers({
      end_date: '2026-05-10T00:23:00Z',
      start_date: '2026-05-10T00:00:00Z',
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
      end_date: '2026-05-10T00:23:00Z',
      start_date: '2026-05-10T00:00:00Z',
      customer_group_ids: ['acgp_01jm4r6700f8nwq3v5hx2d9ktp'],
      sales_rep_ids: ['acus_01gf7a8200er3ar3pkfrb6kk29'],
    });
  });

  test('updateOee: only required params', async () => {
    const responsePromise = client.core.analytics.updateOee({
      end_date: '2026-05-10T00:23:00Z',
      start_date: '2026-05-10T00:00:00Z',
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
      end_date: '2026-05-10T00:23:00Z',
      start_date: '2026-05-10T00:00:00Z',
      department_ids: ['dp_01gf7a8200er3ar3pkfrb6kk30'],
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

  test('updateOrders', async () => {
    const responsePromise = client.core.analytics.updateOrders();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateOrders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.analytics.updateOrders(
        {
          customer_group_ids: ['acgp_01jm4r6700f8nwq3v5hx2d9ktp'],
          customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
          product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
          sales_rep_ids: ['acus_01gf7a8200er3ar3pkfrb6kk29'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('updateProductionCosts', async () => {
    const responsePromise = client.core.analytics.updateProductionCosts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateProductionCosts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.analytics.updateProductionCosts(
        {
          category_ids: ['ic_01jm4r6700f8nwq3v5hx2d9ktp'],
          department_ids: ['dp_01gf7a8200er3ar3pkfrb6kk30'],
          end_date: '2026-05-10T00:23:00Z',
          item_ids: ['it_01jm4r6700f8nwq3v5hx2d9ktp'],
          product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
          start_date: '2026-05-10T00:00:00Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('updateQuarterlyOrders', async () => {
    const responsePromise = client.core.analytics.updateQuarterlyOrders();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateQuarterlyOrders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.analytics.updateQuarterlyOrders(
        {
          customer_group_ids: ['acgp_01jm4r6700f8nwq3v5hx2d9ktp'],
          customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
          item_ids: ['it_01jm4r6700f8nwq3v5hx2d9ktp'],
          product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
          sales_rep_ids: ['acus_01gf7a8200er3ar3pkfrb6kk29'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('updateSales: only required params', async () => {
    const responsePromise = client.core.analytics.updateSales({
      end_date: '2026-05-10T00:23:00Z',
      start_date: '2026-05-10T00:00:00Z',
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
      end_date: '2026-05-10T00:23:00Z',
      start_date: '2026-05-10T00:00:00Z',
      customer_group_ids: ['acgp_01jm4r6700f8nwq3v5hx2d9ktp'],
      customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
      product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
      query: '6061',
      sales_rep_ids: ['acus_01gf7a8200er3ar3pkfrb6kk29'],
    });
  });
});
