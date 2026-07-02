// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MessagingAPI from '../../messaging';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Create presigned upload targets for message attachments.
 */
export class Actions extends APIResource {
  /**
   * Mints a presigned URL for uploading a chat attachment directly to object
   * storage.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const attachmentUploadTarget =
   *   await client.messaging.conversations.attachments.actions.uploadURL(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *     { filename: 'diagram.png', content_type: 'image/png' },
   *   );
   * ```
   */
  uploadURL(
    id: string,
    params: ActionUploadURLParams,
    options?: RequestOptions,
  ): APIPromise<AttachmentUploadTarget> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/messaging/conversations/${id}/attachments/actions/upload-url`, {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * A presigned target for uploading a chat attachment directly to object storage.
 *
 * The client PUTs the file to `upload_url`, then references `s3_key` when sending
 * the message. Request `?include=attachment` to expand the pre-allocated
 * attachment metadata.
 */
export interface AttachmentUploadTarget {
  /**
   * A file, image, link, or resource attached to a message.
   */
  attachment: MessagingAPI.MessageAttachment | null;

  /**
   * When the upload URL expires.
   */
  expires_at: string;

  /**
   * Resource type identifier.
   */
  object: 'attachment_upload_target';

  /**
   * The object-storage key to echo back when sending the message.
   */
  s3_key: string;

  /**
   * The presigned URL to PUT the file to.
   */
  upload_url: string;
}

/**
 * Request to mint a presigned upload target for a chat attachment.
 */
export interface CreateAttachmentUploadURLRequest {
  /**
   * The original filename of the file to upload.
   */
  filename: string;

  /**
   * The MIME content type of the file (sent as the Content-Type on the upload).
   */
  content_type?: string;
}

export interface ActionUploadURLParams {
  /**
   * Body param: The original filename of the file to upload.
   */
  filename: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'attachment' | 'attachment.resource'>;

  /**
   * Body param: The MIME content type of the file (sent as the Content-Type on the
   * upload).
   */
  content_type?: string;
}

export declare namespace Actions {
  export {
    type AttachmentUploadTarget as AttachmentUploadTarget,
    type CreateAttachmentUploadURLRequest as CreateAttachmentUploadURLRequest,
    type ActionUploadURLParams as ActionUploadURLParams,
  };
}
