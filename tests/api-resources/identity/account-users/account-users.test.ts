// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountUsers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.identity.accountUsers.create({
      email: 'jdoe@augno.com',
      name: 'John Doe',
      password: 'QgS7Z8Hhj3&1',
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

  test('create: required and optional params', async () => {
    const response = await client.identity.accountUsers.create({
      email: 'jdoe@augno.com',
      name: 'John Doe',
      password: 'QgS7Z8Hhj3&1',
      username: 'jdoe',
      include: ['role'],
      department_id: 'department_id',
      preferences: [{ enabled: true, notification_type: 'order_acknowledgement' }],
      role_id: 'role_id',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.identity.accountUsers.retrieve('acus_01ea9983ddb41dacc44ecf997c');
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
        'acus_01ea9983ddb41dacc44ecf997c',
        { include: ['role'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.identity.accountUsers.update('acus_01ea9983ddb41dacc44ecf997c');
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
        'acus_01ea9983ddb41dacc44ecf997c',
        {
          include: ['role'],
          department_id: 'department_id',
          email: 'email',
          name: 'John Doe',
          preferences: [{ enabled: true, notification_type: 'invoice' }],
          role_id: 'role_id',
          username: 'username',
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
