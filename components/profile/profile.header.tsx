import styled from 'styled-components';
import { Button } from '../common/common.button';
import { BiLink } from 'react-icons/bi';

export const ProfileHeaderStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 45px 15px 15px 15px;

    @media (max-width: 1158px) {
        flex-direction: column;
        padding: 45px 15px;   
    }

    h3 {
        font-size: 18px;
        font-weight: 400;
    }

    div.accent {
        width: 240px;
        height: 4px;
        border-radius: 2px;
        background: white;
        margin: 5px 0 15px 0;
    }

    div.links {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 0 15px 0;
    }

    .text-icon {
        margin: 0 0 0 5px;
    }
`;

export function ProfileHeader({ address }) {
    return(
        <ProfileHeaderStyles>
            <div className="address">
                <h3>{address}</h3>
                <div className="accent"/>
            </div>
            <div className="links">
                <Button
                    fontSize="14px"
                    width="150px"
                    height="30px"
                    margin="0 7.5px"
                    label={<>Share URL <BiLink className="text-icon"/></>}
                />
            </div>
        </ProfileHeaderStyles>
    )
}