// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource productionRuns', () => {
  test('retrieve', async () => {
    const responsePromise = client.operations.productionRuns.retrieve('id');
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
      client.operations.productionRuns.retrieve(
        'id',
        { include: ['responsible_user'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.operations.productionRuns.update('id', {
      number: 'PR-00042',
      responsible_user_id: 'us_01gf7a8200e9pvbd6bgyq395ae',
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
    const response = await client.operations.productionRuns.update('id', {
      number: 'PR-00042',
      responsible_user_id: 'us_01gf7a8200e9pvbd6bgyq395ae',
      include: ['responsible_user'],
    });
  });

  test('delete', async () => {
    const responsePromise = client.operations.productionRuns.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('productionRuns: only required params', async () => {
    const responsePromise = client.operations.productionRuns.productionRuns({
      responsible_user_id: 'us_01gf7a8200e9pvbd6bgyq395ae',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('productionRuns: required and optional params', async () => {
    const response = await client.operations.productionRuns.productionRuns({
      responsible_user_id: 'us_01gf7a8200e9pvbd6bgyq395ae',
      include: ['responsible_user'],
    });
  });

  test('retrieveProductionRuns', async () => {
    const responsePromise = client.operations.productionRuns.retrieveProductionRuns();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveProductionRuns: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.productionRuns.retrieveProductionRuns(
        {
          cursor: 'cursor',
          end_date: 'end_date',
          item_ids: ['string'],
          limit: 0,
          machine_ids: ['string'],
          q: 'q',
          start_date: 'start_date',
          status: 'status',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
