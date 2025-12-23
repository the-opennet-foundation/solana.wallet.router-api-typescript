// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SolanaWalletRouterAPI from '@paxeer-network/solana-wallet-router-api';

const client = new SolanaWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v2', () => {
  // Prism tests are disabled
  test.skip('listRecent', async () => {
    const responsePromise = client.jupiter.tokens.v2.listRecent();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listRecent: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.jupiter.tokens.v2.listRecent({ limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SolanaWalletRouterAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listTopTraded', async () => {
    const responsePromise = client.jupiter.tokens.v2.listTopTraded('5m');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listTopTraded: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.jupiter.tokens.v2.listTopTraded('5m', { limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SolanaWalletRouterAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listTopTrending', async () => {
    const responsePromise = client.jupiter.tokens.v2.listTopTrending('5m');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listTopTrending: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.jupiter.tokens.v2.listTopTrending('5m', { limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SolanaWalletRouterAPI.NotFoundError);
  });
});
