import styled from 'styled-components';
import { Primary, Background, Card } from '../brand/brand.colors';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { AiOutlineFire } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';
import { IoMdNavigate } from 'react-icons/io';

export const AuctionFeaturedStyles = styled.div`
    padding: 30px 0 30px 0;

    div.card {
        display: flex;
        background: ${Card};
        margin: 30px;
        padding: 15px;
        width: calc(100% - 30px);
        border-radius: 5px;
        box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);
    }

    div.sample-flair {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${Background};
        width: 256px;
        height: 256px;
        border-radius: 128px;
        overflow: hidden;
        margin: 15px;

        img.flair {
            position: absolute;
            left: 0;
            top: 0;
        }
        
        img.nft {
            position: relative;
            left: 5px;
            height: 100%;
        }
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

            a.button {
                display: flex;
                align-items: center;
                justify-content: center;
                background: ${Primary};
                padding: 10px 15px;
                border-radius: 5px;
                font-size: 18px;
                font-weight: bold;
                cursor: pointer;
                width: 240px;
            }    
        }
    }

    a.badge {
        font-size: 12px;
        font-weight: bold;
        background: ${Primary};
        padding: 5px 10px;
        margin: 0 15px;
        border-radius: 5px;
        color: white;
        text-decoration: none;
    }

    .icon {
        font-size: 24px;
        color: ${Primary};
        margin: 0 10px 0 0;
    }

    div.carousel-options {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 45px 0;
        width: 100%;

        div.selector {
            background: white;
            width: 90px;
            height: 5px;
            margin: 0 5px;
            opacity: 0.25;
            cursor: pointer;
            &.active {
                opacity: 1;
            }
        }

        a.button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${Primary};
            border-radius: 50%;
            width: 32px;
            height: 32px;
            margin: 15px;
            cursor: pointer;

            position: absolute;
            top: 15px;

            &.left {
                left: 30px;
            }

            &.right {
                right: 0px;
            }

            .button-icon {
                position: relative;

                &.left {
                    left: -1px;
                    transform: rotate(-90deg);
                }
                &.right {
                    left: 1px;
                    transform: rotate(90deg);
                }
            }
        }
    }
`;

export function AuctionFeatured() {
    return(
        <AuctionFeaturedStyles>
            <div className="card">
                <div className="sample-flair">
                    <img src="/images/flair1.gif" className="flair"/>
                    <img src="/images/sample.png" className="nft"/>
                </div>
                <div className="text">
                    <h2>Dank Kitty</h2>
                    
                    <div className="labels">
                        <div className="label">
                            <p>Flair NFT</p>
                            <h3>
                                <BsFillPatchCheckFill className="icon"/>
                                DF Electric 
                                <a className="badge">1 of 100</a>
                            </h3>
                        </div>
                        <div className="label">
                            <p>Content NFT</p>
                            <h3>
                                <BsFillPatchCheckFill className="icon"/>
                                Kitty #69 
                                <a className="badge" href="https://opensea.io/assets/0x06012c8cf97bead5deae237070f9587f8e7a266d/1790644" target="opensea">View on OpenSEA</a>
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
                        <a className="button">
                            View Auction
                        </a>
                    </div>
                </div>
            </div>

            <div className="carousel-options">
                <a className="button left">
                    <IoMdNavigate className="button-icon left"/>
                </a>

                <div className="selector active"/>
                <div className="selector"/>
                <div className="selector"/>
                <div className="selector"/>
                <div className="selector"/>

                <a className="button right">
                    <IoMdNavigate className="button-icon right"/>
                </a>
            </div>
        </AuctionFeaturedStyles>
    )
}