// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Assets extends APIResource {
  /**
   * Fetches the description/about text for a token.
   */
  getDescription(assetID: string, options?: RequestOptions): APIPromise<AssetGetDescriptionResponse> {
    return this._client.get(path`/jupiter-datapi/v1/assets/${assetID}/description`, options);
  }
}

export interface AssetGetDescriptionResponse {
  description?: string | null;
}

export declare namespace Assets {
  export { type AssetGetDescriptionResponse as AssetGetDescriptionResponse };
}
