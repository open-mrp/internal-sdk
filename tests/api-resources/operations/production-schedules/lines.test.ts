// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lines', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.productionSchedules.lines.create('pnsc_m4zt3z8g8src', {
      item_id: 'it_pej07ckhvu62',
      machine_id: 'mc_ffcfk9dxixis',
      quantity: 600,
      week_index: 2,
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
    const response = await client.operations.productionSchedules.lines.create('pnsc_m4zt3z8g8src', {
      item_id: 'it_pej07ckhvu62',
      machine_id: 'mc_ffcfk9dxixis',
      quantity: 600,
      week_index: 2,
      lots: 0,
      reason: 'machine_down',
      reason_note: 'reason_note',
      run_hours: 0,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.operations.productionSchedules.lines.update('orln_la01fxgrwcnr', {
      id: 'pnsc_m4zt3z8g8src',
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
    const response = await client.operations.productionSchedules.lines.update('orln_la01fxgrwcnr', {
      id: 'pnsc_m4zt3z8g8src',
      lots: 0,
      machine_id: 'machine_id',
      quantity: 900,
      reason: 'machine_down',
      reason_note: 'reason_note',
      run_hours: 0,
      sequence_index: 0,
      status: 'planned',
      week_index: 0,
    });
  });

  test('list', async () => {
    const responsePromise = client.operations.productionSchedules.lines.list('pnsc_m4zt3z8g8src');
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
      client.operations.productionSchedules.lines.list(
        'pnsc_m4zt3z8g8src',
        { machine_ids: ['string'], week_index: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.operations.productionSchedules.lines.delete('orln_la01fxgrwcnr', {
      id: 'pnsc_m4zt3z8g8src',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.operations.productionSchedules.lines.delete('orln_la01fxgrwcnr', {
      id: 'pnsc_m4zt3z8g8src',
      reason: 'machine_down',
      reason_note: 'reason_note',
    });
  });
});
