// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource purchaseOrders', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.purchaseOrders.create({
      lines: [
        {
          product_id: 'pd_07oe0r7adh2w',
          product_sku: 'RAW-100',
          quantity: { unit_id: 'un_82bd37dae5po', value: '500' },
          unit_price: {
            denominator_unit_id: 'un_82bd37dae5po',
            numerator_unit_id: 'un_82bd37dae5po',
            value: '12.50',
          },
        },
      ],
      priority_code: 'normal',
      supplier_account_id: 'ac_gwy8tfbc074f',
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
          product_id: 'pd_07oe0r7adh2w',
          product_sku: 'RAW-100',
          quantity: { unit_id: 'un_82bd37dae5po', value: '500' },
          unit_price: {
            denominator_unit_id: 'un_82bd37dae5po',
            numerator_unit_id: 'un_82bd37dae5po',
            value: '12.50',
          },
          item_id: 'item_id',
          product_description: 'product_description',
          unit_cost: {
            denominator_unit_id: 'denominator_unit_id',
            numerator_unit_id: 'numerator_unit_id',
            value: 'value',
          },
        },
      ],
      priority_code: 'normal',
      supplier_account_id: 'ac_gwy8tfbc074f',
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
      carrier_id: 'cr_tv5vfjtgu1n3',
      contact_account_user_ids: ['string'],
      note: 'Urgent restock order',
      payment_term_id: 'payment_term_id',
      promised_at: 'promised_at',
      service_level_id: 'crop_4ilk9p6gccrx',
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

  test('retrieve', async () => {
    const responsePromise = client.operations.purchaseOrders.retrieve('po_3ov2ym1pca8m');
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
        'po_3ov2ym1pca8m',
        { include: ['supplier'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.operations.purchaseOrders.update('po_3ov2ym1pca8m');
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
        'po_3ov2ym1pca8m',
        {
          include: ['supplier'],
          billing_address_id: 'billing_address_id',
          contact_account_user_ids: ['string'],
          note: 'Updated delivery notes',
          number: 'PO-001',
          priority_code: 'normal',
          promised_at: '2026-05-15T00:00:00Z',
          shipping_address_id: 'shipping_address_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
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
          ends_at: 'ends_at',
          include: ['supplier'],
          item_ids: ['string'],
          limit: 0,
          q: 'q',
          starts_at: 'starts_at',
          status_codes: ['estimate'],
          supplier_ids: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.operations.purchaseOrders.delete('po_3ov2ym1pca8m');
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
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });
});
