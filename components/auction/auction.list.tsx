import styled from 'styled-components';
import { Card } from '../common/common.card';

export const AuctionListStyles = styled.div`
    padding: 15px 15px 90px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 1158px) {
        justify-content: center;
    }
`;

export function AuctionList() {
    return(
        <AuctionListStyles>
            <Card buttonLabel="View Auction"/>
        </AuctionListStyles>
    )
}