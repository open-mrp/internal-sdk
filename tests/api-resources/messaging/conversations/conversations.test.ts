// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource conversations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.messaging.conversations.create({ type: 'group' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.messaging.conversations.create({
      type: 'group',
      include: ['assignee'],
      group_id: 'cvgp_018e88072d1320808dc97abc',
      participant_account_user_ids: ['acus_01ea9983ddb41dacc44ecf997c'],
      title: 'Order #1042 — shipping question',
      topic_resource_id: 'or_01d5034136c3ccc048abecc312',
      topic_resource_type: 'sales_order',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.messaging.conversations.retrieve('cv_01h9z8q1w2e3r4t5y6u7i8cv');
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
      client.messaging.conversations.retrieve(
        'cv_01h9z8q1w2e3r4t5y6u7i8cv',
        { include: ['assignee'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.messaging.conversations.update('cv_01h9z8q1w2e3r4t5y6u7i8cv');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.conversations.update(
        'cv_01h9z8q1w2e3r4t5y6u7i8cv',
        { include: ['assignee'], title: 'Fulfillment war room' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.messaging.conversations.list();
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
      client.messaging.conversations.list(
        {
          assignee_resource_id: 'assignee_resource_id',
          audience: 'internal',
          cursor: 'cursor',
          include: ['assignee'],
          include_archived: true,
          limit: 0,
          q: 'q',
          status: 'active',
          topic_resource_id: 'topic_resource_id',
          topic_resource_type: 'account',
          type: 'direct_message',
          unassigned: true,
          workflow_status: 'new',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
