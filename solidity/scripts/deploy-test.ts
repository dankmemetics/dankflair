import { ethers, upgrades } from "hardhat";

async function main() {
  // We get the contract to deploy
  const DankTest = await ethers.getContractFactory("DankTest");
  const danktest = await upgrades.deployProxy(DankTest);

  await danktest.deployed();

  console.log("Dank Test NFT deployed to:", danktest.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
