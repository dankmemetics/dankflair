import styled from 'styled-components';
import { Card } from '../common/common.card';

export const ProfileListStyles = styled.div`
    padding: 15px 15px 90px 15px;
`;

export function ProfileList() {
    return(
        <ProfileListStyles>
            <Card buttonLabel="View NFT"/>
        </ProfileListStyles>
    )
}