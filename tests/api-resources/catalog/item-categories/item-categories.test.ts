// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource itemCategories', () => {
  test('create: only required params', async () => {
    const responsePromise = client.catalog.itemCategories.create({
      name: 'Electronics',
      type: 'material_category',
      unit_group_id: 'ug_andst6m79n41',
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
    const response = await client.catalog.itemCategories.create({
      name: 'Electronics',
      type: 'material_category',
      unit_group_id: 'ug_andst6m79n41',
      include: ['owner'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.catalog.itemCategories.retrieve('ic_d06g9c6yc9ck');
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
      client.catalog.itemCategories.retrieve(
        'ic_d06g9c6yc9ck',
        { include: ['owner'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.catalog.itemCategories.update('ic_d06g9c6yc9ck');
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
      client.catalog.itemCategories.update(
        'ic_d06g9c6yc9ck',
        {
          include: ['owner'],
          name: 'Electronic Components',
          notes: 'Covers passive and active components; excludes assemblies.',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.catalog.itemCategories.list();
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
      client.catalog.itemCategories.list(
        {
          cursor: 'cursor',
          include: ['owner'],
          limit: 0,
          q: 'q',
          type: 'material_category',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.catalog.itemCategories.delete('ic_d06g9c6yc9ck');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('changeUnitGroup: only required params', async () => {
    const responsePromise = client.catalog.itemCategories.changeUnitGroup('ug_andst6m79n41', {
      id: 'ic_d06g9c6yc9ck',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('changeUnitGroup: required and optional params', async () => {
    const response = await client.catalog.itemCategories.changeUnitGroup('ug_andst6m79n41', {
      id: 'ic_d06g9c6yc9ck',
    });
  });
});
