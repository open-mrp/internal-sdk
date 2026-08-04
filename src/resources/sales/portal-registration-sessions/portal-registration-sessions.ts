// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Session-based registration of a buyer into a seller's customer portal: start or resume, advance step by step, then complete or abandon.
 */
export class PortalRegistrationSessions extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Starts a customer-portal registration for the authenticated buyer, or resumes
   * the one they already have with this seller.
   *
   * Registering into a seller's portal is a multi-step flow, and the session carries
   * the progress so a half-finished registration is never lost. If the buyer has an
   * unfinished session with this seller that is still inside its seven-day resume
   * window, that session comes back with its saved step and form data; otherwise a
   * new one starts at the `customer_details` step. Completed, abandoned, and expired
   * sessions are never resumed.
   *
   * @example
   * ```ts
   * const portalRegistrationSession =
   *   await client.sales.portalRegistrationSessions.create({
   *     seller_slug: 'acme-inc',
   *   });
   * ```
   */
  create(
    body: PortalRegistrationSessionCreateParams,
    options?: RequestOptions,
  ): APIPromise<PortalRegistrationSession> {
    return this._client.post('/v1/sales/portal-registration-sessions', { body, ...options });
  }

  /**
   * Returns a portal registration session with its saved step and form data, so a
   * partially-completed registration can be restored.
   *
   * Only the buyer who started the session can read it. A session that was never
   * finished and has passed its seven-day resume window reads as not found, as does
   * an unknown ID.
   *
   * @example
   * ```ts
   * const portalRegistrationSession =
   *   await client.sales.portalRegistrationSessions.retrieve(
   *     'porgse_q1hs0mapqh6x',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PortalRegistrationSession> {
    return this._client.get(path`/v1/sales/portal-registration-sessions/${id}`, options);
  }

  /**
   * Advances the buyer's registration session and saves the data entered so far.
   *
   * Each update writes the session's step, form data, and existing-customer choice
   * as sent, so send the full picture every time rather than just the newly-entered
   * fields. Steps only move forward, and a session that has already been completed
   * or abandoned can no longer be updated.
   *
   * @example
   * ```ts
   * const portalRegistrationSession =
   *   await client.sales.portalRegistrationSessions.update(
   *     'porgse_q1hs0mapqh6x',
   *     { step: 'customer_details' },
   *   );
   * ```
   */
  update(
    id: string,
    body: PortalRegistrationSessionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PortalRegistrationSession> {
    return this._client.patch(path`/v1/sales/portal-registration-sessions/${id}`, { body, ...options });
  }

  /**
   * Returns the account's buyer registrations into its customer portal, newest
   * first.
   *
   * Registrations in every state are returned — in progress, completed, abandoned,
   * and expired — so customer service can follow up on the ones that stalled before
   * completing; narrow them with `status`. The search term matches the session ID
   * and the customer name or number the buyer entered.
   *
   * This endpoint requires the permission: `self:read`.
   *
   * @example
   * ```ts
   * const listPortalRegistrationSession =
   *   await client.sales.portalRegistrationSessions.list();
   * ```
   */
  list(
    query: PortalRegistrationSessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListPortalRegistrationSession> {
    return this._client.get('/v1/sales/portal-registration-sessions', { query, ...options });
  }
}

/**
 * Request to start or resume a customer-portal registration session.
 */
export interface CreateOrResumePortalRegistrationSessionRequest {
  /**
   * The portal slug of the seller the buyer is registering with.
   */
  seller_slug: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListPortalRegistrationSession {
  /**
   * Resources in this page.
   */
  data: Array<PortalRegistrationSession>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A buyer's registration into a seller's customer portal.
 *
 * The buyer starts a session, advances it step by step, and completes it — so a
 * half-finished registration can be resumed rather than leaving the buyer stuck.
 * Sellers use the same record to see which registrations stalled before
 * completing.
 */
export interface PortalRegistrationSession {
  /**
   * Portal registration session ID.
   */
  id: string;

  /**
   * When the buyer abandoned the session.
   */
  abandoned_at: string | null;

  /**
   * When the buyer completed the registration.
   */
  completed_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * The customer the registration created or joined.
   */
  customer_id: string | null;

  /**
   * Whether the buyer is joining a customer the seller already has, rather than
   * creating a new one.
   *
   * When true, completing the registration links the buyer to the seller's existing
   * customer identified by `customer_number`; otherwise it creates a new customer
   * from the rest of the session data.
   */
  is_existing_customer: boolean | null;

  /**
   * Resource type identifier.
   */
  object: 'portal_registration_session';

  /**
   * The seller account whose portal the buyer is registering into.
   */
  seller_account_id: string;

  /**
   * The portal slug the registration was started from.
   */
  seller_slug: string;

  /**
   * The form data a buyer has entered so far in a customer-portal registration.
   *
   * It is saved on the session as the buyer advances and echoed back on every read,
   * so a resumed registration can restore the form exactly where the buyer left off.
   * The values are used to create or link the customer when the registration is
   * completed.
   */
  session_data: PortalRegistrationSessionData | null;

  /**
   * Where the registration stands, derived from its completion and abandonment
   * timestamps and the seven-day resume window.
   *
   * - `in_progress`: still incomplete and inside the resume window.
   * - `completed`: the buyer finished registering.
   * - `abandoned`: the buyer explicitly gave the session up.
   * - `expired`: still incomplete, but past the resume window, so the buyer can no
   *   longer pick it back up.
   */
  status: 'in_progress' | 'completed' | 'abandoned' | 'expired';

  /**
   * The step the buyer has reached.
   *
   * Steps run `customer_details` → `billing_address` → `contact` → `completed`, and
   * only ever move forward.
   */
  step: 'customer_details' | 'billing_address' | 'contact' | 'completed';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * The buyer this session belongs to.
   *
   * Only this user can retrieve, update, complete, or abandon the session.
   */
  user_id: string;
}

/**
 * The form data a buyer has entered so far in a customer-portal registration.
 *
 * It is saved on the session as the buyer advances and echoed back on every read,
 * so a resumed registration can restore the form exactly where the buyer left off.
 * The values are used to create or link the customer when the registration is
 * completed.
 */
export interface PortalRegistrationSessionData {
  /**
   * Billing address two-letter country code.
   */
  address_country: string;

  /**
   * Billing address city / locality.
   */
  address_locality: string;

  /**
   * Billing address name.
   */
  address_name: string;

  /**
   * Billing address postal code.
   */
  address_postal_code: string;

  /**
   * Billing address state.
   */
  address_state: string;

  /**
   * Billing address street line 1.
   */
  address_street_1: string;

  /**
   * Billing address street line 2.
   */
  address_street_2: string;

  /**
   * The chosen customer group ID.
   */
  customer_group_id: string;

  /**
   * The name the buyer entered for the customer.
   *
   * Only used when the registration creates a new customer; joining an existing
   * customer keeps that customer's own name.
   */
  customer_name: string;

  /**
   * The seller-assigned customer number the buyer is claiming.
   *
   * Only used when the buyer is joining an existing customer, where it must match a
   * customer already on the seller's books. New customers are assigned a number
   * automatically when the registration completes.
   */
  customer_number: string;

  /**
   * Resource type identifier.
   */
  object: 'portal_registration_session_data';

  /**
   * The chosen payment term ID.
   */
  payment_term_id: string;

  /**
   * Contact phone number.
   */
  phone: string;

  /**
   * The chosen shipping term ID.
   */
  shipping_term_id: string;
}

/**
 * The form data to save on a registration session as the buyer advances.
 *
 * These values are what the registration is completed from, so send everything
 * collected so far on each update — the stored data is replaced outright rather
 * than merged.
 */
export interface PortalRegistrationSessionDataInput {
  address_country: string;

  address_locality: string;

  address_name: string;

  address_postal_code: string;

  address_state: string;

  address_street_1: string;

  address_street_2: string;

  customer_group_id: string;

  customer_name: string;

  customer_number: string;

  payment_term_id: string;

  phone: string;

  shipping_term_id: string;
}

/**
 * Request to save a buyer's progress on a portal registration session.
 */
export interface UpdatePortalRegistrationSessionRequest {
  /**
   * The step the buyer has reached.
   *
   * Steps only move forward: sending an earlier step than the session has already
   * reached is rejected, while re-sending the current step saves data without
   * advancing.
   */
  step: 'customer_details' | 'billing_address' | 'contact' | 'completed';

  /**
   * Whether the buyer is joining a customer the seller already has, rather than
   * creating a new one.
   *
   * This decides what completing the registration does: joining an existing customer
   * links the buyer to the customer matching `customer_number`, while a new customer
   * is built from the rest of the session data. Like the session data it is stored
   * as sent, so re-send it on every update to keep the choice.
   */
  is_existing_customer?: boolean;

  /**
   * The form data to save on a registration session as the buyer advances.
   *
   * These values are what the registration is completed from, so send everything
   * collected so far on each update — the stored data is replaced outright rather
   * than merged.
   */
  session_data?: PortalRegistrationSessionDataInput;
}

export interface PortalRegistrationSessionCreateParams {
  /**
   * The portal slug of the seller the buyer is registering with.
   */
  seller_slug: string;
}

export interface PortalRegistrationSessionUpdateParams {
  /**
   * The step the buyer has reached.
   *
   * Steps only move forward: sending an earlier step than the session has already
   * reached is rejected, while re-sending the current step saves data without
   * advancing.
   */
  step: 'customer_details' | 'billing_address' | 'contact' | 'completed';

  /**
   * Whether the buyer is joining a customer the seller already has, rather than
   * creating a new one.
   *
   * This decides what completing the registration does: joining an existing customer
   * links the buyer to the customer matching `customer_number`, while a new customer
   * is built from the rest of the session data. Like the session data it is stored
   * as sent, so re-send it on every update to keep the choice.
   */
  is_existing_customer?: boolean;

  /**
   * The form data to save on a registration session as the buyer advances.
   *
   * These values are what the registration is completed from, so send everything
   * collected so far on each update — the stored data is replaced outright rather
   * than merged.
   */
  session_data?: PortalRegistrationSessionDataInput;
}

export interface PortalRegistrationSessionListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Restrict the results to a single registration state.
   *
   * - `in_progress`: still incomplete and inside the seven-day resume window.
   * - `completed`: the buyer finished registering.
   * - `abandoned`: the buyer explicitly gave the session up.
   * - `expired`: still incomplete, but past the resume window, so the buyer can no
   *   longer pick it back up.
   */
  status?: string;
}

PortalRegistrationSessions.Actions = Actions;

export declare namespace PortalRegistrationSessions {
  export {
    type CreateOrResumePortalRegistrationSessionRequest as CreateOrResumePortalRegistrationSessionRequest,
    type ListPortalRegistrationSession as ListPortalRegistrationSession,
    type PortalRegistrationSession as PortalRegistrationSession,
    type PortalRegistrationSessionData as PortalRegistrationSessionData,
    type PortalRegistrationSessionDataInput as PortalRegistrationSessionDataInput,
    type UpdatePortalRegistrationSessionRequest as UpdatePortalRegistrationSessionRequest,
    type PortalRegistrationSessionCreateParams as PortalRegistrationSessionCreateParams,
    type PortalRegistrationSessionUpdateParams as PortalRegistrationSessionUpdateParams,
    type PortalRegistrationSessionListParams as PortalRegistrationSessionListParams,
  };

  export { Actions as Actions };
}
