// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addresses', () => {
  test('retrieveDetails', async () => {
    const responsePromise = client.core.addresses.retrieveDetails('ChIJN1gggt_t2Z44AR4PVM_67p73Y');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveDetails: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.addresses.retrieveDetails(
        'ChIJN1gggt_t2Z44AR4PVM_67p73Y',
        { session_token: 'session_token' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('retrieveSuggestions: only required params', async () => {
    const responsePromise = client.core.addresses.retrieveSuggestions({ input: 'input' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveSuggestions: required and optional params', async () => {
    const response = await client.core.addresses.retrieveSuggestions({
      input: 'input',
      session_token: 'session_token',
    });
  });
});
