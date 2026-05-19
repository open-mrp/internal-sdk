// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sales.customers.create({
      bill_to_address: { country: 'US', name: 'Acme Inc.' },
      customer_type_group_id: 'acgp_01jm4r6700f8nwq3v5hx2d9ktp',
      default_carrier_id: 'cr_01jm4r6700f8nwq3v5hx2d9ktp',
      default_payment_term_id: 'pytm_01jm4r6700f8nwq3v5hx2d9ktp',
      default_shipping_term_id: 'shtm_01jm4r6700f8nwq3v5hx2d9ktp',
      name: 'Acme Inc.',
      ship_to_address: { country: 'US', name: 'Acme Inc.' },
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
    const response = await client.sales.customers.create({
      bill_to_address: {
        country: 'US',
        name: 'Acme Inc.',
        email: 'email',
        locality: 'locality',
        phone: 'phone',
        postal_code: 'postal_code',
        state: 'state',
        street_line_1: 'street_line_1',
        street_line_2: 'street_line_2',
        type: 'standard',
      },
      customer_type_group_id: 'acgp_01jm4r6700f8nwq3v5hx2d9ktp',
      default_carrier_id: 'cr_01jm4r6700f8nwq3v5hx2d9ktp',
      default_payment_term_id: 'pytm_01jm4r6700f8nwq3v5hx2d9ktp',
      default_shipping_term_id: 'shtm_01jm4r6700f8nwq3v5hx2d9ktp',
      name: 'Acme Inc.',
      ship_to_address: {
        country: 'US',
        name: 'Acme Inc.',
        email: 'email',
        locality: 'locality',
        phone: 'phone',
        postal_code: 'postal_code',
        state: 'state',
        street_line_1: 'street_line_1',
        street_line_2: 'street_line_2',
        type: 'standard',
      },
      include: ['bill_to_address'],
      carrier_billing_account: 'carrier_billing_account',
      carrier_billing_type: 'sender',
      commission_policy: 'commission_applied',
      credit_limit: { unit_id: 'unit_id', value: 'value' },
      customer_price_group_ids: ['string'],
      default_priority: 'low',
      default_sales_rep_id: 'default_sales_rep_id',
      default_service_level_id: 'default_service_level_id',
      edi_status: 'enabled',
      email: 'email',
      freight_policy: 'free_freight',
      note: 'Key enterprise account',
      number: 'number',
      phone: 'phone',
      status: 'normal',
      url: 'url',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.sales.customers.retrieve('ac_01gf7a8200er3ar3pkfrb6kk29');
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
      client.sales.customers.retrieve(
        'ac_01gf7a8200er3ar3pkfrb6kk29',
        { include: ['bill_to_address'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.sales.customers.update('ac_01gf7a8200er3ar3pkfrb6kk29');
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
      client.sales.customers.update(
        'ac_01gf7a8200er3ar3pkfrb6kk29',
        {
          include: ['bill_to_address'],
          bill_to_address_id: 'bill_to_address_id',
          carrier_billing_account: 'carrier_billing_account',
          carrier_billing_type: 'sender',
          commission_policy: 'commission_applied',
          credit_limit: { unit_id: 'unit_id', value: 'value' },
          customer_price_group_ids: ['string'],
          customer_type_group_id: 'customer_type_group_id',
          default_carrier_id: 'cr_01jm4r6700f8nwq3v5hx2d9ktp',
          default_payment_term_id: 'default_payment_term_id',
          default_priority: 'low',
          default_sales_rep_id: 'default_sales_rep_id',
          default_service_level_id: 'default_service_level_id',
          default_shipping_term_id: 'default_shipping_term_id',
          edi_status: 'enabled',
          email: 'email',
          freight_policy: 'billed_freight',
          name: 'Acme Corp Updated',
          note: 'note',
          number: 'number',
          phone: 'phone',
          ship_to_address_id: 'ship_to_address_id',
          status: 'normal',
          url: 'url',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.sales.customers.list();
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
      client.sales.customers.list(
        {
          carrier_ids: ['string'],
          city: 'city',
          commission_status_codes: ['commission_applied'],
          cursor: 'cursor',
          customer_group_ids: ['string'],
          end_date: '2019-12-27T18:11:19.117Z',
          freight_status_codes: ['free_freight'],
          include: ['bill_to_address'],
          limit: 0,
          parent_account_status: 'parent',
          payment_term_ids: ['string'],
          postal_code: 'postal_code',
          pricing_group_ids: ['string'],
          q: 'q',
          sales_rep_ids: ['string'],
          service_level_ids: ['string'],
          shipping_term_ids: ['string'],
          start_date: '2019-12-27T18:11:19.117Z',
          state: 'state',
          status_codes: ['normal'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.sales.customers.delete('ac_01gf7a8200er3ar3pkfrb6kk29');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('registration: only required params', async () => {
    const responsePromise = client.sales.customers.registration({
      account_slug: 'my-company',
      is_existing_customer: false,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('registration: required and optional params', async () => {
    const response = await client.sales.customers.registration({
      account_slug: 'my-company',
      is_existing_customer: false,
      address: {
        country: 'US',
        name: 'Headquarters',
        email: 'email',
        locality: 'locality',
        phone: 'phone',
        postal_code: 'postal_code',
        state: 'state',
        street_line_1: 'street_line_1',
        street_line_2: 'street_line_2',
        type: 'standard',
      },
      customer_group_id: 'cgrp_01abc',
      customer_name: 'Acme Corp',
      customer_number: 'customer_number',
      payment_term_id: 'pt_01abc',
      phone: '+15551234567',
      shipping_term_id: 'st_01abc',
    });
  });

  test('retrieveFrequentlyOrderedProducts', async () => {
    const responsePromise = client.sales.customers.retrieveFrequentlyOrderedProducts(
      'ac_01gf7a8200er3ar3pkfrb6kk29',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
