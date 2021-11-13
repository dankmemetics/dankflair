import { join } from 'path';
import { read, write } from 'fs-jetpack';
import { ethers, upgrades } from "hardhat";

async function main() {
  const network = process.env.HARDHAT_NETWORK as string;

  const filePath = join(process.cwd(), '..', 'contracts.json');
  const file = JSON.parse(read(filePath) as string);

  const dankAddress = file[network].dankflair;
  
  const DankFusion = await ethers.getContractFactory("DankFusion");
  const dankfusion = await upgrades.deployProxy(DankFusion, [dankAddress]);
  await dankfusion.deployed();

  const upgrade = await upgrades.upgradeProxy(dankfusion.address, DankFusion);

  console.log("DankFusion deployed to:", dankfusion.address);

  file[network].dankfusion = dankfusion.address;
  write(filePath, JSON.stringify(file, null, 2));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
