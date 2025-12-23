// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SolanaWalletRouterAPI from 'solana.wallet.router-api';

const client = new SolanaWalletRouterAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // Prism tests are disabled
  test.skip('executeSwap: only required params', async () => {
    const responsePromise = client.jupiter.swap.v1.executeSwap({
      quoteResponse: {
        inAmount: 'inAmount',
        inputMint: 'inputMint',
        outAmount: 'outAmount',
        outputMint: 'outputMint',
      },
      userPublicKey: 'userPublicKey',
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
  test.skip('executeSwap: required and optional params', async () => {
    const response = await client.jupiter.swap.v1.executeSwap({
      quoteResponse: {
        inAmount: 'inAmount',
        inputMint: 'inputMint',
        outAmount: 'outAmount',
        outputMint: 'outputMint',
        otherAmountThreshold: 'otherAmountThreshold',
        priceImpactPct: 'priceImpactPct',
        routePlan: [
          {
            percent: 0,
            swapInfo: {
              ammKey: 'ammKey',
              feeAmount: 'feeAmount',
              feeMint: 'feeMint',
              inAmount: 'inAmount',
              inputMint: 'inputMint',
              label: 'label',
              outAmount: 'outAmount',
              outputMint: 'outputMint',
            },
          },
        ],
        slippageBps: 0,
        swapMode: 'ExactIn',
      },
      userPublicKey: 'userPublicKey',
      dynamicComputeUnitLimit: true,
      prioritizationFeeLamports: 0,
      wrapUnwrapSOL: true,
    });
  });

  // Prism tests are disabled
  test.skip('getQuote: only required params', async () => {
    const responsePromise = client.jupiter.swap.v1.getQuote({
      amount: 0,
      inputMint: 'inputMint',
      outputMint: 'outputMint',
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
  test.skip('getQuote: required and optional params', async () => {
    const response = await client.jupiter.swap.v1.getQuote({
      amount: 0,
      inputMint: 'inputMint',
      outputMint: 'outputMint',
      asLegacyTransaction: true,
      onlyDirectRoutes: true,
      slippageBps: 0,
    });
  });
});
