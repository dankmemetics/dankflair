import Web3 from 'web3';
import DankFlair from './solidity/build/contracts/DankFlair.json';
import DankFusion from './solidity/build/contracts/DankFusion.json';

export const web3Provider = new Web3.providers.WebsocketProvider(process.env.PROVIDER || 'ws://localhost:7545');

export const ContractAddress = `0x8DbBdAF769131beDd20102815f259d2C3D297E91`;
export const ContractABI = DankFlair.abi;

export const FusionAddress = ``;
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