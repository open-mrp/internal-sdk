// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  test('create: only required params', async () => {
    const responsePromise = client.messaging.conversations.messages.create('cv_01h9z8q1w2e3r4t5y6u7i8cv', {
      body: 'Sounds good — shipping it today.',
      client_message_id: 'client_msg_8c7d2f',
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
    const response = await client.messaging.conversations.messages.create('cv_01h9z8q1w2e3r4t5y6u7i8cv', {
      body: 'Sounds good — shipping it today.',
      client_message_id: 'client_msg_8c7d2f',
      include: ['sender'],
      attachments: [
        {
          kind: 'file',
          content_type: 'content_type',
          filename: 'filename',
          resource_id: 'resource_id',
          resource_type: 'resource_type',
          s3_key: 's3_key',
          size_bytes: 0,
          url: 'url',
        },
      ],
      audience: 'internal',
      cc: ['string'],
      channel: 'message',
      link_resource_id: 'link_resource_id',
      link_resource_type: 'account',
      mentions: ['string'],
      mode: 'send',
      reply_to_message_id: 'reply_to_message_id',
      scheduled_at: '2019-12-27T18:11:19.117Z',
      source_thread_message_id: 'source_thread_message_id',
      subject: 'subject',
    });
  });

  test('list', async () => {
    const responsePromise = client.messaging.conversations.messages.list('cv_01h9z8q1w2e3r4t5y6u7i8cv');
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
      client.messaging.conversations.messages.list(
        'cv_01h9z8q1w2e3r4t5y6u7i8cv',
        {
          after_sequence: 0,
          cursor: 'cursor',
          include: ['sender'],
          limit: 0,
          q: 'q',
          status: 'draft',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
