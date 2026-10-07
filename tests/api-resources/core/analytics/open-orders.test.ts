// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource openOrders', () => {
  test('update', async () => {
    const responsePromise = client.core.analytics.openOrders.update();
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
      client.core.analytics.openOrders.update(
        {
          cursor: 'cursor',
          limit: 0,
          customer_group_ids: ['acgp_6p4z57e9alaf'],
          customer_ids: ['ac_opnlh43ymyee'],
          item_ids: ['it_pej07ckhvu62'],
          product_line_ids: ['pdln_k9bnlgvxhxjh'],
          sales_rep_ids: ['acus_e5zu8bde0z3h'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('retrieveLines', async () => {
    const responsePromise = client.core.analytics.openOrders.retrieveLines('example');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateBreakdown', async () => {
    const responsePromise = client.core.analytics.openOrders.updateBreakdown();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateBreakdown: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.analytics.openOrders.updateBreakdown(
        {
          cursor: 'cursor',
          limit: 0,
          customer_group_ids: ['acgp_6p4z57e9alaf'],
          customer_ids: ['ac_opnlh43ymyee'],
          item_ids: ['it_pej07ckhvu62'],
          product_line_ids: ['pdln_k9bnlgvxhxjh'],
          sales_rep_ids: ['acus_e5zu8bde0z3h'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('updateSummary', async () => {
    const responsePromise = client.core.analytics.openOrders.updateSummary();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateSummary: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.analytics.openOrders.updateSummary(
        {
          customer_group_ids: ['acgp_6p4z57e9alaf'],
          customer_ids: ['ac_opnlh43ymyee'],
          item_ids: ['it_pej07ckhvu62'],
          product_line_ids: ['pdln_k9bnlgvxhxjh'],
          sales_rep_ids: ['acus_e5zu8bde0z3h'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });
});
