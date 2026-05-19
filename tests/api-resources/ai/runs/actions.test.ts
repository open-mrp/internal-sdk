// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('cancel', async () => {
    const responsePromise = client.ai.runs.actions.cancel('agrn_01jm4r6700f8nwq3v5hx2d9ktp');
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
        'agrn_01jm4r6700f8nwq3v5hx2d9ktp',
        { include: ['actions'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('continue: only required params', async () => {
    const responsePromise = client.ai.runs.actions.continue('agrn_01jm4r6700f8nwq3v5hx2d9ktp', {
      allowed_tool_slugs: ['string'],
      approved_tool_slugs: ['string'],
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
    const response = await client.ai.runs.actions.continue('agrn_01jm4r6700f8nwq3v5hx2d9ktp', {
      allowed_tool_slugs: ['string'],
      approved_tool_slugs: ['string'],
      message: 'Yes, proceed with creating the order.',
      include: ['actions'],
    });
  });
});
