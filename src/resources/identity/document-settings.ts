// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Your account's customizations to the documents it generates, such as the document-control block printed on batch travelers.
 */
export class DocumentSettings extends APIResource {
  /**
   * Retrieves the account's settings for one document type.
   *
   * A type that has never been saved reads back with a null `id` and null fields
   * rather than a not-found error.
   *
   * This endpoint requires the permission: `self:read`.
   *
   * @example
   * ```ts
   * const documentSetting =
   *   await client.identity.documentSettings.retrieve(
   *     'invoice',
   *   );
   * ```
   */
  retrieve(
    documentType:
      | 'invoice'
      | 'order_acknowledgement'
      | 'purchase_order'
      | 'pack_list'
      | 'pick_ticket'
      | 'batch_traveler'
      | 'price_list'
      | 'transaction_receipt',
    options?: RequestOptions,
  ): APIPromise<DocumentSetting> {
    return this._client.get(path`/v1/identity/document-settings/${documentType}`, options);
  }

  /**
   * Partially updates the account's settings for one document type.
   *
   * Only the fields provided are changed. The first update to a type saves it,
   * giving it an `id`.
   *
   * This endpoint requires the permission: `self:update`.
   *
   * @example
   * ```ts
   * const documentSetting =
   *   await client.identity.documentSettings.update('invoice', {
   *     document_control: {
   *       process_owner: 'Quality Manager',
   *       document_number: 'FRM-QUAL-001',
   *       revision: 'Rev. C, 2026-01-15',
   *     },
   *   });
   * ```
   */
  update(
    documentType:
      | 'invoice'
      | 'order_acknowledgement'
      | 'purchase_order'
      | 'pack_list'
      | 'pick_ticket'
      | 'batch_traveler'
      | 'price_list'
      | 'transaction_receipt',
    body: DocumentSettingUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DocumentSetting> {
    return this._client.patch(path`/v1/identity/document-settings/${documentType}`, { body, ...options });
  }

  /**
   * Returns the account's settings for every document type.
   *
   * Every type is returned, in a fixed order, whether or not it has been saved; an
   * unsaved type reads back with a null `id` and null fields.
   *
   * This endpoint requires the permission: `self:read`.
   *
   * @example
   * ```ts
   * const listDocumentSetting =
   *   await client.identity.documentSettings.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ListDocumentSetting> {
    return this._client.get('/v1/identity/document-settings', options);
  }
}

/**
 * The document-control block printed on a document to identify it as a controlled
 * form, as quality systems such as ISO 9001 require. Nothing is printed while
 * every field is null.
 */
export interface DocumentControl {
  /**
   * The document's controlled form number.
   */
  document_number: string | null;

  /**
   * Resource type identifier.
   */
  object: 'document_control';

  /**
   * The person or role accountable for the process the document records.
   */
  process_owner: string | null;

  /**
   * The document's current revision, printed as given.
   */
  revision: string | null;
}

/**
 * Changes to a document-control block.
 */
export interface DocumentControlInput {
  /**
   * The document's controlled form number.
   */
  document_number?: string | null;

  /**
   * The person or role accountable for the process the document records.
   */
  process_owner?: string | null;

  /**
   * The document's current revision, printed as given.
   */
  revision?: string | null;
}

/**
 * Your account's customizations to one kind of generated document, applied
 * wherever that document is printed, exported as a PDF or emailed.
 *
 * Every document type has a setting. One you have never saved reads back with a
 * null `id` and null fields, and the document is generated with its defaults.
 */
export interface DocumentSetting {
  /**
   * Document setting ID. Null until the setting is first saved.
   */
  id: string | null;

  /**
   * Creation timestamp. Null until the setting is first saved.
   */
  created_at: string | null;

  /**
   * The document-control block printed on a document to identify it as a controlled
   * form, as quality systems such as ISO 9001 require. Nothing is printed while
   * every field is null.
   */
  document_control: DocumentControl;

  /**
   * The kind of document these settings apply to.
   */
  document_type:
    | 'invoice'
    | 'order_acknowledgement'
    | 'purchase_order'
    | 'pack_list'
    | 'pick_ticket'
    | 'batch_traveler'
    | 'price_list'
    | 'transaction_receipt';

  /**
   * Free text printed at the foot of the document.
   */
  footer_text: string | null;

  /**
   * Resource type identifier.
   */
  object: 'document_setting';

  /**
   * Last updated timestamp. Null until the setting is first saved.
   */
  updated_at: string | null;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListDocumentSetting {
  /**
   * Resources in this page.
   */
  data: Array<DocumentSetting>;

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
 * Request to partially update the account's settings for one document type.
 */
export interface UpdateDocumentSettingRequest {
  /**
   * Changes to a document-control block.
   */
  document_control?: DocumentControlInput;

  /**
   * Free text printed at the foot of the document. Pass null to remove it.
   */
  footer_text?: string | null;
}

export interface DocumentSettingUpdateParams {
  /**
   * Changes to a document-control block.
   */
  document_control?: DocumentControlInput;

  /**
   * Free text printed at the foot of the document. Pass null to remove it.
   */
  footer_text?: string | null;
}

export declare namespace DocumentSettings {
  export {
    type DocumentControl as DocumentControl,
    type DocumentControlInput as DocumentControlInput,
    type DocumentSetting as DocumentSetting,
    type ListDocumentSetting as ListDocumentSetting,
    type UpdateDocumentSettingRequest as UpdateDocumentSettingRequest,
    type DocumentSettingUpdateParams as DocumentSettingUpdateParams,
  };
}
