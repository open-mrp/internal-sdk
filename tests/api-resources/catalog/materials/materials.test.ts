// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource materials', () => {
  test('create: only required params', async () => {
    const responsePromise = client.catalog.materials.create({
      category_id: 'ic_01ae7bd7bfd21ca0ab81e1357e',
      sku: 'MAT-001',
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
    const response = await client.catalog.materials.create({
      category_id: 'ic_01ae7bd7bfd21ca0ab81e1357e',
      sku: 'MAT-001',
      include: ['item'],
      attribute_ids: ['string'],
      description: 'description',
      lead_time: { unit_id: 'unit_id', value: 'value' },
      notes: 'notes',
      order_point: { unit_id: 'unit_id', value: 'value' },
      unit_cost: {
        denominator_unit_id: 'denominator_unit_id',
        numerator_unit_id: 'numerator_unit_id',
        value: 'value',
      },
      unit_price: {
        denominator_unit_id: 'denominator_unit_id',
        numerator_unit_id: 'numerator_unit_id',
        value: 'value',
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.catalog.materials.retrieve('ml_014613b8f7959a091d8cc0cef4');
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
      client.catalog.materials.retrieve(
        'ml_014613b8f7959a091d8cc0cef4',
        { include: ['item'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.catalog.materials.update('ml_014613b8f7959a091d8cc0cef4');
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
      client.catalog.materials.update(
        'ml_014613b8f7959a091d8cc0cef4',
        {
          include: ['item'],
          description: 'description',
          lead_time: { unit_id: 'unit_id', value: 'value' },
          notes: 'notes',
          order_point: { unit_id: 'unit_id', value: 'value' },
          sku: 'MAT-001-UPDATED',
          unit_cost: {
            denominator_unit_id: 'denominator_unit_id',
            numerator_unit_id: 'numerator_unit_id',
            value: 'value',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.catalog.materials.list();
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
      client.catalog.materials.list(
        {
          attribute_ids: ['string'],
          category_ids: ['string'],
          cursor: 'cursor',
          end_date: '2019-12-27T18:11:19.117Z',
          include: ['item'],
          limit: 0,
          q: 'q',
          start_date: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.catalog.materials.delete('ml_014613b8f7959a091d8cc0cef4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
