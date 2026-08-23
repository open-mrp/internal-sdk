// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkUpsert: only required params', async () => {
    const responsePromise = client.operations.scanningStations.actions.bulkUpsert({
      scanning_stations: [
        {
          department: { id: 'dp_m0jayebxnkos', name: 'Fabrication' },
          name: 'Packaging Line 1',
          operator_requirement: 'none',
          type: 'init_batch',
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
    const response = await client.operations.scanningStations.actions.bulkUpsert({
      scanning_stations: [
        {
          department: { id: 'dp_m0jayebxnkos', name: 'Fabrication' },
          name: 'Packaging Line 1',
          operator_requirement: 'none',
          type: 'init_batch',
          label_size: '1x1',
          label_type: 'tag',
          notes: 'notes',
        },
      ],
      include: ['created_by'],
    });
  });

  test('export: only required params', async () => {
    const responsePromise = client.operations.scanningStations.actions.export({ q: null });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('export: required and optional params', async () => {
    const response = await client.operations.scanningStations.actions.export({
      q: null,
      include: ['created_by'],
    });
  });
});
