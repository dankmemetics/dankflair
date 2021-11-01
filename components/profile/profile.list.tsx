import styled from 'styled-components';
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

export function ProfileList() {
    return(
        <ProfileListStyles>
            <Card buttonLabel="View NFT"/>
        </ProfileListStyles>
    )
}