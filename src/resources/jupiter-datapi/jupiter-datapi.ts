// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V2API from './v2';
import { V2, V2GetTokenPriceChartParams, V2GetTokenPriceChartResponse } from './v2';
import * as V1API from './v1/v1';
import {
  V1,
  V1GetPoolsParams,
  V1GetTokenHoldersResponse,
  V1GetTokenTransactionsParams,
  V1GetTokenTransactionsResponse,
  V1GetWalletPnlStatsParams,
  V1GetWalletPnlStatsResponse,
} from './v1/v1';

export class JupiterDatapi extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
  v2: V2API.V2 = new V2API.V2(this._client);
}

JupiterDatapi.V1 = V1;
JupiterDatapi.V2 = V2;

export declare namespace JupiterDatapi {
  export {
    V1 as V1,
    type V1GetTokenHoldersResponse as V1GetTokenHoldersResponse,
    type V1GetTokenTransactionsResponse as V1GetTokenTransactionsResponse,
    type V1GetWalletPnlStatsResponse as V1GetWalletPnlStatsResponse,
    type V1GetPoolsParams as V1GetPoolsParams,
    type V1GetTokenTransactionsParams as V1GetTokenTransactionsParams,
    type V1GetWalletPnlStatsParams as V1GetWalletPnlStatsParams,
  };

  export {
    V2 as V2,
    type V2GetTokenPriceChartResponse as V2GetTokenPriceChartResponse,
    type V2GetTokenPriceChartParams as V2GetTokenPriceChartParams,
  };
}
