import { connect } from 'react-redux';
import styled from 'styled-components';
import { Primary, Background } from '../brand/brand.colors';
import { setProfileInput } from '../../redux/redux.profile';

export const ProfileNavigationStyles = styled.div`
    padding: 30px;
    
    input {
        width: 100%;
        height: 60px;
        border-radius: 30px;
        border: none;
        padding: 0 15px;
        text-align: center;
        font-size: 24px;
        box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.2);

        &:focus {
            box-shadow: 0 0 60px 30px rgba(0, 0, 0, 0.5);
        }
    }
`;

export function ProfileNavigationComponent({ profileInput, setProfileInput }) {
    return(
        <ProfileNavigationStyles>
            <input type="text" placeholder="Search Dank Flair" value={profileInput} onChange={e => setProfileInput(e.target.value)}/>
        </ProfileNavigationStyles>
    )
}

export const ProfileNavigationState = state => ({
    profileInput: state.profile.profileInput,
});

export const ProfileNavigation = connect(ProfileNavigationState, { setProfileInput })(ProfileNavigationComponent);