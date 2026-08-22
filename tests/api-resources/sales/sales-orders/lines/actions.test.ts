// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('reorder: only required params', async () => {
    const responsePromise = client.sales.salesOrders.lines.actions.reorder('or_9lqo07quiwyb', {
      line_ids: ['orln_la01fxgrwcnr', 'orln_vwp43e1rq2zb'],
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
    const response = await client.sales.salesOrders.lines.actions.reorder('or_9lqo07quiwyb', {
      line_ids: ['orln_la01fxgrwcnr', 'orln_vwp43e1rq2zb'],
    });
  });
});
