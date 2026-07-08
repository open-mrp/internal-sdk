// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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
   * Starts a new customer-portal registration session for the authenticated buyer,
   * or resumes the buyer's existing in-progress session for the same seller.
   *
   * Registering into a seller's portal is a multi-step flow; the session tracks
   * progress so a half-finished registration can be resumed instead of leaving the
   * buyer stuck.
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
   * Returns the authenticated buyer's portal registration session, so the wizard can
   * restore its saved step and form data. Expired or unknown sessions return a 404.
   *
   * @example
   * ```ts
   * const portalRegistrationSession =
   *   await client.sales.portalRegistrationSessions.retrieve(
   *     'example',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PortalRegistrationSession> {
    return this._client.get(path`/v1/sales/portal-registration-sessions/${id}`, options);
  }

  /**
   * Advances the buyer's registration session to the given step and saves the
   * accumulated form data. Steps are forward-only; a completed or abandoned session
   * cannot be updated.
   *
   * @example
   * ```ts
   * const portalRegistrationSession =
   *   await client.sales.portalRegistrationSessions.update(
   *     'example',
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
}

/**
 * Request to start or resume a customer-portal registration session.
 */
export interface CreateOrResumePortalRegistrationSessionRequest {
  /**
   * The seller's portal slug to register into.
   */
  seller_slug: string;
}

/**
 * PortalRegistrationSession is a buyer's session-based registration into a
 * seller's customer portal. The buyer creates or resumes a session, advances it
 * step by step, and completes it — so a half-finished registration can be resumed
 * rather than leaving the buyer stuck.
 */
export interface PortalRegistrationSession {
  /**
   * Portal registration session ID.
   */
  id: string;

  /**
   * When the session was abandoned, or null.
   */
  abandoned_at: string | null;

  /**
   * When the registration completed, or null while in progress.
   */
  completed_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * The customer account created/linked on completion.
   */
  customer_id: string | null;

  /**
   * Whether the buyer is linking an existing customer record vs. creating a new one.
   */
  is_existing_customer: boolean | null;

  /**
   * Resource type identifier.
   */
  object: 'portal_registration_session';

  /**
   * The seller account this registration is for.
   */
  seller_account_id: string;

  /**
   * The seller's portal slug.
   */
  seller_slug: string;

  /**
   * PortalRegistrationSessionData is the scratch form data accumulated across a
   * buyer's registration steps, echoed back so a resumed session restores the form.
   */
  session_data: PortalRegistrationSessionData | null;

  /**
   * The current registration step.
   */
  step: 'customer_details' | 'billing_address' | 'contact' | 'completed';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * PortalRegistrationSessionData is the scratch form data accumulated across a
 * buyer's registration steps, echoed back so a resumed session restores the form.
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
   * The customer's name.
   */
  customer_name: string;

  /**
   * An existing customer number to link.
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
 * PortalRegistrationSessionDataInput is the scratch form data saved on a
 * registration session as the buyer advances.
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
 * Request to advance a portal registration session to the next step.
 */
export interface UpdatePortalRegistrationSessionRequest {
  /**
   * The step to advance to. Steps are forward-only.
   */
  step: 'customer_details' | 'billing_address' | 'contact' | 'completed';

  /**
   * Whether the buyer is linking an existing customer vs. creating a new one.
   */
  is_existing_customer?: boolean;

  /**
   * PortalRegistrationSessionDataInput is the scratch form data saved on a
   * registration session as the buyer advances.
   */
  session_data?: PortalRegistrationSessionDataInput;
}

export interface PortalRegistrationSessionCreateParams {
  /**
   * The seller's portal slug to register into.
   */
  seller_slug: string;
}

export interface PortalRegistrationSessionUpdateParams {
  /**
   * The step to advance to. Steps are forward-only.
   */
  step: 'customer_details' | 'billing_address' | 'contact' | 'completed';

  /**
   * Whether the buyer is linking an existing customer vs. creating a new one.
   */
  is_existing_customer?: boolean;

  /**
   * PortalRegistrationSessionDataInput is the scratch form data saved on a
   * registration session as the buyer advances.
   */
  session_data?: PortalRegistrationSessionDataInput;
}

PortalRegistrationSessions.Actions = Actions;

export declare namespace PortalRegistrationSessions {
  export {
    type CreateOrResumePortalRegistrationSessionRequest as CreateOrResumePortalRegistrationSessionRequest,
    type PortalRegistrationSession as PortalRegistrationSession,
    type PortalRegistrationSessionData as PortalRegistrationSessionData,
    type PortalRegistrationSessionDataInput as PortalRegistrationSessionDataInput,
    type UpdatePortalRegistrationSessionRequest as UpdatePortalRegistrationSessionRequest,
    type PortalRegistrationSessionCreateParams as PortalRegistrationSessionCreateParams,
    type PortalRegistrationSessionUpdateParams as PortalRegistrationSessionUpdateParams,
  };

  export { Actions as Actions };
}
