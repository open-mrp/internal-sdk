// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/internal-sdk';

const client = new Openmrp({
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

  test('bulkUpsert: only required params', async () => {
    const responsePromise = client.operations.productionSteps.actions.bulkUpsert({
      production_steps: [
        {
          consumptions: [
            {
              item: { id: 'id', sku: 'ALM-2024-1001' },
              quantity_unit: {
                id: 'id',
                abbreviation: 'kg',
                name: 'name',
              },
              quantity_value: '50',
            },
          ],
          labor_rate: {
            denominator_unit: {
              id: 'id',
              abbreviation: 'hr',
              name: 'name',
            },
            numerator_unit: {
              id: 'id',
              abbreviation: '$',
              name: 'name',
            },
            value: '25.00',
          },
          labor_time: {
            denominator_unit: {
              id: 'id',
              abbreviation: 'kg',
              name: 'name',
            },
            numerator_unit: {
              id: 'id',
              abbreviation: 'hr',
              name: 'name',
            },
            value: '1.5',
          },
          name: 'Mixing',
          overhead_rate: {
            denominator_unit: {
              id: 'id',
              abbreviation: 'hr',
              name: 'name',
            },
            numerator_unit: {
              id: 'id',
              abbreviation: '$',
              name: 'name',
            },
            value: '15.00',
          },
          production: {
            item: { id: 'id', sku: 'ALM-2024-1001' },
            quantity_unit: {
              id: 'id',
              abbreviation: 'kg',
              name: 'name',
            },
            quantity_value: '100',
          },
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

  test('bulkUpsert: required and optional params', async () => {
    const response = await client.operations.productionSteps.actions.bulkUpsert({
      production_steps: [
        {
          consumptions: [
            {
              item: { id: 'id', sku: 'ALM-2024-1001' },
              quantity_unit: {
                id: 'id',
                abbreviation: 'kg',
                name: 'name',
              },
              quantity_value: '50',
              instructions: 'instructions',
              waste_quantity_unit: {
                id: 'id',
                abbreviation: 'abbreviation',
                name: 'name',
              },
              waste_quantity_value: 'waste_quantity_value',
            },
          ],
          labor_rate: {
            denominator_unit: {
              id: 'id',
              abbreviation: 'hr',
              name: 'name',
            },
            numerator_unit: {
              id: 'id',
              abbreviation: '$',
              name: 'name',
            },
            value: '25.00',
          },
          labor_time: {
            denominator_unit: {
              id: 'id',
              abbreviation: 'kg',
              name: 'name',
            },
            numerator_unit: {
              id: 'id',
              abbreviation: 'hr',
              name: 'name',
            },
            value: '1.5',
          },
          name: 'Mixing',
          overhead_rate: {
            denominator_unit: {
              id: 'id',
              abbreviation: 'hr',
              name: 'name',
            },
            numerator_unit: {
              id: 'id',
              abbreviation: '$',
              name: 'name',
            },
            value: '15.00',
          },
          production: {
            item: { id: 'id', sku: 'ALM-2024-1001' },
            quantity_unit: {
              id: 'id',
              abbreviation: 'kg',
              name: 'name',
            },
            quantity_value: '100',
          },
          allowances: 'allowances',
          department: { id: 'id', name: 'name' },
          leveling_factor: 'leveling_factor',
          notes: 'notes',
          scanning_station: { id: 'id', name: 'Packaging Line 1' },
        },
      ],
      include: ['created_by'],
    });
  });

  test('export: only required params', async () => {
    const responsePromise = client.operations.productionSteps.actions.export({ q: null });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('export: required and optional params', async () => {
    const response = await client.operations.productionSteps.actions.export({
      q: null,
      include: ['created_by'],
    });
  });
});
