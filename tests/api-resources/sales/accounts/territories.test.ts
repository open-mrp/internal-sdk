// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource territories', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sales.accounts.territories.create('', {
      sales_rep_id: 'au_01jm4r6700f8nwq3v5hx2d9ktp',
      state: 'NY',
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
    const response = await client.sales.accounts.territories.create('', {
      sales_rep_id: 'au_01jm4r6700f8nwq3v5hx2d9ktp',
      state: 'NY',
      include: ['sales_rep'],
      end_zipcode: 10999,
      product_line_id: 'product_line_id',
      start_zipcode: 10001,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.sales.accounts.territories.retrieve('te_01jm4r6700f8nwq3v5hx2d9ktp', {
      account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x',
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
    const response = await client.sales.accounts.territories.retrieve('te_01jm4r6700f8nwq3v5hx2d9ktp', {
      account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x',
      include: ['sales_rep'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.sales.accounts.territories.update('', { account_id: '' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.sales.accounts.territories.update('', {
      account_id: '',
      include: ['sales_rep'],
      clear_end_zipcode: true,
      clear_product_line: true,
      clear_start_zipcode: true,
      end_zipcode: 0,
      product_line_id: 'product_line_id',
      sales_rep_id: 'sales_rep_id',
      start_zipcode: 0,
      state: 'CA',
    });
  });

  test('list', async () => {
    const responsePromise = client.sales.accounts.territories.list('ac_01gf7a8200eaj8fke1xvw4h50x');
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
      client.sales.accounts.territories.list(
        'ac_01gf7a8200eaj8fke1xvw4h50x',
        {
          cursor: 'cursor',
          include: ['sales_rep'],
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.sales.accounts.territories.delete('te_01jm4r6700f8nwq3v5hx2d9ktp', {
      account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x',
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
    const response = await client.sales.accounts.territories.delete('te_01jm4r6700f8nwq3v5hx2d9ktp', {
      account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x',
    });
  });
});
