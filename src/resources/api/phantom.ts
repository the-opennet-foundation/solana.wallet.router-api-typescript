// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Phantom extends APIResource {
  /**
   * Fetches meme token explore data from Phantom API, organized into buckets (new,
   * aboutToGraduate, graduated) filtered by launchpad platforms.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.phantom.exploreMemeTokens();
   * ```
   */
  exploreMemeTokens(
    body: PhantomExploreMemeTokensParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PhantomExploreMemeTokensResponse> {
    return this._client.post('/api/phantom/meme-explore', { body, ...options });
  }

  /**
   * Fetches trending perpetual markets data from Phantom.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.phantom.getPerpTrendingMarkets();
   * ```
   */
  getPerpTrendingMarkets(
    query: PhantomGetPerpTrendingMarketsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PhantomGetPerpTrendingMarketsResponse> {
    return this._client.get('/api/phantom/perp-trending-markets', { query, ...options });
  }

  /**
   * Fetches basic overview data for one or more tokens.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.phantom.getSimpleTokenOverviews({
   *     tokenAddresses: 'tokenAddresses',
   *   });
   * ```
   */
  getSimpleTokenOverviews(
    query: PhantomGetSimpleTokenOverviewsParams,
    options?: RequestOptions,
  ): APIPromise<PhantomGetSimpleTokenOverviewsResponse> {
    return this._client.get('/api/phantom/simple-token-overviews', { query, ...options });
  }

  /**
   * Fetches detailed trading statistics for a specific token.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.phantom.getSingleTokenStats({
   *     tokenAddress: 'tokenAddress',
   *   });
   * ```
   */
  getSingleTokenStats(
    query: PhantomGetSingleTokenStatsParams,
    options?: RequestOptions,
  ): APIPromise<PhantomGetSingleTokenStatsResponse> {
    return this._client.get('/api/phantom/single-token-stats', { query, ...options });
  }

  /**
   * Search and filter SPL tokens with various sorting and filtering options.
   *
   * @example
   * ```ts
   * const response = await client.api.phantom.searchSplTokens();
   * ```
   */
  searchSplTokens(
    query: PhantomSearchSplTokensParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PhantomSearchSplTokensResponse> {
    return this._client.get('/api/phantom/search-bot-spl', { query, ...options });
  }
}

export interface MemeExploreFilter {
  /**
   * Launchpad platforms to include
   */
  platformsFilter?: Array<string>;
}

export interface PhantomExploreMemeTokensResponse {
  data?: { [key: string]: Array<PhantomExploreMemeTokensResponse.Data> };

  success?: boolean;
}

export namespace PhantomExploreMemeTokensResponse {
  export interface Data {
    bondingCurvePlatform?: string | null;

    image?: string | null;

    liquidity?: number | null;

    marketCap?: number | null;

    name?: string;

    symbol?: string;

    tokenAddress?: string;

    uniqueHolders?: number | null;

    volume?: number | null;
  }
}

export interface PhantomGetPerpTrendingMarketsResponse {
  trendingMarkets?: Array<PhantomGetPerpTrendingMarketsResponse.TrendingMarket>;
}

export namespace PhantomGetPerpTrendingMarketsResponse {
  export interface TrendingMarket {
    token?: TrendingMarket.Token;

    assetId?: number;

    description?: string | null;

    fundingRate?: string;

    isAtOpenInterestCap?: boolean;

    logoUri?: string | null;

    maxLeverage?: number | null;

    name?: string;

    openInterest?: string;

    price?: string;

    priceChange24h?: TrendingMarket.PriceChange24h | null;

    symbol?: string;

    szDecimals?: number | null;

    volume24h?: string;
  }

  export namespace TrendingMarket {
    export interface Token {
      address?: string;

      chainId?: string;

      resourceType?: string;
    }

    export interface PriceChange24h {
      amount?: string;

      percentage?: string;
    }
  }
}

export interface PhantomGetSimpleTokenOverviewsResponse {
  data?: Array<PhantomGetSimpleTokenOverviewsResponse.Data>;

  success?: boolean;
}

export namespace PhantomGetSimpleTokenOverviewsResponse {
  export interface Data {
    address?: string;

    decimals?: number | null;

    logoURI?: string | null;

    mc?: number | null;

    name?: string;

    priceChange24h?: number | null;

    priceUsd?: number | null;

    supply?: number | null;

    symbol?: string;

    v24hUSD?: number | null;
  }
}

export interface PhantomGetSingleTokenStatsResponse {
  data?: PhantomGetSingleTokenStatsResponse.Data;

  success?: boolean;
}

export namespace PhantomGetSingleTokenStatsResponse {
  export interface Data {
    trade24h?: number | null;

    trade5m?: number | null;

    uniqueWallet24h?: number | null;

    uniqueWallet5m?: number | null;

    vBuyHistory24hUSD?: number | null;

    vHistory24hUSD?: number | null;

    vHistory5mUSD?: number | null;

    vSellHistory24hUSD?: number | null;
  }
}

export interface PhantomSearchSplTokensResponse {
  data?: Array<PhantomSearchSplTokensResponse.Data>;

  sparkCharts?: { [key: string]: Array<PhantomSearchSplTokensResponse.SparkChart> };
}

export namespace PhantomSearchSplTokensResponse {
  export interface Data {
    address?: string;

    decimals?: number | null;

    liquidity?: number | null;

    logoURI?: string | null;

    /**
     * Market cap
     */
    mc?: number | null;

    name?: string;

    priceUsd?: number | null;

    supply?: number | null;

    symbol?: string;

    telegramCallCount?: string | number | null;

    tweets24h?: number | null;

    uniqueTweeters24h?: number | null;

    v1hUSD?: number | null;

    /**
     * 24-hour volume in USD
     */
    v24hUSD?: number | null;

    v5mUSD?: number | null;

    v8hUSD?: number | null;
  }

  export interface SparkChart {
    unixTime?: number;

    value?: number;
  }
}

export interface PhantomExploreMemeTokensParams {
  aboutToGraduateFilter?: MemeExploreFilter;

  graduatedFilter?: MemeExploreFilter;

  newFilter?: MemeExploreFilter;
}

export interface PhantomGetPerpTrendingMarketsParams {
  /**
   * Chain ID for the markets
   */
  chainId?: string;

  /**
   * Maximum number of results
   */
  limit?: string;

  /**
   * Sort field
   */
  sortBy?: 'volume' | 'openInterest' | 'fundingRate';

  /**
   * Sort direction
   */
  sortDirection?: 'asc' | 'desc';
}

export interface PhantomGetSimpleTokenOverviewsParams {
  /**
   * Comma-separated token mint addresses
   */
  tokenAddresses: string;
}

export interface PhantomGetSingleTokenStatsParams {
  /**
   * Token mint address
   */
  tokenAddress: string;
}

export interface PhantomSearchSplTokensParams {
  /**
   * Include spark charts data
   */
  charts?: 'true' | 'false';

  /**
   * Page number (0-indexed)
   */
  page?: string;

  /**
   * Search query string
   */
  query?: string;

  /**
   * Enable sniper mode
   */
  sniper?: 'true' | 'false';

  /**
   * Sort field and direction
   */
  sortBy?:
    | 'volume-desc'
    | 'volume-asc'
    | 'marketcap-desc'
    | 'marketcap-asc'
    | 'liquidity-desc'
    | 'liquidity-asc';

  /**
   * Time range for statistics
   */
  timeRange?: '5m' | '1h' | '8h' | '24h';
}

export declare namespace Phantom {
  export {
    type MemeExploreFilter as MemeExploreFilter,
    type PhantomExploreMemeTokensResponse as PhantomExploreMemeTokensResponse,
    type PhantomGetPerpTrendingMarketsResponse as PhantomGetPerpTrendingMarketsResponse,
    type PhantomGetSimpleTokenOverviewsResponse as PhantomGetSimpleTokenOverviewsResponse,
    type PhantomGetSingleTokenStatsResponse as PhantomGetSingleTokenStatsResponse,
    type PhantomSearchSplTokensResponse as PhantomSearchSplTokensResponse,
    type PhantomExploreMemeTokensParams as PhantomExploreMemeTokensParams,
    type PhantomGetPerpTrendingMarketsParams as PhantomGetPerpTrendingMarketsParams,
    type PhantomGetSimpleTokenOverviewsParams as PhantomGetSimpleTokenOverviewsParams,
    type PhantomGetSingleTokenStatsParams as PhantomGetSingleTokenStatsParams,
    type PhantomSearchSplTokensParams as PhantomSearchSplTokensParams,
  };
}
