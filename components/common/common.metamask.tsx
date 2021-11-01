import Web3 from 'web3';
import { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ContractABI, ContractAddress } from '../../dankflair';
import { setAccounts } from '../../redux/redux.profile';
import { setContract } from '../../redux/redux.contract';

declare const ethereum;
declare let web3;

export const MetamaskStyles = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    height: 100%;
    padding: 0 15px 5px 15px;
    cursor: pointer;

    @media(max-width: 1158px) {
        display: none;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    img {
        height: 24px;
        margin: 0 10px 0 0;
    }
`;

export interface MetamaskI {
    accounts: string[];
    setAccounts(payload: string[]): void;
    setContract(payload: any): void;
}

export function MetamaskComponent({ accounts, setAccounts, setContract }: MetamaskI) {
    useLayoutEffect(() => {
        (async () => {
            if (typeof ethereum !== 'undefined') {
                web3 = new Web3(ethereum);
                const web3Accounts = await web3.eth.getAccounts();
                setAccounts(web3Accounts);

                try {
                    const Contract = new web3.eth.Contract(ContractABI, ContractAddress);
                    Contract.setProvider(ethereum);
                    setContract(Contract);
    
                    console.log('Contract', Contract);
    
                    const result = await Contract.methods.owner().call();
                    console.log(result);
                } catch (error) {
                    console.error(error);
                }
                
                ethereum.on('accountsChanged', async error => {
                    const web3Accounts = await web3.eth.getAccounts();
                    setAccounts(web3Accounts);
                });
            }
        })();
    }, []);

    return(
        <MetamaskStyles onClick={async e => {
                try {
                    const web3Accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    
                    if (web3Accounts && web3Accounts.length > 0) {
                        setAccounts(web3Accounts);
                    }
                } catch (error) {
                    console.error(error);
                }
          }}>
            <img src="/images/metamask.png"/>
            {
            accounts.length > 0 ?
                `${accounts[0].slice(0,3)}...${accounts[0].slice(accounts[0].length - 3, accounts[0].length)}`
                :
                'Connect'
            }
        </MetamaskStyles>
    )
}

export const MetamaskState = state => ({
    accounts: state.profile.accounts,
});

export const Metamask = connect(MetamaskState, { setAccounts, setContract })(MetamaskComponent);