require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = 'https://api.avax.network/ext/bc/C/rpc'
const NEXT_PUBLIC_PRIVATE_KEY =
  '5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a'
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
