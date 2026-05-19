// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource volumeDiscounts', () => {
  test('retrieve', async () => {
    const responsePromise = client.sales.volumeDiscounts.retrieve('id');
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
      client.sales.volumeDiscounts.retrieve(
        'id',
        { include: ['customer_groups'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.sales.volumeDiscounts.update('id', {
      attribute_ids: ['string'],
      category_ids: ['string'],
      customer_group_ids: ['string'],
      has_attributes: true,
      has_categories: true,
      has_customer_groups: true,
      has_product_lines: true,
      has_tiers: true,
      has_units: true,
      product_line_ids: ['string'],
      tiers: [{}],
      unit_ids: ['string'],
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
    const response = await client.sales.volumeDiscounts.update('id', {
      attribute_ids: ['string'],
      category_ids: ['string'],
      customer_group_ids: ['string'],
      has_attributes: true,
      has_categories: true,
      has_customer_groups: true,
      has_product_lines: true,
      has_tiers: true,
      has_units: true,
      product_line_ids: ['string'],
      tiers: [
        {
          id: 'id',
          discount_percentage: '10.000000000000000000000000000000',
          name: '50+ Units',
          parent_tier_id: 'parent_tier_id',
          threshold: '50.000000000000000000000000000000',
        },
      ],
      unit_ids: ['string'],
      name: 'Updated Bulk Discount',
    });
  });

  test('delete', async () => {
    const responsePromise = client.sales.volumeDiscounts.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveVolumeDiscounts', async () => {
    const responsePromise = client.sales.volumeDiscounts.retrieveVolumeDiscounts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveVolumeDiscounts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sales.volumeDiscounts.retrieveVolumeDiscounts(
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('volumeDiscounts: only required params', async () => {
    const responsePromise = client.sales.volumeDiscounts.volumeDiscounts({
      attribute_ids: ['string'],
      category_ids: ['string'],
      customer_group_ids: ['string'],
      name: 'Bulk Order Discount',
      product_line_ids: ['string'],
      tiers: [
        {
          discount_percentage: '5.000000000000000000000000000000',
          name: '100+ Units',
          threshold: '100.000000000000000000000000000000',
        },
      ],
      unit_ids: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('volumeDiscounts: required and optional params', async () => {
    const response = await client.sales.volumeDiscounts.volumeDiscounts({
      attribute_ids: ['string'],
      category_ids: ['string'],
      customer_group_ids: ['string'],
      name: 'Bulk Order Discount',
      product_line_ids: ['string'],
      tiers: [
        {
          discount_percentage: '5.000000000000000000000000000000',
          name: '100+ Units',
          threshold: '100.000000000000000000000000000000',
          parent_tier_id: 'parent_tier_id',
        },
      ],
      unit_ids: ['string'],
    });
  });
});
