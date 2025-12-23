// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SolanaWalletRouterAPI } from '../client';

export abstract class APIResource {
  protected _client: SolanaWalletRouterAPI;

  constructor(client: SolanaWalletRouterAPI) {
    this._client = client;
  }
}
