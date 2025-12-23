// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class V1 extends APIResource {
  /**
   * Creates a swap transaction from a quote. Returns a base64-encoded transaction
   * that needs to be signed and submitted to the network.
   */
  executeSwap(body: V1ExecuteSwapParams, options?: RequestOptions): APIPromise<V1ExecuteSwapResponse> {
    return this._client.post('/jupiter/swap/v1/swap', { body, ...options });
  }

  /**
   * Gets a quote for swapping tokens. Returns the best route and expected output
   * amount.
   */
  getQuote(query: V1GetQuoteParams, options?: RequestOptions): APIPromise<Quote> {
    return this._client.get('/jupiter/swap/v1/quote', { query, ...options });
  }
}

export interface Quote {
  /**
   * Input amount in smallest units
   */
  inAmount: string;

  /**
   * Input token mint address
   */
  inputMint: string;

  /**
   * Expected output amount in smallest units
   */
  outAmount: string;

  /**
   * Output token mint address
   */
  outputMint: string;

  /**
   * Minimum output amount (with slippage)
   */
  otherAmountThreshold?: string;

  /**
   * Price impact percentage
   */
  priceImpactPct?: string;

  routePlan?: Array<Quote.RoutePlan>;

  /**
   * Slippage in basis points
   */
  slippageBps?: number;

  swapMode?: 'ExactIn' | 'ExactOut';
}

export namespace Quote {
  export interface RoutePlan {
    /**
     * Percentage of route through this step
     */
    percent?: number;

    swapInfo?: RoutePlan.SwapInfo;
  }

  export namespace RoutePlan {
    export interface SwapInfo {
      /**
       * AMM pool address
       */
      ammKey?: string;

      feeAmount?: string;

      feeMint?: string;

      inAmount?: string;

      inputMint?: string;

      /**
       * DEX label (e.g., "Raydium", "Orca")
       */
      label?: string;

      outAmount?: string;

      outputMint?: string;
    }
  }
}

export interface V1ExecuteSwapResponse {
  lastValidBlockHeight?: number;

  /**
   * Base64-encoded transaction
   */
  swapTransaction?: string;

  /**
   * Alternative field for base64-encoded transaction
   */
  transaction?: string;
}

export interface V1ExecuteSwapParams {
  quoteResponse: Quote;

  /**
   * User's wallet public key
   */
  userPublicKey: string;

  /**
   * Enable dynamic compute unit limit
   */
  dynamicComputeUnitLimit?: boolean;

  /**
   * Priority fee in lamports
   */
  prioritizationFeeLamports?: number | null;

  /**
   * Automatically wrap/unwrap SOL
   */
  wrapUnwrapSOL?: boolean;
}

export interface V1GetQuoteParams {
  /**
   * Input amount in smallest units (lamports for SOL)
   */
  amount: number;

  /**
   * Input token mint address
   */
  inputMint: string;

  /**
   * Output token mint address
   */
  outputMint: string;

  /**
   * Return legacy transaction format
   */
  asLegacyTransaction?: boolean;

  /**
   * Only use direct routes (no intermediate tokens)
   */
  onlyDirectRoutes?: boolean;

  /**
   * Slippage tolerance in basis points (100 = 1%)
   */
  slippageBps?: number;
}

export declare namespace V1 {
  export {
    type Quote as Quote,
    type V1ExecuteSwapResponse as V1ExecuteSwapResponse,
    type V1ExecuteSwapParams as V1ExecuteSwapParams,
    type V1GetQuoteParams as V1GetQuoteParams,
  };
}
