// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ActionsAPI from './actions';
import { ActionExportParams, Actions, ExportOpenOrderLinesRequest } from './actions';

export class OpenOrderLines extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
}

OpenOrderLines.Actions = Actions;

export declare namespace OpenOrderLines {
  export {
    Actions as Actions,
    type ExportOpenOrderLinesRequest as ExportOpenOrderLinesRequest,
    type ActionExportParams as ActionExportParams,
  };
}
