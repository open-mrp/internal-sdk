// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  test('create: only required params', async () => {
    const responsePromise = client.catalog.products.create({
      category_id: 'ic_01ae7bd7bfd21ca0ab81e1357e',
      sku: 'ALM-2024-1001',
      type: 'sale',
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
    const response = await client.catalog.products.create({
      category_id: 'ic_01ae7bd7bfd21ca0ab81e1357e',
      sku: 'ALM-2024-1001',
      type: 'sale',
      include: ['product_line'],
      attribute_ids: ['at_01c9493ec0c46bb0ed12708ae4'],
      description: 'Wireless barcode scanner with charging cradle',
      notes: 'Ships with a 2-year warranty; register for extended coverage.',
      portal_visibility: 'visible',
      product_line_id: 'pl_01996357326a0d3f7b129542ea',
      unit_cost: {
        denominator_unit_id: 'un_01966263f74a5a0cae356000a1',
        numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
        value: '112.00',
      },
      unit_price: {
        denominator_unit_id: 'un_01966263f74a5a0cae356000a1',
        numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
        value: '199.00',
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.catalog.products.retrieve('pd_013c29ab3f1518d0004094c316');
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
      client.catalog.products.retrieve(
        'pd_013c29ab3f1518d0004094c316',
        { include: ['product_line'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.catalog.products.update('pd_013c29ab3f1518d0004094c316');
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
      client.catalog.products.update(
        'pd_013c29ab3f1518d0004094c316',
        {
          include: ['product_line'],
          description: 'Wireless barcode scanner with charging cradle (v2)',
          notes: 'Firmware 2.1 improves Bluetooth pairing reliability.',
          portal_visibility: 'visible',
          sku: 'SKU-002',
          unit_price: {
            denominator_unit_id: 'un_01966263f74a5a0cae356000a1',
            numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
            value: '219.00',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.catalog.products.list();
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
      client.catalog.products.list(
        {
          attribute_ids: ['string'],
          category_ids: ['string'],
          cursor: 'cursor',
          customer_ids: ['string'],
          end_date: '2019-12-27T18:11:19.117Z',
          include: ['product_line'],
          limit: 0,
          portal_visibility: 'visible',
          product_line_ids: ['string'],
          q: 'q',
          start_date: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.catalog.products.delete('pd_013c29ab3f1518d0004094c316');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.catalog.products.delete(
        'pd_013c29ab3f1518d0004094c316',
        { include: ['product_line'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('changeProductLine: only required params', async () => {
    const responsePromise = client.catalog.products.changeProductLine('pl_01996357326a0d3f7b129542ea', {
      id: 'pd_013c29ab3f1518d0004094c316',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('changeProductLine: required and optional params', async () => {
    const response = await client.catalog.products.changeProductLine('pl_01996357326a0d3f7b129542ea', {
      id: 'pd_013c29ab3f1518d0004094c316',
      include: ['product_line'],
    });
  });
});
