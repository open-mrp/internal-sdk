// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  test('create: only required params', async () => {
    const responsePromise = client.messaging.conversations.messages.create('cv_w35z4ck68yq7', {
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
    const response = await client.messaging.conversations.messages.create('cv_w35z4ck68yq7', {
      body: 'Sounds good — shipping it today.',
      client_message_id: 'client_msg_8c7d2f',
      include: ['sender'],
      attachments: [
        {
          kind: 'file',
          content_type: 'application/pdf',
          filename: 'quote.pdf',
          resource_id: 'resource_id',
          resource_type: 'resource_type',
          s3_key: 'uploads/acme/quote.pdf',
          size_bytes: 20480,
          url: 'url',
        },
      ],
      audience: 'customer',
      cc: ['ap@acme.com'],
      channel: 'email',
      link_resource_id: 'or_9lqo07quiwyb',
      link_resource_type: 'sales_order',
      mentions: ['acus_e5zu8bde0z3h'],
      mode: 'send',
      reply_to_message_id: 'mg_fdny8633ebgw',
      scheduled_at: '2026-05-10T15:00:00Z',
      source_thread_message_id: 'mg_fdny8633ebgw',
      subject: 'Re: Order #1042',
    });
  });

  test('list', async () => {
    const responsePromise = client.messaging.conversations.messages.list('cv_w35z4ck68yq7');
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
        'cv_w35z4ck68yq7',
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
    ).rejects.toThrow(Openmrp.NotFoundError);
  });
});
