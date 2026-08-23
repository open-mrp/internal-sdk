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
   * Once created, mail arriving at the address opens a customer case conversation
   * and seats the bound agent and the group's members on it; a reply in a thread
   * that already opened one joins that conversation instead.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const emailInbox =
   *   await client.messaging.emailInboxes.create({
   *     address: 'support@acme.com',
   *     email_domain_id: 'emdom_2rk3omr8vshb',
   *     agent_config_id: 'agdf_ah7tkyfxk8jl',
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
   *     'eminb_2s9kobr9s7tp',
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
   * Edits an email inbox's from-name, status, agent configuration, and roster.
   *
   * Every field except `status` is merged into the inbox's current settings: a field
   * you omit — and an empty array you send — keeps the value it already has, so this
   * endpoint can change a setting but cannot clear one back to unset. The inbox's
   * address and domain are fixed at creation and cannot be changed here.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const emailInbox =
   *   await client.messaging.emailInboxes.update(
   *     'eminb_2s9kobr9s7tp',
   *     {
   *       status: 'active',
   *       agent_config_id: 'agdf_ah7tkyfxk8jl',
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
   * Returns the account's email inboxes across every registered domain.
   *
   * Every inbox is returned in a single response; this list is not paginated.
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
   * Mail sent to its address is no longer routed. Conversations the inbox already
   * opened are kept, but replies can no longer be sent on them, so disable the inbox
   * instead of deleting it if you still need to answer open threads.
   *
   * This endpoint requires the permission: `messaging:delete`.
   *
   * @example
   * ```ts
   * const emailInbox =
   *   await client.messaging.emailInboxes.delete(
   *     'eminb_2s9kobr9s7tp',
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
   * The address is lowercased before it is stored, and it must not already be in use
   * by another inbox.
   */
  address: string;

  /**
   * The verified domain this inbox belongs to.
   */
  email_domain_id: string;

  /**
   * The agent to bind to this inbox to handle incoming mail.
   *
   * With no agent bound, mail is still threaded into a conversation for your team,
   * but nothing runs on it automatically.
   */
  agent_config_id?: string;

  /**
   * The keywords that decide whether the agent runs on an incoming message.
   *
   * Under the `keyword` policy a keyword matches anywhere in the message; under
   * `mention` it only counts where it is prefixed with `@`.
   */
  agent_trigger_keywords?: Array<string>;

  /**
   * How the bound agent decides whether to run on incoming mail.
   *
   * - `mention`: runs only when the agent is @mentioned, matched against the trigger
   *   keywords below.
   * - `keyword`: runs when the message contains any of the trigger keywords.
   * - `always`: runs on every incoming message.
   *
   * Leaving this unset makes the agent run on every incoming message, since email
   * has no reliable @mention convention.
   */
  agent_trigger_policy?: 'mention' | 'keyword' | 'always';

  /**
   * Display name for the `From` header of outbound mail.
   */
  from_name?: string;

  /**
   * The messaging group (roster) whose members are seated on every conversation this
   * inbox opens.
   *
   * Must name a group in your own account. Agents in the group are seated to run
   * only when @mentioned, so they do not all fire alongside the inbox's own agent.
   */
  group_id?: string;
}

/**
 * A routable email inbox on a verified domain.
 *
 * Mail sent to this address is threaded into a conversation: the first message of
 * a thread opens a new customer case, and later messages in the same thread join
 * the conversation it already created. Replies to the customer go back out from
 * this address, and the bound agent — if there is one — can draft or send them.
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
   * The keywords that decide whether the agent runs on an incoming message.
   *
   * Under the `keyword` policy a keyword matches anywhere in the message; under
   * `mention` it only counts where it is prefixed with `@`.
   */
  agent_trigger_keywords: Array<string>;

  /**
   * When the bound agent runs on incoming mail.
   *
   * - `mention`: only when the agent is @mentioned, matched against its trigger
   *   keywords.
   * - `keyword`: when the mail contains any of the configured trigger keywords.
   * - `always`: on every incoming message.
   *
   * When no policy is set the agent runs on every incoming message, since email has
   * no reliable @mention convention.
   */
  agent_trigger_policy: 'mention' | 'keyword' | 'always' | null;

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
   * A forwarding address on an OpenMRP-owned domain that also routes to this inbox.
   *
   * Use this when your domain's mail is hosted elsewhere (e.g. Google Workspace,
   * Microsoft 365) and you cannot point its MX records at OpenMRP: forward mail from
   * `address` to this address instead, and it will still be threaded into a
   * conversation.
   */
  forwarding_address: string | null;

  /**
   * The display name used in the `From` header of outbound mail.
   */
  from_name: string | null;

  /**
   * The messaging group (roster) whose members are added to every conversation this
   * inbox opens.
   *
   * Its members join each new email thread so the team can read, edit, and approve
   * replies alongside the bound agent. Membership is captured when the thread opens,
   * so later edits to the group only affect conversations opened after the change.
   */
  group_id: string | null;

  /**
   * Resource type identifier.
   */
  object: 'email_inbox';

  /**
   * Whether the inbox is currently accepting mail.
   *
   * - `active`: inbound mail is threaded into a conversation.
   * - `disabled`: the inbox stays provisioned and keeps its history, but inbound
   *   mail is dropped without being threaded.
   */
  status: 'active' | 'disabled';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * Request to edit an email inbox's from-name, status, agent configuration, and
 * roster.
 */
export interface UpdateEmailInboxRequest {
  /**
   * Whether the inbox accepts mail.
   *
   * - `active`: inbound mail is threaded into a conversation.
   * - `disabled`: the inbox stays provisioned and keeps its history, but inbound
   *   mail is dropped without being threaded.
   */
  status: 'active' | 'disabled';

  /**
   * The agent to bind to this inbox to handle incoming mail.
   */
  agent_config_id?: string;

  /**
   * The keywords that decide whether the agent runs on an incoming message.
   *
   * Under the `keyword` policy a keyword matches anywhere in the message; under
   * `mention` it only counts where it is prefixed with `@`.
   */
  agent_trigger_keywords?: Array<string>;

  /**
   * How the bound agent decides whether to run on incoming mail.
   *
   * - `mention`: runs only when the agent is @mentioned, matched against the trigger
   *   keywords below.
   * - `keyword`: runs when the message contains any of the trigger keywords.
   * - `always`: runs on every incoming message.
   *
   * While no policy has been set, the agent runs on every incoming message, since
   * email has no reliable @mention convention.
   */
  agent_trigger_policy?: 'mention' | 'keyword' | 'always';

  /**
   * Display name for the `From` header of outbound mail.
   */
  from_name?: string;

  /**
   * The messaging group (roster) whose members are seated on every conversation this
   * inbox opens.
   *
   * Must name a group in your own account. Changing it only affects conversations
   * opened afterwards.
   */
  group_id?: string;
}

export interface EmailInboxDeleteResponse {}

export interface EmailInboxCreateParams {
  /**
   * Body param: The full inbox address (e.g. `support@acme.com`).
   *
   * Its domain part must match the selected domain, which must already be verified.
   * The address is lowercased before it is stored, and it must not already be in use
   * by another inbox.
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
   *
   * With no agent bound, mail is still threaded into a conversation for your team,
   * but nothing runs on it automatically.
   */
  agent_config_id?: string;

  /**
   * Body param: The keywords that decide whether the agent runs on an incoming
   * message.
   *
   * Under the `keyword` policy a keyword matches anywhere in the message; under
   * `mention` it only counts where it is prefixed with `@`.
   */
  agent_trigger_keywords?: Array<string>;

  /**
   * Body param: How the bound agent decides whether to run on incoming mail.
   *
   * - `mention`: runs only when the agent is @mentioned, matched against the trigger
   *   keywords below.
   * - `keyword`: runs when the message contains any of the trigger keywords.
   * - `always`: runs on every incoming message.
   *
   * Leaving this unset makes the agent run on every incoming message, since email
   * has no reliable @mention convention.
   */
  agent_trigger_policy?: 'mention' | 'keyword' | 'always';

  /**
   * Body param: Display name for the `From` header of outbound mail.
   */
  from_name?: string;

  /**
   * Body param: The messaging group (roster) whose members are seated on every
   * conversation this inbox opens.
   *
   * Must name a group in your own account. Agents in the group are seated to run
   * only when @mentioned, so they do not all fire alongside the inbox's own agent.
   */
  group_id?: string;
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
   * Body param: Whether the inbox accepts mail.
   *
   * - `active`: inbound mail is threaded into a conversation.
   * - `disabled`: the inbox stays provisioned and keeps its history, but inbound
   *   mail is dropped without being threaded.
   */
  status: 'active' | 'disabled';

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
   * Body param: The keywords that decide whether the agent runs on an incoming
   * message.
   *
   * Under the `keyword` policy a keyword matches anywhere in the message; under
   * `mention` it only counts where it is prefixed with `@`.
   */
  agent_trigger_keywords?: Array<string>;

  /**
   * Body param: How the bound agent decides whether to run on incoming mail.
   *
   * - `mention`: runs only when the agent is @mentioned, matched against the trigger
   *   keywords below.
   * - `keyword`: runs when the message contains any of the trigger keywords.
   * - `always`: runs on every incoming message.
   *
   * While no policy has been set, the agent runs on every incoming message, since
   * email has no reliable @mention convention.
   */
  agent_trigger_policy?: 'mention' | 'keyword' | 'always';

  /**
   * Body param: Display name for the `From` header of outbound mail.
   */
  from_name?: string;

  /**
   * Body param: The messaging group (roster) whose members are seated on every
   * conversation this inbox opens.
   *
   * Must name a group in your own account. Changing it only affects conversations
   * opened afterwards.
   */
  group_id?: string;
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
