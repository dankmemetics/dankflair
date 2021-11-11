import { ethers, upgrades } from "hardhat";

async function main() {
  // We get the contract to deploy
  const DankFusion = await ethers.getContractFactory("DankFusion");

  // Make sure to update the address based on which network.
  const dankfusion = await upgrades.deployProxy(DankFusion, ["0xe98eD67295F0158107e7501dd86118Daf7B12154"]);

  await dankfusion.deployed();

  console.log("DankFusion deployed to:", dankfusion.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
