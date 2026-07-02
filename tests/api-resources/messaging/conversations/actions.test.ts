// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('archive', async () => {
    const responsePromise = client.messaging.conversations.actions.archive('cv_01h9z8q1w2e3r4t5y6u7i8cv');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.conversations.actions.archive(
        'cv_01h9z8q1w2e3r4t5y6u7i8cv',
        { include: ['assignee'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('assign', async () => {
    const responsePromise = client.messaging.conversations.actions.assign('cv_01h9z8q1w2e3r4t5y6u7i8cv');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('assign: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.conversations.actions.assign(
        'cv_01h9z8q1w2e3r4t5y6u7i8cv',
        {
          include: ['assignee'],
          assignee_resource_id: 'acus_01ea9983ddb41dacc44ecf997c',
          assignee_resource_type: 'account_user',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('hide', async () => {
    const responsePromise = client.messaging.conversations.actions.hide('cv_01h9z8q1w2e3r4t5y6u7i8cv');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('hide: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.conversations.actions.hide(
        'cv_01h9z8q1w2e3r4t5y6u7i8cv',
        { include: ['assignee'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('leave', async () => {
    const responsePromise = client.messaging.conversations.actions.leave('cv_01h9z8q1w2e3r4t5y6u7i8cv');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('leave: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.conversations.actions.leave(
        'cv_01h9z8q1w2e3r4t5y6u7i8cv',
        { include: ['assignee'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('mute', async () => {
    const responsePromise = client.messaging.conversations.actions.mute('cv_01h9z8q1w2e3r4t5y6u7i8cv');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('mute: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.conversations.actions.mute(
        'cv_01h9z8q1w2e3r4t5y6u7i8cv',
        { include: ['assignee'], muted_until: '2026-01-02T15:04:05Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('read: only required params', async () => {
    const responsePromise = client.messaging.conversations.actions.read('cv_01h9z8q1w2e3r4t5y6u7i8cv', {
      up_to_sequence: 42,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('read: required and optional params', async () => {
    const response = await client.messaging.conversations.actions.read('cv_01h9z8q1w2e3r4t5y6u7i8cv', {
      up_to_sequence: 42,
      include: ['assignee'],
    });
  });

  test('redact', async () => {
    const responsePromise = client.messaging.conversations.actions.redact('cv_01h9z8q1w2e3r4t5y6u7i8cv');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('redact: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.conversations.actions.redact(
        'cv_01h9z8q1w2e3r4t5y6u7i8cv',
        { include: ['assignee'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('report: only required params', async () => {
    const responsePromise = client.messaging.conversations.actions.report('cv_01h9z8q1w2e3r4t5y6u7i8cv', {
      reason: 'spam',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('report: required and optional params', async () => {
    const response = await client.messaging.conversations.actions.report('cv_01h9z8q1w2e3r4t5y6u7i8cv', {
      reason: 'spam',
      include: ['assignee'],
      message_id: 'mg_01h9z8q1w2e3r4t5y6u7i8mg',
    });
  });

  test('setLegalHold: only required params', async () => {
    const responsePromise = client.messaging.conversations.actions.setLegalHold(
      'cv_01h9z8q1w2e3r4t5y6u7i8cv',
      { legal_hold: 'held' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setLegalHold: required and optional params', async () => {
    const response = await client.messaging.conversations.actions.setLegalHold(
      'cv_01h9z8q1w2e3r4t5y6u7i8cv',
      { legal_hold: 'held', include: ['assignee'] },
    );
  });

  test('setStatus: only required params', async () => {
    const responsePromise = client.messaging.conversations.actions.setStatus('cv_01h9z8q1w2e3r4t5y6u7i8cv', {
      workflow_status: 'open',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setStatus: required and optional params', async () => {
    const response = await client.messaging.conversations.actions.setStatus('cv_01h9z8q1w2e3r4t5y6u7i8cv', {
      workflow_status: 'open',
      include: ['assignee'],
    });
  });

  test('typing', async () => {
    const responsePromise = client.messaging.conversations.actions.typing('cv_01h9z8q1w2e3r4t5y6u7i8cv');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unarchive', async () => {
    const responsePromise = client.messaging.conversations.actions.unarchive('cv_01h9z8q1w2e3r4t5y6u7i8cv');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unarchive: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.conversations.actions.unarchive(
        'cv_01h9z8q1w2e3r4t5y6u7i8cv',
        { include: ['assignee'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('unhide', async () => {
    const responsePromise = client.messaging.conversations.actions.unhide('cv_01h9z8q1w2e3r4t5y6u7i8cv');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unhide: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.conversations.actions.unhide(
        'cv_01h9z8q1w2e3r4t5y6u7i8cv',
        { include: ['assignee'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('unmute', async () => {
    const responsePromise = client.messaging.conversations.actions.unmute('cv_01h9z8q1w2e3r4t5y6u7i8cv');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unmute: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.conversations.actions.unmute(
        'cv_01h9z8q1w2e3r4t5y6u7i8cv',
        { include: ['assignee'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
