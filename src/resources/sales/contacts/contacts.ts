// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionFindByEmailParams,
  Actions,
  ContactMatch,
  FindContactByEmailRequest,
  ListContactMatch,
} from './actions';

export class Contacts extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
}

Contacts.Actions = Actions;

export declare namespace Contacts {
  export {
    Actions as Actions,
    type ContactMatch as ContactMatch,
    type FindContactByEmailRequest as FindContactByEmailRequest,
    type ListContactMatch as ListContactMatch,
    type ActionFindByEmailParams as ActionFindByEmailParams,
  };
}
