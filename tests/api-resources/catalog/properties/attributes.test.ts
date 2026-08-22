// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource attributes', () => {
  test('create: only required params', async () => {
    const responsePromise = client.catalog.properties.attributes.create('pp_fhnnvtt3q3ov', { value: 'Red' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.catalog.properties.attributes.create('pp_fhnnvtt3q3ov', {
      value: 'Red',
      color: 'red',
      sort_order: 1,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.catalog.properties.attributes.retrieve('at_rf1w295jt5ia', {
      property_id: 'pp_fhnnvtt3q3ov',
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
    const response = await client.catalog.properties.attributes.retrieve('at_rf1w295jt5ia', {
      property_id: 'pp_fhnnvtt3q3ov',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.catalog.properties.attributes.update('at_rf1w295jt5ia', {
      property_id: 'pp_fhnnvtt3q3ov',
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
    const response = await client.catalog.properties.attributes.update('at_rf1w295jt5ia', {
      property_id: 'pp_fhnnvtt3q3ov',
      color: 'blue',
      sort_order: 2,
      value: 'Blue',
    });
  });

  test('list', async () => {
    const responsePromise = client.catalog.properties.attributes.list('pp_fhnnvtt3q3ov');
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
      client.catalog.properties.attributes.list(
        'pp_fhnnvtt3q3ov',
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.catalog.properties.attributes.delete('at_rf1w295jt5ia', {
      property_id: 'pp_fhnnvtt3q3ov',
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
    const response = await client.catalog.properties.attributes.delete('at_rf1w295jt5ia', {
      property_id: 'pp_fhnnvtt3q3ov',
    });
  });
});
