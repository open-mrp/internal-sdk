// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource notificationRecipients', () => {
  test('update: only required params', async () => {
    const responsePromise = client.sales.customers.notificationRecipients.update('ac_opnlh43ymyee', {
      recipients: [
        { account_user_id: 'acus_e5zu8bde0z3h', notification_types: ['order_acknowledgement', 'invoice'] },
      ],
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
    const response = await client.sales.customers.notificationRecipients.update('ac_opnlh43ymyee', {
      recipients: [
        { account_user_id: 'acus_e5zu8bde0z3h', notification_types: ['order_acknowledgement', 'invoice'] },
      ],
      include: ['account_user'],
    });
  });

  test('list', async () => {
    const responsePromise = client.sales.customers.notificationRecipients.list('ac_opnlh43ymyee');
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
      client.sales.customers.notificationRecipients.list(
        'ac_opnlh43ymyee',
        { include: ['account_user'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openmrp.NotFoundError);
  });
});
