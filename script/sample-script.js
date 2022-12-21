import { ethers } from "ethers";
require("dotenv").config();

const pairABI = require("../abi/example-ABI.json");
const PRIVKEY_1 = process.env.PRIVKEY_1;
const ANKR_URL = process.env.ANKR_URL;

// Use this function when the network is crowded
const wait = (seconds) => {
  const miliseconds = seconds * 1000;
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
};

// Let's first interact with the PCS Factory
// USDT-IDRT LP Contract
const addresses = {
  pairAddress: "0x0ca25FbBDbab2AbF9892C35E5c0cAF04172F175D",
};

const provider = ethers.providers.JsonRpcProvider(`${ANKR_URL}`);