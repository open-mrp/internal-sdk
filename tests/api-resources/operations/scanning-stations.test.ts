// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scanningStations', () => {
  test('retrieve', async () => {
    const responsePromise = client.operations.scanningStations.retrieve('scst_01jm4r6700f8nwq3v5hx2d9ktp');
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
        'scst_01jm4r6700f8nwq3v5hx2d9ktp',
        { include: ['department'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.operations.scanningStations.update('scst_01jm4r6700f8nwq3v5hx2d9ktp');
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
        'scst_01jm4r6700f8nwq3v5hx2d9ktp',
        {
          include: ['department'],
          label_size: '1x1',
          label_type: 'tag',
          name: 'Station B',
          notes: null,
          operator_requirement: 'none',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.operations.scanningStations.delete('scst_01jm4r6700f8nwq3v5hx2d9ktp');
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
      'scst_01jm4r6700f8nwq3v5hx2d9ktp',
      {
        batch_ids: ['bt_01jm4r6700f8nwq3v5hx2d9ktp'],
        production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
        split_quantity: {
          id: 'bt_01jm4r6700f8nwq3v5hx2d9ktp',
          measure: '10.5',
          unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
        },
      },
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
      'scst_01jm4r6700f8nwq3v5hx2d9ktp',
      {
        batch_ids: ['bt_01jm4r6700f8nwq3v5hx2d9ktp'],
        production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
        split_quantity: {
          id: 'bt_01jm4r6700f8nwq3v5hx2d9ktp',
          measure: '10.5',
          unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
        },
      },
    );
  });

  test('retrieveBatches', async () => {
    const responsePromise = client.operations.scanningStations.retrieveBatches(
      'scst_01jm4r6700f8nwq3v5hx2d9ktp',
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
        'scst_01jm4r6700f8nwq3v5hx2d9ktp',
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('retrieveScanningStations', async () => {
    const responsePromise = client.operations.scanningStations.retrieveScanningStations();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveScanningStations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.scanningStations.retrieveScanningStations(
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

  test('scanningStations: only required params', async () => {
    const responsePromise = client.operations.scanningStations.scanningStations({
      department_id: 'dp_01gf7a8200er3ar3pkfrb6kk30',
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

  test('scanningStations: required and optional params', async () => {
    const response = await client.operations.scanningStations.scanningStations({
      department_id: 'dp_01gf7a8200er3ar3pkfrb6kk30',
      name: 'Packaging Line 1',
      operator_requirement: 'none',
      type: 'init_batch',
      include: ['department'],
      label_size: '1x1',
      label_type: 'tag',
      notes: 'notes',
    });
  });

  test('updateProductionSteps: only required params', async () => {
    const responsePromise = client.operations.scanningStations.updateProductionSteps(
      'scst_01jm4r6700f8nwq3v5hx2d9ktp',
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
      'scst_01jm4r6700f8nwq3v5hx2d9ktp',
      { name: 'Mixing' },
    );
  });
});
