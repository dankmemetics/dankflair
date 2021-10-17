import styled from 'styled-components';
import { Primary, Background } from '../brand/brand.colors';

export const AuctionNavigationStyles = styled.div`
    padding: 30px;
    
    input {
        width: 100%;
        height: 60px;
        border-radius: 30px;
        border: none;
        padding: 0 15px;
        text-align: center;
        font-size: 24px;
    }
`;

export function AuctionNavigation() {
    return(
        <AuctionNavigationStyles>
            <input type="text" placeholder="Search for Dank Flair"/>
        </AuctionNavigationStyles>
    )
}