// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('receive: only required params', async () => {
    const responsePromise = client.operations.receivingOrders.lines.actions.receive('orln_la01fxgrwcnr', {
      receiving_order_id: 'rcor_iy0usuxcrjj8',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('receive: required and optional params', async () => {
    const response = await client.operations.receivingOrders.lines.actions.receive('orln_la01fxgrwcnr', {
      receiving_order_id: 'rcor_iy0usuxcrjj8',
    });
  });

  test('void: only required params', async () => {
    const responsePromise = client.operations.receivingOrders.lines.actions.void('orln_la01fxgrwcnr', {
      receiving_order_id: 'rcor_iy0usuxcrjj8',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('void: required and optional params', async () => {
    const response = await client.operations.receivingOrders.lines.actions.void('orln_la01fxgrwcnr', {
      receiving_order_id: 'rcor_iy0usuxcrjj8',
    });
  });
});
