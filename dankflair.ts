import Web3 from 'web3';
import contracts from './contracts.json';
import DankFlair from './abi/dankflair.abi.json';
import DankFusion from './abi/dankfusion.abi.json';
import GenericABI from './abi/generic.abi.json';

export const environment = process.env.ENVIRONMENT || 'development';
export const web3Provider = new Web3.providers.WebsocketProvider(process.env.PROVIDER || 'ws://localhost:7545');

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
