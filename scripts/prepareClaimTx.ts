const presale = "0xc6bA5351b50eee53e09F399407AeD335F792af4C";
const tx = await bankr.tx.prepare({
  chain: "base",
  to: presale,
  data: "0x48c54b9d",
  value: "0",
  label: "Claim GEAR Tokens"
});
return { tx };
