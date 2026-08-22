// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource closures', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.operatingCalendars.closures.create('occd_7f2m9qk4wzxb', {
      closed_on: '2026-11-26T00:00:00Z',
      name: 'Thanksgiving Day',
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
    const response = await client.operations.operatingCalendars.closures.create('occd_7f2m9qk4wzxb', {
      closed_on: '2026-11-26T00:00:00Z',
      name: 'Thanksgiving Day',
    });
  });

  test('list', async () => {
    const responsePromise = client.operations.operatingCalendars.closures.list('occd_7f2m9qk4wzxb');
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
      client.operations.operatingCalendars.closures.list(
        'occd_7f2m9qk4wzxb',
        { from_date: '2019-12-27T18:11:19.117Z', to_date: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.operations.operatingCalendars.closures.delete('occdcn_3vh8yt5nqp1r', {
      id: 'occd_7f2m9qk4wzxb',
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
    const response = await client.operations.operatingCalendars.closures.delete('occdcn_3vh8yt5nqp1r', {
      id: 'occd_7f2m9qk4wzxb',
    });
  });
});
