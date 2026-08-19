// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource machineDowntimeEvents', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.machineDowntimeEvents.create({
      machine_id: 'mc_ffcfk9dxixis',
      reason: 'breakdown',
      started_at: '2026-05-10T00:00:00Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.operations.machineDowntimeEvents.create({
      machine_id: 'mc_ffcfk9dxixis',
      reason: 'breakdown',
      started_at: '2026-05-10T00:00:00Z',
      include: ['machine'],
      batch_id: 'batch_id',
      duration: { unit_id: 'unit_id', value: 'value' },
      ended_at: '2019-12-27T18:11:19.117Z',
      item_id: 'item_id',
      note: 'note',
      production_run_id: 'production_run_id',
      source: 'manual',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.operations.machineDowntimeEvents.retrieve('mcdt_ff5te1hqttco');
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
      client.operations.machineDowntimeEvents.retrieve(
        'mcdt_ff5te1hqttco',
        { include: ['machine'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.operations.machineDowntimeEvents.update('mcdt_ff5te1hqttco');
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
      client.operations.machineDowntimeEvents.update(
        'mcdt_ff5te1hqttco',
        {
          include: ['machine'],
          batch_id: 'batch_id',
          duration: { unit_id: 'unit_id', value: 'value' },
          ended_at: '2026-05-10T00:23:00Z',
          item_id: 'item_id',
          machine_id: 'machine_id',
          note: 'note',
          production_run_id: 'production_run_id',
          reason: 'breakdown',
          started_at: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.operations.machineDowntimeEvents.list();
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
      client.operations.machineDowntimeEvents.list(
        {
          cursor: 'cursor',
          department_ids: ['string'],
          ends_at: 'ends_at',
          include: ['machine'],
          limit: 0,
          machine_ids: ['string'],
          open: true,
          q: 'q',
          reasons: ['breakdown'],
          starts_at: 'starts_at',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.operations.machineDowntimeEvents.delete('mcdt_ff5te1hqttco');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
