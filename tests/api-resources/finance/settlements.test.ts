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
          invoice_id: 'iv_01jm4r6700f8nwq3v5hx2d9ktp',
          note: null,
          transaction_id: 'tx_01jm4r6700f8nwq3v5hx2d9ktp',
        },
      ],
      responsible_user_id: 'us_01gf7a8200e9pvbd6bgyq395ae',
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
          invoice_id: 'iv_01jm4r6700f8nwq3v5hx2d9ktp',
          note: null,
          transaction_id: 'tx_01jm4r6700f8nwq3v5hx2d9ktp',
        },
      ],
      responsible_user_id: 'us_01gf7a8200e9pvbd6bgyq395ae',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.finance.settlements.retrieve('id');
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
        'id',
        { include: ['allocations'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.finance.settlements.update('id', {
      note: 'Partial payment applied',
      number: null,
      responsible_user_id: 'us_01gf7a8200e9pvbd6bgyq395ae',
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
    const response = await client.finance.settlements.update('id', {
      note: 'Partial payment applied',
      number: null,
      responsible_user_id: 'us_01gf7a8200e9pvbd6bgyq395ae',
    });
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
    const responsePromise = client.finance.settlements.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
