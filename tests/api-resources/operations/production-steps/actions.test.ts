// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkCreate: only required params', async () => {
    const responsePromise = client.operations.productionSteps.actions.bulkCreate({
      steps: [
        {
          consumptions: [{ measure: 50, sku: 'RAW-FLOUR-001' }],
          labor_rate: 25,
          labor_time: 1.5,
          name: 'Mixing',
          overhead_rate: 15,
          productions: [{ measure: 100, sku: 'ALM-2024-1001' }],
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
    const response = await client.operations.productionSteps.actions.bulkCreate({
      steps: [
        {
          consumptions: [
            {
              measure: 50,
              sku: 'RAW-FLOUR-001',
              instructions: 'instructions',
            },
          ],
          labor_rate: 25,
          labor_time: 1.5,
          name: 'Mixing',
          overhead_rate: 15,
          productions: [{ measure: 100, sku: 'ALM-2024-1001' }],
          allowances: 0,
          labor_time_unit: 'labor_time_unit',
          leveling_factor: 0,
          station: 'station',
        },
      ],
    });
  });
});
