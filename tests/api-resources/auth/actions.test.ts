// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('login: only required params', async () => {
    const responsePromise = client.auth.actions.login({ identifier: 'jdoe', password: 'QgS7Z8Hhj3&1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('login: required and optional params', async () => {
    const response = await client.auth.actions.login({ identifier: 'jdoe', password: 'QgS7Z8Hhj3&1' });
  });

  test('magicLogin: only required params', async () => {
    const responsePromise = client.auth.actions.magicLogin({
      token:
        'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1Z25vLmNvbSIsInN1YiI6InVzXzAxZ2Y3YTgyMDBlMXNyMjBwZzl3eDZkMmswIiwiZXhwIjoxNzU2ODIzMzI5LCJpYXQiOjE3NTY4MTk3Mjl9.2ZodhtiHDqIQnDjzrJZvqIdEbQbmkgbTaz4OXdbXCWNjzEsy2-5e78XQRu-aZ8MoZ2dusIVKQcN1Tm-arKR0_Q',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('magicLogin: required and optional params', async () => {
    const response = await client.auth.actions.magicLogin({
      token:
        'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1Z25vLmNvbSIsInN1YiI6InVzXzAxZ2Y3YTgyMDBlMXNyMjBwZzl3eDZkMmswIiwiZXhwIjoxNzU2ODIzMzI5LCJpYXQiOjE3NTY4MTk3Mjl9.2ZodhtiHDqIQnDjzrJZvqIdEbQbmkgbTaz4OXdbXCWNjzEsy2-5e78XQRu-aZ8MoZ2dusIVKQcN1Tm-arKR0_Q',
    });
  });
});
