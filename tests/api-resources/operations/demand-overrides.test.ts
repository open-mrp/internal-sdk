// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource demandOverrides', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.demandOverrides.create({
      adjustment: 'delta_units',
      period_ends_at: '2026-11-30T00:00:00Z',
      period_starts_at: '2026-09-01T00:00:00Z',
      scope_ref_id: 'it_pej07ckhvu62',
      scope_type: 'item',
      value: 5000,
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
    const response = await client.operations.demandOverrides.create({
      adjustment: 'delta_units',
      period_ends_at: '2026-11-30T00:00:00Z',
      period_starts_at: '2026-09-01T00:00:00Z',
      scope_ref_id: 'it_pej07ckhvu62',
      scope_type: 'item',
      value: 5000,
      include: ['scope'],
      active: false,
      effective_at: '2019-12-27T18:11:19.117Z',
      expires_at: '2019-12-27T18:11:19.117Z',
      note: 'note',
      reason: 'new_customer',
      unit_id: 'unit_id',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.operations.demandOverrides.retrieve('deov_p8roudstrung');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.demandOverrides.retrieve(
        'deov_p8roudstrung',
        { include: ['scope'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.operations.demandOverrides.update('deov_p8roudstrung');
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
      client.operations.demandOverrides.update(
        'deov_p8roudstrung',
        {
          include: ['scope'],
          active: false,
          adjustment: 'absolute',
          expires_at: '2019-12-27T18:11:19.117Z',
          note: 'note',
          period_ends_at: '2019-12-27T18:11:19.117Z',
          period_starts_at: '2019-12-27T18:11:19.117Z',
          reason: 'new_customer',
          unit_id: 'unit_id',
          value: 7500,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.operations.demandOverrides.list();
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
      client.operations.demandOverrides.list(
        {
          adjustments: ['absolute'],
          cursor: 'cursor',
          ends_at: 'ends_at',
          include: ['scope'],
          limit: 0,
          q: 'q',
          scope_ref_ids: ['string'],
          scope_types: ['item'],
          starts_at: 'starts_at',
          statuses: ['active'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.operations.demandOverrides.delete('deov_p8roudstrung');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
