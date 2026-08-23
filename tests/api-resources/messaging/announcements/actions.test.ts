// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('dismiss', async () => {
    const responsePromise = client.messaging.announcements.actions.dismiss('an_m4vwgn2t8cqs');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('dismiss: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.announcements.actions.dismiss(
        'an_m4vwgn2t8cqs',
        { include: ['resource'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('read', async () => {
    const responsePromise = client.messaging.announcements.actions.read('an_m4vwgn2t8cqs');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('read: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.announcements.actions.read(
        'an_m4vwgn2t8cqs',
        { include: ['resource'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('seen', async () => {
    const responsePromise = client.messaging.announcements.actions.seen('an_m4vwgn2t8cqs');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('seen: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.announcements.actions.seen(
        'an_m4vwgn2t8cqs',
        { include: ['resource'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });
});
