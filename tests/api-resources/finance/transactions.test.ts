// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.finance.transactions.create({
      adjustment_type: 'adjustment_type',
      amount: '500.00',
      customer_id: 'ac_0170df1ac58e4d24c66fc89f5f',
      method: 'check',
      note: 'Q1 invoice payment',
      responsible_user_id: 'responsible_user_id',
      type: 'payment',
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
    const response = await client.finance.transactions.create({
      adjustment_type: 'adjustment_type',
      amount: '500.00',
      customer_id: 'ac_0170df1ac58e4d24c66fc89f5f',
      method: 'check',
      note: 'Q1 invoice payment',
      responsible_user_id: 'responsible_user_id',
      type: 'payment',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.finance.transactions.retrieve('tx_01fc4d4f2b2ee1fa6b6d87257a');
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
      client.finance.transactions.retrieve(
        'tx_01fc4d4f2b2ee1fa6b6d87257a',
        { include: ['allocations'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.finance.transactions.update('tx_01fc4d4f2b2ee1fa6b6d87257a', {
      adjustment_type: 'adjustment_type',
      amount: '750.00',
      clear_adjustment_type: false,
      clear_responsible_user: false,
      clear_transaction_method: false,
      is_fully_allocated: true,
      method: 'ach',
      note: 'Updated payment note',
      number: 'number',
      responsible_user_id: 'responsible_user_id',
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
    const response = await client.finance.transactions.update('tx_01fc4d4f2b2ee1fa6b6d87257a', {
      adjustment_type: 'adjustment_type',
      amount: '750.00',
      clear_adjustment_type: false,
      clear_responsible_user: false,
      clear_transaction_method: false,
      is_fully_allocated: true,
      method: 'ach',
      note: 'Updated payment note',
      number: 'number',
      responsible_user_id: 'responsible_user_id',
    });
  });

  test('list', async () => {
    const responsePromise = client.finance.transactions.list();
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
      client.finance.transactions.list(
        {
          adjustment_types: ['string'],
          cursor: 'cursor',
          customer_group_ids: ['string'],
          customer_ids: ['string'],
          end_date: 'end_date',
          limit: 0,
          methods: ['string'],
          q: 'q',
          start_date: 'start_date',
          status: 'status',
          types: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.finance.transactions.delete('tx_01fc4d4f2b2ee1fa6b6d87257a');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
