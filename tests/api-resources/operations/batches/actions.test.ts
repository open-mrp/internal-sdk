// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkDelete: only required params', async () => {
    const responsePromise = client.operations.batches.actions.bulkDelete({
      batch_ids: ['bt_017313a7df2d7ac8d895809747'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkDelete: required and optional params', async () => {
    const response = await client.operations.batches.actions.bulkDelete({
      batch_ids: ['bt_017313a7df2d7ac8d895809747'],
    });
  });

  test('close: only required params', async () => {
    const responsePromise = client.operations.batches.actions.close({
      batch_id: 'bt_017313a7df2d7ac8d895809747',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('close: required and optional params', async () => {
    const response = await client.operations.batches.actions.close({
      batch_id: 'bt_017313a7df2d7ac8d895809747',
    });
  });

  test('initialize: only required params', async () => {
    const responsePromise = client.operations.batches.actions.initialize({
      batch_id: 'bt_017313a7df2d7ac8d895809747',
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

  test('initialize: required and optional params', async () => {
    const response = await client.operations.batches.actions.initialize({
      batch_id: 'bt_017313a7df2d7ac8d895809747',
      scanning_station_id: 'scst_0129335dd6286056a97024fcc1',
    });
  });

  test('merge: only required params', async () => {
    const responsePromise = client.operations.batches.actions.merge({
      batch_ids: ['bt_017313a7df2d7ac8d895809747'],
      production_step_id: 'prst_0159474175bb59f4b1990404ee',
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

  test('merge: required and optional params', async () => {
    const response = await client.operations.batches.actions.merge({
      batch_ids: ['bt_017313a7df2d7ac8d895809747'],
      production_step_id: 'prst_0159474175bb59f4b1990404ee',
      scanning_station_id: 'scst_0129335dd6286056a97024fcc1',
    });
  });

  test('move: only required params', async () => {
    const responsePromise = client.operations.batches.actions.move({
      batch_ids: ['bt_017313a7df2d7ac8d895809747'],
      production_step_id: 'prst_0159474175bb59f4b1990404ee',
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

  test('move: required and optional params', async () => {
    const response = await client.operations.batches.actions.move({
      batch_ids: ['bt_017313a7df2d7ac8d895809747'],
      production_step_id: 'prst_0159474175bb59f4b1990404ee',
      scanning_station_id: 'scst_0129335dd6286056a97024fcc1',
    });
  });

  test('split: only required params', async () => {
    const responsePromise = client.operations.batches.actions.split({
      batch_ids: ['bt_017313a7df2d7ac8d895809747'],
      close_batch: false,
      firsts: {
        id: 'bt_017313a7df2d7ac8d895809747',
        measure: '10.5',
        unit_id: 'un_01966263f74a5a0cae356000a1',
      },
      production_step_id: 'prst_0159474175bb59f4b1990404ee',
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

  test('split: required and optional params', async () => {
    const response = await client.operations.batches.actions.split({
      batch_ids: ['bt_017313a7df2d7ac8d895809747'],
      close_batch: false,
      firsts: {
        id: 'bt_017313a7df2d7ac8d895809747',
        measure: '10.5',
        unit_id: 'un_01966263f74a5a0cae356000a1',
      },
      production_step_id: 'prst_0159474175bb59f4b1990404ee',
      scanning_station_id: 'scst_0129335dd6286056a97024fcc1',
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
