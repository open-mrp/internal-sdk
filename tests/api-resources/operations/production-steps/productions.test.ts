// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource productions', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.operations.productionSteps.productions.retrieve('example', {
      production_step_id: 'prst_0159474175bb59f4b1990404ee',
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
      production_step_id: 'prst_0159474175bb59f4b1990404ee',
      include: ['produced_item'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.operations.productionSteps.productions.update('example', {
      production_step_id: 'prst_0159474175bb59f4b1990404ee',
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
      production_step_id: 'prst_0159474175bb59f4b1990404ee',
      item_id: 'it_0131e386ac683e8c29a71f6f1f',
      quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
      quantity_value: '500',
    });
  });
});
