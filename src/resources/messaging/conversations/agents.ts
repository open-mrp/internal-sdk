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
   * Adds (or re-activates) an agent participant in a conversation with a trigger
   * policy.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const conversationParticipant =
   *   await client.messaging.conversations.agents.create(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *     {
   *       agent_config_id: 'agdf_01b9ef28feb99e6954201aca63',
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
   * Removes an agent participant from a conversation.
   *
   * This endpoint requires the permission: `messaging:delete`.
   *
   * @example
   * ```ts
   * const agent =
   *   await client.messaging.conversations.agents.delete(
   *     'cvpt_01h9z8q1w2e3r4t5y6u7cvpt',
   *     { id: 'cv_01h9z8q1w2e3r4t5y6u7i8cv' },
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
   * For keyword/mention policies, the keywords (or mention handles) that trigger the
   * agent.
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
   * For keyword/mention policies, the keywords (or mention handles) that trigger the
   * agent.
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
