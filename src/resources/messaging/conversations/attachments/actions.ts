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
   * Creates a short-lived URL for uploading a chat attachment straight to object
   * storage.
   *
   * Upload the file to the returned URL, then send a message in the same
   * conversation carrying the returned key as an attachment — the file only becomes
   * part of the conversation at that point, and an upload that is never sent is
   * discarded automatically. You must be an active participant of the conversation
   * to stage an upload for it.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const attachmentUploadTarget =
   *   await client.messaging.conversations.attachments.actions.uploadURL(
   *     'cv_w35z4ck68yq7',
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
 * PUT the file to `upload_url`, then send a message carrying an attachment whose
 * `s3_key` is the key returned here. An upload that is never sent with a message
 * is discarded automatically, so abandoning a target costs nothing.
 */
export interface AttachmentUploadTarget {
  /**
   * A file, image, link, or resource attached to a message.
   */
  attachment: MessagingAPI.MessageAttachment | null;

  /**
   * When the upload URL stops working.
   *
   * Targets are short-lived (about fifteen minutes); request a new one if the upload
   * has not finished by then.
   */
  expires_at: string;

  /**
   * Resource type identifier.
   */
  object: 'attachment_upload_target';

  /**
   * The object-storage key identifying the uploaded file.
   *
   * Pass it back as an attachment's `s3_key` when sending a message. It is bound to
   * the conversation it was minted for and cannot be attached in another one.
   */
  s3_key: string;

  /**
   * The presigned URL to PUT the file to.
   *
   * Send the file with the same content type used to mint the target, or the upload
   * is rejected.
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
   * The MIME content type of the file.
   *
   * The file must then be uploaded with this same content type, or object storage
   * rejects it. It also decides how the attachment preview returned here is
   * classified: `image/…` becomes an inline image, anything else a file.
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
   * Body param: The MIME content type of the file.
   *
   * The file must then be uploaded with this same content type, or object storage
   * rejects it. It also decides how the attachment preview returned here is
   * classified: `image/…` becomes an inline image, anything else a file.
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
