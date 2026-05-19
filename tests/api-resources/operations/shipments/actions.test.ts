// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('estimateRate: only required params', async () => {
    const responsePromise = client.operations.shipments.actions.estimateRate({
      carrier_id: 'cr_01jm4r6700f8nwq3v5hx2d9ktp',
      from_address: { country: 'US', name: 'Origin Warehouse' },
      parcels: [
        {
          height: 6,
          length: 12,
          weight: 5,
          width: 8,
        },
      ],
      product_line_ids: ['string'],
      service_level_id: 'crop_01jm4r6700f8nwq3v5hx2d9ktp',
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
      carrier_id: 'cr_01jm4r6700f8nwq3v5hx2d9ktp',
      from_address: {
        country: 'US',
        name: 'Origin Warehouse',
        email: 'email',
        locality: 'San Francisco',
        phone: 'phone',
        postal_code: '94105',
        state: 'CA',
        street_line_1: '123 Main Street',
        street_line_2: 'street_line_2',
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
      product_line_ids: ['string'],
      service_level_id: 'crop_01jm4r6700f8nwq3v5hx2d9ktp',
      to_address: {
        country: 'US',
        name: 'Destination',
        email: 'email',
        locality: 'Los Angeles',
        phone: 'phone',
        postal_code: '90001',
        state: 'CA',
        street_line_1: '456 Oak Avenue',
        street_line_2: 'street_line_2',
        type: 'standard',
      },
      customer_id: 'customer_id',
      order_total: 0,
    });
  });

  test('rateShop: only required params', async () => {
    const responsePromise = client.operations.shipments.actions.rateShop({
      from_address: { country: 'US', name: 'Origin Warehouse' },
      parcels: [
        {
          height: 6,
          length: 12,
          weight: 5,
          width: 8,
        },
      ],
      product_line_ids: ['string'],
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
      from_address: {
        country: 'US',
        name: 'Origin Warehouse',
        email: 'email',
        locality: 'San Francisco',
        phone: 'phone',
        postal_code: '94105',
        state: 'CA',
        street_line_1: '123 Main Street',
        street_line_2: 'street_line_2',
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
      product_line_ids: ['string'],
      to_address: {
        country: 'US',
        name: 'Destination',
        email: 'email',
        locality: 'Los Angeles',
        phone: 'phone',
        postal_code: '90001',
        state: 'CA',
        street_line_1: '456 Oak Avenue',
        street_line_2: 'street_line_2',
        type: 'standard',
      },
      customer_id: 'customer_id',
      order_total: 0,
    });
  });

  test('ship: only required params', async () => {
    const responsePromise = client.operations.shipments.actions.ship('id', { email_customer: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ship: required and optional params', async () => {
    const response = await client.operations.shipments.actions.ship('id', {
      email_customer: true,
      include: ['lines'],
    });
  });

  test('void', async () => {
    const responsePromise = client.operations.shipments.actions.void('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
