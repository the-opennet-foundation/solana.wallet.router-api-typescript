// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class TrenchStream extends APIResource {
  /**
   * WebSocket endpoint for real-time token and transaction updates. Connect using
   * `wss://paxsol.paxeer.app/trench-stream/ws`
   *
   * **Message Types:**
   *
   * - Token updates
   * - New transactions
   * - Price changes
   */
  connect(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/trench-stream/ws', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
