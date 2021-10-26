import styled from 'styled-components';
import { Card } from '../brand/brand.colors';
import { Flair } from '../common/common.flair';
import { Button } from '../common/common.button';

export const IndexMintStyles = styled.div`
    background: hsla(0, 0%, 7%, 1);
    background: linear-gradient(225deg, hsla(0, 0%, 7%, 1) 0%, hsla(0, 0%, 12%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(0, 0%, 7%, 1) 0%, hsla(0, 0%, 12%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(0, 0%, 7%, 1) 0%, hsla(0, 0%, 12%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#131313", endColorstr="#1F1F1F", GradientType=1 );

    div.wrap {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        min-height: 100vh;

        @media (max-width: 640px) {
            flex-direction: column-reverse;
            flex-wrap: wrap;
        }
    }

    div.graphic {
        padding: 30px;
        width: 50%;

        @media (max-width: 640px) {
            width: 100%;
        }

        div.reel {
            position: relative;
            background: ${Card};
            height: 320px;
            border-radius: 32px;
            box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;

            @keyframes move {
                0% { transform: translateY(0px); }
                25% { transform: translateY(200px); }
                50% { transform: translateY(0px); }
                75% { transform: translateY(-200px); }
                100% { transform: translateY(0px); }
            }

            div.flair {
                position: absolute;
                left: calc(50% - 105px);

                animation: move;
                animation-duration: 12s;
                animation-iteration-count: infinite;
                
                &:nth-child(1), &:nth-child(4), &:nth-child(7) { top: calc(50% - 305px); }
                &:nth-child(2), &:nth-child(5), &:nth-child(8) { top: calc(50% - 105px); }
                &:nth-child(3), &:nth-child(6), &:nth-child(9)  { top: calc(50% + 95px); }

                &:nth-child(4), &:nth-child(5), &:nth-child(6) { left: calc(50% - 335px); }
                &:nth-child(7), &:nth-child(8), &:nth-child(9) { left: calc(50% + 125px); }
            }
        }
    }

    div.title {
        padding: 15px;
        width: 50%;

        @media (max-width: 640px) {
            width: 100%;
            padding: 15px 15px 90px 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        h2 {
            font-size: 32px;
            font-weight: 500;
            padding: 0 0 5px 0;

            @media (max-width: 640px) {
                font-size: 24px;
            }
        }

        p {
            font-size: 18px;
            font-weight: 400;
            line-height: 2;

            @media (max-width: 640px) {
                text-align: center;
                font-size: 14px;
            }
        }
    }
`;

export function IndexMint() {
    return(
        <IndexMintStyles>
            <div className="wrap">
                <div className="graphic">
                    <div className="reel">
                        <Flair
                            width={180}
                            height={180}
                            flairUrl="/images/flair1.gif"
                            nftUrl="/images/sample.png"
                        />

                        <Flair
                            width={180}
                            height={180}
                            flairUrl="/images/flair1.gif"
                            nftUrl="/images/sample.png"
                        />

                        <Flair
                            width={180}
                            height={180}
                            flairUrl="/images/flair1.gif"
                            nftUrl="/images/sample.png"
                        />

                        <Flair
                            width={180}
                            height={180}
                            flairUrl="/images/flair1.gif"
                            nftUrl="/images/sample.png"
                        />

                        <Flair
                            width={180}
                            height={180}
                            flairUrl="/images/flair1.gif"
                            nftUrl="/images/sample.png"
                        />

                        <Flair
                            width={180}
                            height={180}
                            flairUrl="/images/flair1.gif"
                            nftUrl="/images/sample.png"
                        />

                        <Flair
                            width={180}
                            height={180}
                            flairUrl="/images/flair1.gif"
                            nftUrl="/images/sample.png"
                        />

                        <Flair
                            width={180}
                            height={180}
                            flairUrl="/images/flair1.gif"
                            nftUrl="/images/sample.png"
                        />

                        <Flair
                            width={180}
                            height={180}
                            flairUrl="/images/flair1.gif"
                            nftUrl="/images/sample.png"
                        />
                    </div>
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