// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SolanaWalletRouterAPI from 'solana-wallet-router-api';

const client = new SolanaWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // Prism tests are disabled
  test.skip('getPools: only required params', async () => {
    const responsePromise = client.jupiterDatapi.v1.getPools({ assetIds: 'assetIds' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPools: required and optional params', async () => {
    const response = await client.jupiterDatapi.v1.getPools({ assetIds: 'assetIds' });
  });

  // Prism tests are disabled
  test.skip('getTokenHolders', async () => {
    const responsePromise = client.jupiterDatapi.v1.getTokenHolders('assetId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTokenTransactions', async () => {
    const responsePromise = client.jupiterDatapi.v1.getTokenTransactions('assetId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTokenTransactions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.jupiterDatapi.v1.getTokenTransactions(
        'assetId',
        {
          fromTs: '2019-12-27T18:11:19.117Z',
          limit: 0,
          offset: 'offset',
          offsetTs: '2019-12-27T18:11:19.117Z',
          toTs: '2019-12-27T18:11:19.117Z',
          traderAddress: 'traderAddress',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SolanaWalletRouterAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getWalletPnlStats: only required params', async () => {
    const responsePromise = client.jupiterDatapi.v1.getWalletPnlStats({ address: 'address' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getWalletPnlStats: required and optional params', async () => {
    const response = await client.jupiterDatapi.v1.getWalletPnlStats({ address: 'address' });
  });
});
