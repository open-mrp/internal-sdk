// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Openmrp } from '../client';

export abstract class APIResource {
  protected _client: Openmrp;

  constructor(client: Openmrp) {
    this._client = client;
  }
}
