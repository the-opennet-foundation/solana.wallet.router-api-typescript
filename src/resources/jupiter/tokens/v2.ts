// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class V2 extends APIResource {
  /**
   * Fetches recently listed tokens on Jupiter.
   */
  listRecent(
    query: V2ListRecentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V2ListRecentResponse> {
    return this._client.get('/jupiter/tokens/v2/recent', { query, ...options });
  }

  /**
   * Fetches top traded tokens by volume for a specific time interval.
   */
  listTopTraded(
    interval: '5m' | '1h' | '6h' | '24h',
    query: V2ListTopTradedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V2ListTopTradedResponse> {
    return this._client.get(path`/jupiter/tokens/v2/toptraded/${interval}`, { query, ...options });
  }

  /**
   * Fetches top trending tokens for a specific time interval.
   */
  listTopTrending(
    interval: '5m' | '1h' | '6h' | '24h',
    query: V2ListTopTrendingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V2ListTopTrendingResponse> {
    return this._client.get(path`/jupiter/tokens/v2/toptrending/${interval}`, { query, ...options });
  }
}

export interface JupiterToken {
  /**
   * Token mint address
   */
  id?: string;

  audit?: TokenAudit;

  circSupply?: number | null;

  decimals?: number;

  fdv?: number | null;

  firstPool?: JupiterToken.FirstPool | null;

  holderCount?: number | null;

  icon?: string | null;

  isVerified?: boolean | null;

  liquidity?: number | null;

  mcap?: number | null;

  name?: string;

  organicScore?: number | null;

  organicScoreLabel?: 'high' | 'medium' | 'low';

  priceBlockId?: number | null;

  stats1h?: SwapStats;

  stats24h?: SwapStats;

  stats5m?: SwapStats;

  stats6h?: SwapStats;

  symbol?: string;

  tokenProgram?: string;

  totalSupply?: number | null;

  updatedAt?: string;

  usdPrice?: number | null;
}

export namespace JupiterToken {
  export interface FirstPool {
    id?: string;

    createdAt?: string;
  }
}

export interface SwapStats {
  /**
   * Organic buy volume in USD
   */
  buyOrganicVolume?: number | null;

  /**
   * Total buy volume in USD
   */
  buyVolume?: number | null;

  /**
   * Net holder count change
   */
  holderChange?: number | null;

  /**
   * Liquidity change percentage
   */
  liquidityChange?: number | null;

  /**
   * Number of buy transactions
   */
  numBuys?: number | null;

  /**
   * Net buyers (buys - sells)
   */
  numNetBuyers?: number | null;

  /**
   * Organic buyers count
   */
  numOrganicBuyers?: number | null;

  /**
   * Number of sell transactions
   */
  numSells?: number | null;

  /**
   * Unique traders count
   */
  numTraders?: number | null;

  /**
   * Price change percentage
   */
  priceChange?: number | null;

  /**
   * Organic sell volume in USD
   */
  sellOrganicVolume?: number | null;

  /**
   * Total sell volume in USD
   */
  sellVolume?: number | null;

  /**
   * Volume change percentage
   */
  volumeChange?: number | null;
}

export interface TokenAudit {
  /**
   * Developer balance percentage
   */
  devBalancePercentage?: number | null;

  /**
   * Number of dev migrations
   */
  devMigrations?: number | null;

  /**
   * Whether freeze authority is disabled
   */
  freezeAuthorityDisabled?: boolean | null;

  /**
   * Percentage of LP tokens burned
   */
  lpBurnedPercentage?: number | null;

  /**
   * Whether mint authority is disabled (renounced)
   */
  mintAuthorityDisabled?: boolean | null;

  /**
   * Percentage held by top holders
   */
  topHoldersPercentage?: number | null;
}

export type V2ListRecentResponse = Array<JupiterToken>;

export type V2ListTopTradedResponse = Array<JupiterToken>;

export type V2ListTopTrendingResponse = Array<JupiterToken>;

export interface V2ListRecentParams {
  /**
   * Maximum number of tokens
   */
  limit?: number;
}

export interface V2ListTopTradedParams {
  /**
   * Maximum number of tokens
   */
  limit?: number;
}

export interface V2ListTopTrendingParams {
  /**
   * Maximum number of tokens
   */
  limit?: number;
}

export declare namespace V2 {
  export {
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
