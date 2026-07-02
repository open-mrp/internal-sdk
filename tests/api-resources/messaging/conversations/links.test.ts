// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource links', () => {
  test('create: only required params', async () => {
    const responsePromise = client.messaging.conversations.links.create('cv_01h9z8q1w2e3r4t5y6u7i8cv', {
      resource_id: 'or_01d5034136c3ccc048abecc312',
      resource_type: 'sales_order',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.messaging.conversations.links.create('cv_01h9z8q1w2e3r4t5y6u7i8cv', {
      resource_id: 'or_01d5034136c3ccc048abecc312',
      resource_type: 'sales_order',
      include: ['conversation'],
    });
  });

  test('list', async () => {
    const responsePromise = client.messaging.conversations.links.list('cv_01h9z8q1w2e3r4t5y6u7i8cv');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.conversations.links.list(
        'cv_01h9z8q1w2e3r4t5y6u7i8cv',
        { include: ['conversation'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.messaging.conversations.links.delete('example', {
      id: 'cv_01h9z8q1w2e3r4t5y6u7i8cv',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.messaging.conversations.links.delete('example', {
      id: 'cv_01h9z8q1w2e3r4t5y6u7i8cv',
    });
  });
});
