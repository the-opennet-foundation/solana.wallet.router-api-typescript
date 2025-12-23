// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TokensAPI from './tokens';
import * as V2API from '../jupiter/tokens/v2';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tokens extends APIResource {
  /**
   * Fetches detailed token information and pool data for a specific token mint
   * address.
   *
   * @example
   * ```ts
   * const getTokenResponse = await client.api.tokens.retrieve(
   *   'So11111111111111111111111111111111111111112',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<GetTokenResponse> {
    return this._client.get(path`/api/tokens/${id}`, options);
  }

  /**
   * Fetches token lists by category. If no category is specified, returns all
   * categories (trending, new, topvolume) in a single response.
   *
   * @example
   * ```ts
   * const tokenListResponse = await client.api.tokens.list();
   * ```
   */
  list(
    query: TokenListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TokenListResponse> {
    return this._client.get('/api/tokens', { query, ...options });
  }
}

export interface GetTokenResponse {
  pools?: Array<Pool>;
}

export interface Pool {
  /**
   * Pool ID
   */
  id: string;

  baseAsset: Pool.BaseAsset;

  /**
   * Blockchain (e.g., "solana")
   */
  chain: string;

  /**
   * Pool creation timestamp
   */
  createdAt: string;

  /**
   * DEX name (e.g., "jupiter", "raydium")
   */
  dex: string;

  /**
   * Pool type (e.g., "amm")
   */
  type: string;

  /**
   * Last update timestamp
   */
  updatedAt: string;

  /**
   * Bonding curve progress percentage (0-100)
   */
  bondingCurve?: number | null;

  /**
   * Whether the pool data may be unreliable
   */
  isUnreliable?: boolean | null;

  /**
   * 24-hour trading volume in USD
   */
  volume24h?: number | null;
}

export namespace Pool {
  export interface BaseAsset {
    /**
     * Token mint address
     */
    id: string;

    /**
     * Token decimals
     */
    decimals: number;

    /**
     * Token name
     */
    name: string;

    /**
     * Organic score category
     */
    organicScoreLabel: 'high' | 'medium' | 'low';

    /**
     * Token ticker symbol
     */
    symbol: string;

    /**
     * Token program ID (SPL Token or Token-2022)
     */
    tokenProgram: string;

    audit?: V2API.TokenAudit;

    /**
     * Circulating supply
     */
    circSupply?: number | null;

    /**
     * Crypto Twitter likes count
     */
    ctLikes?: number | null;

    /**
     * Developer wallet address
     */
    dev?: string | null;

    /**
     * Fully diluted valuation in USD
     */
    fdv?: number | null;

    firstPool?: BaseAsset.FirstPool | null;

    /**
     * When the token graduated from bonding curve
     */
    graduatedAt?: string | null;

    /**
     * Graduated pool ID
     */
    graduatedPool?: string | null;

    /**
     * Number of token holders
     */
    holderCount?: number | null;

    /**
     * Token logo URL
     */
    icon?: string | null;

    /**
     * Whether the token is verified
     */
    isVerified?: boolean | null;

    /**
     * Launchpad platform (pump.fun, met-dbc, etc.)
     */
    launchpad?:
      | 'pump.fun'
      | 'virtuals'
      | 'daos.fun'
      | 'time.fun'
      | 'GoFundMeme'
      | 'dealr.fun'
      | 'Dialect'
      | 'met-dbc'
      | 'letsbonk.fun'
      | 'Raydium'
      | 'cook.meme'
      | 'Believe'
      | 'boop'
      | 'xcombinator'
      | 'mentat.fun'
      | null;

    /**
     * Total liquidity in USD
     */
    liquidity?: number | null;

    /**
     * Market capitalization in USD
     */
    mcap?: number | null;

    /**
     * Organic trading score (0-100)
     */
    organicScore?: number | null;

    /**
     * Block ID of last price update
     */
    priceBlockId?: number | null;

    /**
     * Smart money CT likes count
     */
    smartCtLikes?: number | null;

    stats1h?: V2API.SwapStats;

    stats24h?: V2API.SwapStats;

    stats5m?: V2API.SwapStats;

    stats6h?: V2API.SwapStats;

    /**
     * Telegram group URL
     */
    telegram?: string | null;

    /**
     * Total supply
     */
    totalSupply?: number | null;

    /**
     * Twitter/X handle or URL
     */
    twitter?: string | null;

    /**
     * Current price in USD
     */
    usdPrice?: number | null;

    /**
     * Project website URL
     */
    website?: string | null;
  }

  export namespace BaseAsset {
    export interface FirstPool {
      id?: string;

      createdAt?: string;

      dex?: string;
    }
  }
}

export interface TokenListResponse {
  pools?: Array<Pool>;
}

export type TokenListResponse = TokenListResponse | TokenListResponse.AllCategoriesTokenListResponse;

export namespace TokenListResponse {
  export interface AllCategoriesTokenListResponse {
    new?: TokensAPI.TokenListResponse;

    topvolume?: TokensAPI.TokenListResponse;

    trending?: TokensAPI.TokenListResponse;
  }
}

export interface TokenListParams {
  /**
   * Token category to fetch
   */
  category?: 'trending' | 'new' | 'topvolume';

  /**
   * Time interval for statistics
   */
  interval?: '5m' | '1h' | '6h' | '24h';

  /**
   * Maximum number of tokens to return (max 100)
   */
  limit?: number;
}

export declare namespace Tokens {
  export {
    type GetTokenResponse as GetTokenResponse,
    type Pool as Pool,
    type TokenListResponse as TokenListResponse,
    type TokenListParams as TokenListParams,
  };
}
