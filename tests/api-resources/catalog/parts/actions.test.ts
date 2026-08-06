// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkUpsert: only required params', async () => {
    const responsePromise = client.catalog.parts.actions.bulkUpsert({
      parts: [
        {
          category: { id: 'ic_d06g9c6yc9ck', name: 'name' },
          properties: [{ name: 'name', value: 'value' }],
          sku: 'BRG-6204-2RS',
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
    const response = await client.catalog.parts.actions.bulkUpsert({
      parts: [
        {
          category: { id: 'ic_d06g9c6yc9ck', name: 'name' },
          properties: [{ name: 'name', value: 'value' }],
          sku: 'BRG-6204-2RS',
          description: 'description',
          notes: 'notes',
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
        },
      ],
    });
  });

  test('export: only required params', async () => {
    const responsePromise = client.catalog.parts.actions.export({
      attribute_ids: ['string'],
      category_ids: ['string'],
      ends_at: null,
      q: null,
      starts_at: null,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('export: required and optional params', async () => {
    const response = await client.catalog.parts.actions.export({
      attribute_ids: ['string'],
      category_ids: ['string'],
      ends_at: null,
      q: null,
      starts_at: null,
    });
  });
});
