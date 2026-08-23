// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inventory', () => {
  test('update: only required params', async () => {
    const responsePromise = client.catalog.items.inventory.update('it_pej07ckhvu62', {
      quantity: { unit_id: 'un_82bd37dae5po', value: '10.5' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.catalog.items.inventory.update('it_pej07ckhvu62', {
      quantity: { unit_id: 'un_82bd37dae5po', value: '10.5' },
      customer_id: 'ac_opnlh43ymyee',
      location_id: 'lc_yonnys0hx3ju',
      lot_number: 'lot_number',
      operation: 'adjust',
    });
  });

  test('list', async () => {
    const responsePromise = client.catalog.items.inventory.list('it_pej07ckhvu62');
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
        'it_pej07ckhvu62',
        { include: ['on_hand'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });
});
