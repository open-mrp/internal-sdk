// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountUsers', () => {
  test('create', async () => {
    const responsePromise = client.identity.accountUsers.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.identity.accountUsers.create(
        {
          include: ['user'],
          department_id: 'dp_m0jayebxnkos',
          email: 'jdoe@augno.com',
          is_commission_eligible: false,
          name: 'John Doe',
          password: 'QgS7Z8Hhj3&1',
          preferences: [{ enabled: true, notification_type: 'order_acknowledgement' }],
          role_id: 'rl_3xknmfqflhvb',
          username: 'jdoe',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('retrieve', async () => {
    const responsePromise = client.identity.accountUsers.retrieve('acus_e5zu8bde0z3h');
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
      client.identity.accountUsers.retrieve(
        'acus_e5zu8bde0z3h',
        { include: ['user'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.identity.accountUsers.update('acus_e5zu8bde0z3h');
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
      client.identity.accountUsers.update(
        'acus_e5zu8bde0z3h',
        {
          include: ['user'],
          department_id: 'dp_m0jayebxnkos',
          email: 'jdoe@augno.com',
          is_commission_eligible: false,
          name: 'John Doe',
          preferences: [{ enabled: true, notification_type: 'order_acknowledgement' }],
          role_id: 'rl_3xknmfqflhvb',
          username: 'jdoe',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.identity.accountUsers.list();
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
      client.identity.accountUsers.list(
        {
          cursor: 'cursor',
          include: ['user'],
          is_commission_eligible: true,
          limit: 0,
          q: 'q',
          removed_scope: 'excluded',
          role_type: 'admin',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
