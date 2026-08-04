// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkDelete: only required params', async () => {
    const responsePromise = client.operations.purchaseOrders.actions.bulkDelete({
      purchase_order_ids: ['po_3ov2ym1pca8m'],
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
    const response = await client.operations.purchaseOrders.actions.bulkDelete({
      purchase_order_ids: ['po_3ov2ym1pca8m'],
    });
  });

  test('changeStatus: only required params', async () => {
    const responsePromise = client.operations.purchaseOrders.actions.changeStatus('po_3ov2ym1pca8m', {
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

  test('changeStatus: required and optional params', async () => {
    const response = await client.operations.purchaseOrders.actions.changeStatus('po_3ov2ym1pca8m', {
      send_email: true,
      status_change: 'issue',
      include: ['supplier'],
    });
  });
});
