// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agents', () => {
  test('create: only required params', async () => {
    const responsePromise = client.messaging.conversations.agents.create('cv_01h9z8q1w2e3r4t5y6u7i8cv', {
      agent_config_id: 'agdf_01b9ef28feb99e6954201aca63',
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
    const response = await client.messaging.conversations.agents.create('cv_01h9z8q1w2e3r4t5y6u7i8cv', {
      agent_config_id: 'agdf_01b9ef28feb99e6954201aca63',
      trigger_keywords: ['forecast'],
      trigger_policy: 'mention',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.messaging.conversations.agents.delete('cvpt_01h9z8q1w2e3r4t5y6u7cvpt', {
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
    const response = await client.messaging.conversations.agents.delete('cvpt_01h9z8q1w2e3r4t5y6u7cvpt', {
      id: 'cv_01h9z8q1w2e3r4t5y6u7i8cv',
    });
  });
});
