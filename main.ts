import { base58ToWallet } from "./base58";
import { transferAll, transferSome } from "./transfer";

// (async () => {
//   transferSome("CgvBjf7Kki4CGbQfkZLnjafJisAgtrX5LYWFLGYodxW8");
// })();

// (async () => {
//   transferAll("CgvBjf7Kki4CGbQfkZLnjafJisAgtrX5LYWFLGYodxW8");
// })();

(async () => {
  await base58ToWallet();
})();
