import styled from 'styled-components';
import { Primary, Card } from '../brand/brand.colors';
import { Button } from '../common/common.button';
import { BiLink } from 'react-icons/bi';
import { AiOutlineFire } from 'react-icons/ai';

export const IndexProfileStyles = styled.div`
    background: hsla(0, 0%, 11%, 1);
    background: linear-gradient(270deg, hsla(0, 0%, 11%, 1) 0%, hsla(0, 0%, 11%, 1) 100%);
    background: -moz-linear-gradient(270deg, hsla(0, 0%, 11%, 1) 0%, hsla(0, 0%, 11%, 1) 100%);
    background: -webkit-linear-gradient(270deg, hsla(0, 0%, 11%, 1) 0%, hsla(0, 0%, 11%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#1C1C1C", endColorstr="#1C1C1C", GradientType=1 );

    div.wrap {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        min-height: 100vh;

        @media (max-width: 1158px) {
            flex-wrap: wrap;
            flex-direction: column-reverse;
            padding: 0 0 180px 0;
        }
    }

    div.graphic {
        padding: 15px;
        margin: 15px;
        width: calc(50% - 30px);
        background: ${Card};
        border-radius: 15px;
        box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);

        @media (max-width: 1158px) {
            width: calc(100% - 30px);
            padding: 15px;
        }  

        div.header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 15px;
        
            @media (max-width: 1158px) {
                flex-direction: column;  
            }
        
            h3 {
                font-size: 24px;
                font-weight: 400;
            }
        
            div.accent {
                width: 240px;
                height: 4px;
                border-radius: 2px;
                background: white;
                margin: 5px 0 15px 0;
            }
        
            div.links {
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }
        
            .text-icon {
                margin: 0 0 0 5px;
            }
        }

        div.stats {
            display: flex;
            flex-wrap: wrap;

            div.stat {    
                background: ${Card};
                margin: 15px;
                padding: 15px 30px;
                width: calc(50% - 30px);
                border-radius: 5px;
                box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);

                @media (max-width: 1158px) {
                    width: calc(100% - 30px);
                }

                p {
                    font-size: 12px;
                    font-weight: bold;
                }

                h3 {
                    font-size: 24px;
                    font-weight: 400;

                    &.dank {
                        display: flex;
                        align-items: center;
                        font-size: 24px;
                        width: 100%;
                    }
                }

                .icon {
                    font-size: 24px;
                    color: ${Primary};
                    margin: 0 5px 0 0;
                }

                div.label {
                    display: flex;
                    align-items: center;
                    width: 90px;
                }

                div.meter {
                    width: calc(100% - 60px);
                    height: 15px;
                    border: 2px solid white;
                    border-radius: 12px;
                    margin: 0 0 0 0;
                    overflow: hidden;

                    div.meter-inner {
                        background: ${Primary};
                        width: 60%;
                        height: 100%;
                    }
                }
            }
        }
    }

    div.title {
        padding: 15px 15px 15px 45px;
        width: 50%;

        @media (max-width: 1158px) {
            width: 100%;
            padding: 90px 15px;
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
                text-align: center;
            }
        }

        p {
            font-size: 18px;
            font-weight: 400;
            line-height: 2;

            @media (max-width: 1158px) {
                font-size: 14px;
                text-align: center;
            }
        }
    }
`;

export function IndexProfile() {
    return(
        <IndexProfileStyles>
            <div className="wrap">
                <div className="graphic">
                    <div className="header">
                        <div className="address">
                            <h3>0x42069</h3>
                            <div className="accent"/>
                        </div>
                        <div className="links">
                            <Button
                                fontSize="14px"
                                width="150px"
                                height="30px"
                                margin="0 7.5px"
                                label={<>Share URL <BiLink className="text-icon"/></>}
                            />
                        </div>
                    </div>
                    <div className="stats">
                        <div className="stat">
                            <p>DAO Tokens Owned</p>
                            <h3>69,000 DANK</h3>
                        </div>
                        <div className="stat">
                            <p># of NFTs owned</p>
                            <h3>69</h3>
                        </div>
                        <div className="stat">
                            <p>Estimated Profile Value</p>
                            <h3>69,000 ETH</h3>
                        </div>
                        <div className="stat">
                            <p>Average Dankness</p>
                            <h3 className="dank">
                                <div className="label">
                                    <AiOutlineFire className="icon"/>
                                    Lit
                                </div>
                                <div className="meter">
                                    <div className="meter-inner"/>
                                </div>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <h2>Show Off Rare Flair</h2>
                    <p>
                        Show off your profile to your friends. Collect Dank DAO Tokens and Rare Flair and watch your Dank Meter go from
                        "Meh" to "Dank".
                    </p>
                    <Button label="View Profile" link="/profile" width="280px" margin="30px 0 0 0"/>
                </div>
            </div>
        </IndexProfileStyles>
    )
}