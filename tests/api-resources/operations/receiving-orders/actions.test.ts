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

  test('stock', async () => {
    const responsePromise = client.operations.receivingOrders.actions.stock(
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

  test('stock: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.receivingOrders.actions.stock(
        'rcor_016911ec6c634a298b3dc1798e',
        {
          line_items: [
            {
              receiving_order_line_id: 'rcorln_01f2aca124f3f5add7c94d5e4f',
              allocations: [{ quantity: '100', location_id: 'lc_014d187d99b31926f0c74af9d8' }],
              lot_number: 'lot_number',
              rejected_quantity: 'rejected_quantity',
            },
          ],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
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
