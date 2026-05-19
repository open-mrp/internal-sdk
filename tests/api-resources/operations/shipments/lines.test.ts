// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lines', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.shipments.lines.create('', {
      quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
      quantity_value: '10.000000000000000000000000000000',
      sales_order_line_id: 'orln_01jm4r6700f8nwq3v5hx2d9ktp',
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
    const response = await client.operations.shipments.lines.create('', {
      quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
      quantity_value: '10.000000000000000000000000000000',
      sales_order_line_id: 'orln_01jm4r6700f8nwq3v5hx2d9ktp',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.operations.shipments.lines.retrieve('example', {
      shipment_id: 'sh_01jm4r6700f8nwq3v5hx2d9ktp',
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
    const response = await client.operations.shipments.lines.retrieve('example', {
      shipment_id: 'sh_01jm4r6700f8nwq3v5hx2d9ktp',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.operations.shipments.lines.update('', { shipment_id: '' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.operations.shipments.lines.update('', {
      shipment_id: '',
      quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
      quantity_value: '5.000000000000000000000000000000',
    });
  });

  test('list', async () => {
    const responsePromise = client.operations.shipments.lines.list('sh_01jm4r6700f8nwq3v5hx2d9ktp');
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
      client.operations.shipments.lines.list(
        'sh_01jm4r6700f8nwq3v5hx2d9ktp',
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.operations.shipments.lines.delete('example', {
      shipment_id: 'sh_01jm4r6700f8nwq3v5hx2d9ktp',
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
    const response = await client.operations.shipments.lines.delete('example', {
      shipment_id: 'sh_01jm4r6700f8nwq3v5hx2d9ktp',
    });
  });
});
