// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('checkDuplicates: only required params', async () => {
    const responsePromise = client.core.actions.checkDuplicates({
      record_number: 'INV-001',
      type: 'invoice_number',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('checkDuplicates: required and optional params', async () => {
    const response = await client.core.actions.checkDuplicates({
      record_number: 'INV-001',
      type: 'invoice_number',
      customer_id: 'customer_id',
    });
  });

  test('emailRecord: only required params', async () => {
    const responsePromise = client.core.actions.emailRecord({ id: 'iv_m982ezb0fgp7', type: 'invoice' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('emailRecord: required and optional params', async () => {
    const response = await client.core.actions.emailRecord({ id: 'iv_m982ezb0fgp7', type: 'invoice' });
  });

  test('requestDemo: only required params', async () => {
    const responsePromise = client.core.actions.requestDemo({
      company: 'Acme Corp',
      email: 'jane@example.com',
      name: 'Jane Smith',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('requestDemo: required and optional params', async () => {
    const response = await client.core.actions.requestDemo({
      company: 'Acme Corp',
      email: 'jane@example.com',
      name: 'Jane Smith',
      message: 'message',
      phone_number: 'phone_number',
    });
  });

  test('submitFeedback: only required params', async () => {
    const responsePromise = client.core.actions.submitFeedback({
      answer: 'Very useful, but could use better documentation.',
      question: 'How would you rate this feature?',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submitFeedback: required and optional params', async () => {
    const response = await client.core.actions.submitFeedback({
      answer: 'Very useful, but could use better documentation.',
      question: 'How would you rate this feature?',
      page_url: 'page_url',
    });
  });
});
