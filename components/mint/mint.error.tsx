import { connect } from 'react-redux';
import styled from 'styled-components';
import { Error } from '../brand/brand.colors';
import { HiOutlineExclamation } from 'react-icons/hi';

export const MintErrorStyles = styled.div`
    position: fixed;
    left: 0;
    z-index: 1112;
    width: 100%;

    bottom: -320px;
    &.active {
        bottom: 0;
    }

    div.error-wrap {
        background: ${Error};
        width: 100%;
        max-width: 1128px;
        margin: auto;
        padding: 15px 15px 30px 15px;
        border-radius: 9px 9px 0 0;
        box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.25);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icon {
            margin: 15px;
            font-size: 42px;
        }

        h3 {
            font-size: 24px;
            font-family: Arvo;
            letter-spacing: 1px;
        }
    }
`;

export interface MintErrorI {
    mintError: number;
}

export function MintErrorComponent({ mintError }: MintErrorI) {
    return(
        <MintErrorStyles className={mintError > 0 ? 'active' : ''}>
            <div className="error-wrap">
                <HiOutlineExclamation className="icon"/>
                <h3>
                    {mintError === 1 ? `There was an error loading your NFT URL` : ``}
                    {mintError === 2 ? `You do not own this NFT` : ``}
                    {mintError === 3 ? `There was an error minting the new NFT` : ``}
                </h3>
            </div>
        </MintErrorStyles>
    )
}

export const MintErrorState = state => ({
    mintError: state.mint.mintError,
})

export const MintError = connect(MintErrorState)(MintErrorComponent);