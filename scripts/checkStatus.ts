const presale = "0xc6bA5351b50eee53e09F399407AeD335F792af4C";
const gearToken = "0x5880cD05605A549f1DAb01a53ca61Ee559244bD1";
const target = (typeof args !== "undefined" && args && args.address) ? args.address.trim().toLowerCase() : "";

if (!target || !target.startsWith("0x") || target.length !== 42) {
  return { error: "Invalid Ethereum address format" };
}

const [validity, claimed, gearBal] = await Promise.all([
  bankr.chain.readContract({
    chain: "base",
    address: presale,
    abi: [{ name: "checkContributorValidity", type: "function", stateMutability: "view", inputs: [{ name: "", type: "address" }], outputs: [{ name: "", type: "uint256" }] }],
    functionName: "checkContributorValidity",
    args: [target]
  }),
  bankr.chain.readContract({
    chain: "base",
    address: presale,
    abi: [{ name: "contributorsClaim", type: "function", stateMutability: "view", inputs: [{ name: "", type: "address" }], outputs: [{ name: "", type: "uint256" }] }],
    functionName: "contributorsClaim",
    args: [target]
  }),
  bankr.chain.readContract({
    chain: "base",
    address: gearToken,
    abi: [{ name: "balanceOf", type: "function", stateMutability: "view", inputs: [{ name: "", type: "address" }], outputs: [{ name: "", type: "uint256" }] }],
    functionName: "balanceOf",
    args: [presale]
  })
]);

const validityWei = BigInt(validity.toString());
const claimedTokens = BigInt(claimed.toString());
const canClaim = validityWei > 0n;

return {
  targetAddress: target,
  canClaim,
  contributionWei: validityWei.toString(),
  contributionEth: (Number(validityWei) / 1e18).toFixed(4),
  alreadyClaimedRaw: claimedTokens.toString(),
  alreadyClaimedTokens: (Number(claimedTokens) / 1e6).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 }),
  vaultRemainingGear: (Number(gearBal) / 1e6).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 }),
  claimContract: presale,
  tokenContract: gearToken
};