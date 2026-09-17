# Capstiller Claim / Unlock Bay

Live: **https://claim.gearup.wtf**

Two stations on one rusted UI:

## 1. GEAR Reclaim (buyer claim)
- Vault `0xc6bA5351b50eee53e09F399407AeD335F792af4C`
- Token GEAR `0x5880cD05605A549f1DAb01a53ca61Ee559244bD1` (6 decimals)
- `claimTokens()` — for presale contributors only

## 2. CAPs Unlock (locker — not the same as GEAR claim)
- Locker `0xA00F87E9D5fA643bd1061BC497D02eFF2E2d5F79`
- Token CAPSTILLER (CAPs) `0xA0108286307E34e9Ecea184fd08F2d022A12a9C8` (18 decimals)
- Reads `getIDs(user, token)` + `locks(token, user, id)`
- Pulls with `unlock(user, token, id)` (`0x59508f8f`) when unlock time has passed
- Capstiller lock id `1`: 128M CAPs, unlockable since 2025-07-14 UTC

Static Vercel deploy from repo root.
