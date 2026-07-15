// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('reorder: only required params', async () => {
    const responsePromise = client.sales.salesOrders.lines.actions.reorder('or_01d5034136c3ccc048abecc312', {
      line_ids: ['orln_0142f9b74268973450b3a76ce3', 'orln_0142f9b74268973450b3a76ce4'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('reorder: required and optional params', async () => {
    const response = await client.sales.salesOrders.lines.actions.reorder('or_01d5034136c3ccc048abecc312', {
      line_ids: ['orln_0142f9b74268973450b3a76ce3', 'orln_0142f9b74268973450b3a76ce4'],
    });
  });
});
