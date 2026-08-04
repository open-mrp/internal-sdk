// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource units', () => {
  test('create: only required params', async () => {
    const responsePromise = client.catalog.unitGroups.units.create('ug_andst6m79n41', {
      unit_id: 'un_82bd37dae5po',
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
    const response = await client.catalog.unitGroups.units.create('ug_andst6m79n41', {
      unit_id: 'un_82bd37dae5po',
      include: ['unit'],
      customer_portal_visibility: 'visible',
      discount_fixed: 0,
      discount_percentage: 1,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.catalog.unitGroups.units.retrieve('un_82bd37dae5po', {
      unit_group_id: 'ug_andst6m79n41',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.catalog.unitGroups.units.retrieve('un_82bd37dae5po', {
      unit_group_id: 'ug_andst6m79n41',
      include: ['unit'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.catalog.unitGroups.units.update('un_82bd37dae5po', {
      unit_group_id: 'ug_andst6m79n41',
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
    const response = await client.catalog.unitGroups.units.update('un_82bd37dae5po', {
      unit_group_id: 'ug_andst6m79n41',
      include: ['unit'],
      customer_portal_visibility: 'visible',
      discount_fixed: 2.5,
      discount_percentage: 0.9,
      unit_id: 'un_82bd37dae5po',
    });
  });

  test('list', async () => {
    const responsePromise = client.catalog.unitGroups.units.list('ug_andst6m79n41');
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
      client.catalog.unitGroups.units.list(
        'ug_andst6m79n41',
        { include: ['unit'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.catalog.unitGroups.units.delete('un_82bd37dae5po', {
      unit_group_id: 'ug_andst6m79n41',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.catalog.unitGroups.units.delete('un_82bd37dae5po', {
      unit_group_id: 'ug_andst6m79n41',
    });
  });
});
