import * as dotenv from "dotenv";

import { DankFusion } from "./typechain";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { task } from "hardhat/config";
import '@openzeppelin/hardhat-upgrades';
import '@nomiclabs/hardhat-web3';
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import contracts from '../contracts.json';

dotenv.config();

export async function configureContract(taskArgs: any, hre: HardhatRuntimeEnvironment): Promise<DankFusion> {
  const network: string = hre.network.name;
  const address = contracts[network].dankfusion;

  const Contract = await hre.ethers.getContractFactory('DankFusion');
  const contract = await Contract.attach(address);

  return contract as DankFusion;
}

task("fusion-info")
  .setDescription("Prints info about the Fusion contract")
  .setAction(async (taskArgs, hre) => {
    const contract = await configureContract(taskArgs, hre);
    const name = await contract.name();
    const symbol = await contract.symbol();
    const owner = await contract.owner();
    console.log(`Name:`, name);
    console.log(`Symbol:`, symbol);
    console.log(`Owner:`, owner);
  });

task("fusion-balance")
  .setDescription("Prints the balance of an account for the flair contract")
  .addParam('account', 'the account to check')
  .setAction(async (taskArgs, hre) => {
    const contract = await configureContract(taskArgs, hre);
    const balance = await contract.balanceOf(taskArgs.account);
    console.log('Balance is', balance.toNumber());
  });

task('fusion-mint')
  .setDescription('Mint new NFT for Flair Contract')
  .addParam('account', 'the account to mint to')
  .setAction(async (taskArgs, hre) => {
    const contract = await configureContract(taskArgs, hre);
    // const mint = await contract.safeMint(taskArgs.account);
    // console.log('Successfully minted');
    // console.log(mint);
  });