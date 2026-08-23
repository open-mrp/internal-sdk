// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('cancel', async () => {
    const responsePromise = client.ai.runs.actions.cancel('agrn_l6ob5relrd7t');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.runs.actions.cancel(
        'agrn_l6ob5relrd7t',
        { include: ['actions'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('continue: only required params', async () => {
    const responsePromise = client.ai.runs.actions.continue('agrn_l6ob5relrd7t', {
      message: 'Yes, proceed with creating the order.',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('continue: required and optional params', async () => {
    const response = await client.ai.runs.actions.continue('agrn_l6ob5relrd7t', {
      message: 'Yes, proceed with creating the order.',
      include: ['actions'],
      approved_tool_call_ids: ['string'],
      approved_tool_slugs: ['string'],
      rejected_tool_call_ids: ['string'],
      rejected_tool_slugs: ['string'],
    });
  });

  test('retry', async () => {
    const responsePromise = client.ai.runs.actions.retry('agrn_l6ob5relrd7t');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retry: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.runs.actions.retry(
        'agrn_l6ob5relrd7t',
        { include: ['actions'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });
});
