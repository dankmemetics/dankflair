import styled from 'styled-components';
import { Primary, Background, Card } from '../brand/brand.colors';
import { AiOutlineFire } from 'react-icons/ai';

export const ProfileStatsStyles = styled.div`
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
            width: 90px;
        }

        div.meter {
            width: calc(100% - 90px);
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
`;

export function ProfileStats() {
    return(
        <ProfileStatsStyles>
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
        </ProfileStatsStyles>
    )
}