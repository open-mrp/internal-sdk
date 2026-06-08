// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource settlements', () => {
  test('create: only required params', async () => {
    const responsePromise = client.finance.settlements.create({
      allocations: [
        {
          amount: '150.00',
          invoice_id: 'iv_018b5949ada8abca36358bbea9',
          transaction_id: 'tx_01fc4d4f2b2ee1fa6b6d87257a',
        },
      ],
      responsible_user_id: 'us_0151164dcaea4cbded27b50aae',
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
    const response = await client.finance.settlements.create({
      allocations: [
        {
          amount: '150.00',
          invoice_id: 'iv_018b5949ada8abca36358bbea9',
          transaction_id: 'tx_01fc4d4f2b2ee1fa6b6d87257a',
          note: 'note',
        },
      ],
      responsible_user_id: 'us_0151164dcaea4cbded27b50aae',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.finance.settlements.retrieve('sl_014f3f9af18ff1c8ded3205149');
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
      client.finance.settlements.retrieve(
        'sl_014f3f9af18ff1c8ded3205149',
        { include: ['responsible_user'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.finance.settlements.update('sl_014f3f9af18ff1c8ded3205149');
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
      client.finance.settlements.update(
        'sl_014f3f9af18ff1c8ded3205149',
        {
          note: 'note',
          number: 'number',
          responsible_user_id: 'responsible_user_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.finance.settlements.list();
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
      client.finance.settlements.list(
        {
          cursor: 'cursor',
          end_date: 'end_date',
          invoice_ids: ['string'],
          limit: 0,
          q: 'q',
          start_date: 'start_date',
          transaction_ids: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.finance.settlements.delete('sl_014f3f9af18ff1c8ded3205149');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
