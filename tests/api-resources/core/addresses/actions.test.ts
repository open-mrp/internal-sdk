// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('validate: only required params', async () => {
    const responsePromise = client.core.addresses.actions.validate({
      address_line_1: '123 Main St',
      city: 'Springfield',
      country: 'US',
      postal_code: '62701',
      state: 'IL',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('validate: required and optional params', async () => {
    const response = await client.core.addresses.actions.validate({
      address_line_1: '123 Main St',
      city: 'Springfield',
      country: 'US',
      postal_code: '62701',
      state: 'IL',
      address_line_2: 'Suite 400',
    });
  });
});
