// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource salesTargets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sales.accountUsers.salesTargets.create('acus_e5zu8bde0z3h', {
      amount_unit_id: 'un_82bd37dae5po',
      amount_value: '50000.00',
      ends_at: '2026-03-31T00:00:00Z',
      starts_at: '2026-01-01T00:00:00Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.sales.accountUsers.salesTargets.create('acus_e5zu8bde0z3h', {
      amount_unit_id: 'un_82bd37dae5po',
      amount_value: '50000.00',
      ends_at: '2026-03-31T00:00:00Z',
      starts_at: '2026-01-01T00:00:00Z',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.sales.accountUsers.salesTargets.update('example', {
      id: 'acus_e5zu8bde0z3h',
      amount_unit_id: 'un_82bd37dae5po',
      amount_value: '75000.00',
      ends_at: '2026-06-30T00:00:00Z',
      starts_at: '2026-04-01T00:00:00Z',
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
    const response = await client.sales.accountUsers.salesTargets.update('example', {
      id: 'acus_e5zu8bde0z3h',
      amount_unit_id: 'un_82bd37dae5po',
      amount_value: '75000.00',
      ends_at: '2026-06-30T00:00:00Z',
      starts_at: '2026-04-01T00:00:00Z',
    });
  });

  test('list', async () => {
    const responsePromise = client.sales.accountUsers.salesTargets.list('acus_e5zu8bde0z3h');
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
      client.sales.accountUsers.salesTargets.list(
        'acus_e5zu8bde0z3h',
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
