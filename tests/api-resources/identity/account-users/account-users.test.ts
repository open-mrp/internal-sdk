// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountUsers', () => {
  test('retrieve', async () => {
    const responsePromise = client.identity.accountUsers.retrieve('acus_01gf7a8200er3ar3pkfrb6kk29');
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
        'acus_01gf7a8200er3ar3pkfrb6kk29',
        { include: ['role'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.identity.accountUsers.update('', {
      preferences: [{ enabled: true, notification_type: 'invoice' }],
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
    const response = await client.identity.accountUsers.update('', {
      preferences: [{ enabled: true, notification_type: 'invoice' }],
      include: ['role'],
      department_id: 'dp_01gf7a8200er3ar3pkfrb6kk30',
      email: 'email',
      name: 'John Doe',
      role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
      username: 'username',
    });
  });

  test('accountUsers: only required params', async () => {
    const responsePromise = client.identity.accountUsers.accountUsers({
      email: 'jdoe@augno.com',
      name: 'John Doe',
      password: 'QgS7Z8Hhj3&1',
      preferences: [{ enabled: true, notification_type: 'order_acknowledgement' }],
      username: 'jdoe',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('accountUsers: required and optional params', async () => {
    const response = await client.identity.accountUsers.accountUsers({
      email: 'jdoe@augno.com',
      name: 'John Doe',
      password: 'QgS7Z8Hhj3&1',
      preferences: [{ enabled: true, notification_type: 'order_acknowledgement' }],
      username: 'jdoe',
      include: ['role'],
      department_id: 'department_id',
      role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
    });
  });

  test('retrieveAccountUsers', async () => {
    const responsePromise = client.identity.accountUsers.retrieveAccountUsers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveAccountUsers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.identity.accountUsers.retrieveAccountUsers(
        {
          cursor: 'cursor',
          include: ['role'],
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
