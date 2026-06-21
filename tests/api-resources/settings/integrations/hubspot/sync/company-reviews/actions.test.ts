// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('link: only required params', async () => {
    const responsePromise = client.settings.integrations.hubspot.sync.companyReviews.actions.link(
      'igrv_mkhn7eo9qexh',
      { id: 'igjb_zwfvfjfxl4lj', resolved_hubspot_id: '12345' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('link: required and optional params', async () => {
    const response = await client.settings.integrations.hubspot.sync.companyReviews.actions.link(
      'igrv_mkhn7eo9qexh',
      { id: 'igjb_zwfvfjfxl4lj', resolved_hubspot_id: '12345' },
    );
  });

  test('skip: only required params', async () => {
    const responsePromise = client.settings.integrations.hubspot.sync.companyReviews.actions.skip(
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

  test('skip: required and optional params', async () => {
    const response = await client.settings.integrations.hubspot.sync.companyReviews.actions.skip(
      'igrv_mkhn7eo9qexh',
      { id: 'igjb_zwfvfjfxl4lj' },
    );
  });
});
