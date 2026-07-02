// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource emailInboxes', () => {
  test('create: only required params', async () => {
    const responsePromise = client.messaging.emailInboxes.create({
      address: 'support@acme.com',
      email_domain_id: 'emdom_018e88072d1320808dc9aaa01',
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
    const response = await client.messaging.emailInboxes.create({
      address: 'support@acme.com',
      email_domain_id: 'emdom_018e88072d1320808dc9aaa01',
      include: ['email_domain'],
      agent_config_id: 'agent_config_id',
      agent_trigger_keywords: ['string'],
      agent_trigger_policy: 'agent_trigger_policy',
      from_name: 'from_name',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.messaging.emailInboxes.retrieve('eminb_018e88072d1320808dc9bbb02');
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
      client.messaging.emailInboxes.retrieve(
        'eminb_018e88072d1320808dc9bbb02',
        { include: ['email_domain'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.messaging.emailInboxes.update('eminb_018e88072d1320808dc9bbb02', {
      status: 'active',
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
    const response = await client.messaging.emailInboxes.update('eminb_018e88072d1320808dc9bbb02', {
      status: 'active',
      include: ['email_domain'],
      agent_config_id: 'agent_config_id',
      agent_trigger_keywords: ['string'],
      agent_trigger_policy: 'agent_trigger_policy',
      from_name: 'from_name',
    });
  });

  test('list', async () => {
    const responsePromise = client.messaging.emailInboxes.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.emailInboxes.list({ include: ['email_domain'] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.messaging.emailInboxes.delete('eminb_018e88072d1320808dc9bbb02');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
