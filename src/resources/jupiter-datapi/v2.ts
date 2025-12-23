// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class V2 extends APIResource {
  /**
   * Fetches OHLCV candlestick data for charting.
   */
  getTokenPriceChart(
    assetID: string,
    query: V2GetTokenPriceChartParams,
    options?: RequestOptions,
  ): APIPromise<V2GetTokenPriceChartResponse> {
    return this._client.get(path`/jupiter-datapi/v2/charts/${assetID}`, { query, ...options });
  }
}

export interface V2GetTokenPriceChartResponse {
  candles?: Array<V2GetTokenPriceChartResponse.Candle>;
}

export namespace V2GetTokenPriceChartResponse {
  export interface Candle {
    close?: number;

    high?: number;

    low?: number;

    open?: number;

    /**
     * Unix timestamp
     */
    time?: number;

    volume?: number;
  }
}

export interface V2GetTokenPriceChartParams {
  /**
   * Base asset for price calculation
   */
  baseAsset: string;

  /**
   * Number of candles to return
   */
  candles: number;

  /**
   * Start timestamp (Unix seconds or ISO date)
   */
  from: number | string;

  /**
   * Candlestick interval
   */
  interval:
    | '1_SECOND'
    | '15_SECOND'
    | '30_SECOND'
    | '1_MINUTE'
    | '3_MINUTE'
    | '5_MINUTE'
    | '15_MINUTE'
    | '30_MINUTE'
    | '1_HOUR'
    | '2_HOUR'
    | '4_HOUR'
    | '8_HOUR'
    | '12_HOUR'
    | '1_DAY'
    | '1_WEEK'
    | '1_MONTH';

  /**
   * End timestamp (Unix seconds or ISO date)
   */
  to: number | string;

  /**
   * Chart type
   */
  type?: 'price' | 'mcap';
}

export declare namespace V2 {
  export {
    type V2GetTokenPriceChartResponse as V2GetTokenPriceChartResponse,
    type V2GetTokenPriceChartParams as V2GetTokenPriceChartParams,
  };
}
