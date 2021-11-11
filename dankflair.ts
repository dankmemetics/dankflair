import Web3 from 'web3';
import DankFlair from './abi/dankflair.abi.json';
import DankFusion from './abi/dankfusion.abi.json';

export const web3Provider = new Web3.providers.WebsocketProvider(process.env.PROVIDER || 'ws://localhost:7545');

export const ContractAddress = process.env.DANKCONTRACT || `0xe98eD67295F0158107e7501dd86118Daf7B12154`;
export const ContractABI = DankFlair.abi;

export const FusionAddress = process.env.FUSIONCONTRACT || ``;
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