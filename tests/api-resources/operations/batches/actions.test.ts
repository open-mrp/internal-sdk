// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkDelete: only required params', async () => {
    const responsePromise = client.operations.batches.actions.bulkDelete({ batch_ids: ['bt_fuies8j4pk45'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkDelete: required and optional params', async () => {
    const response = await client.operations.batches.actions.bulkDelete({ batch_ids: ['bt_fuies8j4pk45'] });
  });

  test('close: only required params', async () => {
    const responsePromise = client.operations.batches.actions.close({ batch_id: 'bt_fuies8j4pk45' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('close: required and optional params', async () => {
    const response = await client.operations.batches.actions.close({ batch_id: 'bt_fuies8j4pk45' });
  });

  test('initialize: only required params', async () => {
    const responsePromise = client.operations.batches.actions.initialize({
      batch_id: 'bt_fuies8j4pk45',
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

  test('initialize: required and optional params', async () => {
    const response = await client.operations.batches.actions.initialize({
      batch_id: 'bt_fuies8j4pk45',
      scanning_station_id: 'scst_t71bn7lq5yov',
    });
  });

  test('merge: only required params', async () => {
    const responsePromise = client.operations.batches.actions.merge({
      batch_ids: ['bt_fuies8j4pk45'],
      production_step_id: 'prst_0ht5mkqx5a6t',
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

  test('merge: required and optional params', async () => {
    const response = await client.operations.batches.actions.merge({
      batch_ids: ['bt_fuies8j4pk45'],
      production_step_id: 'prst_0ht5mkqx5a6t',
      scanning_station_id: 'scst_t71bn7lq5yov',
    });
  });

  test('move: only required params', async () => {
    const responsePromise = client.operations.batches.actions.move({
      batch_ids: ['bt_fuies8j4pk45'],
      production_step_id: 'prst_0ht5mkqx5a6t',
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

  test('move: required and optional params', async () => {
    const response = await client.operations.batches.actions.move({
      batch_ids: ['bt_fuies8j4pk45'],
      production_step_id: 'prst_0ht5mkqx5a6t',
      scanning_station_id: 'scst_t71bn7lq5yov',
    });
  });

  test('split: only required params', async () => {
    const responsePromise = client.operations.batches.actions.split({
      batch_ids: ['bt_fuies8j4pk45'],
      close_batch: false,
      firsts: {
        id: 'bt_fuies8j4pk45',
        measure: '10.5',
        unit_id: 'un_82bd37dae5po',
      },
      production_step_id: 'prst_0ht5mkqx5a6t',
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

  test('split: required and optional params', async () => {
    const response = await client.operations.batches.actions.split({
      batch_ids: ['bt_fuies8j4pk45'],
      close_batch: false,
      firsts: {
        id: 'bt_fuies8j4pk45',
        measure: '10.5',
        unit_id: 'un_82bd37dae5po',
      },
      production_step_id: 'prst_0ht5mkqx5a6t',
      scanning_station_id: 'scst_t71bn7lq5yov',
      seconds: {
        id: 'id',
        measure: 'measure',
        unit_id: 'unit_id',
      },
      waste: {
        id: 'id',
        measure: 'measure',
        unit_id: 'unit_id',
      },
    });
  });
});
