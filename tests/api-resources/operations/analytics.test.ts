// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analytics', () => {
  test('updateOpenBatches: only required params', async () => {
    const responsePromise = client.operations.analytics.updateOpenBatches({
      item_ids: ['it_0131e386ac683e8c29a71f6f1f'],
      product_line_ids: ['pl_01996357326a0d3f7b129542ea'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateOpenBatches: required and optional params', async () => {
    const response = await client.operations.analytics.updateOpenBatches({
      item_ids: ['it_0131e386ac683e8c29a71f6f1f'],
      product_line_ids: ['pl_01996357326a0d3f7b129542ea'],
    });
  });
});
