// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkUpsert: only required params', async () => {
    const responsePromise = client.catalog.units.actions.bulkUpsert({
      units: [
        {
          abbreviation: 'kg',
          is_base_unit: false,
          name: 'Kilogram',
          offset_denominator: '1',
          offset_numerator: '0',
          ratio_denominator: '1',
          ratio_numerator: '1000',
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
    const response = await client.catalog.units.actions.bulkUpsert({
      units: [
        {
          abbreviation: 'kg',
          is_base_unit: false,
          name: 'Kilogram',
          offset_denominator: '1',
          offset_numerator: '0',
          ratio_denominator: '1',
          ratio_numerator: '1000',
          type: 'mass',
        },
      ],
    });
  });

  test('export: only required params', async () => {
    const responsePromise = client.catalog.units.actions.export({ q: null });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('export: required and optional params', async () => {
    const response = await client.catalog.units.actions.export({ q: null });
  });

  test('validate: only required params', async () => {
    const responsePromise = client.catalog.units.actions.validate({ unit_map: { '0': 'kg' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('validate: required and optional params', async () => {
    const response = await client.catalog.units.actions.validate({ unit_map: { '0': 'kg' } });
  });
});
