// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SolanaWalletRouterAPI from 'solana.wallet.router-api';

const client = new SolanaWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v2', () => {
  // Prism tests are disabled
  test.skip('getTokenPriceChart: only required params', async () => {
    const responsePromise = client.jupiterDatapi.v2.getTokenPriceChart('assetId', {
      baseAsset: 'baseAsset',
      candles: 0,
      from: 0,
      interval: '1_SECOND',
      to: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTokenPriceChart: required and optional params', async () => {
    const response = await client.jupiterDatapi.v2.getTokenPriceChart('assetId', {
      baseAsset: 'baseAsset',
      candles: 0,
      from: 0,
      interval: '1_SECOND',
      to: 0,
      type: 'price',
    });
  });
});
