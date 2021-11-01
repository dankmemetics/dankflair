const { ethers, upgrades } = require('hardhat');

const globals = {
    DankFlair: null,
    contract: null
};

describe('UUPS Upgrades Tests', () => {
    it('deploys a new contract', async () => {
        globals.DankFlair = await ethers.getContractFactory('DankFlair');
        await globals.DankFlair.deploy();
    });

    it('deploys a proxy', async () => {
        globals.contract = await upgrades.deployProxy(globals.DankFlair, { kind: 'uups' });
    });

    it('deploys the upgrade', async () => {
        await upgrades.upgradeProxy(globals.contract, globals.DankFlair);
    });

    it('gets the symbol', async () => {
        console.log(globals.DankFlair);
    });
});