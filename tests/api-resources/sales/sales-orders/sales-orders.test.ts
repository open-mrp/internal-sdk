// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource salesOrders', () => {
  test('retrieve', async () => {
    const responsePromise = client.sales.salesOrders.retrieve('id');
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
      client.sales.salesOrders.retrieve(
        'id',
        { include: ['customer'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.sales.salesOrders.update('id');
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
      client.sales.salesOrders.update(
        'id',
        {
          include: ['customer'],
          acknowledgement_email_contacts: [{ account_user_id: 'account_user_id' }],
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
          customer_id: 'customer_id',
          customer_po_number: 'customer_po_number',
          invoice_email_contacts: [{ account_user_id: 'account_user_id' }],
          is_acknowledgment_sent: true,
          note: 'Updated shipping instructions',
          number: 'number',
          order_discount_id: 'order_discount_id',
          payment_term_id: 'payment_term_id',
          priority_code: 'normal',
          promised_at: '2019-12-27T18:11:19.117Z',
          sales_rep_id: 'sales_rep_id',
          service_level_id: 'service_level_id',
          ship_to_country: 'ship_to_country',
          ship_to_locality: 'ship_to_locality',
          ship_to_name: 'Acme Inc.',
          ship_to_postal_code: 'ship_to_postal_code',
          ship_to_state: 'ship_to_state',
          ship_to_street_line_1: '123 Main Street',
          ship_to_street_line_2: 'ship_to_street_line_2',
          shipping_term_id: 'shipping_term_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.sales.salesOrders.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('checkout: only required params', async () => {
    const responsePromise = client.sales.salesOrders.checkout('id', { email: 'email' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('checkout: required and optional params', async () => {
    const response = await client.sales.salesOrders.checkout('id', {
      email: 'email',
      cancel_url: 'cancel_url',
      success_url: 'success_url',
    });
  });

  test('retrieveSalesOrders', async () => {
    const responsePromise = client.sales.salesOrders.retrieveSalesOrders();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveSalesOrders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sales.salesOrders.retrieveSalesOrders(
        {
          cursor: 'cursor',
          customer_group_ids: ['string'],
          customer_ids: ['string'],
          end_date: 'end_date',
          exclude_internal_orders: true,
          include: ['customer'],
          item_ids: ['string'],
          limit: 0,
          product_line_ids: ['string'],
          q: 'q',
          sales_rep_ids: ['string'],
          start_date: 'start_date',
          status_codes: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('retrieveStatuses', async () => {
    const responsePromise = client.sales.salesOrders.retrieveStatuses();
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
      client.sales.salesOrders.retrieveStatuses(
        {
          cursor: 'cursor',
          include: ['owner'],
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('salesOrders: only required params', async () => {
    const responsePromise = client.sales.salesOrders.salesOrders({
      acknowledgement_email_contacts: [{ account_user_id: 'account_user_id' }],
      buyer_account_id: 'ac_01gf7a8200er3ar3pkfrb6kk29',
      invoice_email_contacts: [{ account_user_id: 'account_user_id' }],
      lines: [
        {
          product_id: 'pd_01jm4r6700f8nwq3v5hx2d9ktp',
          product_sku: 'WIDGET-001',
          quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          quantity_value: '10',
          unit_price_denominator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          unit_price_numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          unit_price_value: '25.00',
        },
      ],
      priority_code: 'normal',
      sales_order_type_code: 'sales_order',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('salesOrders: required and optional params', async () => {
    const response = await client.sales.salesOrders.salesOrders({
      acknowledgement_email_contacts: [{ account_user_id: 'account_user_id' }],
      buyer_account_id: 'ac_01gf7a8200er3ar3pkfrb6kk29',
      invoice_email_contacts: [{ account_user_id: 'account_user_id' }],
      lines: [
        {
          product_id: 'pd_01jm4r6700f8nwq3v5hx2d9ktp',
          product_sku: 'WIDGET-001',
          quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          quantity_value: '10',
          unit_price_denominator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          unit_price_numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
          unit_price_value: '25.00',
          item_id: 'item_id',
          product_description: 'product_description',
          unit_cost_denominator_unit_id: 'unit_cost_denominator_unit_id',
          unit_cost_numerator_unit_id: 'unit_cost_numerator_unit_id',
          unit_cost_value: 'unit_cost_value',
          edi_line_item_id: 'edi_line_item_id',
        },
      ],
      priority_code: 'normal',
      sales_order_type_code: 'sales_order',
      include: ['customer'],
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
      customer_po_number: 'customer_po_number',
      note: 'Rush order for trade show',
      order_discount_id: 'order_discount_id',
      payment_term_id: 'payment_term_id',
      sales_rep_id: 'sales_rep_id',
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
});
