// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('setRole: only required params', async () => {
    const responsePromise = client.messaging.conversations.participants.actions.setRole('cvpt_be2h3ul14cts', {
      id: 'cv_w35z4ck68yq7',
      role: 'admin',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setRole: required and optional params', async () => {
    const response = await client.messaging.conversations.participants.actions.setRole('cvpt_be2h3ul14cts', {
      id: 'cv_w35z4ck68yq7',
      role: 'admin',
      include: ['participants'],
    });
  });
});
