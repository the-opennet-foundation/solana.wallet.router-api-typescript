// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIAPI from './api';
import * as PhantomAPI from './phantom';
import {
  MemeExploreFilter,
  Phantom,
  PhantomExploreMemeTokensParams,
  PhantomExploreMemeTokensResponse,
  PhantomGetPerpTrendingMarketsParams,
  PhantomGetPerpTrendingMarketsResponse,
  PhantomGetSimpleTokenOverviewsParams,
  PhantomGetSimpleTokenOverviewsResponse,
  PhantomGetSingleTokenStatsParams,
  PhantomGetSingleTokenStatsResponse,
  PhantomSearchSplTokensParams,
  PhantomSearchSplTokensResponse,
} from './phantom';
import * as SolanaAPI from './solana';
import { Solana, SolanaGetStatusResponse } from './solana';
import * as TokensAPI from './tokens';
import { GetTokenResponse, Pool, TokenListParams, TokenListResponse, Tokens } from './tokens';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class API extends APIResource {
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
  solana: SolanaAPI.Solana = new SolanaAPI.Solana(this._client);
  phantom: PhantomAPI.Phantom = new PhantomAPI.Phantom(this._client);

  /**
   * Fetches comprehensive wallet data including SOL balance, SPL token holdings,
   * recent transactions, and Jupiter portfolio PnL statistics.
   *
   * @example
   * ```ts
   * const response = await client.api.getWalletInfo(
   *   '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
   * );
   * ```
   */
  getWalletInfo(address: string, options?: RequestOptions): APIPromise<APIGetWalletInfoResponse> {
    return this._client.get(path`/api/wallet/${address}`, options);
  }

  /**
   * Broadcasts a signed Solana transaction to the network.
   *
   * @example
   * ```ts
   * const response = await client.api.sendTransaction({
   *   signedTransaction: 'signedTransaction',
   * });
   * ```
   */
  sendTransaction(
    body: APISendTransactionParams,
    options?: RequestOptions,
  ): APIPromise<APISendTransactionResponse> {
    return this._client.post('/api/send-transaction', { body, ...options });
  }

  /**
   * Uploads token logo and metadata to R2 storage, then creates a Meteora Dynamic
   * Bonding Curve pool transaction for the token.
   *
   * @example
   * ```ts
   * const response = await client.api.uploadTokenMetadata({
   *   mint: 'mint',
   *   tokenLogo: 'data:image/png;base64,iVBORw0KGgo...',
   *   tokenName: 'My Token',
   *   tokenSymbol: 'MTK',
   *   userWallet: 'userWallet',
   * });
   * ```
   */
  uploadTokenMetadata(
    body: APIUploadTokenMetadataParams,
    options?: RequestOptions,
  ): APIPromise<APIUploadTokenMetadataResponse> {
    return this._client.post('/api/upload', { body, ...options });
  }
}

export interface WalletPortfolioPeriod {
  /**
   * PnL percentage for the period
   */
  totalPercentage?: number | null;

  /**
   * PnL for the period in USD
   */
  totalPnl?: number | null;

  /**
   * PnL for the period in SOL
   */
  totalPnlNative?: number | null;
}

export interface APIGetWalletInfoResponse {
  recentTransactions: Array<APIGetWalletInfoResponse.RecentTransaction>;

  /**
   * SOL balance in SOL (not lamports)
   */
  solBalance: number;

  tokens: Array<APIGetWalletInfoResponse.Token>;

  jupiterPortfolio?: APIGetWalletInfoResponse.JupiterPortfolio | null;
}

export namespace APIGetWalletInfoResponse {
  export interface RecentTransaction {
    /**
     * Whether the transaction failed
     */
    err: boolean;

    /**
     * Transaction signature
     */
    signature: string;

    /**
     * Slot number
     */
    slot: number;

    /**
     * Block timestamp (Unix seconds)
     */
    blockTime?: number | null;
  }

  export interface Token {
    /**
     * Token balance (UI amount, not raw)
     */
    amount: number;

    /**
     * Token decimals
     */
    decimals: number;

    /**
     * Token mint address
     */
    mint: string;
  }

  export interface JupiterPortfolio {
    day1?: APIAPI.WalletPortfolioPeriod | null;

    day30?: APIAPI.WalletPortfolioPeriod | null;

    day7?: APIAPI.WalletPortfolioPeriod | null;

    /**
     * Total portfolio value in USD
     */
    netWorth?: number | null;

    /**
     * Total portfolio value in SOL
     */
    netWorthNative?: number | null;

    /**
     * Number of assets in positions
     */
    totalAssetsInPositions?: number | null;

    /**
     * Total PnL percentage
     */
    totalPercentage?: number | null;

    /**
     * Total profit/loss in USD
     */
    totalPnl?: number | null;

    /**
     * Total profit/loss in SOL
     */
    totalPnlNative?: number | null;

    /**
     * Total SOL balance
     */
    totalSolBalance?: number | null;

    /**
     * Total USDC balance
     */
    totalUsdcBalance?: number | null;
  }
}

export interface APISendTransactionResponse {
  /**
   * Transaction signature
   */
  signature?: string;

  success?: boolean;
}

export interface APIUploadTokenMetadataResponse {
  /**
   * Base64-encoded pool creation transaction
   */
  poolTx?: string;

  success?: boolean;
}

export interface APISendTransactionParams {
  /**
   * Base64-encoded signed transaction
   */
  signedTransaction: string;

  /**
   * Additional signers (keypairs)
   */
  additionalSigners?: Array<unknown>;
}

export interface APIUploadTokenMetadataParams {
  /**
   * Token mint address
   */
  mint: string;

  /**
   * Base64-encoded token logo image (data URL format)
   */
  tokenLogo: string;

  /**
   * Token name
   */
  tokenName: string;

  /**
   * Token ticker symbol
   */
  tokenSymbol: string;

  /**
   * User's wallet address (pool creator)
   */
  userWallet: string;
}

API.Tokens = Tokens;
API.Solana = Solana;
API.Phantom = Phantom;

export declare namespace API {
  export {
    type WalletPortfolioPeriod as WalletPortfolioPeriod,
    type APIGetWalletInfoResponse as APIGetWalletInfoResponse,
    type APISendTransactionResponse as APISendTransactionResponse,
    type APIUploadTokenMetadataResponse as APIUploadTokenMetadataResponse,
    type APISendTransactionParams as APISendTransactionParams,
    type APIUploadTokenMetadataParams as APIUploadTokenMetadataParams,
  };

  export {
    Tokens as Tokens,
    type GetTokenResponse as GetTokenResponse,
    type Pool as Pool,
    type TokenListResponse as TokenListResponse,
    type TokenListParams as TokenListParams,
  };

  export { Solana as Solana, type SolanaGetStatusResponse as SolanaGetStatusResponse };

  export {
    Phantom as Phantom,
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
