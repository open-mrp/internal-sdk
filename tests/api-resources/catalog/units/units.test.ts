// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource units', () => {
  test('create: only required params', async () => {
    const responsePromise = client.catalog.units.create({
      abbreviation: 'g',
      name: 'Gram',
      offset_denominator: '1',
      offset_numerator: '0',
      ratio_denominator: '1',
      ratio_numerator: '1',
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

  test('create: required and optional params', async () => {
    const response = await client.catalog.units.create({
      abbreviation: 'g',
      name: 'Gram',
      offset_denominator: '1',
      offset_numerator: '0',
      ratio_denominator: '1',
      ratio_numerator: '1',
      type: 'mass',
      include: ['owner'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.catalog.units.retrieve('un_82bd37dae5po');
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
      client.catalog.units.retrieve(
        'un_82bd37dae5po',
        { include: ['owner'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.catalog.units.update('un_82bd37dae5po');
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
      client.catalog.units.update(
        'un_82bd37dae5po',
        {
          include: ['owner'],
          abbreviation: 'kg',
          name: 'Kilogram',
          offset_denominator: '1',
          offset_numerator: '0',
          ratio_denominator: '1',
          ratio_numerator: '1000',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.catalog.units.list();
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
      client.catalog.units.list(
        {
          cursor: 'cursor',
          include: ['owner'],
          limit: 0,
          q: 'q',
          type: 'currency',
          unit_group_ids: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.catalog.units.delete('un_82bd37dae5po');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
