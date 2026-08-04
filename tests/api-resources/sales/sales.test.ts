// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sales', () => {
  test('checkoutSessions: only required params', async () => {
    const responsePromise = client.sales.checkoutSessions({
      order_id: 'or_9lqo07quiwyb',
      order_number: 'SO-001',
      order_total_cents: 50000,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('checkoutSessions: required and optional params', async () => {
    const response = await client.sales.checkoutSessions({
      order_id: 'or_9lqo07quiwyb',
      order_number: 'SO-001',
      order_total_cents: 50000,
      customer_po: 'PO-4242',
    });
  });
});
