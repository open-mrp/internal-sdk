// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource portalRegistrationSessions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sales.portalRegistrationSessions.create({ seller_slug: 'acme-inc' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.sales.portalRegistrationSessions.create({ seller_slug: 'acme-inc' });
  });

  test('retrieve', async () => {
    const responsePromise = client.sales.portalRegistrationSessions.retrieve('porgse_q1hs0mapqh6x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.sales.portalRegistrationSessions.update('porgse_q1hs0mapqh6x', {
      step: 'customer_details',
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
    const response = await client.sales.portalRegistrationSessions.update('porgse_q1hs0mapqh6x', {
      step: 'customer_details',
      is_existing_customer: false,
      session_data: {
        address_country: 'address_country',
        address_locality: 'address_locality',
        address_name: 'address_name',
        address_postal_code: 'address_postal_code',
        address_state: 'address_state',
        address_street_1: 'address_street_1',
        address_street_2: 'address_street_2',
        customer_group_id: 'customer_group_id',
        customer_name: 'customer_name',
        customer_number: 'customer_number',
        payment_term_id: 'payment_term_id',
        phone: 'phone',
        shipping_term_id: 'shipping_term_id',
      },
    });
  });

  test('list', async () => {
    const responsePromise = client.sales.portalRegistrationSessions.list();
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
      client.sales.portalRegistrationSessions.list(
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
          status: 'status',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
