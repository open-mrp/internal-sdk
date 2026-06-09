// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from '../core/analytics';
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
   * @example
   * ```ts
   * const agentMemory = await client.ai.memories.update(
   *   'agmm_018731bdaf4ab04bd5bff1b65c',
   *   {
   *     category: 'category',
   *     content:
   *       'Customer prefers next-day shipping on all orders.',
   *     importance: 0.9,
   *   },
   * );
   * ```
   */
  update(id: string, body: MemoryUpdateParams, options?: RequestOptions): APIPromise<AgentMemory> {
    return this._client.patch(path`/v1/ai/memories/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of agent memories.
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
 * Agent memory resource.
 */
export interface AgentMemory {
  /**
   * Memory ID.
   */
  id: string;

  /**
   * Memory category.
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
  entity: AnalyticsAPI.Entity | null;

  /**
   * Expiration timestamp. Null means it never expires.
   */
  expires_at: string | null;

  /**
   * Importance score (0–1 scale).
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
   * Memory category (e.g. "preference", "fact", "instruction").
   */
  category: string;

  /**
   * Text content.
   */
  content: string;

  /**
   * Importance score between 0 and 1.
   */
  importance: number;

  /**
   * Entity ID.
   */
  entity_id?: string;

  /**
   * Entity type this memory is scoped to (e.g. "customer", "product").
   */
  entity_type?: string;

  /**
   * ISO 8601 expiration timestamp.
   */
  expires_at?: string;

  /**
   * JSON metadata. Encoded as a JSON value (object, array, string, number, boolean,
   * or null), not a JSON-encoded string.
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
   * Memory category (e.g. "preference", "fact", "instruction").
   */
  category: string;

  /**
   * Text content.
   */
  content: string;

  /**
   * Importance score between 0 and 1.
   */
  importance: number;

  /**
   * Entity ID.
   */
  entity_id?: string;

  /**
   * Entity type this memory is scoped to (e.g. "customer", "product").
   */
  entity_type?: string;

  /**
   * ISO 8601 expiration timestamp.
   */
  expires_at?: string;

  /**
   * JSON metadata. Encoded as a JSON value (object, array, string, number, boolean,
   * or null), not a JSON-encoded string.
   */
  metadata?: unknown | null;
}

export interface MemoryDeleteResponse {}

export interface MemoryCreateParams {
  /**
   * Memory category (e.g. "preference", "fact", "instruction").
   */
  category: string;

  /**
   * Text content.
   */
  content: string;

  /**
   * Importance score between 0 and 1.
   */
  importance: number;

  /**
   * Entity ID.
   */
  entity_id?: string;

  /**
   * Entity type this memory is scoped to (e.g. "customer", "product").
   */
  entity_type?: string;

  /**
   * ISO 8601 expiration timestamp.
   */
  expires_at?: string;

  /**
   * JSON metadata. Encoded as a JSON value (object, array, string, number, boolean,
   * or null), not a JSON-encoded string.
   */
  metadata?: unknown | null;
}

export interface MemoryUpdateParams {
  /**
   * Memory category (e.g. "preference", "fact", "instruction").
   */
  category: string;

  /**
   * Text content.
   */
  content: string;

  /**
   * Importance score between 0 and 1.
   */
  importance: number;

  /**
   * Entity ID.
   */
  entity_id?: string;

  /**
   * Entity type this memory is scoped to (e.g. "customer", "product").
   */
  entity_type?: string;

  /**
   * ISO 8601 expiration timestamp.
   */
  expires_at?: string;

  /**
   * JSON metadata. Encoded as a JSON value (object, array, string, number, boolean,
   * or null), not a JSON-encoded string.
   */
  metadata?: unknown | null;
}

export interface MemoryListParams {
  /**
   * Category filter (e.g. "preference", "fact").
   */
  category?: string;

  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Entity type filter (e.g. "customer", "product").
   */
  entity_type?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
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
