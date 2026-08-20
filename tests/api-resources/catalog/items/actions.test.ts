// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkCreate: only required params', async () => {
    const responsePromise = client.catalog.items.actions.bulkCreate({
      items: [{ item_category_id: 'ic_d06g9c6yc9ck', sku: 'ALM-FLOUR-25LB' }],
      type: 'material',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkCreate: required and optional params', async () => {
    const response = await client.catalog.items.actions.bulkCreate({
      items: [
        {
          item_category_id: 'ic_d06g9c6yc9ck',
          sku: 'ALM-FLOUR-25LB',
          description: 'Raw almond flour, 25 lb bag',
          product_line_id: 'product_line_id',
        },
      ],
      type: 'material',
    });
  });

  test('bulkReconcile: only required params', async () => {
    const responsePromise = client.catalog.items.actions.bulkReconcile({
      data: [
        {
          quantity: '10.5',
          sku: 'ALM-2024-1001',
          unit: 'kg',
        },
      ],
      reconcile_type: 'addition',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkReconcile: required and optional params', async () => {
    const response = await client.catalog.items.actions.bulkReconcile({
      data: [
        {
          quantity: '10.5',
          sku: 'ALM-2024-1001',
          unit: 'kg',
        },
      ],
      reconcile_type: 'addition',
    });
  });

  test('export', async () => {
    const responsePromise = client.catalog.items.actions.export();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
