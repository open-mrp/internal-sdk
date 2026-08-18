// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource volumeDiscounts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sales.volumeDiscounts.create({
      name: 'Bulk Order Discount',
      tiers: [
        {
          discount_percentage: '5.000000000000000000000000000000',
          name: '100+ Units',
          threshold: '100.000000000000000000000000000000',
        },
      ],
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
    const response = await client.sales.volumeDiscounts.create({
      name: 'Bulk Order Discount',
      tiers: [
        {
          discount_percentage: '5.000000000000000000000000000000',
          name: '100+ Units',
          threshold: '100.000000000000000000000000000000',
          parent_tier_id: 'parent_tier_id',
        },
      ],
      include: ['customer_groups'],
      attribute_ids: ['string'],
      category_ids: ['string'],
      customer_group_ids: ['string'],
      product_line_ids: ['string'],
      unit_ids: ['string'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.sales.volumeDiscounts.retrieve('quds_bn7hto9s10pp');
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
        'quds_bn7hto9s10pp',
        { include: ['customer_groups'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.sales.volumeDiscounts.update('quds_bn7hto9s10pp', {
      has_attributes: true,
      has_categories: true,
      has_customer_groups: true,
      has_product_lines: true,
      has_tiers: true,
      has_units: true,
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
    const response = await client.sales.volumeDiscounts.update('quds_bn7hto9s10pp', {
      has_attributes: true,
      has_categories: true,
      has_customer_groups: true,
      has_product_lines: true,
      has_tiers: true,
      has_units: true,
      include: ['customer_groups'],
      attribute_ids: ['string'],
      category_ids: ['string'],
      customer_group_ids: ['string'],
      name: 'Updated Bulk Discount',
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
    });
  });

  test('list', async () => {
    const responsePromise = client.sales.volumeDiscounts.list();
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
      client.sales.volumeDiscounts.list(
        {
          cursor: 'cursor',
          include: ['customer_groups'],
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.sales.volumeDiscounts.delete('quds_bn7hto9s10pp');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
