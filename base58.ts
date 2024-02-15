import bs58 from "bs58";
//import * as prompt from "prompt-sync";

export function walletToBase58() {
  const prompt = require("prompt-sync")();
  const walletStr = prompt("Enter your wallet address: ");
  const wallet = walletStr.replace("[", "").replace("]", "").split(",");
  const walletBase58 = bs58.encode(wallet);
  console.log(walletBase58);
  return walletBase58;
}

export function base58ToWallet() {
  const prompt = require("prompt-sync")();
  const walletBase58 = prompt("Enter your Base58 wallet address: ");
  const wallet = bs58.decode(walletBase58);
  console.log(wallet);
  return wallet;
}
