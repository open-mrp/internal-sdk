// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkDelete: only required params', async () => {
    const responsePromise = client.sales.customers.actions.bulkDelete({
      customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkDelete: required and optional params', async () => {
    const response = await client.sales.customers.actions.bulkDelete({
      customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
    });
  });

  test('merge: only required params', async () => {
    const responsePromise = client.sales.customers.actions.merge('ac_01gf7a8200er3ar3pkfrb6kk29', {
      source_customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('merge: required and optional params', async () => {
    const response = await client.sales.customers.actions.merge('ac_01gf7a8200er3ar3pkfrb6kk29', {
      source_customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
      include: ['bill_to_address'],
    });
  });
});
