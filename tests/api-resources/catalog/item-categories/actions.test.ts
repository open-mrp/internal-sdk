// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkUpsert: only required params', async () => {
    const responsePromise = client.catalog.itemCategories.actions.bulkUpsert({
      item_categories: [
        {
          name: 'Electronics',
          notes: null,
          property_names: ['string'],
          type: 'material_category',
          unit_group: { id: 'ug_andst6m79n41', name: 'name' },
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkUpsert: required and optional params', async () => {
    const response = await client.catalog.itemCategories.actions.bulkUpsert({
      item_categories: [
        {
          name: 'Electronics',
          notes: null,
          property_names: ['string'],
          type: 'material_category',
          unit_group: { id: 'ug_andst6m79n41', name: 'name' },
        },
      ],
      include: ['created_by'],
    });
  });

  test('export: only required params', async () => {
    const responsePromise = client.catalog.itemCategories.actions.export({ q: null });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('export: required and optional params', async () => {
    const response = await client.catalog.itemCategories.actions.export({ q: null, include: ['created_by'] });
  });
});
