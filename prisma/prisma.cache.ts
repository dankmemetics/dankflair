import 'colors';
import Web3 from 'web3';
import { config } from 'dotenv';
import { PrismaClient } from "@prisma/client";
import { ConfigureContract, ConfigureFusion } from '../dankflair';

config();

export const prisma = new PrismaClient();

export const network = 'development'

export const development = process.env.ETH_DEV;
export const rinkeby = process.env.ETH_RINKEBY;
export const mainnet = process.env.ETH_MAINNET;

export const web3Provider = new Web3.providers.WebsocketProvider(development);
export const web3 = new Web3(web3Provider);

export const contract = ConfigureContract(web3, web3Provider);
export const fusionContract = ConfigureFusion(web3, web3Provider);

(
    async () => {
        const owner = await contract.methods.owner().call();
        console.log(`Querying DankFlair Contract by`, owner);

        contract.events.Transfer({
            filter: { value: [] },
            fromBlock: 0,
        })
        .on('data', async e => {
            console.log(`DankFlair: Transfer`);
            const owner = e.returnValues.to as string;
            const id = parseInt(e.returnValues.tokenId);
            console.log(`NFT #${id} now owned by ${owner}`);

            await prisma.dankFlair.upsert({
                where: { id },
                create: { id, owner },
                update: { owner },
            })
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
    }
)();