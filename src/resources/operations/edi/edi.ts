// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { ActionResubmitInvoiceParams, Actions } from './actions';

export class Edi extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
}

Edi.Actions = Actions;

export declare namespace Edi {
  export { Actions as Actions, type ActionResubmitInvoiceParams as ActionResubmitInvoiceParams };
}
