// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('apply: only required params', async () => {
    const responsePromise = client.operations.fulfillmentRecommendations.actions.apply({
      item_ids: ['it_pej07ckhvu62'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('apply: required and optional params', async () => {
    const response = await client.operations.fulfillmentRecommendations.actions.apply({
      item_ids: ['it_pej07ckhvu62'],
    });
  });
});
