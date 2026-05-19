// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource shippingTerms', () => {
  test('retrieve', async () => {
    const responsePromise = client.operations.shippingTerms.retrieve('id');
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
      client.operations.shippingTerms.retrieve(
        'id',
        { include: ['owner'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.operations.shippingTerms.update('id');
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
      client.operations.shippingTerms.update(
        'id',
        {
          include: ['owner'],
          flat_rate: { unit_id: 'unit_id', value: 'value' },
          free_shipping_service_level_ids: ['string'],
          minimum_order_value: { unit_id: 'unit_id', value: 'value' },
          name: 'Collect',
          type: 'free_freight',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.operations.shippingTerms.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveShippingTerms', async () => {
    const responsePromise = client.operations.shippingTerms.retrieveShippingTerms();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveShippingTerms: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.shippingTerms.retrieveShippingTerms(
        {
          cursor: 'cursor',
          include: ['owner'],
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('shippingTerms: only required params', async () => {
    const responsePromise = client.operations.shippingTerms.shippingTerms({
      free_shipping_service_level_ids: ['string'],
      name: 'Prepaid',
      type: 'carrier_rate_freight',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('shippingTerms: required and optional params', async () => {
    const response = await client.operations.shippingTerms.shippingTerms({
      free_shipping_service_level_ids: ['string'],
      name: 'Prepaid',
      type: 'carrier_rate_freight',
      include: ['owner'],
      flat_rate: { unit_id: 'unit_id', value: 'value' },
      minimum_order_value: { unit_id: 'unit_id', value: 'value' },
    });
  });
});
