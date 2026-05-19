// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  test('retrieve', async () => {
    const responsePromise = client.identity.users.retrieve('us_01gf7a8200e9pvbd6bgyq395ae');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.identity.users.update('us_01gf7a8200e9pvbd6bgyq395ae', {
      email_verified: '2019-12-27T18:11:19.117Z',
      image_url: 'https://cdn.augno.com/avatars/us_01gf7a8200e9pvbd6bgyq395ae.jpg',
      name: 'John Doe',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.identity.users.update('us_01gf7a8200e9pvbd6bgyq395ae', {
      email_verified: '2019-12-27T18:11:19.117Z',
      image_url: 'https://cdn.augno.com/avatars/us_01gf7a8200e9pvbd6bgyq395ae.jpg',
      name: 'John Doe',
    });
  });
});
