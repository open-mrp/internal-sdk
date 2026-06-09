// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inventory', () => {
  test('update', async () => {
    const responsePromise = client.catalog.items.inventory.update('it_0131e386ac683e8c29a71f6f1f');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.catalog.items.inventory.update(
        'it_0131e386ac683e8c29a71f6f1f',
        {
          customer_id: 'ac_0170df1ac58e4d24c66fc89f5f',
          location_id: 'lc_014d187d99b31926f0c74af9d8',
          lot_number: 'lot_number',
          operation: 'adjust',
          quantity_change: 10.5,
          unit_id: 'un_01966263f74a5a0cae356000a1',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.catalog.items.inventory.list('it_0131e386ac683e8c29a71f6f1f');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.catalog.items.inventory.list(
        'it_0131e386ac683e8c29a71f6f1f',
        { include: ['on_hand'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
