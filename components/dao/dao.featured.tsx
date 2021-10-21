import styled from 'styled-components';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import { Primary, Background, Card } from '../brand/brand.colors';
import { Button } from '../common/common.button';

export const DaoFeaturedStyles = styled.div`
    background: ${Card};
    margin: 30px;
    padding: 30px;
    width: calc(100% - 60px);
    border-radius: 5px;
    box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);

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
    }

    div.motion {
        display: flex;

        div.column {
            width: 50%;
            padding: 15px;

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
                justify-content: space-between;
                padding: 30px 0;
            }

            &.vote {
                position: relative;
                top: -45px;

                p {
                    position: absolute;
                    font-size: 18px;
                    font-weight: bold;
                    width: 100%;
                    text-align: center;
                    padding: 0 30px 0 0;

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
`;

export const data = [
    { name: '', value: 80, fill: '#3CD237' },
    { name: '', value: 20, fill: '#D13636' },
];

export function DaoFeatured() {
    return(
        <DaoFeaturedStyles>
            <h2>Active Vote</h2>
            <div className="accent"/>

            <div className="motion">
                <div className="column">
                    <h3>Current Motion</h3>
                    <p>
                        Should we mint 1000 new Dank Flairs with Crypto Kitties?
                    </p>

                    <div className="buttons">
                        <Button label="Vote Yes" width="calc(50% - 30px)"/>
                        <Button label="Vote No" width="calc(50% - 30px)"/>
                    </div>
                </div>
                <div className="column vote">
                    <p className="yes">420 Yes</p>
                    <p className="no">69 No</p>
                    <ResponsiveContainer width="100%" height={240}>
                        <PieChart>
                            <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={100} innerRadius={70}/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </DaoFeaturedStyles>
    )
}