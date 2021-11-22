import styled from 'styled-components';
import { Card } from '../brand/brand.colors';
import { HiOutlineExclamation } from 'react-icons/hi';

export const DaoDisclaimerStyles = styled.div`
    position: absolute;
    left: 0;
    top: -30px;
    width: 100%;
    height: calc(100% + 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1111;

    @media (max-width: 1128px) {
        top: 0;
        height: calc(100% + 30px);
    }

    div.blur-wrap {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.75);
    }

    div.disclaimer {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${Card};
        padding: 30px;
        margin: 15px;
        border-radius: 9px;

        .icon {
            font-size: 32px;
            margin: 5px 15px 0 0;
        }
    
        a {
            color: white;
            font-weight: bold;
        }
    
        h3 {
            font-size: 24px;
            font-family: Arvo;
            font-weight: 400;
        }
    }
`;

export function DaoDisclaimer() {
    return(
        <DaoDisclaimerStyles>
            <div className="blur-wrap"/>
            <div className="disclaimer">
                <HiOutlineExclamation className="icon"/>
                <h3>Dank DAO &amp; DAO Tokens will be launching soon!</h3>
            </div>
        </DaoDisclaimerStyles>
    )
}