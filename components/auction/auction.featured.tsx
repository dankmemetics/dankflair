import { connect } from 'react-redux';
import styled from 'styled-components';
import { Primary, Background, Card as CardBg} from '../brand/brand.colors';
import { Card } from '../common/common.card';
import { Badge } from '../common/common.badge';
import { Button } from '../common/common.button';
import { flairpedia } from '../../flairpedia';

import { BsFillPatchCheckFill } from 'react-icons/bs';
import { SiEthereum } from 'react-icons/si';

declare const web3;

export const AuctionFeaturedStyles = styled.div`
    position: relative;
    width: 100%;
    height: 550px;

    div.feature-wrap {
        position: absolute;
        left: 0;
        top: 0;

        display: flex;
        align-items: center;
        margin: 30px;
        padding: 15px;
        width: calc(100% - 60px);
        height: 100%;

        opacity: 0;
        pointer-events: none;
        &.active {
            opacity: 1;
            pointer-events: inherit;
        }
    }

    @media (max-width: 1158px) {
        flex-wrap: wrap;
        margin: 30px 0;
        width: 100%;
    }

    div.card-wrap {
        -webkit-transform: translateZ(0);
        -webkit-backface-visibility: hidden;

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
            padding: 0 0 30px 0;
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

export interface AuctionFeaturedI {
    slide: number;
    auctions: any[];
}

export function AuctionFeaturedComponent({ slide, auctions }: AuctionFeaturedI) {
    console.log('auctions', auctions);

    return(
        <AuctionFeaturedStyles>
            {
                auctions.map((auction, i) => {
                    const id = parseInt(auction.asset.tokenId || '0');
                    const nft = flairpedia[id];

                    const bn = web3.utils.toBN(auction.basePrice);
                    const price = Number(bn.toString()) /  Math.pow(10, 18);

                    const bn2 = web3.utils.toBN(auction.currentPrice);
                    const highest = Number(bn2.toString()) / Math.pow(10, 18);

                    return(
                        <div className={`feature-wrap ${slide === i ? 'active' : ''}`}>
                            <div className="card-wrap">
                                <Card type="feature" nft={nft}/>
                            </div>
                            <div className="text">
                                <h2>{nft.name}</h2>
                                
                                <div className="labels">
                                    <div className="label">
                                        <p>Flair NFT</p>
                                        <h3>
                                            <BsFillPatchCheckFill className="icon"/>
                                            {nft.name} 
                                            <Badge label={`#${nft.id}`}/>
                                        </h3>
                                    </div>
                                    <div className="label">
                                        <p>Content NFT</p>
                                        <h3>None</h3>
                                    </div>
                                    <div className="label">
                                        <p>Ask Price</p>
                                        <h3>
                                            <SiEthereum className="icon"/>
                                            {price} WETH
                                        </h3>
                                    </div>
                                    <div className="label">
                                        <p>Highest Bid</p>
                                        <h3>
                                            <SiEthereum className="icon"/>
                                            {highest} WETH
                                        </h3>
                                    </div>
                                </div>

                                <p>Description</p>
                                <p className="description">
                                    {nft.description}
                                </p>

                                <div className="button-wrap">
                                    <Button label="View Auction" link="/nft/0" width="100%"/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </AuctionFeaturedStyles>
    )
}

export const AuctionFeaturedState = state => ({
    slide: state.auction.slide,
    auctions: state.auction.auctions,
});

export const AuctionFeatured = connect(AuctionFeaturedState)(AuctionFeaturedComponent);