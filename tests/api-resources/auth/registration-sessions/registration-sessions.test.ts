// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource registrationSessions', () => {
  test('retrieve', async () => {
    const responsePromise = client.auth.registrationSessions.retrieve('rgfw_01gf7a8200eaj8fke1xvw4h50x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.auth.registrationSessions.update('rgfw_01gf7a8200eaj8fke1xvw4h50x');
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
      client.auth.registrationSessions.update(
        'rgfw_01gf7a8200eaj8fke1xvw4h50x',
        {
          session_data: {
            account_name: 'Acme Corp',
            billing_address_city: 'billing_address_city',
            billing_address_country: 'billing_address_country',
            billing_address_line1: 'billing_address_line1',
            billing_address_line2: 'billing_address_line2',
            billing_address_postal_code: 'billing_address_postal_code',
            billing_address_state: 'billing_address_state',
            user_name: 'Jane Smith',
          },
          step: 'user_details',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('accounts', async () => {
    const responsePromise = client.auth.registrationSessions.accounts('rgfw_01gf7a8200eaj8fke1xvw4h50x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('registrationSessions: only required params', async () => {
    const responsePromise = client.auth.registrationSessions.registrationSessions({
      email: 'jdoe@augno.com',
      plan_code: 'starter',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('registrationSessions: required and optional params', async () => {
    const response = await client.auth.registrationSessions.registrationSessions({
      email: 'jdoe@augno.com',
      plan_code: 'starter',
    });
  });

  test('retrieveRegistrationSessions', async () => {
    const responsePromise = client.auth.registrationSessions.retrieveRegistrationSessions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveRegistrationSessions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auth.registrationSessions.retrieveRegistrationSessions(
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('users: only required params', async () => {
    const responsePromise = client.auth.registrationSessions.users('rgfw_01gf7a8200eaj8fke1xvw4h50x', {
      name: 'Jane Smith',
      password: 'P@ssw0rd123!',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('users: required and optional params', async () => {
    const response = await client.auth.registrationSessions.users('rgfw_01gf7a8200eaj8fke1xvw4h50x', {
      name: 'Jane Smith',
      password: 'P@ssw0rd123!',
    });
  });
});
