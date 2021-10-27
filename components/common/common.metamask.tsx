import styled from 'styled-components';
import { connect } from 'react-redux';
import { setAccount } from '../../redux/redux.profile';

declare const ethereum;

export const MetamaskStyles = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    height: 100%;
    padding: 0 15px 5px 15px;
    cursor: pointer;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    img {
        height: 24px;
        margin: 0 10px 0 0;
    }
`;

export interface MetamaskI {
    account: string;
    setAccount(payload: string): void;
}

export function MetamaskComponent({ account, setAccount }: MetamaskI) {
    return(
        <MetamaskStyles onClick={async e => {
              try {
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                console.log(accounts);

                if (accounts && accounts.length > 0) {
                  const account = accounts[0];
                  setAccount(account);
                }
              } catch (error) {
                console.error(error);
              }
          }}>
            <img src="/images/metamask.png"/>
            {
            account ?
                `${account.slice(0,3)}...${account.slice(account.length - 3, account.length)}`
                :
                'Connect'
            }
        </MetamaskStyles>
    )
}

export const MetamaskState = state => ({
    account: state.profile.account,
});

export const Metamask = connect(MetamaskState, { setAccount })(MetamaskComponent);