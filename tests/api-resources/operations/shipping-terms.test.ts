// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource shippingTerms', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.shippingTerms.create({
      name: 'Prepaid',
      type: 'flat_rate_freight',
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
    const response = await client.operations.shippingTerms.create({
      name: 'Prepaid',
      type: 'flat_rate_freight',
      include: ['owner'],
      flat_rate: { unit_id: 'un_01966263f74a5a0cae356000a1', value: '15.00' },
      free_shipping_service_level_ids: ['crop_01cfaf03f104e90ef9680e2a30'],
      minimum_order_value: { unit_id: 'un_01966263f74a5a0cae356000a1', value: '500.00' },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.operations.shippingTerms.retrieve('shtm_014341ab4bb5bf94d5b6936f86');
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
        'shtm_014341ab4bb5bf94d5b6936f86',
        { include: ['owner'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.operations.shippingTerms.update('shtm_014341ab4bb5bf94d5b6936f86');
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
        'shtm_014341ab4bb5bf94d5b6936f86',
        {
          include: ['owner'],
          flat_rate: { unit_id: 'un_01966263f74a5a0cae356000a1', value: '15.00' },
          free_shipping_service_level_ids: ['crop_01cfaf03f104e90ef9680e2a30'],
          minimum_order_value: { unit_id: 'un_01966263f74a5a0cae356000a1', value: '500.00' },
          name: 'Collect',
          type: 'flat_rate_freight',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.operations.shippingTerms.list();
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
      client.operations.shippingTerms.list(
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

  test('delete', async () => {
    const responsePromise = client.operations.shippingTerms.delete('shtm_014341ab4bb5bf94d5b6936f86');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
