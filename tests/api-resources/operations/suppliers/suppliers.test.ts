// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource suppliers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.suppliers.create({
      name: 'Acme Supplies Inc.',
      number: 'SUP-001',
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
    const response = await client.operations.suppliers.create({
      name: 'Acme Supplies Inc.',
      number: 'SUP-001',
      bill_to_address: {
        country: 'US',
        name: 'Headquarters',
        email: 'email',
        locality: 'locality',
        phone: 'phone',
        postal_code: 'postal_code',
        state: 'state',
        street_line_1: 'street_line_1',
        street_line_2: 'street_line_2',
        type: 'standard',
      },
      note: 'note',
      ship_to_address: {
        country: 'US',
        name: 'Headquarters',
        email: 'email',
        locality: 'locality',
        phone: 'phone',
        postal_code: 'postal_code',
        state: 'state',
        street_line_1: 'street_line_1',
        street_line_2: 'street_line_2',
        type: 'standard',
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.operations.suppliers.retrieve('ac_0177902104bccac5fbb173cd96');
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
      client.operations.suppliers.retrieve(
        'ac_0177902104bccac5fbb173cd96',
        { include: ['bill_to_address'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.operations.suppliers.update('ac_0177902104bccac5fbb173cd96', {
      update_note: true,
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
    const response = await client.operations.suppliers.update('ac_0177902104bccac5fbb173cd96', {
      update_note: true,
      bill_to_address_id: 'bill_to_address_id',
      name: 'name',
      note: 'note',
      number: 'number',
      ship_to_address_id: 'ship_to_address_id',
    });
  });

  test('list', async () => {
    const responsePromise = client.operations.suppliers.list();
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
      client.operations.suppliers.list(
        {
          cursor: 'cursor',
          end_date: '2019-12-27T18:11:19.117Z',
          item_ids: ['string'],
          limit: 0,
          q: 'q',
          start_date: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.operations.suppliers.delete('ac_0177902104bccac5fbb173cd96');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
