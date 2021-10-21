import styled from 'styled-components';
import { Button } from '../common/common.button';
import { BiLink, BsFacebook, AiFillTwitterCircle } from 'react-icons/all';

export const ProfileHeaderStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 45px 15px;

    h3 {
        font-size: 24px;
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
    }

    .text-icon {
        margin: 0 0 0 5px;
    }
`;

export function ProfileHeader() {
    return(
        <ProfileHeaderStyles>
            <div className="address">
                <h3>0x42069</h3>
                <div className="accent"/>
            </div>
            <div className="links">
                <Button
                    fontSize="14px"
                    width="150px"
                    height="30px"
                    margin="0 7.5px"
                    label={<>Profile URL <BiLink className="text-icon"/></>}
                />
                <Button
                    fontSize="14px"
                    width="30px"
                    height="30px"
                    margin="0 7.5px"
                    label={<BsFacebook className="icon"/>}
                />
                <Button
                    fontSize="14px"
                    width="30px"
                    height="30px"
                    margin="0 7.5px"
                    label={<AiFillTwitterCircle className="icon"/>}
                />
            </div>
        </ProfileHeaderStyles>
    )
}