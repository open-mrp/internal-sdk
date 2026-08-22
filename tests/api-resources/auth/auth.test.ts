// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // Some required params are not supported yet.
  test.skip('deleteRefreshTokens', async () => {
    const responsePromise = client.auth.deleteRefreshTokens();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('scannerPasswords: only required params', async () => {
    const responsePromise = client.auth.scannerPasswords({
      account_user_id: 'acus_e5zu8bde0z3h',
      new_password: '50iR2X0r@bvIH',
      requester_password: 'QgS7Z8Hhj3&1',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('scannerPasswords: required and optional params', async () => {
    const response = await client.auth.scannerPasswords({
      account_user_id: 'acus_e5zu8bde0z3h',
      new_password: '50iR2X0r@bvIH',
      requester_password: 'QgS7Z8Hhj3&1',
    });
  });

  // Some required params are not supported yet.
  test.skip('updateAccessTokens', async () => {
    const responsePromise = client.auth.updateAccessTokens();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('users: only required params', async () => {
    const responsePromise = client.auth.users({
      email: 'jdoe@openmrp.ai',
      name: 'John Doe',
      password: 'QgS7Z8Hhj3&1',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('users: required and optional params', async () => {
    const response = await client.auth.users({
      email: 'jdoe@openmrp.ai',
      name: 'John Doe',
      password: 'QgS7Z8Hhj3&1',
      account_slug: 'account_slug',
    });
  });
});
