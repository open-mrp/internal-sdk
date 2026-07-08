// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StripeAPI from './stripe';
import { Stripe, StripeAccountsParams, StripeCreateParams, WebhookResponse } from './stripe';

export class Webhooks extends APIResource {
  stripe: StripeAPI.Stripe = new StripeAPI.Stripe(this._client);
}

Webhooks.Stripe = Stripe;

export declare namespace Webhooks {
  export {
    Stripe as Stripe,
    type WebhookResponse as WebhookResponse,
    type StripeCreateParams as StripeCreateParams,
    type StripeAccountsParams as StripeAccountsParams,
  };
}
