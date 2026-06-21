// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource serviceLevels', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.carriers.serviceLevels.create('cr_01784fd54c9ba197bb4e42f0e6', {
      code: 'ground',
      is_default: false,
      name: 'Ground Shipping',
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
    const response = await client.operations.carriers.serviceLevels.create('cr_01784fd54c9ba197bb4e42f0e6', {
      code: 'ground',
      is_default: false,
      name: 'Ground Shipping',
      include: ['owner'],
      customer_portal_visibility: 'visible',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.operations.carriers.serviceLevels.retrieve(
      'crop_01cfaf03f104e90ef9680e2a30',
      { carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.operations.carriers.serviceLevels.retrieve(
      'crop_01cfaf03f104e90ef9680e2a30',
      { carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6', include: ['owner'] },
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.operations.carriers.serviceLevels.update(
      'crop_01cfaf03f104e90ef9680e2a30',
      { carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.operations.carriers.serviceLevels.update(
      'crop_01cfaf03f104e90ef9680e2a30',
      {
        carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
        include: ['owner'],
        code: 'code',
        customer_portal_visibility: 'visible',
        is_default: false,
        name: 'Express Shipping',
      },
    );
  });

  test('list', async () => {
    const responsePromise = client.operations.carriers.serviceLevels.list('cr_01784fd54c9ba197bb4e42f0e6');
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
      client.operations.carriers.serviceLevels.list(
        'cr_01784fd54c9ba197bb4e42f0e6',
        {
          cursor: 'cursor',
          include: ['owner'],
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.operations.carriers.serviceLevels.delete(
      'crop_01cfaf03f104e90ef9680e2a30',
      { carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.operations.carriers.serviceLevels.delete(
      'crop_01cfaf03f104e90ef9680e2a30',
      { carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6' },
    );
  });
});
