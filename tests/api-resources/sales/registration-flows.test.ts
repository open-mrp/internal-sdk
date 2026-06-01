// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource registrationFlows', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sales.registrationFlows.create({
      customer_group_ids: ['cgrp_01abc'],
      name: 'Wholesale Registration',
      payment_term_ids: ['pt_01abc'],
      shipping_term_ids: ['st_01abc'],
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
    const response = await client.sales.registrationFlows.create({
      customer_group_ids: ['cgrp_01abc'],
      name: 'Wholesale Registration',
      payment_term_ids: ['pt_01abc'],
      shipping_term_ids: ['st_01abc'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.sales.registrationFlows.retrieve('rgfw_015273c2a7354d6c3e5ae4e90e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.sales.registrationFlows.update('rgfw_015273c2a7354d6c3e5ae4e90e', {
      has_customer_group_ids: false,
      has_payment_term_ids: false,
      has_shipping_term_ids: false,
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
    const response = await client.sales.registrationFlows.update('rgfw_015273c2a7354d6c3e5ae4e90e', {
      has_customer_group_ids: false,
      has_payment_term_ids: false,
      has_shipping_term_ids: false,
      customer_group_ids: ['string'],
      name: 'Wholesale Registration Updated',
      payment_term_ids: ['string'],
      shipping_term_ids: ['string'],
    });
  });

  test('list', async () => {
    const responsePromise = client.sales.registrationFlows.list();
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
      client.sales.registrationFlows.list(
        {
          cursor: 'cursor',
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.sales.registrationFlows.delete('rgfw_015273c2a7354d6c3e5ae4e90e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveBySlug', async () => {
    const responsePromise = client.sales.registrationFlows.retrieveBySlug('acme');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
