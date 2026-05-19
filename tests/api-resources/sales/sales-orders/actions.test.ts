// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkDelete: only required params', async () => {
    const responsePromise = client.sales.salesOrders.actions.bulkDelete({
      sales_order_ids: ['or_01jm4r6700f8nwq3v5hx2d9ktp'],
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
      sales_order_ids: ['or_01jm4r6700f8nwq3v5hx2d9ktp'],
    });
  });

  test('createProductionRun', async () => {
    const responsePromise = client.sales.salesOrders.actions.createProductionRun('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateChangeStatus: only required params', async () => {
    const responsePromise = client.sales.salesOrders.actions.updateChangeStatus('id', {
      send_email: true,
      status_change: 'issue',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateChangeStatus: required and optional params', async () => {
    const response = await client.sales.salesOrders.actions.updateChangeStatus('id', {
      send_email: true,
      status_change: 'issue',
      include: ['customer'],
    });
  });
});
