import styled from 'styled-components';
import { Primary, Background, Card } from '../brand/brand.colors';
import { Button } from '../common/common.button';

export const AuctionBidStyles = styled.div`
    padding: 0 15px 15px 15px;
    display: flex;

    div.form {
        width: calc(35% - 30px);
        margin: 15px;

        div.form-wrap {
            background: ${Card};
            padding: 15px;
            margin: 0 0 30px 0;
            width: 100%;
            border-radius: 5px;
            box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);
        }

        h3 {
            text-align: left;
            font-size: 18px;
            font-weight: 600;
            padding: 0 0 15px 0;
        }

        h4 {
            text-align: center;
            font-size: 32px;
            padding: 0 0 15px 0;
        }

        input {
            width: 100%;
            height: 40px;
            font-size: 18px;
            border-radius: 5px;
            border: none;
            padding: 0 15px;
            margin: 0 0 15px 0;
        }
    }

    div.bids {
        background: ${Card};
        margin: 15px;
        width: calc(65% - 30px);
        height: 420px;
        border-radius: 5px;
        box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);

        div.bid {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 0 10px;

            div.bid-column {
                padding: 5px 5px 7.5px 5px;

                &:nth-child(1) { width: 40%; }
                &:nth-child(2) { width: 20%; }
                &:nth-child(3) { width: 20%; }
                &:nth-child(4) { width: 20%; }
            }

            font-size: 12px;

            &.header {
                border-bottom: 1px solid white;
                font-weight: bold;
            }

            &:nth-child(even) {
                background: rgba(0, 0, 0, 0.2);
            }
        }
    }
`;

export function AuctionBid() {
    return(
        <AuctionBidStyles>
            <div className="form">
                <div className="form-wrap">
                    <h4>100,000 ETH</h4>
                    <Button label="Buy Now" width="100%" height="40px"/>
                </div>
                <div className="form-wrap">
                    <h3>Make a Bid</h3>
                    <input type="number" placeholder="in ETH" min={0}/>
                    <Button label="Make Bid" width="100%" height="40px"/>
                </div>
            </div>
            <div className="bids">
                <div className="bid header">
                    <div className="bid-column">Address</div>
                    <div className="bid-column">Amount</div>
                    <div className="bid-column">Time</div>
                    <div className="bid-column">Expiry</div>
                </div>
                <div className="bid">
                    <div className="bid-column">0x42069</div>
                    <div className="bid-column">100,000 ETH</div>
                    <div className="bid-column">69 minutes ago</div>
                    <div className="bid-column">In 6.9 days</div>
                </div>
                <div className="bid">
                    <div className="bid-column">0x42069</div>
                    <div className="bid-column">100,000 ETH</div>
                    <div className="bid-column">69 minutes ago</div>
                    <div className="bid-column">In 6.9 days</div>
                </div>
                <div className="bid">
                    <div className="bid-column">0x42069</div>
                    <div className="bid-column">100,000 ETH</div>
                    <div className="bid-column">69 minutes ago</div>
                    <div className="bid-column">In 6.9 days</div>
                </div>
            </div>
        </AuctionBidStyles>
    )
}