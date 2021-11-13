import { join } from 'path';
import { read, write } from 'fs-jetpack';
import { ethers, upgrades } from "hardhat";

async function main() {
  const network = process.env.HARDHAT_NETWORK as string;

  console.log('Deploying to', network);

  const DankFlair = await ethers.getContractFactory("DankFlair");
  const dankflair = await upgrades.deployProxy(DankFlair);

  await dankflair.deployed();

  console.log("DankFlair deployed to:", dankflair.address);

  const filePath = join(process.cwd(), '..', 'contracts.json');
  const file = JSON.parse(read(filePath) as string);

  file[network].dankflair = dankflair.address;
  write(filePath, JSON.stringify(file, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
