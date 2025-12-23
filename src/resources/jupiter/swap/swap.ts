// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V1API from './v1';
import { Quote, V1, V1ExecuteSwapParams, V1ExecuteSwapResponse, V1GetQuoteParams } from './v1';

export class Swap extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Swap.V1 = V1;

export declare namespace Swap {
  export {
    V1 as V1,
    type Quote as Quote,
    type V1ExecuteSwapResponse as V1ExecuteSwapResponse,
    type V1ExecuteSwapParams as V1ExecuteSwapParams,
    type V1GetQuoteParams as V1GetQuoteParams,
  };
}
