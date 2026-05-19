// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiKeys', () => {
  test('retrieve', async () => {
    const responsePromise = client.auth.apiKeys.retrieve('apke_01jm4r6700e3kxb9w2nqh7g5fp');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auth.apiKeys.retrieve(
        'apke_01jm4r6700e3kxb9w2nqh7g5fp',
        { include: ['role'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.auth.apiKeys.delete('apke_01jm4r6700e3kxb9w2nqh7g5fp');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('apiKeys: only required params', async () => {
    const responsePromise = client.auth.apiKeys.apiKeys({
      name: 'Production API Key',
      role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('apiKeys: required and optional params', async () => {
    const response = await client.auth.apiKeys.apiKeys({
      name: 'Production API Key',
      role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
      include: ['role'],
      expires_at: '2019-12-27T18:11:19.117Z',
    });
  });

  test('retrieveAPIKeys', async () => {
    const responsePromise = client.auth.apiKeys.retrieveAPIKeys();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveAPIKeys: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auth.apiKeys.retrieveAPIKeys(
        {
          cursor: 'cursor',
          include: ['role'],
          limit: 0,
          q: 'q',
          statuses: ['active'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
