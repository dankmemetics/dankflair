import styled from 'styled-components';
import { Primary, Background, Card as CardBg } from '../brand/brand.colors';
import { Card } from '../common/common.card';
import { Badge } from '../common/common.badge';

import { BsFillPatchCheckFill } from 'react-icons/bs';
import { AiOutlineFire } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';

export const NftFeatureStyles = styled.div`
    display: flex;
    align-items: center;
    margin: 30px;
    padding: 15px;
    width: calc(100% - 60px);

    @media (max-width: 1158px) {
        flex-wrap: wrap;
        margin: 30px 0;
        width: 100%;

        div.flair {
            margin: auto !important;
        }
    }

    div.card-wrap {
        @media (max-width: 1158px) {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        transform: translateY(0px);

        animation: float;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;

        @keyframes float {
            0% { transform: translateY(-0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(-0px); }
        }

    }

    div.text {
        padding: 15px 15px 15px 60px;
        width: calc(100% - 320px);

        @media (max-width: 1158px) {
            width: 100%;
            padding: 15px;
        }
    

        div.labels {
            display: flex;
            flex-wrap: wrap;
            padding: 10px 5px;
            
            div.label {
                width: calc(100% / 2);

                &.full {
                    width: 100%;
                }

                @media (max-width: 1158px) {
                    width: 100%;
                }            
            }
        }

        div.meter {
            width: 120px;
            height: 15px;
            border: 2px solid white;
            border-radius: 8px;
            margin: 0 10px;
            overflow: hidden;

            div.meter-inner {
                background: ${Primary};
                width: 60%;
                height: 100%;
            }
        }

        h2 {
            font-size: 32px;
            font-weight: 300;
            padding: 0 0 5px 0;
        }

        p {
            font-size: 14px;
            font-weight: bold;
            padding: 5px 0;
        }

        p.description {
            font-weight: 400;
            font-size: 18px;
            line-height: 2;
            padding: 0 0 15px 0;
        }

        h3 {
            display: flex;
            align-items: center;
            font-weight: 400;
            font-size: 18px;
            padding: 0 0 15px 0;
        }
    }

    .icon {
        font-size: 24px;
        color: ${Primary};
        margin: 0 10px 0 0;
    }
`;

export function NftFeature() {
    return(
        <NftFeatureStyles>
            <div className="card-wrap">
                <Card type="feature"/>
            </div>
            <div className="text">
                <h2>Dank Kitty</h2>
                
                <div className="labels">
                    <div className="label">
                        <p>Flair NFT</p>
                        <h3>
                            <BsFillPatchCheckFill className="icon"/>
                            DF Electric 
                            <Badge label="1 of 100"/>
                        </h3>
                    </div>
                    <div className="label">
                        <p>Content NFT</p>
                        <h3>
                            <BsFillPatchCheckFill className="icon"/>
                            Kitty #69
                            <Badge label="View on OpenSEA" url="https://opensea.io/assets/0x06012c8cf97bead5deae237070f9587f8e7a266d/1790644" target="opensea"/>
                        </h3>
                    </div>
                    <div className="label">
                        <p>Dank Meter</p>
                        <h3>
                            <AiOutlineFire className="icon"/>
                            Lit
                            <div className="meter">
                                <div className="meter-inner"/>
                            </div>
                        </h3>
                    </div>
                    <div className="label">
                        <p>Ask Price</p>
                        <h3>
                            <SiEthereum className="icon"/>
                            100,000 ETH
                        </h3>
                    </div>
                    <div className="label full">
                        <p>Owner</p>
                        <h3>
                            0x311544BD01996727084951af2154E64fD5006537
                        </h3>
                    </div>
                </div>

                <p>Description</p>
                <p className="description">
                    One of the rarest, dankest exotic kitties on the blockchain.
                    We've added the Electric Dank Flair to make it even more rare,
                    dank and exotic. Limited edition, 1 of 100 of this Dank Kitty.
                </p>
            </div>
        </NftFeatureStyles>
    )
}