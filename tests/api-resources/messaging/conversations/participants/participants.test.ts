// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource participants', () => {
  test('create: only required params', async () => {
    const responsePromise = client.messaging.conversations.participants.create('cv_w35z4ck68yq7', {
      account_user_id: 'acus_e5zu8bde0z3h',
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
    const response = await client.messaging.conversations.participants.create('cv_w35z4ck68yq7', {
      account_user_id: 'acus_e5zu8bde0z3h',
      include: ['participants'],
      role: 'member',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.messaging.conversations.participants.delete('cvpt_be2h3ul14cts', {
      id: 'cv_w35z4ck68yq7',
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
    const response = await client.messaging.conversations.participants.delete('cvpt_be2h3ul14cts', {
      id: 'cv_w35z4ck68yq7',
    });
  });
});
