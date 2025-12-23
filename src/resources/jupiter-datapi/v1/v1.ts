// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TokensAPI from '../../api/tokens';
import * as AssetsAPI from './assets';
import { AssetGetDescriptionResponse, Assets } from './assets';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class V1 extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);

  /**
   * Fetches pool and token information for specified asset IDs.
   */
  getPools(query: V1GetPoolsParams, options?: RequestOptions): APIPromise<TokensAPI.GetTokenResponse> {
    return this._client.get('/jupiter-datapi/v1/pools', { query, ...options });
  }

  /**
   * Fetches top holders for a specific token.
   */
  getTokenHolders(assetID: string, options?: RequestOptions): APIPromise<V1GetTokenHoldersResponse> {
    return this._client.get(path`/jupiter-datapi/v1/holders/${assetID}`, options);
  }

  /**
   * Fetches recent swap transactions for a specific token.
   */
  getTokenTransactions(
    assetID: string,
    query: V1GetTokenTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1GetTokenTransactionsResponse> {
    return this._client.get(path`/jupiter-datapi/v1/txs/${assetID}`, { query, ...options });
  }

  /**
   * Fetches profit and loss statistics for a wallet address.
   */
  getWalletPnlStats(
    query: V1GetWalletPnlStatsParams,
    options?: RequestOptions,
  ): APIPromise<V1GetWalletPnlStatsResponse> {
    return this._client.get('/jupiter-datapi/v1/pnl-stats', { query, ...options });
  }
}

export interface V1GetTokenHoldersResponse {
  count?: number | null;

  holders?: Array<V1GetTokenHoldersResponse.Holder> | null;
}

export namespace V1GetTokenHoldersResponse {
  export interface Holder {
    /**
     * Holder wallet address
     */
    address?: string;

    /**
     * Token amount held
     */
    amount?: number;

    tags?: Array<Holder.Tag> | null;
  }

  export namespace Holder {
    export interface Tag {
      /**
       * Short tag identifier
       */
      id?: string;

      /**
       * Full tag name
       */
      name?: string;
    }
  }
}

export interface V1GetTokenTransactionsResponse {
  /**
   * Pagination cursor
   */
  next?: string | null;

  txs?: Array<V1GetTokenTransactionsResponse.Tx>;
}

export namespace V1GetTokenTransactionsResponse {
  export interface Tx {
    /**
     * Token amount
     */
    amount?: number;

    /**
     * Token mint address
     */
    asset?: string;

    /**
     * Whether this is an MEV transaction
     */
    isMev?: boolean;

    /**
     * Whether price is valid for chart display
     */
    isValidPrice?: boolean;

    /**
     * Transaction volume in native token
     */
    nativeVolume?: number;

    /**
     * Pool where trade occurred
     */
    poolId?: string;

    timestamp?: string;

    /**
     * Trader wallet address
     */
    traderAddress?: string;

    /**
     * Transaction signature
     */
    txHash?: string;

    type?: 'buy' | 'sell';

    /**
     * Price at transaction time in USD
     */
    usdPrice?: number;

    /**
     * Transaction volume in USD
     */
    usdVolume?: number;
  }
}

export type V1GetWalletPnlStatsResponse = { [key: string]: V1GetWalletPnlStatsResponse.item };

export namespace V1GetWalletPnlStatsResponse {
  export interface item {
    stats?: item.Stats;

    totalAssetsInPositions?: number | null;

    totalSolBalance?: number | null;

    totalUsdcBalance?: number | null;
  }

  export namespace item {
    export interface Stats {
      '1d'?: Stats._1d;

      '30d'?: Stats._30d;

      '7d'?: Stats._7d;

      total?: Stats.Total;
    }

    export namespace Stats {
      export interface _1d {
        netWorth?: number | null;

        netWorthNative?: number | null;

        totalPercentage?: number | null;

        totalPnl?: number | null;

        totalPnlNative?: number | null;
      }

      export interface _30d {
        netWorth?: number | null;

        netWorthNative?: number | null;

        totalPercentage?: number | null;

        totalPnl?: number | null;

        totalPnlNative?: number | null;
      }

      export interface _7d {
        netWorth?: number | null;

        netWorthNative?: number | null;

        totalPercentage?: number | null;

        totalPnl?: number | null;

        totalPnlNative?: number | null;
      }

      export interface Total {
        netWorth?: number | null;

        netWorthNative?: number | null;

        totalPercentage?: number | null;

        totalPnl?: number | null;

        totalPnlNative?: number | null;
      }
    }
  }
}

export interface V1GetPoolsParams {
  /**
   * Comma-separated token mint addresses
   */
  assetIds: string;
}

export interface V1GetTokenTransactionsParams {
  /**
   * Filter transactions from this timestamp
   */
  fromTs?: string;

  /**
   * Maximum number of transactions
   */
  limit?: number;

  /**
   * Pagination offset token
   */
  offset?: string;

  /**
   * Offset timestamp for pagination
   */
  offsetTs?: string;

  /**
   * Filter transactions until this timestamp
   */
  toTs?: string;

  /**
   * Filter by trader wallet address
   */
  traderAddress?: string;
}

export interface V1GetWalletPnlStatsParams {
  /**
   * Wallet address
   */
  address: string;
}

V1.Assets = Assets;

export declare namespace V1 {
  export {
    type V1GetTokenHoldersResponse as V1GetTokenHoldersResponse,
    type V1GetTokenTransactionsResponse as V1GetTokenTransactionsResponse,
    type V1GetWalletPnlStatsResponse as V1GetWalletPnlStatsResponse,
    type V1GetPoolsParams as V1GetPoolsParams,
    type V1GetTokenTransactionsParams as V1GetTokenTransactionsParams,
    type V1GetWalletPnlStatsParams as V1GetWalletPnlStatsParams,
  };

  export { Assets as Assets, type AssetGetDescriptionResponse as AssetGetDescriptionResponse };
}
