// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource productionSteps', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.productionSteps.create({
      allowances: '0.05',
      labor_rate: {
        denominator_unit_id: 'un_82bd37dae5po',
        numerator_unit_id: 'un_82bd37dae5po',
        value: '25.00',
      },
      labor_time: {
        denominator_unit_id: 'un_82bd37dae5po',
        numerator_unit_id: 'un_82bd37dae5po',
        value: '1.5',
      },
      leveling_factor: '1.10',
      name: 'Mixing',
      overhead_rate: {
        denominator_unit_id: 'un_82bd37dae5po',
        numerator_unit_id: 'un_82bd37dae5po',
        value: '15.00',
      },
      production: {
        item_id: 'it_pej07ckhvu62',
        quantity_unit_id: 'un_82bd37dae5po',
        quantity_value: '100',
      },
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
    const response = await client.operations.productionSteps.create({
      allowances: '0.05',
      labor_rate: {
        denominator_unit_id: 'un_82bd37dae5po',
        numerator_unit_id: 'un_82bd37dae5po',
        value: '25.00',
      },
      labor_time: {
        denominator_unit_id: 'un_82bd37dae5po',
        numerator_unit_id: 'un_82bd37dae5po',
        value: '1.5',
      },
      leveling_factor: '1.10',
      name: 'Mixing',
      overhead_rate: {
        denominator_unit_id: 'un_82bd37dae5po',
        numerator_unit_id: 'un_82bd37dae5po',
        value: '15.00',
      },
      production: {
        item_id: 'it_pej07ckhvu62',
        quantity_unit_id: 'un_82bd37dae5po',
        quantity_value: '100',
      },
      consumptions: [
        {
          item_id: 'it_pej07ckhvu62',
          quantity_unit_id: 'un_82bd37dae5po',
          quantity_value: '50',
          waste_quantity_unit_id: 'un_82bd37dae5po',
          waste_quantity_value: '2',
          instructions: 'instructions',
        },
      ],
      department_id: 'department_id',
      notes: 'notes',
      scanning_station_id: 'scst_t71bn7lq5yov',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.operations.productionSteps.retrieve('prst_0ht5mkqx5a6t');
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
      client.operations.productionSteps.retrieve(
        'prst_0ht5mkqx5a6t',
        { include: ['production'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.operations.productionSteps.update('prst_0ht5mkqx5a6t');
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
      client.operations.productionSteps.update(
        'prst_0ht5mkqx5a6t',
        {
          allowances: 'allowances',
          leveling_factor: '1.15',
          name: 'Assembly Step A',
          scanning_station_id: 'scst_t71bn7lq5yov',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.operations.productionSteps.list();
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
      client.operations.productionSteps.list(
        {
          cursor: 'cursor',
          ends_at: '2019-12-27T18:11:19.117Z',
          include: ['production'],
          input_step_ids: ['string'],
          item_ids: ['string'],
          limit: 0,
          machine_ids: ['string'],
          output_step_ids: ['string'],
          q: 'q',
          scanning_station_ids: ['string'],
          starts_at: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.operations.productionSteps.delete('prst_0ht5mkqx5a6t');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
