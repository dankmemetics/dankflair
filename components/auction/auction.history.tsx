import styled from 'styled-components';
import { Primary, Background, Card } from '../brand/brand.colors';

export const AuctionHistoryStyles = styled.div`
    background: ${Card};
    margin: 15px 15px 90px 15px;
    padding: 15px;
    width: calc(100% - 30px);
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

            div.column {
                &:nth-child(1) { width: 20%; }
                &:nth-child(2) { width: 20%; }
                &:nth-child(3) { width: 20%; }
                &:nth-child(4) { width: 20%; }
                &:nth-child(5) { width: 20%; }
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

export function AuctionHistory() {
    return(
        <AuctionHistoryStyles>
            <h3>NFT History</h3>
            <div className="history">
                <div className="row header">
                    <div className="column">Event</div>
                    <div className="column">Price</div>
                    <div className="column">From</div>
                    <div className="column">To</div>
                    <div className="column">Time</div>
                </div>
                <div className="row">
                    <div className="column">Purchased</div>
                    <div className="column">1000 ETH</div>
                    <div className="column">0x42069</div>
                    <div className="column">0x42069</div>
                    <div className="column">69 Minutes Ago</div>
                </div>
                <div className="row">
                    <div className="column">Minted</div>
                    <div className="column">~</div>
                    <div className="column">~</div>
                    <div className="column">0x42069</div>
                    <div className="column">69 Minutes Ago</div>
                </div>
            </div>
        </AuctionHistoryStyles>
    )
}