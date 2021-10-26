import styled from 'styled-components';
import { Card } from '../common/common.card';

export const AuctionListStyles = styled.div`
    padding: 15px 15px 90px 15px;
`;

export function AuctionList() {
    return(
        <AuctionListStyles>
            <Card/>
        </AuctionListStyles>
    )
}