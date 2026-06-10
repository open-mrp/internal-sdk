// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('initiateOAuth: only required params', async () => {
    const responsePromise = client.operations.carriers.actions.initiateOAuth(
      'cr_01784fd54c9ba197bb4e42f0e6',
      { redirect_uri: 'https://app.example.com/carriers/oauth/callback' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('initiateOAuth: required and optional params', async () => {
    const response = await client.operations.carriers.actions.initiateOAuth('cr_01784fd54c9ba197bb4e42f0e6', {
      redirect_uri: 'https://app.example.com/carriers/oauth/callback',
      state: 'state',
    });
  });

  test('syncOptions', async () => {
    const responsePromise = client.operations.carriers.actions.syncOptions('cr_01784fd54c9ba197bb4e42f0e6');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('syncOptions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.carriers.actions.syncOptions(
        'cr_01784fd54c9ba197bb4e42f0e6',
        { include: ['owner'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
