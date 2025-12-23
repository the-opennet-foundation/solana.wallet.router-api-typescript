# API

Types:

- <code><a href="./src/resources/api/api.ts">WalletPortfolioPeriod</a></code>
- <code><a href="./src/resources/api/api.ts">APIGetWalletInfoResponse</a></code>
- <code><a href="./src/resources/api/api.ts">APISendTransactionResponse</a></code>
- <code><a href="./src/resources/api/api.ts">APIUploadTokenMetadataResponse</a></code>

Methods:

- <code title="get /api/wallet/{address}">client.api.<a href="./src/resources/api/api.ts">getWalletInfo</a>(address) -> APIGetWalletInfoResponse</code>
- <code title="post /api/send-transaction">client.api.<a href="./src/resources/api/api.ts">sendTransaction</a>({ ...params }) -> APISendTransactionResponse</code>
- <code title="post /api/upload">client.api.<a href="./src/resources/api/api.ts">uploadTokenMetadata</a>({ ...params }) -> APIUploadTokenMetadataResponse</code>

## Tokens

Types:

- <code><a href="./src/resources/api/tokens.ts">GetTokenResponse</a></code>
- <code><a href="./src/resources/api/tokens.ts">Pool</a></code>
- <code><a href="./src/resources/api/tokens.ts">TokenListResponse</a></code>
- <code><a href="./src/resources/api/tokens.ts">TokenListResponse</a></code>

Methods:

- <code title="get /api/tokens/{id}">client.api.tokens.<a href="./src/resources/api/tokens.ts">retrieve</a>(id) -> GetTokenResponse</code>
- <code title="get /api/tokens">client.api.tokens.<a href="./src/resources/api/tokens.ts">list</a>({ ...params }) -> TokenListResponse</code>

## Solana

Types:

- <code><a href="./src/resources/api/solana.ts">SolanaGetStatusResponse</a></code>

Methods:

- <code title="get /api/solana/status">client.api.solana.<a href="./src/resources/api/solana.ts">getStatus</a>() -> SolanaGetStatusResponse</code>

## Phantom

Types:

- <code><a href="./src/resources/api/phantom.ts">MemeExploreFilter</a></code>
- <code><a href="./src/resources/api/phantom.ts">PhantomExploreMemeTokensResponse</a></code>
- <code><a href="./src/resources/api/phantom.ts">PhantomGetPerpTrendingMarketsResponse</a></code>
- <code><a href="./src/resources/api/phantom.ts">PhantomGetSimpleTokenOverviewsResponse</a></code>
- <code><a href="./src/resources/api/phantom.ts">PhantomGetSingleTokenStatsResponse</a></code>
- <code><a href="./src/resources/api/phantom.ts">PhantomSearchSplTokensResponse</a></code>

Methods:

- <code title="post /api/phantom/meme-explore">client.api.phantom.<a href="./src/resources/api/phantom.ts">exploreMemeTokens</a>({ ...params }) -> PhantomExploreMemeTokensResponse</code>
- <code title="get /api/phantom/perp-trending-markets">client.api.phantom.<a href="./src/resources/api/phantom.ts">getPerpTrendingMarkets</a>({ ...params }) -> PhantomGetPerpTrendingMarketsResponse</code>
- <code title="get /api/phantom/simple-token-overviews">client.api.phantom.<a href="./src/resources/api/phantom.ts">getSimpleTokenOverviews</a>({ ...params }) -> PhantomGetSimpleTokenOverviewsResponse</code>
- <code title="get /api/phantom/single-token-stats">client.api.phantom.<a href="./src/resources/api/phantom.ts">getSingleTokenStats</a>({ ...params }) -> PhantomGetSingleTokenStatsResponse</code>
- <code title="get /api/phantom/search-bot-spl">client.api.phantom.<a href="./src/resources/api/phantom.ts">searchSplTokens</a>({ ...params }) -> PhantomSearchSplTokensResponse</code>

# Jupiter

## Tokens

Types:

- <code><a href="./src/resources/jupiter/tokens/tokens.ts">TokenRetrieveResponse</a></code>

Methods:

- <code title="get /jupiter/tokens/v1/{mint}">client.jupiter.tokens.<a href="./src/resources/jupiter/tokens/tokens.ts">retrieve</a>(mint) -> TokenRetrieveResponse</code>

### V2

Types:

- <code><a href="./src/resources/jupiter/tokens/v2.ts">JupiterToken</a></code>
- <code><a href="./src/resources/jupiter/tokens/v2.ts">SwapStats</a></code>
- <code><a href="./src/resources/jupiter/tokens/v2.ts">TokenAudit</a></code>
- <code><a href="./src/resources/jupiter/tokens/v2.ts">V2ListRecentResponse</a></code>
- <code><a href="./src/resources/jupiter/tokens/v2.ts">V2ListTopTradedResponse</a></code>
- <code><a href="./src/resources/jupiter/tokens/v2.ts">V2ListTopTrendingResponse</a></code>

Methods:

- <code title="get /jupiter/tokens/v2/recent">client.jupiter.tokens.v2.<a href="./src/resources/jupiter/tokens/v2.ts">listRecent</a>({ ...params }) -> V2ListRecentResponse</code>
- <code title="get /jupiter/tokens/v2/toptraded/{interval}">client.jupiter.tokens.v2.<a href="./src/resources/jupiter/tokens/v2.ts">listTopTraded</a>(interval, { ...params }) -> V2ListTopTradedResponse</code>
- <code title="get /jupiter/tokens/v2/toptrending/{interval}">client.jupiter.tokens.v2.<a href="./src/resources/jupiter/tokens/v2.ts">listTopTrending</a>(interval, { ...params }) -> V2ListTopTrendingResponse</code>

## Swap

### V1

Types:

- <code><a href="./src/resources/jupiter/swap/v1.ts">Quote</a></code>
- <code><a href="./src/resources/jupiter/swap/v1.ts">V1ExecuteSwapResponse</a></code>

Methods:

- <code title="post /jupiter/swap/v1/swap">client.jupiter.swap.v1.<a href="./src/resources/jupiter/swap/v1.ts">executeSwap</a>({ ...params }) -> V1ExecuteSwapResponse</code>
- <code title="get /jupiter/swap/v1/quote">client.jupiter.swap.v1.<a href="./src/resources/jupiter/swap/v1.ts">getQuote</a>({ ...params }) -> Quote</code>

# JupiterDatapi

## V1

Types:

- <code><a href="./src/resources/jupiter-datapi/v1/v1.ts">V1GetTokenHoldersResponse</a></code>
- <code><a href="./src/resources/jupiter-datapi/v1/v1.ts">V1GetTokenTransactionsResponse</a></code>
- <code><a href="./src/resources/jupiter-datapi/v1/v1.ts">V1GetWalletPnlStatsResponse</a></code>

Methods:

- <code title="get /jupiter-datapi/v1/pools">client.jupiterDatapi.v1.<a href="./src/resources/jupiter-datapi/v1/v1.ts">getPools</a>({ ...params }) -> GetTokenResponse</code>
- <code title="get /jupiter-datapi/v1/holders/{assetId}">client.jupiterDatapi.v1.<a href="./src/resources/jupiter-datapi/v1/v1.ts">getTokenHolders</a>(assetID) -> V1GetTokenHoldersResponse</code>
- <code title="get /jupiter-datapi/v1/txs/{assetId}">client.jupiterDatapi.v1.<a href="./src/resources/jupiter-datapi/v1/v1.ts">getTokenTransactions</a>(assetID, { ...params }) -> V1GetTokenTransactionsResponse</code>
- <code title="get /jupiter-datapi/v1/pnl-stats">client.jupiterDatapi.v1.<a href="./src/resources/jupiter-datapi/v1/v1.ts">getWalletPnlStats</a>({ ...params }) -> V1GetWalletPnlStatsResponse</code>

### Assets

Types:

- <code><a href="./src/resources/jupiter-datapi/v1/assets.ts">AssetGetDescriptionResponse</a></code>

Methods:

- <code title="get /jupiter-datapi/v1/assets/{assetId}/description">client.jupiterDatapi.v1.assets.<a href="./src/resources/jupiter-datapi/v1/assets.ts">getDescription</a>(assetID) -> AssetGetDescriptionResponse</code>

## V2

Types:

- <code><a href="./src/resources/jupiter-datapi/v2.ts">V2GetTokenPriceChartResponse</a></code>

Methods:

- <code title="get /jupiter-datapi/v2/charts/{assetId}">client.jupiterDatapi.v2.<a href="./src/resources/jupiter-datapi/v2.ts">getTokenPriceChart</a>(assetID, { ...params }) -> V2GetTokenPriceChartResponse</code>

# TrenchStream

Methods:

- <code title="get /trench-stream/ws">client.trenchStream.<a href="./src/resources/trench-stream.ts">connect</a>() -> void</code>
