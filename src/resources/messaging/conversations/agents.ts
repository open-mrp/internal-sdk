// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessagingAPI from '../messaging';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Add, remove, and manage participants (including agents) in a conversation.
 */
export class Agents extends APIResource {
  /**
   * Adds an AI agent to a conversation so it can respond to messages there.
   *
   * Adding an agent that is already a participant is not an error: its trigger
   * policy and keywords are replaced with the ones supplied here, and an agent that
   * had been removed is put back. That makes this endpoint the way to change when an
   * existing agent responds, without removing and re-adding it.
   *
   * In an internal group conversation only an owner or admin can add an agent; in a
   * direct message or a customer-facing case any active participant can.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const conversationParticipant =
   *   await client.messaging.conversations.agents.create(
   *     'cv_w35z4ck68yq7',
   *     {
   *       agent_config_id: 'agdf_ah7tkyfxk8jl',
   *       trigger_keywords: ['forecast'],
   *       trigger_policy: 'mention',
   *     },
   *   );
   * ```
   */
  create(
    id: string,
    body: AgentCreateParams,
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.ConversationParticipant> {
    return this._client.post(path`/v1/messaging/conversations/${id}/agents`, { body, ...options });
  }

  /**
   * Removes an AI agent from a conversation so it stops responding there.
   *
   * In an internal group conversation only an owner or admin can remove an agent; in
   * a direct message or a customer-facing case any active participant can. The
   * agent's earlier messages stay in the thread, and it can be added back later.
   *
   * This endpoint requires the permission: `messaging:delete`.
   *
   * @example
   * ```ts
   * const agent =
   *   await client.messaging.conversations.agents.delete(
   *     'cvpt_be2h3ul14cts',
   *     { id: 'cv_w35z4ck68yq7' },
   *   );
   * ```
   */
  delete(pid: string, params: AgentDeleteParams, options?: RequestOptions): APIPromise<AgentDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/v1/messaging/conversations/${id}/agents/${pid}`, options);
  }
}

/**
 * Request to add an agent participant to a conversation.
 */
export interface AddAgentParticipantRequest {
  /**
   * The agent to add.
   */
  agent_config_id: string;

  /**
   * For the keyword and mention policies, the keywords (or mention handles) that
   * trigger the agent.
   *
   * Matching is case-insensitive and looks anywhere in the message body: under
   * `keyword` the bare word is matched, under `mention` it must appear as
   * `@keyword`. Replying directly to one of the agent's own messages always reaches
   * it, so an agent left without keywords still answers replies but nothing else.
   */
  trigger_keywords?: Array<string>;

  /**
   * Controls when this agent responds to human messages in the conversation.
   *
   * - `mention`: responds only when @mentioned by one of its trigger keywords.
   * - `keyword`: responds whenever a message contains one of its trigger keywords.
   * - `always`: responds to every human message in the conversation.
   */
  trigger_policy?: 'mention' | 'keyword' | 'always';
}

export interface AgentDeleteResponse {}

export interface AgentCreateParams {
  /**
   * The agent to add.
   */
  agent_config_id: string;

  /**
   * For the keyword and mention policies, the keywords (or mention handles) that
   * trigger the agent.
   *
   * Matching is case-insensitive and looks anywhere in the message body: under
   * `keyword` the bare word is matched, under `mention` it must appear as
   * `@keyword`. Replying directly to one of the agent's own messages always reaches
   * it, so an agent left without keywords still answers replies but nothing else.
   */
  trigger_keywords?: Array<string>;

  /**
   * Controls when this agent responds to human messages in the conversation.
   *
   * - `mention`: responds only when @mentioned by one of its trigger keywords.
   * - `keyword`: responds whenever a message contains one of its trigger keywords.
   * - `always`: responds to every human message in the conversation.
   */
  trigger_policy?: 'mention' | 'keyword' | 'always';
}

export interface AgentDeleteParams {
  /**
   * Conversation ID.
   */
  id: string;
}

export declare namespace Agents {
  export {
    type AddAgentParticipantRequest as AddAgentParticipantRequest,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentDeleteParams as AgentDeleteParams,
  };
}
