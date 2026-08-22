// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('adminUpdateTracking', async () => {
    const responsePromise = client.operations.shippingCases.actions.adminUpdateTracking('shcs_fgqy1eu256af');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('adminUpdateTracking: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.shippingCases.actions.adminUpdateTracking(
        'shcs_fgqy1eu256af',
        { include: ['carrier'], tracking_number: '1Z999AA10123456784' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });
});
