import Link from 'next/link';
import styled from 'styled-components';
import { Card } from '../brand/brand.colors';
import { HiOutlineExclamation } from 'react-icons/hi';

export const MintDisclaimerStyles = styled.div`
    background: ${Card};
    width: 100%;
    max-width: 1128px;
    margin: 60px auto 30px auto;
    padding: 30px 15px;
    border-radius: 9px;
    box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
        font-size: 32px;
        margin: 5px 15px 0 0;
    }

    a {
        color: white;
        font-weight: bold;
    }

    h3 {
        font-size: 24px;
        font-family: Arvo;
        font-weight: 400;
    }

    @media (max-width: 1128px) {
        display: none;
    }
`;

export function MintDisclaimer() {
    return(
        <MintDisclaimerStyles>
            <HiOutlineExclamation className="icon"/>
            <h3>New to Dank Flair? Make sure to check the <Link href="/documentation">Documentation</Link>.</h3>
        </MintDisclaimerStyles>
    )
}