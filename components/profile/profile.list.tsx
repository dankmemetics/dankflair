import styled from 'styled-components';
import { flairpedia } from '../../flairpedia';
import { Card } from '../common/common.card';

export const ProfileListStyles = styled.div`
    padding: 15px 15px 90px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 1158px) {
        justify-content: center;
    }
`;

export function ProfileList({ dankflair, dankfusion }) {
    return(
        <ProfileListStyles>
            {
                dankflair.map(flair => {
                    return(<Card buttonLabel="View NFT" type="feature" url={`/nft/${flair.id}`} nft={flairpedia[flair.id]}/>)
                })
            }
            
        </ProfileListStyles>
    )
}