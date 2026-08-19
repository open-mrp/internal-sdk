// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/internal-sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource productionScheduleSettings', () => {
  test('update: only required params', async () => {
    const responsePromise = client.operations.productionScheduleSettings.update({
      auto_publish_status: 'inactive',
      cadence_status: 'inactive',
      capacity_headroom_pct: 0.9,
      changeover_avg_minutes: 0,
      changeover_labor_rate: 0,
      changeover_max_minutes: 0,
      changeover_min_minutes: 0,
      default_constraint_lead_time_weeks: 0,
      default_customer_lead_time_days: 30,
      default_fulfillment_policy: 'make_to_stock',
      default_lot_units: 60,
      demand_basis: 'trailing_12',
      demand_window_months: 12,
      finish_lead_time_weeks: 0,
      forecast_history_months: 24,
      forecast_months: 12,
      forecast_z: 0,
      frozen_weeks: 1,
      generation_timezone: 'UTC',
      holding_rate_pct: 0,
      hours_per_shift: 7,
      max_flow_depth: 10,
      max_weeks_supply: 12,
      planning_horizon_weeks: 13,
      service_level_z: 0,
      shifts_per_day: 2,
      week_start_day: 1,
      weeks_per_year: 52,
      work_days_per_week: 5,
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
    const response = await client.operations.productionScheduleSettings.update({
      auto_publish_status: 'inactive',
      cadence_status: 'inactive',
      capacity_headroom_pct: 0.9,
      changeover_avg_minutes: 0,
      changeover_labor_rate: 0,
      changeover_max_minutes: 0,
      changeover_min_minutes: 0,
      default_constraint_lead_time_weeks: 0,
      default_customer_lead_time_days: 30,
      default_fulfillment_policy: 'make_to_stock',
      default_lot_units: 60,
      demand_basis: 'trailing_12',
      demand_window_months: 12,
      finish_lead_time_weeks: 0,
      forecast_history_months: 24,
      forecast_months: 12,
      forecast_z: 0,
      frozen_weeks: 1,
      generation_timezone: 'UTC',
      holding_rate_pct: 0,
      hours_per_shift: 7,
      max_flow_depth: 10,
      max_weeks_supply: 12,
      planning_horizon_weeks: 13,
      service_level_z: 0,
      shifts_per_day: 2,
      week_start_day: 1,
      weeks_per_year: 52,
      work_days_per_week: 5,
      constraint_department_id: 'constraint_department_id',
      generation_cron: 'generation_cron',
      receive_calendar_id: 'receive_calendar_id',
      ship_calendar_id: 'ship_calendar_id',
    });
  });

  test('list', async () => {
    const responsePromise = client.operations.productionScheduleSettings.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
