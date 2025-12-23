// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V2API from './v2';
import {
  JupiterToken,
  SwapStats,
  TokenAudit,
  V2,
  V2ListRecentParams,
  V2ListRecentResponse,
  V2ListTopTradedParams,
  V2ListTopTradedResponse,
  V2ListTopTrendingParams,
  V2ListTopTrendingResponse,
} from './v2';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tokens extends APIResource {
  v2: V2API.V2 = new V2API.V2(this._client);

  /**
   * Fetches token metadata including logo, name, symbol, and price from Jupiter.
   */
  retrieve(mint: string, options?: RequestOptions): APIPromise<TokenRetrieveResponse> {
    return this._client.get(path`/jupiter/tokens/v1/${mint}`, options);
  }
}

export interface TokenRetrieveResponse {
  /**
   * Token mint address
   */
  address?: string;

  decimals?: number;

  /**
   * Token logo URL
   */
  logoURI?: string | null;

  name?: string;

  price?: number | null;

  symbol?: string;

  usdPrice?: number | null;
}

Tokens.V2 = V2;

export declare namespace Tokens {
  export { type TokenRetrieveResponse as TokenRetrieveResponse };

  export {
    V2 as V2,
    type JupiterToken as JupiterToken,
    type SwapStats as SwapStats,
    type TokenAudit as TokenAudit,
    type V2ListRecentResponse as V2ListRecentResponse,
    type V2ListTopTradedResponse as V2ListTopTradedResponse,
    type V2ListTopTrendingResponse as V2ListTopTrendingResponse,
    type V2ListRecentParams as V2ListRecentParams,
    type V2ListTopTradedParams as V2ListTopTradedParams,
    type V2ListTopTrendingParams as V2ListTopTrendingParams,
  };
}
