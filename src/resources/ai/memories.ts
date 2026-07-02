// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CoreAPI from '../core/core';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List, create, update, and delete agent memories.
 */
export class Memories extends APIResource {
  /**
   * Creates an agent memory.
   *
   * This endpoint requires the permission: `agent_memories:create`.
   *
   * @example
   * ```ts
   * const agentMemory = await client.ai.memories.create({
   *   category: 'preference',
   *   content:
   *     'Customer prefers express shipping on all orders.',
   *   importance: 0.8,
   *   metadata: { source: 'support_ticket' },
   * });
   * ```
   */
  create(body: MemoryCreateParams, options?: RequestOptions): APIPromise<AgentMemory> {
    return this._client.post('/v1/ai/memories', { body, ...options });
  }

  /**
   * Returns an agent memory by ID.
   *
   * This endpoint requires the permission: `agent_memories:read`.
   *
   * @example
   * ```ts
   * const agentMemory = await client.ai.memories.retrieve(
   *   'agmm_018731bdaf4ab04bd5bff1b65c',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AgentMemory> {
    return this._client.get(path`/v1/ai/memories/${id}`, options);
  }

  /**
   * Partially updates an agent memory.
   *
   * This endpoint requires the permission: `agent_memories:update`.
   *
   * @example
   * ```ts
   * const agentMemory = await client.ai.memories.update(
   *   'agmm_018731bdaf4ab04bd5bff1b65c',
   *   {
   *     content:
   *       'Customer prefers next-day shipping on all orders.',
   *     importance: 0.9,
   *   },
   * );
   * ```
   */
  update(
    id: string,
    body: MemoryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentMemory> {
    return this._client.patch(path`/v1/ai/memories/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of agent memories for the current account.
   *
   * Memories whose `expires_at` has passed are excluded.
   *
   * This endpoint requires the permission: `agent_memories:read`.
   *
   * @example
   * ```ts
   * const listAgentMemory = await client.ai.memories.list();
   * ```
   */
  list(
    query: MemoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAgentMemory> {
    return this._client.get('/v1/ai/memories', { query, ...options });
  }

  /**
   * Deletes an agent memory.
   *
   * This endpoint requires the permission: `agent_memories:delete`.
   *
   * @example
   * ```ts
   * const memory = await client.ai.memories.delete(
   *   'agmm_018731bdaf4ab04bd5bff1b65c',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MemoryDeleteResponse> {
    return this._client.delete(path`/v1/ai/memories/${id}`, options);
  }
}

/**
 * A piece of information an agent has saved for recall in future runs.
 */
export interface AgentMemory {
  /**
   * Memory ID.
   */
  id: string;

  /**
   * Free-form category used to group related memories (e.g. `preference`).
   */
  category: string;

  /**
   * Memory content.
   */
  content: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  entity: CoreAPI.Entity | null;

  /**
   * When this memory expires.
   *
   * `null` means it never expires. Expired memories are excluded from list results
   * and are no longer recalled by agents.
   */
  expires_at: string | null;

  /**
   * Relative importance from `0` to `1`, used to prioritize which memories the agent
   * recalls.
   *
   * Higher is more important.
   */
  importance: number;

  /**
   * Arbitrary metadata as JSON. Encoded as a JSON value (object, array, string,
   * number, boolean, or null), not a JSON-encoded string.
   */
  metadata: unknown | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_memory';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to create an agent memory.
 */
export interface CreateMemoryRequest {
  /**
   * Category used to group related memories.
   */
  category: string;

  /**
   * Text content.
   */
  content: string;

  /**
   * ID of the platform record this memory is scoped to.
   *
   * Provide together with `entity_type`.
   */
  entity_id?: string;

  /**
   * Type of platform record this memory is scoped to (e.g. `customer`, `product`).
   *
   * Provide together with `entity_id` to scope the memory to a specific record; omit
   * both for an account-wide memory.
   */
  entity_type?: string;

  /**
   * Expiration timestamp in ISO 8601 format (e.g. `2026-01-02T15:04:05Z`).
   *
   * Omit for a memory that never expires. Expired memories are excluded from list
   * results and are no longer recalled by agents.
   */
  expires_at?: string;

  /**
   * Relative importance from `0` to `1` in increments of `0.1`, used to prioritize
   * which memories the agent recalls.
   *
   * Higher is more important. When omitted, the memory is stored at the lowest
   * priority (`0`).
   */
  importance?: number;

  /**
   * Arbitrary metadata as JSON. Encoded as a JSON value (object, array, string,
   * number, boolean, or null), not a JSON-encoded string.
   */
  metadata?: unknown | null;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAgentMemory {
  /**
   * Resources in this page.
   */
  data: Array<AgentMemory>;

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
 * Request to update an agent memory.
 */
export interface UpdateMemoryRequest {
  /**
   * Category used to group related memories.
   */
  category?: string;

  /**
   * Text content.
   */
  content?: string;

  /**
   * ID of the platform record this memory is scoped to.
   *
   * Provide together with `entity_type`; send `null` to unscope the memory.
   */
  entity_id?: string | null;

  /**
   * Type of platform record this memory is scoped to (e.g. `customer`, `product`).
   *
   * Provide together with `entity_id` to scope the memory to a specific record; send
   * `null` (on either entity field) to unscope the memory.
   */
  entity_type?: string | null;

  /**
   * Expiration timestamp in ISO 8601 format (e.g. `2026-01-02T15:04:05Z`).
   *
   * Expired memories are excluded from list results and are no longer recalled by
   * agents. Send `null` to make the memory permanent (never expires).
   */
  expires_at?: string | null;

  /**
   * Relative importance from `0` to `1` in increments of `0.1`, used to prioritize
   * which memories the agent recalls.
   *
   * Higher is more important.
   */
  importance?: number;

  /**
   * Arbitrary metadata as JSON. Encoded as a JSON value (object, array, string,
   * number, boolean, or null), not a JSON-encoded string.
   */
  metadata?: unknown | null;
}

export interface MemoryDeleteResponse {}

export interface MemoryCreateParams {
  /**
   * Category used to group related memories.
   */
  category: string;

  /**
   * Text content.
   */
  content: string;

  /**
   * ID of the platform record this memory is scoped to.
   *
   * Provide together with `entity_type`.
   */
  entity_id?: string;

  /**
   * Type of platform record this memory is scoped to (e.g. `customer`, `product`).
   *
   * Provide together with `entity_id` to scope the memory to a specific record; omit
   * both for an account-wide memory.
   */
  entity_type?: string;

  /**
   * Expiration timestamp in ISO 8601 format (e.g. `2026-01-02T15:04:05Z`).
   *
   * Omit for a memory that never expires. Expired memories are excluded from list
   * results and are no longer recalled by agents.
   */
  expires_at?: string;

  /**
   * Relative importance from `0` to `1` in increments of `0.1`, used to prioritize
   * which memories the agent recalls.
   *
   * Higher is more important. When omitted, the memory is stored at the lowest
   * priority (`0`).
   */
  importance?: number;

  /**
   * Arbitrary metadata as JSON. Encoded as a JSON value (object, array, string,
   * number, boolean, or null), not a JSON-encoded string.
   */
  metadata?: unknown | null;
}

export interface MemoryUpdateParams {
  /**
   * Category used to group related memories.
   */
  category?: string;

  /**
   * Text content.
   */
  content?: string;

  /**
   * ID of the platform record this memory is scoped to.
   *
   * Provide together with `entity_type`; send `null` to unscope the memory.
   */
  entity_id?: string | null;

  /**
   * Type of platform record this memory is scoped to (e.g. `customer`, `product`).
   *
   * Provide together with `entity_id` to scope the memory to a specific record; send
   * `null` (on either entity field) to unscope the memory.
   */
  entity_type?: string | null;

  /**
   * Expiration timestamp in ISO 8601 format (e.g. `2026-01-02T15:04:05Z`).
   *
   * Expired memories are excluded from list results and are no longer recalled by
   * agents. Send `null` to make the memory permanent (never expires).
   */
  expires_at?: string | null;

  /**
   * Relative importance from `0` to `1` in increments of `0.1`, used to prioritize
   * which memories the agent recalls.
   *
   * Higher is more important.
   */
  importance?: number;

  /**
   * Arbitrary metadata as JSON. Encoded as a JSON value (object, array, string,
   * number, boolean, or null), not a JSON-encoded string.
   */
  metadata?: unknown | null;
}

export interface MemoryListParams {
  /**
   * Filter to memories with this exact category (e.g. `preference`, `fact`).
   */
  category?: string;

  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Filter to memories scoped to this entity type (e.g. `customer`, `product`).
   */
  entity_type?: string;

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
}

export declare namespace Memories {
  export {
    type AgentMemory as AgentMemory,
    type CreateMemoryRequest as CreateMemoryRequest,
    type ListAgentMemory as ListAgentMemory,
    type UpdateMemoryRequest as UpdateMemoryRequest,
    type MemoryDeleteResponse as MemoryDeleteResponse,
    type MemoryCreateParams as MemoryCreateParams,
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryListParams as MemoryListParams,
  };
}
