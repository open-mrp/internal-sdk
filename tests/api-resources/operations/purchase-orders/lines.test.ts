// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lines', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.purchaseOrders.lines.create('po_3ov2ym1pca8m', {
      product_id: 'pd_07oe0r7adh2w',
      product_sku: 'ALM-2024-1001',
      quantity: { unit_id: 'un_82bd37dae5po', value: '10' },
      unit_price: {
        denominator_unit_id: 'un_82bd37dae5po',
        numerator_unit_id: 'un_82bd37dae5po',
        value: '25.50',
      },
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
    const response = await client.operations.purchaseOrders.lines.create('po_3ov2ym1pca8m', {
      product_id: 'pd_07oe0r7adh2w',
      product_sku: 'ALM-2024-1001',
      quantity: { unit_id: 'un_82bd37dae5po', value: '10' },
      unit_price: {
        denominator_unit_id: 'un_82bd37dae5po',
        numerator_unit_id: 'un_82bd37dae5po',
        value: '25.50',
      },
      item_id: 'it_pej07ckhvu62',
      product_description: '6061-T6 Aluminum Sheet 4x8',
      unit_cost: {
        denominator_unit_id: 'denominator_unit_id',
        numerator_unit_id: 'numerator_unit_id',
        value: 'value',
      },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.operations.purchaseOrders.lines.update('example', {
      id: 'po_3ov2ym1pca8m',
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
    const response = await client.operations.purchaseOrders.lines.update('example', {
      id: 'po_3ov2ym1pca8m',
      item_id: 'item_id',
      product_description: 'product_description',
      product_id: 'pd_07oe0r7adh2w',
      product_sku: 'RAW-100',
      quantity_unit_id: 'quantity_unit_id',
      quantity_value: '250',
      unit_cost_denominator_unit_id: 'unit_cost_denominator_unit_id',
      unit_cost_numerator_unit_id: 'unit_cost_numerator_unit_id',
      unit_cost_value: 'unit_cost_value',
      unit_price_denominator_unit_id: 'unit_price_denominator_unit_id',
      unit_price_numerator_unit_id: 'unit_price_numerator_unit_id',
      unit_price_value: '15.00',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.operations.purchaseOrders.lines.delete('example', {
      id: 'po_3ov2ym1pca8m',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.operations.purchaseOrders.lines.delete('example', {
      id: 'po_3ov2ym1pca8m',
    });
  });
});
