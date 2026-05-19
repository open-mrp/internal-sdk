// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource attributes', () => {
  test('create: only required params', async () => {
    const responsePromise = client.catalog.properties.attributes.create('pp_01jm4r6700f8nwq3v5hx2d9ktp', {
      sort_order: 1,
      value: 'Red',
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
    const response = await client.catalog.properties.attributes.create('pp_01jm4r6700f8nwq3v5hx2d9ktp', {
      sort_order: 1,
      value: 'Red',
      color: 'blue',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.catalog.properties.attributes.retrieve('at_01jm4r6700f8nwq3v5hx2d9ktp', {
      property_id: 'pp_01jm4r6700f8nwq3v5hx2d9ktp',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.catalog.properties.attributes.retrieve('at_01jm4r6700f8nwq3v5hx2d9ktp', {
      property_id: 'pp_01jm4r6700f8nwq3v5hx2d9ktp',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.catalog.properties.attributes.update('at_01jm4r6700f8nwq3v5hx2d9ktp', {
      property_id: 'pp_01jm4r6700f8nwq3v5hx2d9ktp',
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
    const response = await client.catalog.properties.attributes.update('at_01jm4r6700f8nwq3v5hx2d9ktp', {
      property_id: 'pp_01jm4r6700f8nwq3v5hx2d9ktp',
      color: 'blue',
      sort_order: 0,
      value: 'Blue',
    });
  });

  test('list', async () => {
    const responsePromise = client.catalog.properties.attributes.list('pp_01jm4r6700f8nwq3v5hx2d9ktp');
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
      client.catalog.properties.attributes.list(
        'pp_01jm4r6700f8nwq3v5hx2d9ktp',
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.catalog.properties.attributes.delete('at_01jm4r6700f8nwq3v5hx2d9ktp', {
      property_id: 'pp_01jm4r6700f8nwq3v5hx2d9ktp',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.catalog.properties.attributes.delete('at_01jm4r6700f8nwq3v5hx2d9ktp', {
      property_id: 'pp_01jm4r6700f8nwq3v5hx2d9ktp',
    });
  });
});
