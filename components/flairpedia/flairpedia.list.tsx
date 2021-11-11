import styled from 'styled-components';
import { flairpedia } from '../../flairpedia';
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
            {
                flairpedia.map(flair => {
                    return(
                        <Card buttonLabel="View NFT" type="feature" nft={flair} url={`/nft/${flair.id}`}/>
                    )
                })
            }
        </FlairpediaListStyles>
    )
}