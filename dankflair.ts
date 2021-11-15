import Web3 from 'web3';
import { OpenSeaPort, Network } from 'opensea-js';
import contracts from './contracts.json';
import DankFlair from './abi/dankflair.abi.json';
import DankFusion from './abi/dankfusion.abi.json';
import GenericABI from './abi/generic.abi.json';

export const environment = process.env.ENVIRONMENT || 'rinkeby';
export const web3Provider = new Web3.providers.WebsocketProvider(process.env.PROVIDER || 'wss://rinkeby.infura.io/ws/v3/a98fb9412dcc41048e32586addfe3d29');

export const auctionUrl = environment === 'rinkeby' ? `https://testnets.opensea.io/collection/dankflair` : `https://opensea.io/collection/dankflair`
export const openseaUrl = environment === 'rinkeby' ? 'https://testnets.opensea.io' : 'https://opensea.io';

export const seaport = new OpenSeaPort(web3Provider, {
    networkName: process.env.ENVIRONMENT === 'mainnet' ? Network.Main : Network.Rinkeby,
});

export const ContractAddress = contracts[environment].dankflair;
export const ContractABI = DankFlair.abi;

export const FusionAddress = contracts[environment].dankfusion;
export const FusionABI = DankFusion.abi;

export function ConfigureContract(web3, provider) {
    const Contract = new web3.eth.Contract(ContractABI, ContractAddress);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureFusion(web3, provider) {
    const Contract = new web3.eth.Contract(FusionABI, FusionAddress);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureCustomContract(web3, provider, address) {
    const Contract = new web3.eth.Contract(GenericABI, address);
    Contract.setProvider(provider);

    return Contract;
}
