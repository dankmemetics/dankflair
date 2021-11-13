import * as dotenv from "dotenv";

import { DankFlair, DankTest } from "./typechain";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { types, task } from "hardhat/config";
import '@openzeppelin/hardhat-upgrades';
import '@nomiclabs/hardhat-web3';
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import contracts from '../contracts.json';

dotenv.config();


export async function configureContract(taskArgs: any, hre: HardhatRuntimeEnvironment): Promise<DankFlair | DankTest> {
  const testContract = taskArgs.test;
  const network: string = hre.network.name;
  
  const address = testContract ? contracts[network].danktest : contracts[network].dankflair;
  const factory = testContract ? hre.ethers.getContractFactory('DankTest') : hre.ethers.getContractFactory('DankFlair'); 

  const Contract = await factory;
  const contract = await Contract.attach(address);

  return contract;
}

task("info")
  .setDescription("Prints info about the flair contract")
  .addFlag('test', 'reference the test NFT contract instead')
  .setAction(async (taskArgs, hre) => {
    const contract = await configureContract(taskArgs, hre);
    const name = await contract.name();
    const symbol = await contract.symbol();
    const owner = await contract.owner();
    console.log(`Name:`, name);
    console.log(`Symbol:`, symbol);
    console.log(`Owner:`, owner);
  });

task("balance")
  .setDescription("Prints the balance of an account for the flair contract")
  .addFlag('test', 'reference the test NFT contract instead')
  .addParam('account', 'the account to check')
  .setAction(async (taskArgs, hre) => {
    const contract = await configureContract(taskArgs, hre);
    const balance = await contract.balanceOf(taskArgs.account);
    console.log('Balance is', balance.toNumber());
  });

task('mint')
  .setDescription('Mint new NFT for Flair Contract')
  .addFlag('test', 'reference the test NFT contract instead')
  .addParam('account', 'the account to mint to')
  .setAction(async (taskArgs, hre) => {
    const contract = await configureContract(taskArgs, hre);
    const mint = await contract.safeMint(taskArgs.account);
    console.log('Successfully minted');
    console.log(mint);
  });

task('mint-batch')
  .setDescription('Batch Mint new NFTs for Flair Contract')
  .addFlag('test', 'reference the test NFT contract instead')
  .addParam('account', 'the account to mint to')
  .addParam('amount', 'the amount of nfts to mint', 1, types.int)
  .setAction(async (taskArgs, hre) => {
    const contract = await configureContract(taskArgs, hre);
    const mint = await contract.safeMintBatch(taskArgs.account, taskArgs.amount);
    console.log('Successfully batch minted');
    console.log(mint);
  });