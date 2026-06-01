// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('estimateRate: only required params', async () => {
    const responsePromise = client.operations.shipments.actions.estimateRate({
      carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
      from_address: { country: 'US', name: 'Origin Warehouse' },
      parcels: [
        {
          height: 6,
          length: 12,
          weight: 5,
          width: 8,
        },
      ],
      service_level_id: 'crop_01cfaf03f104e90ef9680e2a30',
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
      carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
      from_address: {
        country: 'US',
        name: 'Origin Warehouse',
        email: 'email',
        locality: 'locality',
        phone: 'phone',
        postal_code: 'postal_code',
        state: 'state',
        street_line_1: 'street_line_1',
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
      service_level_id: 'crop_01cfaf03f104e90ef9680e2a30',
      to_address: {
        country: 'US',
        name: 'Destination',
        email: 'email',
        locality: 'locality',
        phone: 'phone',
        postal_code: 'postal_code',
        state: 'state',
        street_line_1: 'street_line_1',
        street_line_2: 'street_line_2',
        type: 'standard',
      },
      customer_id: 'customer_id',
      order_total: 0,
      product_line_ids: ['string'],
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
        locality: 'locality',
        phone: 'phone',
        postal_code: 'postal_code',
        state: 'state',
        street_line_1: 'street_line_1',
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
      to_address: {
        country: 'US',
        name: 'Destination',
        email: 'email',
        locality: 'locality',
        phone: 'phone',
        postal_code: 'postal_code',
        state: 'state',
        street_line_1: 'street_line_1',
        street_line_2: 'street_line_2',
        type: 'standard',
      },
      customer_id: 'customer_id',
      order_total: 0,
      product_line_ids: ['string'],
    });
  });

  test('ship: only required params', async () => {
    const responsePromise = client.operations.shipments.actions.ship('sh_018b3a946651bfb6572b06b2b2', {
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
    const response = await client.operations.shipments.actions.ship('sh_018b3a946651bfb6572b06b2b2', {
      email_customer: true,
      include: ['lines'],
    });
  });

  test('void', async () => {
    const responsePromise = client.operations.shipments.actions.void('sh_018b3a946651bfb6572b06b2b2');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
