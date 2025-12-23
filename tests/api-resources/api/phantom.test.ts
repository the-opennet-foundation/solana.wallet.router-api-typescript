// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SolanaWalletRouterAPI from '@paxeer-network/solana-wallet-router-api';

const client = new SolanaWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource phantom', () => {
  // Prism tests are disabled
  test.skip('exploreMemeTokens', async () => {
    const responsePromise = client.api.phantom.exploreMemeTokens();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('exploreMemeTokens: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.phantom.exploreMemeTokens(
        {
          aboutToGraduateFilter: {
            platformsFilter: [
              'Pumpfun',
              'Bonk',
              'Raydium Launch Labs',
              'Believe',
              'Meteora DBC',
              'MoonShot',
              'Jupiter Studio',
            ],
          },
          graduatedFilter: {
            platformsFilter: [
              'Pumpfun',
              'Bonk',
              'Raydium Launch Labs',
              'Believe',
              'Meteora DBC',
              'MoonShot',
              'Jupiter Studio',
            ],
          },
          newFilter: {
            platformsFilter: [
              'Pumpfun',
              'Bonk',
              'Raydium Launch Labs',
              'Believe',
              'Meteora DBC',
              'MoonShot',
              'Jupiter Studio',
            ],
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SolanaWalletRouterAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getPerpTrendingMarkets', async () => {
    const responsePromise = client.api.phantom.getPerpTrendingMarkets();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPerpTrendingMarkets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.phantom.getPerpTrendingMarkets(
        { chainId: 'chainId', limit: 'limit', sortBy: 'volume', sortDirection: 'asc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SolanaWalletRouterAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getSimpleTokenOverviews: only required params', async () => {
    const responsePromise = client.api.phantom.getSimpleTokenOverviews({ tokenAddresses: 'tokenAddresses' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getSimpleTokenOverviews: required and optional params', async () => {
    const response = await client.api.phantom.getSimpleTokenOverviews({ tokenAddresses: 'tokenAddresses' });
  });

  // Prism tests are disabled
  test.skip('getSingleTokenStats: only required params', async () => {
    const responsePromise = client.api.phantom.getSingleTokenStats({ tokenAddress: 'tokenAddress' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getSingleTokenStats: required and optional params', async () => {
    const response = await client.api.phantom.getSingleTokenStats({ tokenAddress: 'tokenAddress' });
  });

  // Prism tests are disabled
  test.skip('searchSplTokens', async () => {
    const responsePromise = client.api.phantom.searchSplTokens();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('searchSplTokens: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.phantom.searchSplTokens(
        {
          charts: 'true',
          page: 'page',
          query: 'query',
          sniper: 'true',
          sortBy: 'volume-desc',
          timeRange: '5m',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SolanaWalletRouterAPI.NotFoundError);
  });
});
