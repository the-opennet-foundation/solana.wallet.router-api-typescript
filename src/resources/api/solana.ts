// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Solana extends APIResource {
  /**
   * Returns current SOL price, block height, and transactions per second (TPS).
   *
   * @example
   * ```ts
   * const response = await client.api.solana.getStatus();
   * ```
   */
  getStatus(options?: RequestOptions): APIPromise<SolanaGetStatusResponse> {
    return this._client.get('/api/solana/status', options);
  }
}

export interface SolanaGetStatusResponse {
  /**
   * Current block height
   */
  block?: number | null;

  /**
   * Current SOL price in USD
   */
  solPrice?: number | null;

  /**
   * Transactions per second
   */
  tps?: number | null;
}

export declare namespace Solana {
  export { type SolanaGetStatusResponse as SolanaGetStatusResponse };
}
