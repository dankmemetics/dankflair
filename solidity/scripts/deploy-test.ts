import { join } from 'path';
import { read, write } from 'fs-jetpack';
import { ethers, upgrades } from "hardhat";

async function main() {
  const network = process.env.HARDHAT_NETWORK as string;

  const DankTest = await ethers.getContractFactory("DankTest");
  const danktest = await upgrades.deployProxy(DankTest);

  await danktest.deployed();

  console.log("Dank Test NFT deployed to:", danktest.address);

  const filePath = join(process.cwd(), '..', 'contracts.json');
  const file = JSON.parse(read(filePath) as string);

  file[network].danktest = danktest.address;
  write(filePath, JSON.stringify(file, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
