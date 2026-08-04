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
   * Saves a piece of information for agents to recall on future runs.
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
   * An expired memory is still returned here, even though it is excluded from list
   * results and no longer recalled by agents.
   *
   * This endpoint requires the permission: `agent_memories:read`.
   *
   * @example
   * ```ts
   * const agentMemory = await client.ai.memories.retrieve(
   *   'agmm_o7tjkr16gfmh',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AgentMemory> {
    return this._client.get(path`/v1/ai/memories/${id}`, options);
  }

  /**
   * Updates an agent memory.
   *
   * Only the fields included in the request are changed; everything else keeps its
   * current value.
   *
   * This endpoint requires the permission: `agent_memories:update`.
   *
   * @example
   * ```ts
   * const agentMemory = await client.ai.memories.update(
   *   'agmm_o7tjkr16gfmh',
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
   * Returns a paginated list of agent memories for the current account, newest
   * first.
   *
   * Memories whose `expires_at` has passed are excluded. The `q` search term matches
   * against a memory's ID, category, content, and the ID of the record it is scoped
   * to.
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
   * Permanently deletes an agent memory so it is no longer recalled.
   *
   * Deleting a memory that has already been deleted succeeds rather than returning
   * an error.
   *
   * This endpoint requires the permission: `agent_memories:delete`.
   *
   * @example
   * ```ts
   * const memory = await client.ai.memories.delete(
   *   'agmm_o7tjkr16gfmh',
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
   * The kind of information this memory holds, used to group related memories.
   *
   * - `preference`: how someone likes things done, such as a customer who always
   *   wants express shipping.
   * - `fact`: a durable detail worth remembering about the account or one of its
   *   records, such as a customer's typical order size.
   * - `instruction`: standing guidance for agents to follow, such as always
   *   confirming freight before issuing an order.
   */
  category: string;

  /**
   * The information itself, written as plain text for an agent to read.
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
   * When this memory stops being used.
   *
   * Past this time the memory is no longer recalled by agents and is omitted from
   * list results, but it is not deleted and can still be retrieved by ID. A memory
   * with no expiration is used indefinitely.
   */
  expires_at: string | null;

  /**
   * Relative importance from `0` to `1`, used to prioritize which memories the agent
   * recalls.
   *
   * An agent takes in only a limited number of memories per run, and the
   * highest-importance ones are recalled first.
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
   * The kind of information this memory holds, used to group related memories.
   *
   * - `preference`: how someone likes things done, such as a customer who always
   *   wants express shipping.
   * - `fact`: a durable detail worth remembering about the account or one of its
   *   records, such as a customer's typical order size.
   * - `instruction`: standing guidance for agents to follow, such as always
   *   confirming freight before issuing an order.
   */
  category: string;

  /**
   * The information to remember, written as plain text for an agent to read.
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
   * both for a memory that is not tied to any particular record.
   */
  entity_type?: string;

  /**
   * When this memory should stop being used, as an ISO 8601 timestamp (e.g.
   * `2026-01-02T15:04:05Z`).
   *
   * Past this time the memory is no longer recalled by agents and is omitted from
   * list results, but it is not deleted. Omit it for a memory that should be used
   * indefinitely.
   */
  expires_at?: string;

  /**
   * Relative importance from `0` to `1` in increments of `0.1`, used to prioritize
   * which memories the agent recalls.
   *
   * An agent takes in only a limited number of memories per run and recalls the
   * highest-importance ones first, so a memory created without an importance is
   * stored at `0` and is the first to be left out.
   */
  importance?: number;

  /**
   * Arbitrary metadata as JSON. Encoded as a JSON value (object, array, string,
   * number, boolean, or null), not a JSON-encoded string.
   */
  metadata?: unknown | null;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * Request to update an agent memory.
 */
export interface UpdateMemoryRequest {
  /**
   * The kind of information this memory holds, used to group related memories.
   *
   * - `preference`: how someone likes things done, such as a customer who always
   *   wants express shipping.
   * - `fact`: a durable detail worth remembering about the account or one of its
   *   records, such as a customer's typical order size.
   * - `instruction`: standing guidance for agents to follow, such as always
   *   confirming freight before issuing an order.
   */
  category?: string;

  /**
   * The information to remember, written as plain text for an agent to read.
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
   * When this memory should stop being used, as an ISO 8601 timestamp (e.g.
   * `2026-01-02T15:04:05Z`).
   *
   * Past this time the memory is no longer recalled by agents and is omitted from
   * list results, but it is not deleted. Send `null` so the memory is used
   * indefinitely.
   */
  expires_at?: string | null;

  /**
   * Relative importance from `0` to `1` in increments of `0.1`, used to prioritize
   * which memories the agent recalls.
   *
   * An agent takes in only a limited number of memories per run and recalls the
   * highest-importance ones first.
   */
  importance?: number;

  /**
   * Arbitrary metadata as JSON.
   *
   * Replaces the stored metadata outright rather than merging into it. Encoded as a
   * JSON value (object, array, string, number, boolean, or null), not a JSON-encoded
   * string.
   */
  metadata?: unknown | null;
}

export interface MemoryDeleteResponse {}

export interface MemoryCreateParams {
  /**
   * The kind of information this memory holds, used to group related memories.
   *
   * - `preference`: how someone likes things done, such as a customer who always
   *   wants express shipping.
   * - `fact`: a durable detail worth remembering about the account or one of its
   *   records, such as a customer's typical order size.
   * - `instruction`: standing guidance for agents to follow, such as always
   *   confirming freight before issuing an order.
   */
  category: string;

  /**
   * The information to remember, written as plain text for an agent to read.
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
   * both for a memory that is not tied to any particular record.
   */
  entity_type?: string;

  /**
   * When this memory should stop being used, as an ISO 8601 timestamp (e.g.
   * `2026-01-02T15:04:05Z`).
   *
   * Past this time the memory is no longer recalled by agents and is omitted from
   * list results, but it is not deleted. Omit it for a memory that should be used
   * indefinitely.
   */
  expires_at?: string;

  /**
   * Relative importance from `0` to `1` in increments of `0.1`, used to prioritize
   * which memories the agent recalls.
   *
   * An agent takes in only a limited number of memories per run and recalls the
   * highest-importance ones first, so a memory created without an importance is
   * stored at `0` and is the first to be left out.
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
   * The kind of information this memory holds, used to group related memories.
   *
   * - `preference`: how someone likes things done, such as a customer who always
   *   wants express shipping.
   * - `fact`: a durable detail worth remembering about the account or one of its
   *   records, such as a customer's typical order size.
   * - `instruction`: standing guidance for agents to follow, such as always
   *   confirming freight before issuing an order.
   */
  category?: string;

  /**
   * The information to remember, written as plain text for an agent to read.
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
   * When this memory should stop being used, as an ISO 8601 timestamp (e.g.
   * `2026-01-02T15:04:05Z`).
   *
   * Past this time the memory is no longer recalled by agents and is omitted from
   * list results, but it is not deleted. Send `null` so the memory is used
   * indefinitely.
   */
  expires_at?: string | null;

  /**
   * Relative importance from `0` to `1` in increments of `0.1`, used to prioritize
   * which memories the agent recalls.
   *
   * An agent takes in only a limited number of memories per run and recalls the
   * highest-importance ones first.
   */
  importance?: number;

  /**
   * Arbitrary metadata as JSON.
   *
   * Replaces the stored metadata outright rather than merging into it. Encoded as a
   * JSON value (object, array, string, number, boolean, or null), not a JSON-encoded
   * string.
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
