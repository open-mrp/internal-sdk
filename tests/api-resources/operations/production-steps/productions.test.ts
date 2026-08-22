// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource productions', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.operations.productionSteps.productions.retrieve('example', {
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
    const response = await client.operations.productionSteps.productions.retrieve('example', {
      production_step_id: 'prst_0ht5mkqx5a6t',
      include: ['produced_item'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.operations.productionSteps.productions.update('example', {
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
    const response = await client.operations.productionSteps.productions.update('example', {
      production_step_id: 'prst_0ht5mkqx5a6t',
      item_id: 'it_pej07ckhvu62',
      quantity_unit_id: 'un_82bd37dae5po',
      quantity_value: '500',
    });
  });
});
