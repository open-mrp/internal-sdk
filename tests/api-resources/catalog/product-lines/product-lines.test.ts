// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource productLines', () => {
  test('create: only required params', async () => {
    const responsePromise = client.catalog.productLines.create({
      commission_policy: 'commission_exempt',
      freight_policy: 'billed_freight',
      name: 'Industrial Fasteners',
      unit_group_id: 'ug_andst6m79n41',
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
    const response = await client.catalog.productLines.create({
      commission_policy: 'commission_exempt',
      freight_policy: 'billed_freight',
      name: 'Industrial Fasteners',
      unit_group_id: 'ug_andst6m79n41',
      include: ['owner'],
      default_lot: { unit_id: 'unit_id', value: 'value' },
      fulfillment_policy: 'make_to_stock',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.catalog.productLines.retrieve('pdln_k9bnlgvxhxjh');
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
      client.catalog.productLines.retrieve(
        'pdln_k9bnlgvxhxjh',
        { include: ['owner'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.catalog.productLines.update('pdln_k9bnlgvxhxjh');
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
      client.catalog.productLines.update(
        'pdln_k9bnlgvxhxjh',
        {
          include: ['owner'],
          commission_policy: 'commission_applied',
          default_lot: { unit_id: 'unit_id', value: 'value' },
          freight_policy: 'billed_freight',
          fulfillment_policy: 'make_to_stock',
          name: 'Updated Product Line',
          unit_group_id: 'ug_andst6m79n41',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.catalog.productLines.list();
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
      client.catalog.productLines.list(
        {
          cursor: 'cursor',
          include: ['owner'],
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.catalog.productLines.delete('pdln_k9bnlgvxhxjh');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
