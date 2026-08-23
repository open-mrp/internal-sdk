// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('adminUpdateTracking', async () => {
    const responsePromise = client.operations.shipments.actions.adminUpdateTracking('sh_pfygp2gl45y4');
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
      client.operations.shipments.actions.adminUpdateTracking(
        'sh_pfygp2gl45y4',
        {
          include: ['lines'],
          carrier_id: 'carrier_id',
          master_tracking_number: '1Z999AA10123456784',
          service_level_id: 'service_level_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('estimateRate: only required params', async () => {
    const responsePromise = client.operations.shipments.actions.estimateRate({
      carrier_id: 'cr_tv5vfjtgu1n3',
      from_address: { country: 'US', name: 'Origin Warehouse' },
      parcels: [
        {
          height: 6,
          length: 12,
          weight: 5,
          width: 8,
        },
      ],
      service_level_id: 'crop_4ilk9p6gccrx',
      to_address: { country: 'US', name: 'Destination' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('estimateRate: required and optional params', async () => {
    const response = await client.operations.shipments.actions.estimateRate({
      carrier_id: 'cr_tv5vfjtgu1n3',
      from_address: {
        country: 'US',
        name: 'Origin Warehouse',
        email: 'warehouse@acme.com',
        locality: 'San Francisco',
        phone: '555-123-4567',
        postal_code: '94105',
        receive_calendar_id: 'receive_calendar_id',
        state: 'CA',
        street_line_1: '123 Main Street',
        street_line_2: 'Suite 400',
        type: 'standard',
      },
      parcels: [
        {
          height: 6,
          length: 12,
          weight: 5,
          width: 8,
        },
      ],
      service_level_id: 'crop_4ilk9p6gccrx',
      to_address: {
        country: 'US',
        name: 'Destination',
        email: 'warehouse@acme.com',
        locality: 'Los Angeles',
        phone: '555-123-4567',
        postal_code: '90001',
        receive_calendar_id: 'receive_calendar_id',
        state: 'CA',
        street_line_1: '456 Oak Avenue',
        street_line_2: 'Suite 400',
        type: 'standard',
      },
      customer_id: 'customer_id',
      order_total: 0,
      product_line_ids: ['string'],
    });
  });

  test('rateShop: only required params', async () => {
    const responsePromise = client.operations.shipments.actions.rateShop({
      parcels: [
        {
          height: 6,
          length: 12,
          weight: 5,
          width: 8,
        },
      ],
      to_address: { country: 'US', name: 'Destination' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('rateShop: required and optional params', async () => {
    const response = await client.operations.shipments.actions.rateShop({
      parcels: [
        {
          height: 6,
          length: 12,
          weight: 5,
          width: 8,
        },
      ],
      to_address: {
        country: 'US',
        name: 'Destination',
        email: 'warehouse@acme.com',
        locality: 'Los Angeles',
        phone: '555-123-4567',
        postal_code: '90001',
        receive_calendar_id: 'receive_calendar_id',
        state: 'CA',
        street_line_1: '456 Oak Avenue',
        street_line_2: 'Suite 400',
        type: 'standard',
      },
      customer_id: 'customer_id',
      from_address: {
        country: 'US',
        name: 'Origin Warehouse',
        email: 'warehouse@acme.com',
        locality: 'San Francisco',
        phone: '555-123-4567',
        postal_code: '94105',
        receive_calendar_id: 'receive_calendar_id',
        state: 'CA',
        street_line_1: '123 Main Street',
        street_line_2: 'Suite 400',
        type: 'standard',
      },
      order_total: 0,
      product_line_ids: ['string'],
    });
  });

  test('ship: only required params', async () => {
    const responsePromise = client.operations.shipments.actions.ship('sh_pfygp2gl45y4', {
      email_customer: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ship: required and optional params', async () => {
    const response = await client.operations.shipments.actions.ship('sh_pfygp2gl45y4', {
      email_customer: true,
      include: ['lines'],
    });
  });

  test('void', async () => {
    const responsePromise = client.operations.shipments.actions.void('sh_pfygp2gl45y4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
