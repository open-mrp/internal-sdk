// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('connectSteps: only required params', async () => {
    const responsePromise = client.operations.productionFlows.actions.connectSteps({
      source_production_step_id: 'prst_0ht5mkqx5a6t',
      target_production_step_id: 'prst_0ht5mkqx5a6t',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('connectSteps: required and optional params', async () => {
    const response = await client.operations.productionFlows.actions.connectSteps({
      source_production_step_id: 'prst_0ht5mkqx5a6t',
      target_production_step_id: 'prst_0ht5mkqx5a6t',
    });
  });
});
