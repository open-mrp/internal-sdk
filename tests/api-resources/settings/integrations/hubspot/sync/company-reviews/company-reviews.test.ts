// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource companyReviews', () => {
  test('create: only required params', async () => {
    const responsePromise = client.settings.integrations.hubspot.sync.companyReviews.create(
      'igrv_mkhn7eo9qexh',
      { id: 'igjb_zwfvfjfxl4lj' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.settings.integrations.hubspot.sync.companyReviews.create(
      'igrv_mkhn7eo9qexh',
      { id: 'igjb_zwfvfjfxl4lj' },
    );
  });

  test('list', async () => {
    const responsePromise =
      client.settings.integrations.hubspot.sync.companyReviews.list('igjb_zwfvfjfxl4lj');
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
      client.settings.integrations.hubspot.sync.companyReviews.list(
        'igjb_zwfvfjfxl4lj',
        { status: 'pending' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
