// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as EmailDomainsAPI from './email-domains/email-domains';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Provision and manage routable email inboxes that bind inbound mail to chat conversations and send agent replies.
 */
export class EmailInboxes extends APIResource {
  /**
   * Provisions a routable inbox address on a verified domain.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const emailInbox =
   *   await client.messaging.emailInboxes.create({
   *     address: 'support@acme.com',
   *     email_domain_id: 'emdom_018e88072d1320808dc9aaa01',
   *     agent_config_id: 'agdf_01b9ef28feb99e6954201aca63',
   *     agent_trigger_keywords: ['invoice', 'refund'],
   *     agent_trigger_policy: 'keyword',
   *     from_name: 'Acme Support',
   *   });
   * ```
   */
  create(params: EmailInboxCreateParams, options?: RequestOptions): APIPromise<EmailInbox> {
    const { include, ...body } = params;
    return this._client.post('/v1/messaging/email-inboxes', { query: { include }, body, ...options });
  }

  /**
   * Returns a single email inbox owned by the account.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const emailInbox =
   *   await client.messaging.emailInboxes.retrieve(
   *     'eminb_018e88072d1320808dc9bbb02',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: EmailInboxRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailInbox> {
    return this._client.get(path`/v1/messaging/email-inboxes/${id}`, { query, ...options });
  }

  /**
   * Edits an email inbox's from-name, status, and default agent trigger config.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const emailInbox =
   *   await client.messaging.emailInboxes.update(
   *     'eminb_018e88072d1320808dc9bbb02',
   *     {
   *       status: 'active',
   *       agent_config_id: 'agdf_01b9ef28feb99e6954201aca63',
   *       agent_trigger_keywords: ['invoice', 'refund'],
   *       agent_trigger_policy: 'keyword',
   *       from_name: 'Acme Support',
   *     },
   *   );
   * ```
   */
  update(id: string, params: EmailInboxUpdateParams, options?: RequestOptions): APIPromise<EmailInbox> {
    const { include, ...body } = params;
    return this._client.patch(path`/v1/messaging/email-inboxes/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns the account's email inboxes.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const listEmailInbox =
   *   await client.messaging.emailInboxes.list();
   * ```
   */
  list(
    query: EmailInboxListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListEmailInbox> {
    return this._client.get('/v1/messaging/email-inboxes', { query, ...options });
  }

  /**
   * Removes an email inbox.
   *
   * Inbound mail to its address is no longer routed.
   *
   * This endpoint requires the permission: `messaging:delete`.
   *
   * @example
   * ```ts
   * const emailInbox =
   *   await client.messaging.emailInboxes.delete(
   *     'eminb_018e88072d1320808dc9bbb02',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<EmailInboxDeleteResponse> {
    return this._client.delete(path`/v1/messaging/email-inboxes/${id}`, options);
  }
}

/**
 * Request to provision a routable inbox on a verified domain.
 */
export interface CreateEmailInboxRequest {
  /**
   * The full inbox address (e.g. `support@acme.com`).
   *
   * Its domain part must match the selected domain, which must already be verified.
   */
  address: string;

  /**
   * The verified domain this inbox belongs to.
   */
  email_domain_id: string;

  /**
   * The agent to bind to this inbox to handle incoming mail.
   */
  agent_config_id?: string;

  /**
   * Keywords that fire the agent when the trigger policy is `keyword`.
   */
  agent_trigger_keywords?: Array<string>;

  /**
   * How the bound agent decides whether to run on incoming mail.
   *
   * - `mention`: runs only when the agent is @mentioned in the message.
   * - `keyword`: runs when the message contains any of the trigger keywords.
   * - `always`: runs on every incoming message.
   */
  agent_trigger_policy?: string;

  /**
   * Display name for the `From` header of outbound mail.
   */
  from_name?: string;
}

/**
 * A routable email inbox on a verified domain.
 *
 * Inbound mail to this address is threaded into a chat conversation, and outbound
 * replies may be sent from this identity. The optional agent trigger config
 * controls whether the bound agent runs automatically on incoming mail.
 */
export interface EmailInbox {
  /**
   * Email inbox ID.
   */
  id: string;

  /**
   * The full inbox address (e.g. `support@acme.com`).
   */
  address: string;

  /**
   * An AI agent available to the account.
   *
   * The definition describes what the agent does, how its runs are triggered, the
   * tools it can use, and whether it is currently enabled for the account.
   */
  agent_config: AgentsAPI.AgentDefinition | null;

  /**
   * Keywords that fire the agent when `agent_trigger_policy` is `keyword`.
   */
  agent_trigger_keywords: Array<string>;

  /**
   * When the bound agent runs on incoming mail.
   *
   * - `mention`: only when the agent is @mentioned, matched against its trigger
   *   keywords.
   * - `keyword`: when the mail contains any of the configured trigger keywords.
   * - `always`: on every incoming message.
   */
  agent_trigger_policy: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A domain registered with the email bridge for sending and receiving mail.
   *
   * After registration the domain starts in `pending`; publish the returned DKIM
   * records, then poll the verify action until it flips to `verified`.
   */
  email_domain: EmailDomainsAPI.EmailDomain | null;

  /**
   * A forwarding address on an Augno-owned domain that also routes to this inbox.
   *
   * Use this when your domain's mail is hosted elsewhere (e.g. Google Workspace,
   * Microsoft 365) and you cannot point its MX records at Augno: forward mail from
   * `address` to this address instead, and it will still be threaded into a
   * conversation. `null` when domain forwarding is not configured.
   */
  forwarding_address: string | null;

  /**
   * The display name used in the `From` header of outbound mail.
   */
  from_name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'email_inbox';

  /**
   * Whether the inbox is currently routing mail.
   *
   * - `active`: inbound mail is threaded and outbound replies are allowed.
   * - `disabled`: the inbox is provisioned but drops inbound mail and does not send
   *   replies.
   */
  status: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListEmailInbox {
  /**
   * Resources in this page.
   */
  data: Array<EmailInbox>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Request to edit an email inbox's from-name, status, and default agent trigger
 * config.
 */
export interface UpdateEmailInboxRequest {
  /**
   * Whether the inbox routes mail.
   *
   * - `active`: inbound mail is threaded and outbound replies are allowed.
   * - `disabled`: the inbox stays provisioned but does not route mail.
   */
  status: string;

  /**
   * The agent to bind to this inbox to handle incoming mail.
   */
  agent_config_id?: string;

  /**
   * Keywords that fire the agent when the trigger policy is `keyword`.
   */
  agent_trigger_keywords?: Array<string>;

  /**
   * How the bound agent decides whether to run on incoming mail.
   *
   * - `mention`: runs only when the agent is @mentioned in the message.
   * - `keyword`: runs when the message contains any of the trigger keywords.
   * - `always`: runs on every incoming message.
   */
  agent_trigger_policy?: string;

  /**
   * Display name for the `From` header of outbound mail.
   */
  from_name?: string;
}

export interface EmailInboxDeleteResponse {}

export interface EmailInboxCreateParams {
  /**
   * Body param: The full inbox address (e.g. `support@acme.com`).
   *
   * Its domain part must match the selected domain, which must already be verified.
   */
  address: string;

  /**
   * Body param: The verified domain this inbox belongs to.
   */
  email_domain_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'email_domain' | 'agent_config'>;

  /**
   * Body param: The agent to bind to this inbox to handle incoming mail.
   */
  agent_config_id?: string;

  /**
   * Body param: Keywords that fire the agent when the trigger policy is `keyword`.
   */
  agent_trigger_keywords?: Array<string>;

  /**
   * Body param: How the bound agent decides whether to run on incoming mail.
   *
   * - `mention`: runs only when the agent is @mentioned in the message.
   * - `keyword`: runs when the message contains any of the trigger keywords.
   * - `always`: runs on every incoming message.
   */
  agent_trigger_policy?: string;

  /**
   * Body param: Display name for the `From` header of outbound mail.
   */
  from_name?: string;
}

export interface EmailInboxRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'email_domain' | 'agent_config'>;
}

export interface EmailInboxUpdateParams {
  /**
   * Body param: Whether the inbox routes mail.
   *
   * - `active`: inbound mail is threaded and outbound replies are allowed.
   * - `disabled`: the inbox stays provisioned but does not route mail.
   */
  status: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'email_domain' | 'agent_config'>;

  /**
   * Body param: The agent to bind to this inbox to handle incoming mail.
   */
  agent_config_id?: string;

  /**
   * Body param: Keywords that fire the agent when the trigger policy is `keyword`.
   */
  agent_trigger_keywords?: Array<string>;

  /**
   * Body param: How the bound agent decides whether to run on incoming mail.
   *
   * - `mention`: runs only when the agent is @mentioned in the message.
   * - `keyword`: runs when the message contains any of the trigger keywords.
   * - `always`: runs on every incoming message.
   */
  agent_trigger_policy?: string;

  /**
   * Body param: Display name for the `From` header of outbound mail.
   */
  from_name?: string;
}

export interface EmailInboxListParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'email_domain' | 'agent_config'>;
}

export declare namespace EmailInboxes {
  export {
    type CreateEmailInboxRequest as CreateEmailInboxRequest,
    type EmailInbox as EmailInbox,
    type ListEmailInbox as ListEmailInbox,
    type UpdateEmailInboxRequest as UpdateEmailInboxRequest,
    type EmailInboxDeleteResponse as EmailInboxDeleteResponse,
    type EmailInboxCreateParams as EmailInboxCreateParams,
    type EmailInboxRetrieveParams as EmailInboxRetrieveParams,
    type EmailInboxUpdateParams as EmailInboxUpdateParams,
    type EmailInboxListParams as EmailInboxListParams,
  };
}
