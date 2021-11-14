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
                        uris.map((uri, i) => {
                            const key = (i % 5) * 5;
                            let suffix = '.gif';

                            if (key > 4 && key < 10) {
                                suffix = '.png'
                            }

                            if (key > 19) {
                                suffix = '.png';
                            }

                            const sample = (Math.floor(Math.random() * 69) % 5);
                            let sampleSuffix = '.png';

                            if (sample === 3) {
                                sampleSuffix = '.gif';
                            }

                            return(
                                <Flair
                                    key={i}
                                    width={120}
                                    height={120}
                                    flairUrl={`/flair/${key}${suffix}`}
                                    nftUrl={`/test/${sample}${sampleSuffix}`}
                                    mintWidth={70}
                                    mintBorder="50%"
                                />
                            )
                        })
                    }
                </div>
                <div className="title">
                    <h2>Mint Rare, Exotic Flair</h2>
                    <p>
                        Endless variety and novelty when minting new flair for your NFTs.
                        Give your NFT some Flair and make it even more Rare, Dank and Exotic.
                        You have control over the size and position of the NFT in the flair too!
                    </p>
                    <Button label="Mint Flair" link="/mint" width="280px" margin="30px 0 0 0"/>
                </div>
            </div>
        </IndexMintStyles>
    )
}