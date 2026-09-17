# GEAR Reclaim Bay

Rusted Capstiller vault station for mechanics reclaiming **$GEAR** on Base.

Connect a wallet (or paste an address), check eligibility, then pull GEAR from the presale vault with `claimTokens()` — **no token approvals**.

## Contracts (Base)

| | |
|---|---|
| Presale vault | [`0xc6bA5351b50eee53e09F399407AeD335F792af4C`](https://basescan.org/address/0xc6bA5351b50eee53e09F399407AeD335F792af4C) |
| GEAR token | [`0x5880cD05605A549f1DAb01a53ca61Ee559244bD1`](https://basescan.org/token/0x5880cD05605A549f1DAb01a53ca61Ee559244bD1) (6 decimals) |
| Claim selector | `0x48c54b9d` · value `0` ETH |
| Chain | Base `8453` |

## Mechanic flow

1. Open the site on Base.
2. **Connect Wallet** (MetaMask / Rabby / Coinbase) or paste the contributor address.
3. Hit **Check** — shows contribution + already claimed.
4. If eligible, **Pull $GEAR From Vault** — one onchain tx, no approvals.

## Deploy (Vercel)

Static site — `index.html` at repo root.

1. Import `CAPSTILLER/GEAR-claim` in [Vercel](https://vercel.com/new).
2. Framework: **Other**. No build command. Output: leave default / `.`
3. Deploy.
4. Add domain **claim.gearup.wtf** (Cloudflare CNAME → `cname.vercel-dns.com`).

Local: `npx serve .` or `python3 -m http.server 3000`

## Files

- `index.html` — reclaim UI + wallet/RPC claim logic
- `manifest.json` — Bankr mini-app metadata
- `vercel.json` — static headers
- `scripts/` — `checkStatus` / `prepareClaimTx`
