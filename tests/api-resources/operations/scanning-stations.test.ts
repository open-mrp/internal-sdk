// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scanningStations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.scanningStations.create({
      department_id: 'dp_01791c25ab59da4704cba61874',
      name: 'Packaging Line 1',
      operator_requirement: 'none',
      type: 'init_batch',
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
    const response = await client.operations.scanningStations.create({
      department_id: 'dp_01791c25ab59da4704cba61874',
      name: 'Packaging Line 1',
      operator_requirement: 'none',
      type: 'init_batch',
      include: ['department'],
      label_size: '1x1',
      label_type: 'tag',
      notes: 'notes',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.operations.scanningStations.retrieve('scst_0129335dd6286056a97024fcc1');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.scanningStations.retrieve(
        'scst_0129335dd6286056a97024fcc1',
        { include: ['department'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.operations.scanningStations.update('scst_0129335dd6286056a97024fcc1');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.scanningStations.update(
        'scst_0129335dd6286056a97024fcc1',
        {
          include: ['department'],
          label_size: '1x1',
          label_type: 'tag',
          name: 'Station B',
          notes: 'notes',
          operator_requirement: 'none',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.operations.scanningStations.list();
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
      client.operations.scanningStations.list(
        {
          cursor: 'cursor',
          include: ['department'],
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.operations.scanningStations.delete('scst_0129335dd6286056a97024fcc1');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('consumptions: only required params', async () => {
    const responsePromise = client.operations.scanningStations.consumptions(
      'scst_0129335dd6286056a97024fcc1',
      { batch_ids: ['bt_017313a7df2d7ac8d895809747'] },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('consumptions: required and optional params', async () => {
    const response = await client.operations.scanningStations.consumptions(
      'scst_0129335dd6286056a97024fcc1',
      {
        batch_ids: ['bt_017313a7df2d7ac8d895809747'],
        production_step_id: 'prst_0159474175bb59f4b1990404ee',
        split_quantity: {
          id: 'bt_017313a7df2d7ac8d895809747',
          measure: '10.5',
          unit_id: 'un_01966263f74a5a0cae356000a1',
        },
      },
    );
  });

  test('retrieveBatches', async () => {
    const responsePromise = client.operations.scanningStations.retrieveBatches(
      'scst_0129335dd6286056a97024fcc1',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveBatches: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.scanningStations.retrieveBatches(
        'scst_0129335dd6286056a97024fcc1',
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('updateProductionSteps: only required params', async () => {
    const responsePromise = client.operations.scanningStations.updateProductionSteps(
      'scst_0129335dd6286056a97024fcc1',
      { name: 'Mixing' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateProductionSteps: required and optional params', async () => {
    const response = await client.operations.scanningStations.updateProductionSteps(
      'scst_0129335dd6286056a97024fcc1',
      { name: 'Mixing' },
    );
  });
});
