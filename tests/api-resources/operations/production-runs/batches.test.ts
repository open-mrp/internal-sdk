// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batches', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.productionRuns.batches.create('', {
      batches: [
        {
          item_id: 'it_01jm4r6700f8nwq3v5hx2d9ktp',
          production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
          quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          quantity_value: '100',
          scanning_station_id: null,
          seconds_unit_id: null,
          seconds_value: null,
          waste_unit_id: null,
          waste_value: null,
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

  test('create: required and optional params', async () => {
    const response = await client.operations.productionRuns.batches.create('', {
      batches: [
        {
          item_id: 'it_01jm4r6700f8nwq3v5hx2d9ktp',
          production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
          quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          quantity_value: '100',
          scanning_station_id: null,
          seconds_unit_id: null,
          seconds_value: null,
          waste_unit_id: null,
          waste_value: null,
        },
      ],
    });
  });

  test('list', async () => {
    const responsePromise = client.operations.productionRuns.batches.list('prru_01jm4r6700f8nwq3v5hx2d9ktp');
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
      client.operations.productionRuns.batches.list(
        'prru_01jm4r6700f8nwq3v5hx2d9ktp',
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
