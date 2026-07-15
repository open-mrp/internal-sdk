// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionGeneratePackListParams,
  Actions,
  GenPackListRequest,
  ListPackListBackOrder,
  ListPackListCase,
  ListPackListLineItem,
  PackList,
  PackListBackOrder,
  PackListCase,
  PackListLineItem,
  PackListParty,
} from './actions';

export class Records extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
}

Records.Actions = Actions;

export declare namespace Records {
  export {
    Actions as Actions,
    type GenPackListRequest as GenPackListRequest,
    type ListPackListBackOrder as ListPackListBackOrder,
    type ListPackListCase as ListPackListCase,
    type ListPackListLineItem as ListPackListLineItem,
    type PackList as PackList,
    type PackListBackOrder as PackListBackOrder,
    type PackListCase as PackListCase,
    type PackListLineItem as PackListLineItem,
    type PackListParty as PackListParty,
    type ActionGeneratePackListParams as ActionGeneratePackListParams,
  };
}
