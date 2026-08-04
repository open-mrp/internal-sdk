// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource consumptions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.productionSteps.consumptions.create('prst_0ht5mkqx5a6t', {
      item_id: 'it_pej07ckhvu62',
      quantity_unit_id: 'un_82bd37dae5po',
      quantity_value: '10.000000000000000000000000000000',
      waste_quantity_unit_id: 'un_82bd37dae5po',
      waste_quantity_value: '0.500000000000000000000000000000',
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
    const response = await client.operations.productionSteps.consumptions.create('prst_0ht5mkqx5a6t', {
      item_id: 'it_pej07ckhvu62',
      quantity_unit_id: 'un_82bd37dae5po',
      quantity_value: '10.000000000000000000000000000000',
      waste_quantity_unit_id: 'un_82bd37dae5po',
      waste_quantity_value: '0.500000000000000000000000000000',
      include: ['consumed_item'],
      instructions: 'Mix with water before adding',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.operations.productionSteps.consumptions.retrieve('cp_blst8ze24dy3', {
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

  test('retrieve: required and optional params', async () => {
    const response = await client.operations.productionSteps.consumptions.retrieve('cp_blst8ze24dy3', {
      production_step_id: 'prst_0ht5mkqx5a6t',
      include: ['consumed_item'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.operations.productionSteps.consumptions.update('cp_blst8ze24dy3', {
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

  test('update: required and optional params', async () => {
    const response = await client.operations.productionSteps.consumptions.update('cp_blst8ze24dy3', {
      production_step_id: 'prst_0ht5mkqx5a6t',
      include: ['consumed_item'],
      instructions: 'instructions',
      item_id: 'item_id',
      quantity_unit_id: 'un_82bd37dae5po',
      quantity_value: '20.000000000000000000000000000000',
      waste_quantity_unit_id: 'waste_quantity_unit_id',
      waste_quantity_value: 'waste_quantity_value',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.operations.productionSteps.consumptions.delete('cp_blst8ze24dy3', {
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

  test('delete: required and optional params', async () => {
    const response = await client.operations.productionSteps.consumptions.delete('cp_blst8ze24dy3', {
      production_step_id: 'prst_0ht5mkqx5a6t',
      include: ['consumed_item'],
    });
  });
});
