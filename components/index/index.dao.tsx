import styled from 'styled-components';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import { Card } from '../brand/brand.colors';
import { Button } from '../common/common.button';

export const IndexDaoStyles = styled.div`
    background: hsla(0, 0%, 8%, 1);
    background: linear-gradient(135deg, hsla(0, 0%, 8%, 1) 0%, hsla(0, 0%, 7%, 1) 100%);
    background: -moz-linear-gradient(135deg, hsla(0, 0%, 8%, 1) 0%, hsla(0, 0%, 7%, 1) 100%);
    background: -webkit-linear-gradient(135deg, hsla(0, 0%, 8%, 1) 0%, hsla(0, 0%, 7%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#141414", endColorstr="#131313", GradientType=1 );

    div.wrap {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        min-height: 100vh;

        @media (max-width: 1158px) {
            flex-wrap: wrap;
        }
    }

    div.graphic {
        padding: 30px;
        margin: 15px;
        width: calc(50% - 30px);
        background: ${Card};
        border-radius: 15px;
        box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);

        @media (max-width: 1158px) {
            width: calc(100% - 30px);
            padding: 15px;
        }  

        h2 {
            font-size: 24px;
            font-weight: 400;
            text-align: left;
        }
    
        div.accent {
            width: 240px;
            height: 3px;
            background: white;
            margin: 5px 0 30px 0;
    
            @media (max-width: 1158px) {
                width: 180px;
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
                    font-size: 18px;
                    font-weight: 600;
                    padding: 0 0 10px 0;
                }
    
                p {
                    font-size: 14px;
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
                        font-size: 14px;
                        font-weight: bold;
                        width: 100%;
                        text-align: center;
    
                        &.yes {
                            top: calc(50% - 45px);

                            @media (max-width: 1158px) {
                                top: calc(50% - 30px);
                            }
                        }
    
                        &.no {
                            bottom: calc(50% - 20px);
                        }
                    }
                }
            }
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
`;

export const data = [
    { name: '', value: 80, fill: '#3CD237' },
    { name: '', value: 20, fill: '#D13636' },
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
                    <h2>Active Vote</h2>
                    <div className="accent"/>

                    <div className="motion">
                        <div className="column">
                            <h3>Current Motion</h3>
                            <p>
                                Should we mint 1000 new Dank Flairs with Crypto Kitties?
                            </p>

                            <div className="buttons">
                                <Button label="Vote Yes" fontSize="14px" width="120px" height="40px" margin="0 15px 0 0"/>
                                <Button label="Vote No" fontSize="14px" width="120px" height="40px"/>
                            </div>
                        </div>
                        <div className="column vote">
                            <p className="yes">420 Yes</p>
                            <p className="no">69 No</p>
                            <ResponsiveContainer width="100%" height={150}>
                                <PieChart>
                                    <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={70} innerRadius={50}/>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </IndexDaoStyles>
    )
}