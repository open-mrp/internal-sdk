// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountPrices', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sales.accountPrices.create({
      product_line_id: 'pdln_k9bnlgvxhxjh',
      rate: {
        denominator_unit_id: 'un_82bd37dae5po',
        numerator_unit_id: 'un_82bd37dae5po',
        value: '25.50',
      },
      recipient_account_id: 'ac_ykxoradjoeb3',
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
    const response = await client.sales.accountPrices.create({
      product_line_id: 'pdln_k9bnlgvxhxjh',
      rate: {
        denominator_unit_id: 'un_82bd37dae5po',
        numerator_unit_id: 'un_82bd37dae5po',
        value: '25.50',
      },
      recipient_account_id: 'ac_ykxoradjoeb3',
      include: ['recipient_account'],
      attribute_ids: ['at_rf1w295jt5ia'],
      category_ids: ['ic_d06g9c6yc9ck'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.sales.accountPrices.retrieve('acpr_7l4j483kf32p');
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
        'acpr_7l4j483kf32p',
        { include: ['recipient_account'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.sales.accountPrices.update('acpr_7l4j483kf32p');
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
        'acpr_7l4j483kf32p',
        {
          include: ['recipient_account'],
          attribute_ids: ['string'],
          category_ids: ['string'],
          product_line_id: 'product_line_id',
          rate: {
            denominator_unit_id: 'un_82bd37dae5po',
            numerator_unit_id: 'un_82bd37dae5po',
            value: '30.000000000000000000000000000000',
          },
          recipient_account_id: 'recipient_account_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.sales.accountPrices.list();
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
      client.sales.accountPrices.list(
        {
          cursor: 'cursor',
          include: ['recipient_account'],
          limit: 0,
          q: 'q',
          recipient_account_id: 'recipient_account_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.sales.accountPrices.delete('acpr_7l4j483kf32p');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
