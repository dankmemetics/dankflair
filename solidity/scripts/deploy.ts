import { ethers, upgrades } from "hardhat";

async function main() {
  // We get the contract to deploy
  const DankFlair = await ethers.getContractFactory("DankFlair");
  const dankflair = await upgrades.deployProxy(DankFlair);

  await dankflair.deployed();

  console.log("DankFlair deployed to:", dankflair.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
