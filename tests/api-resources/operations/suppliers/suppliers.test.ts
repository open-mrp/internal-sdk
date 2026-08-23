// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
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
        name: 'Acme Supplies Inc.',
        email: 'warehouse@acme.com',
        locality: 'Chicago',
        phone: '555-123-4567',
        postal_code: '60601',
        receive_calendar_id: 'receive_calendar_id',
        state: 'IL',
        street_line_1: '456 Industrial Pkwy',
        street_line_2: 'Suite 400',
        type: 'standard',
      },
      note: 'Primary raw materials supplier',
      ship_to_address: {
        country: 'US',
        name: 'Headquarters',
        email: 'warehouse@acme.com',
        locality: 'Springfield',
        phone: '555-123-4567',
        postal_code: '62701',
        receive_calendar_id: 'receive_calendar_id',
        state: 'IL',
        street_line_1: '123 Main St',
        street_line_2: 'Suite 400',
        type: 'standard',
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.operations.suppliers.retrieve('ac_gwy8tfbc074f');
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
        'ac_gwy8tfbc074f',
        { include: ['bill_to_address'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.operations.suppliers.update('ac_gwy8tfbc074f', { update_note: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.operations.suppliers.update('ac_gwy8tfbc074f', {
      update_note: true,
      bill_to_address_id: 'bill_to_address_id',
      name: 'Acme Supplies LLC',
      note: 'Updated contact info',
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
          ends_at: '2019-12-27T18:11:19.117Z',
          item_ids: ['string'],
          limit: 0,
          q: 'q',
          starts_at: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.operations.suppliers.delete('ac_gwy8tfbc074f');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
