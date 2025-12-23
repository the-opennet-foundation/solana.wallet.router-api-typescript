// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SolanaWalletRouterAPI from 'solana-wallet-router-api';

const client = new SolanaWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource api', () => {
  // Prism tests are disabled
  test.skip('getWalletInfo', async () => {
    const responsePromise = client.api.getWalletInfo('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendTransaction: only required params', async () => {
    const responsePromise = client.api.sendTransaction({ signedTransaction: 'signedTransaction' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendTransaction: required and optional params', async () => {
    const response = await client.api.sendTransaction({
      signedTransaction: 'signedTransaction',
      additionalSigners: [{}],
    });
  });

  // Prism tests are disabled
  test.skip('uploadTokenMetadata: only required params', async () => {
    const responsePromise = client.api.uploadTokenMetadata({
      mint: 'mint',
      tokenLogo: 'data:image/png;base64,iVBORw0KGgo...',
      tokenName: 'My Token',
      tokenSymbol: 'MTK',
      userWallet: 'userWallet',
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
  test.skip('uploadTokenMetadata: required and optional params', async () => {
    const response = await client.api.uploadTokenMetadata({
      mint: 'mint',
      tokenLogo: 'data:image/png;base64,iVBORw0KGgo...',
      tokenName: 'My Token',
      tokenSymbol: 'MTK',
      userWallet: 'userWallet',
    });
  });
});
