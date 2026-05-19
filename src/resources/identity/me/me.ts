// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from '../../auth/actions';
import * as TenancyAPI from './tenancy';
import {
  Tenancy,
  TenancyCreateParams,
  TenancyResource,
  TenancyRetrieveParams,
  TenancyRetrieveResponse,
} from './tenancy';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Manage the authenticated user's tenancy context, including account switching and customer account access.
 */
export class Me extends APIResource {
  tenancy: TenancyAPI.TenancyResource = new TenancyAPI.TenancyResource(this._client);

  /**
   * Returns the authenticated user's profile information.
   *
   * @example
   * ```ts
   * const user = await client.identity.me.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ActionsAPI.User> {
    return this._client.get('/v1/identity/me', options);
  }
}

Me.TenancyResource = TenancyResource;

export declare namespace Me {
  export {
    TenancyResource as TenancyResource,
    type Tenancy as Tenancy,
    type TenancyRetrieveResponse as TenancyRetrieveResponse,
    type TenancyCreateParams as TenancyCreateParams,
    type TenancyRetrieveParams as TenancyRetrieveParams,
  };
}
