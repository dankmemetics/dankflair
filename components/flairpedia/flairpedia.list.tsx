import styled from 'styled-components';
import { Card } from '../common/common.card';

export const FlairpediaListStyles = styled.div`
    padding: 15px 15px 90px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 1158px) {
        justify-content: center;
    }
`;

export const LOAD_FIRST = 12;

export function FlairpediaList() {
    return(
        <FlairpediaListStyles>
            <Card buttonLabel="View NFT" id={0} url={`/nft/0`}/>
            <Card buttonLabel="View NFT" id={1} url={`/nft/1`}/>
            <Card buttonLabel="View NFT" id={2} url={`/nft/2`}/>
            <Card buttonLabel="View NFT" id={3} url={`/nft/3`}/>
        </FlairpediaListStyles>
    )
}