import styled from 'styled-components';
import { Primary, Card, Background, Frame, FrameYellow, FrameGreen, FrameRed } from '../brand/brand.colors';
import { Button } from '../common/common.button';
import { BiLink } from 'react-icons/bi';
import { AiOutlineFire } from 'react-icons/ai';
import { flairpedia } from '../../flairpedia';

export const IndexProfileStyles = styled.div`
    background: hsla(0, 0%, 11%, 1);
    background: linear-gradient(270deg, hsla(0, 0%, 11%, 1) 0%, hsla(0, 0%, 11%, 1) 100%);
    background: -moz-linear-gradient(270deg, hsla(0, 0%, 11%, 1) 0%, hsla(0, 0%, 11%, 1) 100%);
    background: -webkit-linear-gradient(270deg, hsla(0, 0%, 11%, 1) 0%, hsla(0, 0%, 11%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#1C1C1C", endColorstr="#1C1C1C", GradientType=1 );
    border-bottom: 5px solid ${Background};

    div.wrap {
        position: relative;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        min-height: 100vh;

        @media (max-width: 1158px) {
            justify-content: center;
            flex-wrap: wrap;
            flex-direction: column-reverse;
        }
    }

    div.title {
        padding: 15px 15px 15px 45px;
        width: 50%;
        max-width: 100%;

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

    div.graphic {
        position: absolute;
        left: -25%;
        top: 30%;
        width: 900px;
        height: 640px;
        background: ${Frame};
        border-radius: 9px;
        box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.25);
        overflow: hidden;

        @media (max-width: 1128px) {
            position: relative;
            left: 0;
            top: 0;
            max-width: 100%;
        }

        div.graphic-buttons {
            position: absolute;
            right: 0;
            top: 0;
            display: flex;
            padding: 7.5px 15px;

            div.graphic-button {
                background: ${FrameYellow};
                width: 15px;
                height: 15px;
                border-radius: 50%;
                margin: 5px;

                &.green { background: ${FrameGreen}; }
                &.red { background: ${FrameRed}; }
            }
        }

        div.graphic-inner {
            position: absolute;
            left: 10px;
            top: 40px;
            background: rgba(0, 0, 0, 0.5);
            width: calc(100% - 20px);
            height: 100%;
            border-radius: 9px;
            overflow: hidden;

            div.profile-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 30px;
            
                @media (max-width: 1158px) {
                    flex-direction: column;
                    padding: 45px 15px;   
                }
            
                h3 {
                    font-size: 18px;
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
                    padding: 0 0 15px 0;
                }
            
                .text-icon {
                    margin: 0 0 0 5px;
                }
            }

            div.profile-stats {
                display: flex;
                flex-wrap: wrap;
                padding: 0 15px;
            
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
                        font-size: 14px;
                        font-weight: bold;
                    }
            
                    h3 {
                        font-size: 32px;
                        font-weight: 400;
            
                        &.dank {
                            display: flex;
                            align-items: center;
                            font-size: 32px;
                            width: 100%;
                        }
                    }
            
                    .icon {
                        font-size: 32px;
                        color: ${Primary};
                        margin: 0 10px 0 0;
                    }
            
                    div.label {
                        display: flex;
                        align-items: center;
                        width: 150px;
                    }
            
                    div.meter {
                        width: calc(100% - 150px);
                        height: 25px;
                        border: 2px solid white;
                        border-radius: 12px;
                        margin: 0 0 0 30px;
                        overflow: hidden;
            
                        div.meter-inner {
                            background: ${Primary};
                            width: 60%;
                            height: 100%;
                        }
                    }
                }
            }

            input.profile-search {
                margin: 30px;
                width: calc(100% - 60px);
                height: 60px;
                border-radius: 30px;
                border: none;
                padding: 0 15px;
                text-align: center;
                font-size: 24px;
                box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.2);
        
                &:focus {
                    box-shadow: 0 0 60px 30px rgba(0, 0, 0, 0.5);
                }
            }
        }
    }
`;

export function IndexProfile() {
    return(
        <IndexProfileStyles>
            <div className="wrap">
                <div className="graphic">
                    <div className="graphic-buttons">
                        <div className="graphic-button yellow"/>
                        <div className="graphic-button green"/>
                        <div className="graphic-button red"/>
                    </div>
                    <div className="graphic-inner">
                        <div className="profile-header">
                            <div className="address">
                                <h3>0x311544BD01996727084951af2154E64fD5006537</h3>
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
                        <div className="profile-stats">
                            <div className="stat">
                                <p>DAO Tokens Owned</p>
                                <h3>1337 DANK</h3>
                            </div>
                            <div className="stat">
                                <p># of NFTs owned</p>
                                <h3>21</h3>
                            </div>
                            <div className="stat">
                                <p>Estimated Profile Value</p>
                                <h3>1337 ETH</h3>
                            </div>
                            <div className="stat">
                                <p>Dank Meter</p>
                                <h3 className="dank">
                                    <div className="label">
                                        <AiOutlineFire className="icon"/>
                                        Dank
                                    </div>                        
                                    <div className="meter">
                                        <div className="meter-inner" style={{ width: `${5 * 20}%` }}/>
                                    </div>
                                </h3>
                            </div>
                        </div>

                        <input type="text" placeholder="Search Dank Flairs" className="profile-search"/>
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