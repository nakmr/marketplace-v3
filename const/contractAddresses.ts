/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Sepolia } from "@thirdweb-dev/chains";
export const NETWORK = Sepolia;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xf717c7998f1C15451738371c50557A45748e03cf";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  // "0x67b40fC017863743C520cDAec1B367BE1FD721f0";
  // "0x107597c6AB4278402F5806132ff6d11cEbb3C4b4";
  // "0x6a989c41Bbf0Bae52BDE4f97575d6caB5C65c132"; work!
  "0xa030481654d063E06E17F29865EF40C45Bb1AE6b";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://mumbai.polygonscan.com";
