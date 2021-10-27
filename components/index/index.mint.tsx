import styled from 'styled-components';
import { Background } from '../brand/brand.colors';
import { Flair } from '../common/common.flair';
import { Button } from '../common/common.button';

export const IndexMintStyles = styled.div`
    background: hsla(0, 0%, 7%, 1);
    background: linear-gradient(225deg, hsla(0, 0%, 7%, 1) 0%, hsla(0, 0%, 12%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(0, 0%, 7%, 1) 0%, hsla(0, 0%, 12%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(0, 0%, 7%, 1) 0%, hsla(0, 0%, 12%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#131313", endColorstr="#1F1F1F", GradientType=1 );
    overflow: hidden;
    border-bottom: 5px solid ${Background};

    div.wrap {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        min-height: 100vh;

        @media (max-width: 1158px) {
            flex-direction: column-reverse;
            flex-wrap: wrap;
        }
    }

    div.graphic {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        padding: 30px;
        width: 50%;
        height: 100vh;
        transform: translateY(-275px);

        @media (max-width: 1158px) {
            justify-content: center;
            width: 100%;
            height: 420px;
            overflow: hidden;
            transform: translateY(0);
        }
    }

    div.title {
        padding: 15px;
        width: 50%;

        @media (max-width: 1158px) {
            width: 100%;
            padding: 15px 15px 15px 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        h2 {
            font-size: 32px;
            font-weight: 500;
            padding: 0 0 5px 0;

            @media (max-width: 1158px) {
                font-size: 24px;
            }
        }

        p {
            font-size: 18px;
            font-weight: 400;
            line-height: 2;

            @media (max-width: 1158px) {
                text-align: center;
                font-size: 14px;
            }
        }
    }
`;

export const uris = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export function IndexMint() {
    return(
        <IndexMintStyles>
            <div className="wrap">
                <div className="graphic">
                    {
                        uris.map(uri => {
                            return(
                                <Flair
                                    width={120}
                                    height={120}
                                    flairUrl="/images/flair1.gif"
                                    nftUrl="/images/sample.png"
                                />
                            )
                        })
                    }
                </div>
                <div className="title">
                    <h2>Mint Rare, Exotic Flair</h2>
                    <p>
                        Endless variety and novelty when minting new flair for your NFTs.
                        Make your Flair NFT rare and burned when fused with another NFT. You can also
                        add any type of GIF or PNG as the background.
                    </p>
                    <Button label="Mint Flair" link="/mint" width="280px" margin="30px 0 0 0"/>
                </div>
            </div>
        </IndexMintStyles>
    )
}