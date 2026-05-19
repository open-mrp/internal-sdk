// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource items', () => {
  test('retrieve', async () => {
    const responsePromise = client.catalog.items.retrieve('it_01jm4r6700f8nwq3v5hx2d9ktp');
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
      client.catalog.items.retrieve(
        'it_01jm4r6700f8nwq3v5hx2d9ktp',
        { include: ['category'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.catalog.items.update('ic_01jm4r6700f8nwq3v5hx2d9ktp', {
      id: 'it_01jm4r6700f8nwq3v5hx2d9ktp',
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
    const response = await client.catalog.items.update('ic_01jm4r6700f8nwq3v5hx2d9ktp', {
      id: 'it_01jm4r6700f8nwq3v5hx2d9ktp',
      include: ['category'],
    });
  });

  test('list', async () => {
    const responsePromise = client.catalog.items.list();
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
      client.catalog.items.list(
        {
          attribute_ids: ['string'],
          category_ids: ['string'],
          cursor: 'cursor',
          customer_ids: ['string'],
          end_date: '2019-12-27T18:11:19.117Z',
          include: ['category'],
          limit: 0,
          product_line_ids: ['string'],
          q: 'q',
          start_date: '2019-12-27T18:11:19.117Z',
          subassembly_filter: 'all',
          supplier_id: 'supplier_id',
          types: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('retrieveCosts', async () => {
    const responsePromise = client.catalog.items.retrieveCosts('it_01jm4r6700f8nwq3v5hx2d9ktp');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveTrends: only required params', async () => {
    const responsePromise = client.catalog.items.retrieveTrends('it_01jm4r6700f8nwq3v5hx2d9ktp', {
      trend_type: 'trend_type',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveTrends: required and optional params', async () => {
    const response = await client.catalog.items.retrieveTrends('it_01jm4r6700f8nwq3v5hx2d9ktp', {
      trend_type: 'trend_type',
    });
  });
});
