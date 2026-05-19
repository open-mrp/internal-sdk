// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('confirmPayment: only required params', async () => {
    const responsePromise = client.auth.registrationSessions.actions.confirmPayment('session_id', {
      setup_intent_id: 'seti_1N4kLm2eZvKYlo2C0wFVpSbx',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('confirmPayment: required and optional params', async () => {
    const response = await client.auth.registrationSessions.actions.confirmPayment('session_id', {
      setup_intent_id: 'seti_1N4kLm2eZvKYlo2C0wFVpSbx',
    });
  });

  test('resendVerificationEmail', async () => {
    const responsePromise = client.auth.registrationSessions.actions.resendVerificationEmail('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setupBilling', async () => {
    const responsePromise = client.auth.registrationSessions.actions.setupBilling('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateVerifyToken', async () => {
    const responsePromise = client.auth.registrationSessions.actions.updateVerifyToken('token');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
