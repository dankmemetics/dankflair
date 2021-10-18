import styled from 'styled-components';
import { Primary, Background, Card } from '../brand/brand.colors';
import { Badge } from '../common/common.badge';
import { Button } from '../common/common.button';
import { Flair } from '../common/common.flair';

import { BsFillPatchCheckFill } from 'react-icons/bs';
import { AiOutlineFire } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';

export const AuctionFeaturedStyles = styled.div`
    padding: 30px 0 0 0;

    div.card {
        display: flex;
        background: ${Card};
        margin: 30px;
        padding: 15px;
        width: calc(100% - 30px);
        border-radius: 5px;
        box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);
    }

    div.text {
        padding: 15px;
        width: calc(100% - 300px);

        div.labels {
            display: flex;
            flex-wrap: wrap;
            padding: 10px 5px;
            
            div.label {
                width: calc(100% / 2);
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

        div.button-wrap {
            display: flex;
            justify-content: flex-end;
        }
    }

    .icon {
        font-size: 24px;
        color: ${Primary};
        margin: 0 10px 0 0;
    }
`;

export function AuctionFeatured() {
    return(
        <AuctionFeaturedStyles>
            <div className="card">
                <Flair
                    flairUrl="/images/flair1.gif"
                    nftUrl="/images/sample.png"
                />
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
                                <FaEthereum className="icon"/>
                                100,000 ETH
                            </h3>
                        </div>
                    </div>

                    <p className="description">
                        One of the rarest, dankest exotic kitties on the blockchain.
                        We've added the Electric Dank Flair to make it even more rare,
                        dank and exotic. Limited edition, 1 of 100 of this Dank Kitty.
                    </p>

                    <div className="button-wrap">
                        <Button label="View Auction" link="/auction/69" width="240px"/>
                    </div>
                </div>
            </div>
        </AuctionFeaturedStyles>
    )
}