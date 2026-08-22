// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource passwords', () => {
  test('create: only required params', async () => {
    const responsePromise = client.auth.passwords.create({
      new_password: '50iR2X0r@bvIH',
      old_password: 'QgS7Z8Hhj3&1',
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
    const response = await client.auth.passwords.create({
      new_password: '50iR2X0r@bvIH',
      old_password: 'QgS7Z8Hhj3&1',
    });
  });
});
