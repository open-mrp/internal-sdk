// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auditEvents', () => {
  test('retrieve', async () => {
    const responsePromise = client.core.auditEvents.retrieve('id');
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
      client.core.auditEvents.retrieve('id', { include: ['actor'] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('retrieveAuditEvents', async () => {
    const responsePromise = client.core.auditEvents.retrieveAuditEvents();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveAuditEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.auditEvents.retrieveAuditEvents(
        {
          actions: ['create'],
          actor_ids: ['string'],
          cursor: 'cursor',
          end_date: '2019-12-27T18:11:19.117Z',
          include: ['actor'],
          limit: 0,
          q: 'q',
          resource_ids: ['string'],
          resource_types: ['account'],
          start_date: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('retrieveResourceTypes', async () => {
    const responsePromise = client.core.auditEvents.retrieveResourceTypes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
