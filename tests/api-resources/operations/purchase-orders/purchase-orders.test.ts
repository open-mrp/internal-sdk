// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource purchaseOrders', () => {
  test('retrieve', async () => {
    const responsePromise = client.operations.purchaseOrders.retrieve('id');
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
      client.operations.purchaseOrders.retrieve(
        'id',
        { include: ['supplier'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.operations.purchaseOrders.update('id', {
      contact_account_user_ids: ['string'],
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
    const response = await client.operations.purchaseOrders.update('id', {
      contact_account_user_ids: ['string'],
      include: ['supplier'],
      billing_address_id: 'billing_address_id',
      note: 'Updated delivery notes',
      number: 'PO-001',
      priority_code: 'normal',
      promised_at: '2026-05-15T00:00:00Z',
      shipping_address_id: 'shipping_address_id',
    });
  });

  test('delete', async () => {
    const responsePromise = client.operations.purchaseOrders.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('purchaseOrders: only required params', async () => {
    const responsePromise = client.operations.purchaseOrders.purchaseOrders({
      contact_account_user_ids: ['string'],
      lines: [
        {
          product_id: 'pd_01jm4r6700f8nwq3v5hx2d9ktp',
          product_sku: 'RAW-100',
          quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          quantity_value: '500',
          unit_price_denominator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          unit_price_numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          unit_price_value: '12.50',
        },
      ],
      priority_code: 'normal',
      supplier_account_id: 'ac_02kn5s7811g9qwce7cizr4e0mq',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('purchaseOrders: required and optional params', async () => {
    const response = await client.operations.purchaseOrders.purchaseOrders({
      contact_account_user_ids: ['string'],
      lines: [
        {
          product_id: 'pd_01jm4r6700f8nwq3v5hx2d9ktp',
          product_sku: 'RAW-100',
          quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          quantity_value: '500',
          unit_price_denominator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          unit_price_numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          unit_price_value: '12.50',
          item_id: 'item_id',
          product_description: 'product_description',
          unit_cost_denominator_unit_id: 'unit_cost_denominator_unit_id',
          unit_cost_numerator_unit_id: 'unit_cost_numerator_unit_id',
          unit_cost_value: 'unit_cost_value',
        },
      ],
      priority_code: 'normal',
      supplier_account_id: 'ac_02kn5s7811g9qwce7cizr4e0mq',
      include: ['supplier'],
      bill_to_country: 'bill_to_country',
      bill_to_locality: 'bill_to_locality',
      bill_to_name: 'bill_to_name',
      bill_to_postal_code: 'bill_to_postal_code',
      bill_to_state: 'bill_to_state',
      bill_to_street_line_1: 'bill_to_street_line_1',
      bill_to_street_line_2: 'bill_to_street_line_2',
      carrier_billing_account: 'carrier_billing_account',
      carrier_billing_type: 'carrier_billing_type',
      carrier_id: 'cr_01jm4r6700f8nwq3v5hx2d9ktp',
      note: 'Urgent restock order',
      payment_term_id: 'payment_term_id',
      promised_at: 'promised_at',
      service_level_id: 'crop_01jm4r6700f8nwq3v5hx2d9ktp',
      ship_to_country: 'US',
      ship_to_locality: 'San Francisco',
      ship_to_name: 'Acme Inc.',
      ship_to_postal_code: '94105',
      ship_to_state: 'CA',
      ship_to_street_line_1: '123 Main Street',
      ship_to_street_line_2: 'ship_to_street_line_2',
      shipping_term_id: 'shipping_term_id',
    });
  });

  test('retrievePurchaseOrders', async () => {
    const responsePromise = client.operations.purchaseOrders.retrievePurchaseOrders();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrievePurchaseOrders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.purchaseOrders.retrievePurchaseOrders(
        {
          cursor: 'cursor',
          end_date: 'end_date',
          item_ids: ['string'],
          limit: 0,
          q: 'q',
          start_date: 'start_date',
          status_codes: ['string'],
          supplier_ids: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('retrieveStatuses', async () => {
    const responsePromise = client.operations.purchaseOrders.retrieveStatuses();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveStatuses: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.purchaseOrders.retrieveStatuses(
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });
});
