import { get } from 'superagent';
import Link from 'next/link';
import Web3 from 'web3';
import { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ConfigureContract } from '../../dankflair';
import { setAccounts, setDankflair, setDankfusion } from '../../redux/redux.profile';
import { setContract } from '../../redux/redux.contract';

declare const window;
declare const ethereum;
declare let web3;

export const MetamaskStyles = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    height: 100%;
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

    a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        color: white;
        text-decoration: none;
        font-weight: bold;
        padding: 0 15px 5px 15px;
    }
`;

export interface MetamaskI {
    accounts: string[];
    setAccounts(payload: string[]): void;
    setContract(payload: any): void;
    setDankflair(payload: any): void;
    setDankfusion(payload: any): void;
}

export function MetamaskComponent({ accounts, setAccounts, setContract, setDankflair, setDankfusion }: MetamaskI) {
    useLayoutEffect(() => {
        (async () => {
            if (typeof ethereum !== 'undefined') {
                try {
                    web3 = new Web3(ethereum);
                    window.web3 = web3;
                    const web3Accounts = await web3.eth.getAccounts();
                    setAccounts(web3Accounts);

                    const Contract = ConfigureContract(web3, ethereum);
                    setContract(Contract);

                    const account = web3Accounts[0];
                    const payload = await get(`/api/profile/${account}`);

                    setDankflair(payload.body);
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
            {
                accounts.length > 0 ?
                <Link href="/profile">
                    <a>
                        <img src="/images/metamask.png"/>
                        {accounts[0].slice(0,5)}...{accounts[0].slice(accounts[0].length - 3, accounts[0].length)}
                    </a>
                    
                </Link>
                :
                <a>
                    <img src="/images/metamask.png"/>
                    Connect
                </a>
            }
        </MetamaskStyles>
    )
}

export const MetamaskState = state => ({
    accounts: state.profile.accounts,
});

export const Metamask = connect(MetamaskState, { setAccounts, setContract, setDankflair, setDankfusion })(MetamaskComponent);