import styled from 'styled-components';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import { Background, Card, Frame, FrameGreen, FrameRed, FrameYellow } from '../brand/brand.colors';
import { Button } from '../common/common.button';

export const IndexDaoStyles = styled.div`
    background: hsla(0, 0%, 8%, 1);
    background: linear-gradient(135deg, hsla(0, 0%, 8%, 1) 0%, hsla(0, 0%, 7%, 1) 100%);
    background: -moz-linear-gradient(135deg, hsla(0, 0%, 8%, 1) 0%, hsla(0, 0%, 7%, 1) 100%);
    background: -webkit-linear-gradient(135deg, hsla(0, 0%, 8%, 1) 0%, hsla(0, 0%, 7%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#141414", endColorstr="#131313", GradientType=1 );
    border-bottom: 5px solid ${Background};
    overflow: hidden;

    div.wrap {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        min-height: 100vh;

        @media (max-width: 1158px) {
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    div.title {
        padding: 15px;
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

    div.graphic {
        position: absolute;
        right: -25%;
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
            right: 0;
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
        }

        div.dao-featured {
            margin: 30px;
            padding: 30px;
            background: ${Card};
            box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.25);
            border-radius: 9px;

            h2 {
                font-size: 32px;
                font-weight: 400;
                text-align: left;
            }
        
            div.accent {
                width: 320px;
                height: 3px;
                background: white;
                margin: 5px 0 30px 0;
        
                @media (max-width: 1158px) {
                    width: 240px;
                }
            }

            div.motion {
                display: flex;
        
                @media(max-width: 1158px) {
                    flex-wrap: wrap;
                }
        
                div.column {
                    width: 50%;
        
                    @media(max-width: 1158px) {
                        width: 100%;
                    }
        
                    h3 {
                        font-size: 24px;
                        font-weight: 600;
                        padding: 0 0 10px 0;
                    }
        
                    p {
                        font-size: 18px;
                    }
        
                    div.buttons {
                        display: flex;
                        align-items: center;
                        justify-content: flex start;
                        padding: 30px 0;
                    }
        
                    &.vote {
                        position: relative;
                        top: -45px;
        
                        @media (max-width: 1158px) {
                            top: 0px;
                        }
        
                        p {
                            position: absolute;
                            font-size: 18px;
                            font-weight: bold;
                            width: 100%;
                            text-align: center;
        
                            &.yes {
                                top: calc(50% - 45px);
                            }
        
                            &.no {
                                bottom: calc(50% - 45px);
                            }
                        }
                    }
                }
            }
        }

        div.dao-history {
            margin: 30px;
            padding: 30px;
            background: ${Card};
            box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.25);
            border-radius: 9px;

            h3 {
                font-size: 24px;
                font-weight: 400;
                padding: 0 0 15px 0;
            }
        
            div.history {
                div.row {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
        
                    div.column {
                        &:nth-child(1) { width: 50%; }
                        &:nth-child(2) { width: 10%; }
                        &:nth-child(3) { width: 10%; }
                        &:nth-child(4) { width: 10%; }
                        &:nth-child(5) { width: 20%; }
        
                        @media (max-width: 1158px) {
                            width: 100% !important;
                            padding: 5px;
                        }
                    }
        
                    font-size: 12px;
                    padding: 5px 5px 7.5px 5px;
        
                    &.header {
                        font-weight: bold;
                        border-bottom: 1px solid white;
                    }
        
                    &:nth-child(even) {
                        background: rgba(0, 0, 0, 0.2);
                    }
                }
            }
        }

    }
`;

export const data = [
    { name: '', value: 1337, fill: '#3CD237' },
    { name: '', value: 21, fill: '#D13636' },
];

export function IndexDao() {
    return(
        <IndexDaoStyles>
            <div className="wrap">
                <div className="title">
                    <h2>The Dank DAO</h2>
                    <p>
                        Have say and sway in the direction of Dank Flair. Vote on motions
                        to evolve and guide the project. Whether it be adding new features
                        to the Solidity Smart Contract and/or voting on new dank flairs.
                    </p>
                    <Button label="View Motions" link="/dao" width="280px" margin="30px 0 0 0"/>
                </div>
                <div className="graphic">
                    <div className="graphic-buttons">
                        <div className="graphic-button yellow"/>
                        <div className="graphic-button green"/>
                        <div className="graphic-button red"/>
                    </div>
                    <div className="graphic-inner">

                        <div className="dao-featured">
                            <h2>Active Vote</h2>
                            <div className="accent"/>

                            <div className="motion">
                                <div className="column">
                                    <h3>Current Motion</h3>
                                    <p>
                                        Should we mint the top 3 highest voted designs (in Discord) to mainnet?
                                    </p>

                                    <div className="buttons">
                                        <Button label="Vote Yes" width="180px" margin="0 15px 0 0"/>
                                        <Button label="Vote No" width="180px"/>
                                    </div>
                                </div>
                                <div className="column vote">
                                    <p className="yes">1337 Yes</p>
                                    <p className="no">21 No</p>
                                    <ResponsiveContainer width="100%" height={200}>
                                        <PieChart>
                                            <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={100} innerRadius={70}/>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                        <div className="dao-history">
                            <h3>DAO Motion History</h3>
                
                            <div className="history">
                                <div className="row header">
                                    <div className="column">Motion</div>
                                    <div className="column">Result</div>
                                    <div className="column">Yes</div>
                                    <div className="column">No</div>
                                    <div className="column">Time</div>
                                </div>
                                <div className="row">
                                    <div className="column">Mint top 3 voted flairs</div>
                                    <div className="column">Yes</div>
                                    <div className="column">1337</div>
                                    <div className="column">21</div>
                                    <div className="column">21 Minutes Ago</div>
                                </div>
                                <div className="row">
                                    <div className="column">Mint top 3 voted flairs</div>
                                    <div className="column">Yes</div>
                                    <div className="column">1337</div>
                                    <div className="column">21</div>
                                    <div className="column">21 Minutes Ago</div>
                                </div>
                                <div className="row">
                                    <div className="column">Mint top 3 voted flairs</div>
                                    <div className="column">Yes</div>
                                    <div className="column">1337</div>
                                    <div className="column">21</div>
                                    <div className="column">21 Minutes Ago</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </IndexDaoStyles>
    )
}