const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "",
  creators: [],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "Block" },
      { name: "Bass" },
      { name: "Drums" },
      { name: "LeftFill" },
      { name: "Pad" },
      { name: "RightFill" },
    ],
  },
  {
    growEditionSizeTo: 40,
    layersOrder: [
      { name: "Block" },
      { name: "Bass" },
      { name: "Drums" },
      { name: "Pad" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  baseUri,
  description,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  namePrefix,
  network,
  solanaMetadata,
};
