// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkDelete: only required params', async () => {
    const responsePromise = client.sales.salesOrders.actions.bulkDelete({
      sales_order_ids: ['or_9lqo07quiwyb'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkDelete: required and optional params', async () => {
    const response = await client.sales.salesOrders.actions.bulkDelete({
      sales_order_ids: ['or_9lqo07quiwyb'],
    });
  });

  test('close', async () => {
    const responsePromise = client.sales.salesOrders.actions.close('or_9lqo07quiwyb');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createProductionRun', async () => {
    const responsePromise = client.sales.salesOrders.actions.createProductionRun('or_9lqo07quiwyb');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createProductionRun: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sales.salesOrders.actions.createProductionRun(
        'or_9lqo07quiwyb',
        { include: ['responsible_user'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('issue: only required params', async () => {
    const responsePromise = client.sales.salesOrders.actions.issue('or_9lqo07quiwyb', {
      notify_customer: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('issue: required and optional params', async () => {
    const response = await client.sales.salesOrders.actions.issue('or_9lqo07quiwyb', {
      notify_customer: true,
    });
  });

  test('open', async () => {
    const responsePromise = client.sales.salesOrders.actions.open('or_9lqo07quiwyb');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('quoteCommitment', async () => {
    const responsePromise = client.sales.salesOrders.actions.quoteCommitment();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('quoteCommitment: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sales.salesOrders.actions.quoteCommitment(
        {
          buyer_account_id: 'ac_ykxoradjoeb3',
          carrier_id: 'carrier_id',
          issued_at: '2019-12-27T18:11:19.117Z',
          lead_time_override_days: 0,
          promised_at: '2026-08-22T00:00:00Z',
          sales_order_id: 'sales_order_id',
          service_level_id: 'crop_4ilk9p6gccrx',
          ship_by_override_date: '2019-12-27T18:11:19.117Z',
          ship_to_address_id: 'ad_npqa5y43q26z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('quoteFreight', async () => {
    const responsePromise = client.sales.salesOrders.actions.quoteFreight('or_9lqo07quiwyb');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unissue', async () => {
    const responsePromise = client.sales.salesOrders.actions.unissue('or_9lqo07quiwyb');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
