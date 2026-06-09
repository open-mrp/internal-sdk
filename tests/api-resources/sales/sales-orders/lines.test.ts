// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lines', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sales.salesOrders.lines.create('or_01d5034136c3ccc048abecc312', {
      product_id: 'pd_013c29ab3f1518d0004094c316',
      product_sku: 'WIDGET-001',
      quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
      quantity_value: '10',
      unit_price_denominator_unit_id: 'un_01966263f74a5a0cae356000a1',
      unit_price_numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
      unit_price_value: '25.00',
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
    const response = await client.sales.salesOrders.lines.create('or_01d5034136c3ccc048abecc312', {
      product_id: 'pd_013c29ab3f1518d0004094c316',
      product_sku: 'WIDGET-001',
      quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
      quantity_value: '10',
      unit_price_denominator_unit_id: 'un_01966263f74a5a0cae356000a1',
      unit_price_numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
      unit_price_value: '25.00',
      include: ['product'],
      item_id: 'it_0131e386ac683e8c29a71f6f1f',
      product_description: 'product_description',
      unit_cost_denominator_unit_id: 'unit_cost_denominator_unit_id',
      unit_cost_numerator_unit_id: 'unit_cost_numerator_unit_id',
      unit_cost_value: 'unit_cost_value',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.sales.salesOrders.lines.update('example', {
      id: 'or_01d5034136c3ccc048abecc312',
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
    const response = await client.sales.salesOrders.lines.update('example', {
      id: 'or_01d5034136c3ccc048abecc312',
      include: ['product'],
      item_id: 'it_0131e386ac683e8c29a71f6f1f',
      product_description: 'product_description',
      product_sku: 'product_sku',
      quantity: { unit_id: 'un_01966263f74a5a0cae356000a1', value: '20' },
      unit_cost: {
        denominator_unit_id: 'denominator_unit_id',
        numerator_unit_id: 'numerator_unit_id',
        value: 'value',
      },
      unit_price: {
        denominator_unit_id: 'un_01966263f74a5a0cae356000a1',
        numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
        value: '30.00',
      },
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.sales.salesOrders.lines.delete('example', {
      id: 'or_01d5034136c3ccc048abecc312',
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
    const response = await client.sales.salesOrders.lines.delete('example', {
      id: 'or_01d5034136c3ccc048abecc312',
    });
  });
});
