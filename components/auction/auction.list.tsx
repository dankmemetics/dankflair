import styled from 'styled-components';
import { Primary, Background, Card } from '../brand/brand.colors';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { AiOutlineFire } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';
import { IoMdNavigate } from 'react-icons/io';


export const AuctionListStyles = styled.div`
    padding: 15px 15px 90px 15px;

    div.card {
        background: ${Card};
        border-radius: 15px;
        box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);
        margin: 15px;
        width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px;

        h3 {
            font-size: 24px;
            font-weight: 500;
            padding: 0 0 15px 0;
        }

        div.labels {
            display: flex;
            flex-wrap: wrap;

            div.label {
                width: 50%;
                padding: 0 0 5px;

                div.meter {
                    width: 60px;
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
        
                h3 {
                    display: flex;
                    align-items: center;
                    font-weight: 400;
                    font-size: 12px;
                    padding: 0 0 5px 0;
                }
        
                p {
                    font-size: 12px;
                    font-weight: bold;
                    padding: 5px 0;
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
            }
        }

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
            width: 100%;
            margin: 15px 0 0 0;
        }    

        div.sample-flair {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${Background};
            width: 180px;
            height: 180px;
            border-radius: 50%;
            overflow: hidden;
            margin: 10px;
    
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
    }
`;

export function AuctionList() {
    return(
        <AuctionListStyles>
            <div className="card">
                <div className="sample-flair">
                    <img src="/images/flair1.gif" className="flair"/>
                    <img src="/images/sample.png" className="nft"/>
                </div>
                <h3>Dank Kitty</h3>
                <div className="labels">
                    <div className="label">
                        <p>Flair NFT</p>
                        <h3>
                            <BsFillPatchCheckFill className="icon"/>
                            DF Electric 
                        </h3>
                    </div>
                    <div className="label">
                        <p>Content NFT</p>
                        <h3>
                            <BsFillPatchCheckFill className="icon"/>
                            Kitty #69 
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

                <a className="button">
                    View Auction
                </a>
            </div>
        </AuctionListStyles>
    )
}