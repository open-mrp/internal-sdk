// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lines', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sales.salesOrders.lines.create('id', {
      product_id: 'product_id',
      product_sku: 'product_sku',
      quantity_unit_id: 'quantity_unit_id',
      quantity_value: 'quantity_value',
      unit_price_denominator_unit_id: 'unit_price_denominator_unit_id',
      unit_price_numerator_unit_id: 'unit_price_numerator_unit_id',
      unit_price_value: 'unit_price_value',
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
    const response = await client.sales.salesOrders.lines.create('id', {
      product_id: 'product_id',
      product_sku: 'product_sku',
      quantity_unit_id: 'quantity_unit_id',
      quantity_value: 'quantity_value',
      unit_price_denominator_unit_id: 'unit_price_denominator_unit_id',
      unit_price_numerator_unit_id: 'unit_price_numerator_unit_id',
      unit_price_value: 'unit_price_value',
      edi_line_item_id: 'edi_line_item_id',
      item_id: 'item_id',
      product_description: 'product_description',
      unit_cost_denominator_unit_id: 'unit_cost_denominator_unit_id',
      unit_cost_numerator_unit_id: 'unit_cost_numerator_unit_id',
      unit_cost_value: 'unit_cost_value',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.sales.salesOrders.lines.update('line_id', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.sales.salesOrders.lines.update('line_id', {
      id: 'id',
      edi_line_item_id: 'edi_line_item_id',
      item_id: 'item_id',
      product_description: 'product_description',
      product_id: 'pd_01jm4r6700f8nwq3v5hx2d9ktp',
      product_sku: 'WIDGET-001',
      quantity_unit_id: 'quantity_unit_id',
      quantity_value: '20',
      unit_cost_denominator_unit_id: 'unit_cost_denominator_unit_id',
      unit_cost_numerator_unit_id: 'unit_cost_numerator_unit_id',
      unit_cost_value: 'unit_cost_value',
      unit_price_denominator_unit_id: 'unit_price_denominator_unit_id',
      unit_price_numerator_unit_id: 'unit_price_numerator_unit_id',
      unit_price_value: '30.00',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.sales.salesOrders.lines.delete('line_id', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.sales.salesOrders.lines.delete('line_id', { id: 'id' });
  });
});
