// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionUploadURLParams,
  Actions,
  AttachmentUploadTarget,
  CreateAttachmentUploadURLRequest,
} from './actions';

export class Attachments extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
}

Attachments.Actions = Actions;

export declare namespace Attachments {
  export {
    Actions as Actions,
    type AttachmentUploadTarget as AttachmentUploadTarget,
    type CreateAttachmentUploadURLRequest as CreateAttachmentUploadURLRequest,
    type ActionUploadURLParams as ActionUploadURLParams,
  };
}
