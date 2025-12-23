// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SwapAPI from './swap/swap';
import { Swap } from './swap/swap';
import * as TokensAPI from './tokens/tokens';
import { TokenRetrieveResponse, Tokens } from './tokens/tokens';

export class Jupiter extends APIResource {
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
  swap: SwapAPI.Swap = new SwapAPI.Swap(this._client);
}

Jupiter.Tokens = Tokens;
Jupiter.Swap = Swap;

export declare namespace Jupiter {
  export { Tokens as Tokens, type TokenRetrieveResponse as TokenRetrieveResponse };

  export { Swap as Swap };
}
