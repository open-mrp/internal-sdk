// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource materials', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.suppliers.materials.create('example', {
      material_id: 'ml_014613b8f7959a091d8cc0cef4',
      supplier_part_number: 'SUP-PART-001',
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
    const response = await client.operations.suppliers.materials.create('example', {
      material_id: 'ml_014613b8f7959a091d8cc0cef4',
      supplier_part_number: 'SUP-PART-001',
      is_active: false,
      supplier_description: 'supplier_description',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.operations.suppliers.materials.retrieve('ml_014613b8f7959a091d8cc0cef4', {
      supplier_id: 'example',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.operations.suppliers.materials.retrieve('ml_014613b8f7959a091d8cc0cef4', {
      supplier_id: 'example',
      include: ['material'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.operations.suppliers.materials.update('ml_014613b8f7959a091d8cc0cef4', {
      supplier_id: 'example',
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
    const response = await client.operations.suppliers.materials.update('ml_014613b8f7959a091d8cc0cef4', {
      supplier_id: 'example',
      is_active: false,
      supplier_description: 'supplier_description',
      supplier_part_number: 'supplier_part_number',
    });
  });

  test('list', async () => {
    const responsePromise = client.operations.suppliers.materials.list('example');
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
      client.operations.suppliers.materials.list(
        'example',
        {
          cursor: 'cursor',
          include: ['material'],
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.operations.suppliers.materials.delete('ml_014613b8f7959a091d8cc0cef4', {
      supplier_id: 'example',
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
    const response = await client.operations.suppliers.materials.delete('ml_014613b8f7959a091d8cc0cef4', {
      supplier_id: 'example',
    });
  });
});
