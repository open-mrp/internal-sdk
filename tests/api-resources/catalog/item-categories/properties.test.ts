// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource properties', () => {
  test('update: only required params', async () => {
    const responsePromise = client.catalog.itemCategories.properties.update('pp_01e21344878064372f69e67093', {
      id: 'ic_01ae7bd7bfd21ca0ab81e1357e',
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
    const response = await client.catalog.itemCategories.properties.update('pp_01e21344878064372f69e67093', {
      id: 'ic_01ae7bd7bfd21ca0ab81e1357e',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.catalog.itemCategories.properties.delete('pp_01e21344878064372f69e67093', {
      id: 'ic_01ae7bd7bfd21ca0ab81e1357e',
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
    const response = await client.catalog.itemCategories.properties.delete('pp_01e21344878064372f69e67093', {
      id: 'ic_01ae7bd7bfd21ca0ab81e1357e',
    });
  });
});
