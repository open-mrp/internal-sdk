// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkUpsert: only required params', async () => {
    const responsePromise = client.catalog.unitGroups.actions.bulkUpsert({
      unit_groups: [
        {
          base_unit: {
            id: 'un_82bd37dae5po',
            abbreviation: 'abbreviation',
            name: 'name',
          },
          name: 'Weight',
          type: 'mass',
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
    const response = await client.catalog.unitGroups.actions.bulkUpsert({
      unit_groups: [
        {
          base_unit: {
            id: 'un_82bd37dae5po',
            abbreviation: 'abbreviation',
            name: 'name',
          },
          name: 'Weight',
          type: 'mass',
          notes: 'notes',
          unit_conversions: [
            {
              unit: {
                id: 'un_82bd37dae5po',
                abbreviation: 'abbreviation',
                name: 'name',
              },
              discount_percentage: 1,
            },
          ],
        },
      ],
    });
  });

  test('export: only required params', async () => {
    const responsePromise = client.catalog.unitGroups.actions.export({ q: null });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('export: required and optional params', async () => {
    const response = await client.catalog.unitGroups.actions.export({ q: null });
  });
});
