#!/bin/bash
set -v

# Change to either
# development
# rinkeby
# mainnet
NETWORK=rinkeby

# Set to desired address
MINT_AUTHORITY=0x311544BD01996727084951af2154E64fD5006537

npx hardhat run scripts/deploy.ts --network $NETWORK
npx hardhat run scripts/deploy-test.ts --network $NETWORK
npx hardhat run scripts/deploy-fusion.ts --network $NETWORK

npx hardhat mint-batch --account $MINT_AUTHORITY --amount 25 --network $NETWORK
npx hardhat mint-batch --account $MINT_AUTHORITY --amount 5 --network $NETWORK --test