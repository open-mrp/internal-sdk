// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactionAllocations', () => {
  test('update', async () => {
    const responsePromise = client.finance.transactionAllocations.update('txal_2o8lu50zvphn');
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
      client.finance.transactionAllocations.update(
        'txal_2o8lu50zvphn',
        { amount: '150.00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.finance.transactionAllocations.list();
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
      client.finance.transactionAllocations.list(
        {
          cursor: 'cursor',
          ends_at: 'ends_at',
          limit: 0,
          q: 'q',
          starts_at: 'starts_at',
          transaction_type: 'payment',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.finance.transactionAllocations.delete('txal_2o8lu50zvphn');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
