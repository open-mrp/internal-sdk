// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scanningStations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.scanningStations.create({
      department_id: 'dp_m0jayebxnkos',
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
      department_id: 'dp_m0jayebxnkos',
      name: 'Packaging Line 1',
      operator_requirement: 'none',
      type: 'init_batch',
      include: ['department'],
      label_size: '1x1',
      label_type: 'tag',
      notes: 'Primary intake station on the receiving dock.',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.operations.scanningStations.retrieve('scst_t71bn7lq5yov');
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
        'scst_t71bn7lq5yov',
        { include: ['department'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.operations.scanningStations.update('scst_t71bn7lq5yov');
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
        'scst_t71bn7lq5yov',
        {
          include: ['department'],
          label_size: '1x1',
          label_type: 'tag',
          name: 'Station B',
          notes: 'Relocated to the finishing area.',
          operator_requirement: 'material_check',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
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
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.operations.scanningStations.delete('scst_t71bn7lq5yov');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('consumptions: only required params', async () => {
    const responsePromise = client.operations.scanningStations.consumptions('scst_t71bn7lq5yov', {
      batch_ids: ['bt_fuies8j4pk45'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('consumptions: required and optional params', async () => {
    const response = await client.operations.scanningStations.consumptions('scst_t71bn7lq5yov', {
      batch_ids: ['bt_fuies8j4pk45'],
      production_step_id: 'prst_0ht5mkqx5a6t',
      split_quantity: {
        id: 'bt_fuies8j4pk45',
        measure: '10.5',
        unit_id: 'un_82bd37dae5po',
      },
    });
  });

  test('retrieveBatches', async () => {
    const responsePromise = client.operations.scanningStations.retrieveBatches('scst_t71bn7lq5yov');
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
        'scst_t71bn7lq5yov',
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('updateProductionSteps: only required params', async () => {
    const responsePromise = client.operations.scanningStations.updateProductionSteps('scst_t71bn7lq5yov', {
      name: 'Mixing',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateProductionSteps: required and optional params', async () => {
    const response = await client.operations.scanningStations.updateProductionSteps('scst_t71bn7lq5yov', {
      name: 'Mixing',
    });
  });
});
