// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { OpenMRP } from '../client';

export abstract class APIResource {
  protected _client: OpenMRP;

  constructor(client: OpenMRP) {
    this._client = client;
  }
}
