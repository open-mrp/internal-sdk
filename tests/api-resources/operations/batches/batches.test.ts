// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batches', () => {
  test('delete', async () => {
    const responsePromise = client.operations.batches.delete('bt_017313a7df2d7ac8d895809747');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('nextSteps: only required params', async () => {
    const responsePromise = client.operations.batches.nextSteps('bt_017313a7df2d7ac8d895809747', {
      scanning_station_id: 'scst_0129335dd6286056a97024fcc1',
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
    const response = await client.operations.batches.nextSteps('bt_017313a7df2d7ac8d895809747', {
      scanning_station_id: 'scst_0129335dd6286056a97024fcc1',
    });
  });

  test('remainingQuantities: only required params', async () => {
    const responsePromise = client.operations.batches.remainingQuantities({
      batch_ids: ['bt_017313a7df2d7ac8d895809747'],
      production_step_id: 'prst_0159474175bb59f4b1990404ee',
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
      batch_ids: ['bt_017313a7df2d7ac8d895809747'],
      production_step_id: 'prst_0159474175bb59f4b1990404ee',
    });
  });

  test('retrieveFlow', async () => {
    const responsePromise = client.operations.batches.retrieveFlow('bt_017313a7df2d7ac8d895809747');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
