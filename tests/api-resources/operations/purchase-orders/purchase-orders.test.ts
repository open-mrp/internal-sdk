// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource purchaseOrders', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.purchaseOrders.create({
      lines: [
        {
          product_id: 'pd_013c29ab3f1518d0004094c316',
          product_sku: 'RAW-100',
          quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
          quantity_value: '500',
          unit_price_denominator_unit_id: 'un_01966263f74a5a0cae356000a1',
          unit_price_numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
          unit_price_value: '12.50',
        },
      ],
      priority_code: 'normal',
      supplier_account_id: 'ac_0177902104bccac5fbb173cd96',
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
    const response = await client.operations.purchaseOrders.create({
      lines: [
        {
          product_id: 'pd_013c29ab3f1518d0004094c316',
          product_sku: 'RAW-100',
          quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
          quantity_value: '500',
          unit_price_denominator_unit_id: 'un_01966263f74a5a0cae356000a1',
          unit_price_numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
          unit_price_value: '12.50',
          item_id: 'item_id',
          product_description: 'product_description',
          unit_cost_denominator_unit_id: 'unit_cost_denominator_unit_id',
          unit_cost_numerator_unit_id: 'unit_cost_numerator_unit_id',
          unit_cost_value: 'unit_cost_value',
        },
      ],
      priority_code: 'normal',
      supplier_account_id: 'ac_0177902104bccac5fbb173cd96',
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
      carrier_id: 'carrier_id',
      contact_account_user_ids: ['string'],
      note: 'note',
      payment_term_id: 'payment_term_id',
      promised_at: 'promised_at',
      service_level_id: 'service_level_id',
      ship_to_country: 'ship_to_country',
      ship_to_locality: 'ship_to_locality',
      ship_to_name: 'ship_to_name',
      ship_to_postal_code: 'ship_to_postal_code',
      ship_to_state: 'ship_to_state',
      ship_to_street_line_1: 'ship_to_street_line_1',
      ship_to_street_line_2: 'ship_to_street_line_2',
      shipping_term_id: 'shipping_term_id',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.operations.purchaseOrders.retrieve('po_0169aa3a722b081b117ac0e44f');
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
        'po_0169aa3a722b081b117ac0e44f',
        { include: ['supplier'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.operations.purchaseOrders.update('po_0169aa3a722b081b117ac0e44f');
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
      client.operations.purchaseOrders.update(
        'po_0169aa3a722b081b117ac0e44f',
        {
          include: ['supplier'],
          billing_address_id: 'billing_address_id',
          contact_account_user_ids: ['string'],
          note: 'note',
          number: 'number',
          priority_code: 'priority_code',
          promised_at: 'promised_at',
          shipping_address_id: 'shipping_address_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.operations.purchaseOrders.list();
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
      client.operations.purchaseOrders.list(
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

  test('delete', async () => {
    const responsePromise = client.operations.purchaseOrders.delete('po_0169aa3a722b081b117ac0e44f');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
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
