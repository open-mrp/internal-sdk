// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource unitGroups', () => {
  test('retrieve', async () => {
    const responsePromise = client.catalog.unitGroups.retrieve('id');
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
      client.catalog.unitGroups.retrieve('id', { include: ['owner'] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.catalog.unitGroups.update('id');
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
      client.catalog.unitGroups.update(
        'id',
        {
          include: ['owner'],
          associated_units: [
            {
              unit_id: 'unit_id',
              customer_portal_visibility: 'visible',
              discount_fixed: 0,
              discount_percentage: 0,
            },
          ],
          base_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          name: 'Weight Units (Updated)',
          notes: 'notes',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.catalog.unitGroups.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveUnitGroups', async () => {
    const responsePromise = client.catalog.unitGroups.retrieveUnitGroups();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveUnitGroups: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.catalog.unitGroups.retrieveUnitGroups(
        {
          cursor: 'cursor',
          include: ['owner'],
          limit: 0,
          q: 'q',
          type: 'currency',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('unitGroups: only required params', async () => {
    const responsePromise = client.catalog.unitGroups.unitGroups({
      associated_units: [{ unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp' }],
      base_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
      name: 'Weight Units',
      type: 'mass',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unitGroups: required and optional params', async () => {
    const response = await client.catalog.unitGroups.unitGroups({
      associated_units: [
        {
          unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          customer_portal_visibility: 'visible',
          discount_fixed: 0,
          discount_percentage: 1,
        },
      ],
      base_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
      name: 'Weight Units',
      type: 'mass',
      include: ['owner'],
      notes: 'notes',
    });
  });
});
