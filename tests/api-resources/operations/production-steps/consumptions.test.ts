// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource consumptions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.productionSteps.consumptions.create(
      'prst_01jm4r6700f8nwq3v5hx2d9ktp',
      {
        item_id: 'it_01jm4r6700f8nwq3v5hx2d9ktp',
        quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
        quantity_value: '10.000000000000000000000000000000',
        waste_quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
        waste_quantity_value: '0.500000000000000000000000000000',
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

  test('create: required and optional params', async () => {
    const response = await client.operations.productionSteps.consumptions.create(
      'prst_01jm4r6700f8nwq3v5hx2d9ktp',
      {
        item_id: 'it_01jm4r6700f8nwq3v5hx2d9ktp',
        quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
        quantity_value: '10.000000000000000000000000000000',
        waste_quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
        waste_quantity_value: '0.500000000000000000000000000000',
        include: ['consumed_item'],
        instructions: 'Mix with water before adding',
      },
    );
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.operations.productionSteps.consumptions.retrieve(
      'cp_01jm4r6700f8nwq3v5hx2d9ktp',
      { production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.operations.productionSteps.consumptions.retrieve(
      'cp_01jm4r6700f8nwq3v5hx2d9ktp',
      { production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp', include: ['consumed_item'] },
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.operations.productionSteps.consumptions.update(
      'cp_01jm4r6700f8nwq3v5hx2d9ktp',
      { production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.operations.productionSteps.consumptions.update(
      'cp_01jm4r6700f8nwq3v5hx2d9ktp',
      {
        production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
        include: ['consumed_item'],
        instructions: 'instructions',
        item_id: 'item_id',
        quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
        quantity_value: '20.000000000000000000000000000000',
        waste_quantity_unit_id: 'waste_quantity_unit_id',
        waste_quantity_value: 'waste_quantity_value',
      },
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.operations.productionSteps.consumptions.delete(
      'cp_01jm4r6700f8nwq3v5hx2d9ktp',
      { production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.operations.productionSteps.consumptions.delete(
      'cp_01jm4r6700f8nwq3v5hx2d9ktp',
      { production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp', include: ['consumed_item'] },
    );
  });
});
