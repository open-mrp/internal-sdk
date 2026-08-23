// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('pick: only required params', async () => {
    const responsePromise = client.operations.picks.lines.actions.pick('example', {
      pick_id: 'pk_6eilj488bq8d',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('pick: required and optional params', async () => {
    const response = await client.operations.picks.lines.actions.pick('example', {
      pick_id: 'pk_6eilj488bq8d',
    });
  });

  test('void: only required params', async () => {
    const responsePromise = client.operations.picks.lines.actions.void('example', {
      pick_id: 'pk_6eilj488bq8d',
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
    const response = await client.operations.picks.lines.actions.void('example', {
      pick_id: 'pk_6eilj488bq8d',
    });
  });
});
