// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource requestLogs', () => {
  test('retrieve', async () => {
    const responsePromise = client.core.requestLogs.retrieve('rq_01304bffe90e8cce9690cbefd4');
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
      client.core.requestLogs.retrieve(
        'rq_01304bffe90e8cce9690cbefd4',
        { include: ['account'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.core.requestLogs.list();
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
      client.core.requestLogs.list(
        {
          account_ids: ['string'],
          actor_ids: ['string'],
          actor_types: ['user'],
          cursor: 'cursor',
          end_date: '2019-12-27T18:11:19.117Z',
          error_codes: ['expired_token'],
          hosts: ['string'],
          idempotency_key: 'idempotency_key',
          include: ['account'],
          limit: 0,
          methods: ['GET'],
          min_latency_us: 0,
          normalized_routes: ['string'],
          q: 'q',
          start_date: '2019-12-27T18:11:19.117Z',
          status_code_classes: [0],
          status_codes: [0],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
