// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  test('create: only required params', async () => {
    const responsePromise = client.catalog.products.create({
      attribute_ids: ['string'],
      category_id: 'ic_01jm4r6700f8nwq3v5hx2d9ktp',
      product_line_id: null,
      sku: 'ALM-2024-1001',
      type: 'sale',
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
    const response = await client.catalog.products.create({
      attribute_ids: ['string'],
      category_id: 'ic_01jm4r6700f8nwq3v5hx2d9ktp',
      product_line_id: null,
      sku: 'ALM-2024-1001',
      type: 'sale',
      include: ['product_line'],
      burn_rate: {
        denominator_unit_id: 'denominator_unit_id',
        numerator_unit_id: 'numerator_unit_id',
        value: 'value',
      },
      description: 'description',
      notes: 'notes',
      portal_visibility: 'visible',
      unit_cost: {
        denominator_unit_id: 'denominator_unit_id',
        numerator_unit_id: 'numerator_unit_id',
        value: 'value',
      },
      unit_price: {
        denominator_unit_id: 'denominator_unit_id',
        numerator_unit_id: 'numerator_unit_id',
        value: 'value',
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.catalog.products.retrieve('id');
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
      client.catalog.products.retrieve(
        'id',
        { include: ['product_line'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.catalog.products.update('id');
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
      client.catalog.products.update(
        'id',
        {
          include: ['product_line'],
          description: null,
          notes: null,
          portal_visibility: 'visible',
          sku: 'SKU-002',
          unit_price: {
            denominator_unit_id: 'denominator_unit_id',
            numerator_unit_id: 'numerator_unit_id',
            value: 'value',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.catalog.products.list();
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
      client.catalog.products.list(
        {
          attribute_ids: ['string'],
          category_ids: ['string'],
          cursor: 'cursor',
          customer_ids: ['string'],
          end_date: '2019-12-27T18:11:19.117Z',
          include: ['product_line'],
          limit: 0,
          portal_visibility: 'visible',
          product_line_ids: ['string'],
          q: 'q',
          start_date: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.catalog.products.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.catalog.products.delete(
        'id',
        { include: ['product_line'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
