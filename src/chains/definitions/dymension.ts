import { defineChain } from '../../utils/chain/defineChain.js'

export const dymension = /*#__PURE__*/ defineChain({
  id: 1100,
  name: 'Dymension',
  nativeCurrency: { name: 'Dymension', symbol: 'DYM', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://jsonrpc.dymension.nodestake.org'] },
  },
  blockExplorers: {
    default: {
      name: 'Dym FYI',
      url: 'https://dym.fyi',
    },
  },
  testnet: false,
})
