// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource attributes', () => {
  test('update: only required params', async () => {
    const responsePromise = client.catalog.items.attributes.update('at_01c9493ec0c46bb0ed12708ae4', {
      id: 'it_0131e386ac683e8c29a71f6f1f',
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
    const response = await client.catalog.items.attributes.update('at_01c9493ec0c46bb0ed12708ae4', {
      id: 'it_0131e386ac683e8c29a71f6f1f',
      include: ['category'],
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.catalog.items.attributes.delete('at_01c9493ec0c46bb0ed12708ae4', {
      id: 'it_0131e386ac683e8c29a71f6f1f',
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
    const response = await client.catalog.items.attributes.delete('at_01c9493ec0c46bb0ed12708ae4', {
      id: 'it_0131e386ac683e8c29a71f6f1f',
      include: ['category'],
    });
  });
});
