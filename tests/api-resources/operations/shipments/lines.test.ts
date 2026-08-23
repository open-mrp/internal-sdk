// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lines', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.shipments.lines.create('sh_pfygp2gl45y4', {
      quantity_unit_id: 'un_82bd37dae5po',
      quantity_value: '10.000000000000000000000000000000',
      sales_order_line_id: 'orln_la01fxgrwcnr',
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
    const response = await client.operations.shipments.lines.create('sh_pfygp2gl45y4', {
      quantity_unit_id: 'un_82bd37dae5po',
      quantity_value: '10.000000000000000000000000000000',
      sales_order_line_id: 'orln_la01fxgrwcnr',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.operations.shipments.lines.retrieve('example', {
      shipment_id: 'sh_pfygp2gl45y4',
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
      shipment_id: 'sh_pfygp2gl45y4',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.operations.shipments.lines.update('example', {
      shipment_id: 'sh_pfygp2gl45y4',
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
    const response = await client.operations.shipments.lines.update('example', {
      shipment_id: 'sh_pfygp2gl45y4',
      quantity_unit_id: 'un_82bd37dae5po',
      quantity_value: '5.000000000000000000000000000000',
    });
  });

  test('list', async () => {
    const responsePromise = client.operations.shipments.lines.list('sh_pfygp2gl45y4');
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
        'sh_pfygp2gl45y4',
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenMRP.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.operations.shipments.lines.delete('example', {
      shipment_id: 'sh_pfygp2gl45y4',
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
      shipment_id: 'sh_pfygp2gl45y4',
    });
  });
});
