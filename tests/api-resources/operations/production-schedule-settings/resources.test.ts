// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resources', () => {
  test('update: only required params', async () => {
    const responsePromise = client.operations.productionScheduleSettings.resources.update({
      lead_time_offset_weeks: 0,
      participation_status: 'excluded',
      scope_ref_id: 'mc_ffcfk9dxixis',
      scope_type: 'machine',
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
    const response = await client.operations.productionScheduleSettings.resources.update({
      lead_time_offset_weeks: 0,
      participation_status: 'excluded',
      scope_ref_id: 'mc_ffcfk9dxixis',
      scope_type: 'machine',
      lead_time_weeks: 0,
    });
  });

  test('list', async () => {
    const responsePromise = client.operations.productionScheduleSettings.resources.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.operations.productionScheduleSettings.resources.delete('example');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
