// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  test('retrieve', async () => {
    const responsePromise = client.identity.accounts.retrieve('ac_ykxoradjoeb3');
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
      client.identity.accounts.retrieve(
        'ac_ykxoradjoeb3',
        { include: ['branding'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.identity.accounts.update('ac_ykxoradjoeb3');
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
      client.identity.accounts.update(
        'ac_ykxoradjoeb3',
        {
          include: ['branding'],
          facebook_handle: 'facebook_handle',
          instagram_handle: 'instagram_handle',
          linkedin_handle: 'linkedin_handle',
          name: 'Acme Inc.',
          phone_number: 'phone_number',
          slug: 'slug',
          support_email: 'support_email',
          twitter_handle: 'twitter_handle',
          website_url: 'website_url',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('retrieveLogo', async () => {
    const responsePromise = client.identity.accounts.retrieveLogo('ac_ykxoradjoeb3');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updatePhoto', async () => {
    const responsePromise = client.identity.accounts.updatePhoto('ac_ykxoradjoeb3');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
