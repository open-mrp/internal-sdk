// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/internal-sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkCreate: only required params', async () => {
    const responsePromise = client.operations.productionRuns.actions.bulkCreate({
      production_runs: [
        {
          batches: [
            {
              item: { id: 'it_pej07ckhvu62', sku: 'ALM-2024-1001' },
              quantity_unit: {
                id: 'un_82bd37dae5po',
                abbreviation: 'kg',
                name: 'Kilogram',
              },
              quantity_value: '100.0',
            },
          ],
          responsible_user_id: 'us_43irtlt2ajz6',
        },
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

  test('bulkCreate: required and optional params', async () => {
    const response = await client.operations.productionRuns.actions.bulkCreate({
      production_runs: [
        {
          batches: [
            {
              item: { id: 'it_pej07ckhvu62', sku: 'ALM-2024-1001' },
              quantity_unit: {
                id: 'un_82bd37dae5po',
                abbreviation: 'kg',
                name: 'Kilogram',
              },
              quantity_value: '100.0',
              production_step_id: 'prst_0ht5mkqx5a6t',
              scanning_station: { id: 'id', name: 'name' },
              seconds_unit: {
                id: 'id',
                abbreviation: 'abbreviation',
                name: 'name',
              },
              seconds_value: 'seconds_value',
              waste_unit: {
                id: 'id',
                abbreviation: 'abbreviation',
                name: 'name',
              },
              waste_value: 'waste_value',
            },
          ],
          responsible_user_id: 'us_43irtlt2ajz6',
        },
      ],
      include: ['created_by'],
    });
  });

  test('export: only required params', async () => {
    const responsePromise = client.operations.productionRuns.actions.export({ q: null });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('export: required and optional params', async () => {
    const response = await client.operations.productionRuns.actions.export({
      q: null,
      include: ['created_by'],
    });
  });
});
