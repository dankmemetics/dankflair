import * as dotenv from "dotenv";

import { task } from "hardhat/config";
import '@openzeppelin/hardhat-upgrades';
import '@nomiclabs/hardhat-web3';
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

export const contracts = {
    development: `0xe98eD67295F0158107e7501dd86118Daf7B12154`,
}

task("info")
  .setDescription("Prints info about the flair contract")
  .setAction(async (taskArgs, hre) => {
    const DankFlair = await hre.ethers.getContractFactory('DankFlair');
    const dankflair = await DankFlair.attach(contracts.development);

    const name = await dankflair.name();
    const symbol = await dankflair.symbol();
    const owner = await dankflair.owner();

    console.log(`Name:`, name);
    console.log(`Symbol:`, symbol);
    console.log(`Owner:`, owner);
  });

task("balance")
    .setDescription("Prints the balance of an account for the flair contract")
    .addParam('account', 'the account to check')
    .setAction(async (taskArgs, hre) => {
        const DankFlair = await hre.ethers.getContractFactory('DankFlair');
        const dankflair = await DankFlair.attach(contracts.development);

        const balance = await dankflair.balanceOf(taskArgs.account);

        console.log('Balance is', balance.toNumber());
    });

task('mint')
  .setDescription('Mint new NFT for Flair Contract')
  .addParam('account', 'the account to mint to')
  .setAction(async (taskArgs, hre) => {
    const DankFlair = await hre.ethers.getContractFactory('DankFlair');
    const dankflair = await DankFlair.attach(contracts.development);

    const mint = await dankflair.safeMint(taskArgs.account);

    console.log('Successfully minted');
    console.log(mint);
  });

task('mint-batch')
  .setDescription('Batch Mint new NFTs for Flair Contract')
  .addParam('account', 'the account to mint to')
  .addParam('amount', 'the amount of nfts to mint')
  .setAction(async (taskArgs, hre) => {
    const DankFlair = await hre.ethers.getContractFactory('DankFlair');
    const dankflair = await DankFlair.attach(contracts.development);

    const mint = await dankflair.safeMintBatch(taskArgs.account, parseInt(taskArgs.amount));

    console.log('Successfully minted');
    console.log(mint);
  });