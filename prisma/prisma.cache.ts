import 'colors';
import Web3 from 'web3';
import { config } from 'dotenv';
import { PrismaClient } from "@prisma/client";
import { ConfigureContract, ConfigureFusion } from '../dankflair';

config();

export const prisma = new PrismaClient();

export const network = process.env.NETWORK || 'development';

export const networks = {
    development: process.env.ETH_DEV,
    rinkeby: process.env.ETH_RINKEBY,
    mainnet: process.env.ETH_MAINNET,
}

export const development = process.env.ETH_DEV;
export const rinkeby = process.env.ETH_RINKEBY;
export const mainnet = process.env.ETH_MAINNET;

const provider = networks[network] || `ws://localhost:7545`;

console.log(`Connecting to`, provider);

export const web3Provider = new Web3.providers.WebsocketProvider(provider);
export const web3 = new Web3(web3Provider);

export const contract = ConfigureContract(web3, web3Provider);
export const fusionContract = ConfigureFusion(web3, web3Provider);

let queue = [];

export async function queueSync() {
    if (queue.length > 0) {
        const items = Object.assign([], queue);
        queue = [];

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            await item;
        }
        console.log(`Executed ${items.length} items in queue, clearing queue`);
        
    }
}

(
    async () => {
        setInterval(() => queueSync(), 5000);

        const balance = await contract.methods.ownerOf(0).call();
        console.log('balance', balance);

        contract.events.Transfer({
            filter: { value: [] },
            fromBlock: 0,
        })
        .on('data', async e => {
            console.log(`DankFlair: Transfer`);
            const owner = e.returnValues.to as string;
            const id = parseInt(e.returnValues.tokenId);
            console.log(`NFT #${id} now owned by ${owner}`);

            queue.push(
                prisma.dankFlair.upsert({
                    where: { id },
                    create: { id, owner },
                    update: { owner },
                })
            );
        })
        .on('changed', e => {
            console.log('NFT has been changed', e);
        })
        .on('error', err => {
            console.error(err);
        })
        .on('connected', e => {
            console.log('Subscribed to DankFlair Contract');
        });

        fusionContract.events.Transfer({
            filter: { value: [] },
            fromBlock: 0,
        })
        .on('data', async e => {
            console.log(`DankFusion: Transfer`);
            const owner = e.returnValues.to as string;
            const id = parseInt(e.returnValues.tokenId);
            const info = await fusionContract.methods.fusionInfo(id).call();
            const uuid = web3.utils.hexToString(info['3']);
            console.log(`Fusion NFT #${id} now owned by ${owner}, UUID(${uuid})`);

            queue.push(
                prisma.dankFusion.update({
                    where: { id: uuid },
                    data: { owner, fusionId: id },
                })
            )
        })
        .on('changed', e => {
            console.log('Fusion NFT has been changed', e);
        })
        .on('error', err => {
            console.error(err);
        })
        .on('connected', e => {
            console.log('Subscribed to DankFusion Contract');
        });
    }
)();