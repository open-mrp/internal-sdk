// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('stock: only required params', async () => {
    const responsePromise = client.operations.receivingOrders.actions.stock(
      'rcor_01jm4r6700f8nwq3v5hx2d9ktp',
      {
        line_items: [
          {
            allocations: [{ quantity: '100' }],
            receiving_order_line_id: 'rcorln_01jm4r6700f8nwq3v5hx2d9ktp',
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
      'rcor_01jm4r6700f8nwq3v5hx2d9ktp',
      {
        line_items: [
          {
            allocations: [{ quantity: '100', location_id: 'lc_01gf7a8200er3ar3pkfrb6kk30' }],
            receiving_order_line_id: 'rcorln_01jm4r6700f8nwq3v5hx2d9ktp',
            lot_number: 'lot_number',
            rejected_quantity: 'rejected_quantity',
          },
        ],
      },
    );
  });

  test('updateReceive', async () => {
    const responsePromise = client.operations.receivingOrders.actions.updateReceive(
      'rcor_01jm4r6700f8nwq3v5hx2d9ktp',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateVoid', async () => {
    const responsePromise = client.operations.receivingOrders.actions.updateVoid(
      'rcor_01jm4r6700f8nwq3v5hx2d9ktp',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
