// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('archive', async () => {
    const responsePromise = client.operations.productionSchedules.actions.archive('pnsc_m4zt3z8g8src');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('preview', async () => {
    const responsePromise = client.operations.productionSchedules.actions.preview();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('preview: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.productionSchedules.actions.preview(
        {
          demand_basis: 'trailing_12',
          horizon_weeks: 13,
          planning_as_of: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('previewRegenerate', async () => {
    const responsePromise =
      client.operations.productionSchedules.actions.previewRegenerate('pnsc_m4zt3z8g8src');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('previewRegenerate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.productionSchedules.actions.previewRegenerate(
        'pnsc_m4zt3z8g8src',
        {
          demand_basis: 'trailing_12',
          horizon_weeks: 13,
          planning_as_of: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('publish', async () => {
    const responsePromise = client.operations.productionSchedules.actions.publish('pnsc_m4zt3z8g8src');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('regenerate', async () => {
    const responsePromise = client.operations.productionSchedules.actions.regenerate('pnsc_m4zt3z8g8src');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('regenerate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.productionSchedules.actions.regenerate(
        'pnsc_m4zt3z8g8src',
        {
          demand_basis: 'trailing_12',
          horizon_weeks: 0,
          merge_mode: 'preserve_manual',
          planning_as_of: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('releaseWeek: only required params', async () => {
    const responsePromise = client.operations.productionSchedules.actions.releaseWeek('pnsc_m4zt3z8g8src', {
      responsible_user_id: 'us_43irtlt2ajz6',
      week_index: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('releaseWeek: required and optional params', async () => {
    const response = await client.operations.productionSchedules.actions.releaseWeek('pnsc_m4zt3z8g8src', {
      responsible_user_id: 'us_43irtlt2ajz6',
      week_index: 0,
      scanning_station_id: 'scanning_station_id',
    });
  });
});
