// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountPrices', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sales.accountPrices.create({
      attribute_ids: ['at_01c9493ec0c46bb0ed12708ae4'],
      category_ids: ['ic_01ae7bd7bfd21ca0ab81e1357e'],
      product_line_id: 'pl_01996357326a0d3f7b129542ea',
      rate_denominator_unit_id: 'un_01966263f74a5a0cae356000a1',
      rate_numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
      rate_value: '25.500000000000000000000000000000',
      recipient_account_id: 'ac_01148680966698341a9c0976db',
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
      attribute_ids: ['at_01c9493ec0c46bb0ed12708ae4'],
      category_ids: ['ic_01ae7bd7bfd21ca0ab81e1357e'],
      product_line_id: 'pl_01996357326a0d3f7b129542ea',
      rate_denominator_unit_id: 'un_01966263f74a5a0cae356000a1',
      rate_numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
      rate_value: '25.500000000000000000000000000000',
      recipient_account_id: 'ac_01148680966698341a9c0976db',
      include: ['recipient_account'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.sales.accountPrices.retrieve('acpr_01dfc47cc46b1e0b66ca8eec0a');
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
        'acpr_01dfc47cc46b1e0b66ca8eec0a',
        { include: ['recipient_account'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.sales.accountPrices.update('acpr_01dfc47cc46b1e0b66ca8eec0a');
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
        'acpr_01dfc47cc46b1e0b66ca8eec0a',
        {
          include: ['recipient_account'],
          attribute_ids: ['string'],
          category_ids: ['string'],
          product_line_id: 'product_line_id',
          rate_denominator_unit_id: 'rate_denominator_unit_id',
          rate_numerator_unit_id: 'rate_numerator_unit_id',
          rate_value: 'rate_value',
          recipient_account_id: 'recipient_account_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
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
          limit: 0,
          q: 'q',
          recipient_account_id: 'recipient_account_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.sales.accountPrices.delete('acpr_01dfc47cc46b1e0b66ca8eec0a');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
