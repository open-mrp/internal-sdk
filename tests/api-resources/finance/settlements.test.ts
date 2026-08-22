// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource settlements', () => {
  test('create: only required params', async () => {
    const responsePromise = client.finance.settlements.create({
      allocations: [
        {
          amount: '150.00',
          invoice_id: 'iv_m982ezb0fgp7',
          transaction_id: 'tx_hvh9thtzaezn',
        },
      ],
      responsible_user_id: 'us_43irtlt2ajz6',
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
          invoice_id: 'iv_m982ezb0fgp7',
          transaction_id: 'tx_hvh9thtzaezn',
          note: 'note',
        },
      ],
      responsible_user_id: 'us_43irtlt2ajz6',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.finance.settlements.retrieve('sl_2k5juz0yf5a7');
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
        'sl_2k5juz0yf5a7',
        { include: ['responsible_user'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.finance.settlements.update('sl_2k5juz0yf5a7');
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
        'sl_2k5juz0yf5a7',
        {
          note: 'Partial payment applied',
          number: 'number',
          responsible_user_id: 'us_43irtlt2ajz6',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
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
          ends_at: 'ends_at',
          invoice_ids: ['string'],
          limit: 0,
          q: 'q',
          starts_at: 'starts_at',
          transaction_ids: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.finance.settlements.delete('sl_2k5juz0yf5a7');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
