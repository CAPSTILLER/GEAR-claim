# GEAR Reclaim Bay

Live: **https://claim.gearup.wtf**

## Main bay — GEAR buyer reclaim
- Vault `0xc6bA5351b50eee53e09F399407AeD335F792af4C`
- GEAR `0x5880cD05605A549f1DAb01a53ca61Ee559244bD1` (6 decimals)
- `claimTokens()` for eligible contributors

## Button — Unlock from a contract
Paste a locker/claimer + token (if needed), connect the owning wallet, Scan, then Pull.

Supports:
- Locker style: `getIDs` → `locks` → `unlock` (used for CAPSTILLER CAPs locker `0xA00F…5F79` / token `0xA010…9C8`)
- Claim style: `checkContributorValidity` + `claimTokens` when present

Static Vercel deploy from repo root.
