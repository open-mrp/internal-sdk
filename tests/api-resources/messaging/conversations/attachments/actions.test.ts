// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('uploadURL: only required params', async () => {
    const responsePromise = client.messaging.conversations.attachments.actions.uploadURL(
      'cv_01h9z8q1w2e3r4t5y6u7i8cv',
      { filename: 'diagram.png' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('uploadURL: required and optional params', async () => {
    const response = await client.messaging.conversations.attachments.actions.uploadURL(
      'cv_01h9z8q1w2e3r4t5y6u7i8cv',
      {
        filename: 'diagram.png',
        include: ['attachment'],
        content_type: 'image/png',
      },
    );
  });
});
