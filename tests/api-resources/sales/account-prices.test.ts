// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountPrices', () => {
  test('retrieve', async () => {
    const responsePromise = client.sales.accountPrices.retrieve('acpr_01jm4r6700f8nwq3v5hx2d9ktp');
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
      client.sales.accountPrices.retrieve(
        'acpr_01jm4r6700f8nwq3v5hx2d9ktp',
        { include: ['recipient_account'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.sales.accountPrices.update('');
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
      client.sales.accountPrices.update(
        '',
        {
          include: ['recipient_account'],
          attribute_ids: ['string'],
          category_ids: ['string'],
          product_line_id: 'product_line_id',
          rate_denominator_unit_id: 'rate_denominator_unit_id',
          rate_numerator_unit_id: 'rate_numerator_unit_id',
          rate_value: '30.000000000000000000000000000000',
          recipient_account_id: 'recipient_account_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.sales.accountPrices.delete('acpr_01jm4r6700f8nwq3v5hx2d9ktp');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('accountPrices: only required params', async () => {
    const responsePromise = client.sales.accountPrices.accountPrices({
      attribute_ids: ['at_01jm4r6700f8nwq3v5hx2d9ktp'],
      category_ids: ['ic_01jm4r6700f8nwq3v5hx2d9ktp'],
      product_line_id: 'pl_01jm4r6700f8nwq3v5hx2d9ktp',
      rate_denominator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
      rate_numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
      rate_value: '25.500000000000000000000000000000',
      recipient_account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('accountPrices: required and optional params', async () => {
    const response = await client.sales.accountPrices.accountPrices({
      attribute_ids: ['at_01jm4r6700f8nwq3v5hx2d9ktp'],
      category_ids: ['ic_01jm4r6700f8nwq3v5hx2d9ktp'],
      product_line_id: 'pl_01jm4r6700f8nwq3v5hx2d9ktp',
      rate_denominator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
      rate_numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
      rate_value: '25.500000000000000000000000000000',
      recipient_account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x',
      include: ['recipient_account'],
    });
  });

  test('retrieveAccountPrices', async () => {
    const responsePromise = client.sales.accountPrices.retrieveAccountPrices();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveAccountPrices: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sales.accountPrices.retrieveAccountPrices(
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
          recipient_account_id: 'recipient_account_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
