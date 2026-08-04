// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource members', () => {
  test('create: only required params', async () => {
    const responsePromise = client.messaging.groups.members.create('cvgp_wjlypugna7s4', {
      member_type: 'user',
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
    const response = await client.messaging.groups.members.create('cvgp_wjlypugna7s4', {
      member_type: 'user',
      account_user_id: 'acus_e5zu8bde0z3h',
      agent_config_id: 'agdf_ah7tkyfxk8jl',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.messaging.groups.members.delete('cvgppt_obu4df48t1xx', {
      id: 'cvgp_wjlypugna7s4',
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
    const response = await client.messaging.groups.members.delete('cvgppt_obu4df48t1xx', {
      id: 'cvgp_wjlypugna7s4',
    });
  });
});
