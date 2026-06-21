// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Augno } from '../client';

export abstract class APIResource {
  protected _client: Augno;

  constructor(client: Augno) {
    this._client = client;
  }
}
