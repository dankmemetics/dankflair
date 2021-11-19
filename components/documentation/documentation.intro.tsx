import Link from 'next/link';
import styled from 'styled-components';

export const DocumentationIntroStyles = styled.div`
    padding: 30px 15px;

    @media (max-width: 1128px) {
        padding: 30px;
    }

    h2 {
        font-family: Arvo;
        font-size: 32px;
        font-weight: 400;
    }

    div.accent {
        width: 420px;
        max-width: 100%;
        height: 2px;
        background: white;
        margin: 5px 0 30px 0;
    }

    p {
        font-size: 18px;
        line-height: 2;
    }

    a {
        color: white;
        font-weight: bold;
    }
`;

export function DocumentationIntro() {
    return(
        <DocumentationIntroStyles>
            <h2>Documentation</h2>
            <div className="accent"/>

            <p>
                In order to mint your own Dank Flair NFT. You must own a Dank Flair and an accompanying NFT. The initial minted Dank Flairs allow you to have unlimited minting rights.
                However, future DAO Proposals may mint Flairs that have a limited amount of mints for posterity. If you do own a Dank Flair. You may mint one at <Link href="/mint">the mint page.</Link>
            </p>
        </DocumentationIntroStyles>
    )
}