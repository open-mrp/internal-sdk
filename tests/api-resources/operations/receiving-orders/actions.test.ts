// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('receive', async () => {
    const responsePromise = client.operations.receivingOrders.actions.receive(
      'rcor_016911ec6c634a298b3dc1798e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('stock: only required params', async () => {
    const responsePromise = client.operations.receivingOrders.actions.stock(
      'rcor_016911ec6c634a298b3dc1798e',
      {
        line_items: [
          {
            allocations: [{ quantity: '100' }],
            receiving_order_line_id: 'rcorln_01f2aca124f3f5add7c94d5e4f',
          },
        ],
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('stock: required and optional params', async () => {
    const response = await client.operations.receivingOrders.actions.stock(
      'rcor_016911ec6c634a298b3dc1798e',
      {
        line_items: [
          {
            allocations: [{ quantity: '100', location_id: 'lc_014d187d99b31926f0c74af9d8' }],
            receiving_order_line_id: 'rcorln_01f2aca124f3f5add7c94d5e4f',
            lot_number: 'lot_number',
            rejected_quantity: 'rejected_quantity',
          },
        ],
      },
    );
  });

  test('void', async () => {
    const responsePromise = client.operations.receivingOrders.actions.void('rcor_016911ec6c634a298b3dc1798e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
