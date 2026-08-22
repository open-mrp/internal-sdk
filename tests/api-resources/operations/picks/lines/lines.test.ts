// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lines', () => {
  test('update: only required params', async () => {
    const responsePromise = client.operations.picks.lines.update('example', { pick_id: 'pk_6eilj488bq8d' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.operations.picks.lines.update('example', {
      pick_id: 'pk_6eilj488bq8d',
      include: ['sales_order_line'],
      quantity_value: '10.000000000000000000000000000000',
    });
  });
});
