// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batches', () => {
  test('delete', async () => {
    const responsePromise = client.operations.batches.delete('bt_fuies8j4pk45');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('nextSteps: only required params', async () => {
    const responsePromise = client.operations.batches.nextSteps('bt_fuies8j4pk45', {
      scanning_station_id: 'scst_t71bn7lq5yov',
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
    const response = await client.operations.batches.nextSteps('bt_fuies8j4pk45', {
      scanning_station_id: 'scst_t71bn7lq5yov',
    });
  });

  test('remainingQuantities: only required params', async () => {
    const responsePromise = client.operations.batches.remainingQuantities({
      batch_ids: ['bt_fuies8j4pk45'],
      production_step_id: 'prst_0ht5mkqx5a6t',
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
      batch_ids: ['bt_fuies8j4pk45'],
      production_step_id: 'prst_0ht5mkqx5a6t',
    });
  });

  test('retrieveFlow', async () => {
    const responsePromise = client.operations.batches.retrieveFlow('bt_fuies8j4pk45');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
