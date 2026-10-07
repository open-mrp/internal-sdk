// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkDelete: only required params', async () => {
    const responsePromise = client.sales.customers.actions.bulkDelete({ customer_ids: ['ac_opnlh43ymyee'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkDelete: required and optional params', async () => {
    const response = await client.sales.customers.actions.bulkDelete({ customer_ids: ['ac_opnlh43ymyee'] });
  });

  test('export', async () => {
    const responsePromise = client.sales.customers.actions.export();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('export: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sales.customers.actions.export(
        {
          include: ['created_by'],
          carrier_ids: ['string'],
          city: 'city',
          commission_status_codes: ['commission_applied'],
          customer_group_ids: ['acgp_6p4z57e9alaf'],
          ends_at: '2019-12-27T18:11:19.117Z',
          freight_status_codes: ['free_freight'],
          parent_account_status: 'parent',
          payment_term_ids: ['string'],
          postal_code: 'postal_code',
          pricing_group_ids: ['string'],
          q: 'q',
          sales_rep_ids: ['string'],
          service_level_ids: ['string'],
          shipping_term_ids: ['string'],
          starts_at: '2019-12-27T18:11:19.117Z',
          state: 'state',
          status_codes: ['normal'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('merge: only required params', async () => {
    const responsePromise = client.sales.customers.actions.merge('ac_opnlh43ymyee', {
      source_customer_ids: ['ac_opnlh43ymyee'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('merge: required and optional params', async () => {
    const response = await client.sales.customers.actions.merge('ac_opnlh43ymyee', {
      source_customer_ids: ['ac_opnlh43ymyee'],
      include: ['bill_to_address'],
    });
  });
});
