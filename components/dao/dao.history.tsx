import styled from 'styled-components';
import { Primary, Background, Card } from '../brand/brand.colors';

export const DaoHistoryStyles = styled.div`
    background: ${Card};
    margin: 30px;
    padding: 15px;
    width: calc(100% - 60px);
    border-radius: 5px;
    box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);

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
`;

export function DaoHistory() {
    return(
        <DaoHistoryStyles>
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
        </DaoHistoryStyles>
    )
}