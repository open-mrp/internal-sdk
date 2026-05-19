// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batches', () => {
  test('delete', async () => {
    const responsePromise = client.operations.batches.delete('bt_01jm4r6700f8nwq3v5hx2d9ktp');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('nextSteps: only required params', async () => {
    const responsePromise = client.operations.batches.nextSteps('', {
      scanning_station_id: 'scst_01jm4r6700f8nwq3v5hx2d9ktp',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('nextSteps: required and optional params', async () => {
    const response = await client.operations.batches.nextSteps('', {
      scanning_station_id: 'scst_01jm4r6700f8nwq3v5hx2d9ktp',
    });
  });

  test('remainingQuantities: only required params', async () => {
    const responsePromise = client.operations.batches.remainingQuantities({
      batch_ids: ['bt_01jm4r6700f8nwq3v5hx2d9ktp'],
      production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('remainingQuantities: required and optional params', async () => {
    const response = await client.operations.batches.remainingQuantities({
      batch_ids: ['bt_01jm4r6700f8nwq3v5hx2d9ktp'],
      production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
    });
  });

  test('retrieveFlow', async () => {
    const responsePromise = client.operations.batches.retrieveFlow('bt_01jm4r6700f8nwq3v5hx2d9ktp');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
