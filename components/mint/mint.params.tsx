import styled from 'styled-components';
import { Primary, Background } from '../brand/brand.colors';
import { Button } from '../common/common.button';

export const MintParamsStyles = styled.div`
    padding: 60px 15px 90px 15px;

    @media (max-width: 1158px) {
        padding: 30px 0 90px 0;
    }

    div.buttons {
        display: flex;
        align-items: center;
        width: 100%;

        @media (max-width: 1158px) {
            flex-wrap: wrap;
        }

        &.small {
            a.button {
                font-size: 16px;
                font-weight: 600;
                padding: 10px 25px;
                width: auto;
            }
        }
    }

    p.label {
        font-size: 14px;
        font-weight: bold;
        padding: 5px 15px;
    }

    input, textarea {
        margin: 10px 15px;
        width: calc(100% - 30px);
        height: 50px;
        border-radius: 5px;
        border: none;
        padding: 0 15px;
    }

    textarea {
        height: 120px;
        padding: 15px;
    }

    a.button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${Primary};
        padding: 15px;
        margin: 15px;
        border-radius: 5px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        width: calc(50% - 30px);

        &.big {
            font-size: 24px;
            margin: 45px 15px;
            width: calc(100% - 30px);
            height: 70px;
        }
    }
`;

export function MintParams() {
    return(
        <MintParamsStyles>
            <p className="label">Name</p>
            <input type="text" placeholder="Name of NFT"/>

            <p className="label">Description</p>
            <textarea placeholder="Say something awesome about your flair bro"/>

            <p className="label">Mint Style</p>
            <div className="buttons small">
                <Button label="Flair Only" width="auto" margin="15px" padding="5px 15px" height="40px" fontSize="14px"/>
                <Button label="Flair with preview NFT" width="auto" margin="15px" padding="5px 15px" height="40px" fontSize="14px"/>
            </div>

            <p className="label">Burn Mechanics (if Flair Only)</p>
            <div className="buttons small">
                <Button label="Burn when minting new NFT" width="auto" margin="15px" padding="5px 15px" height="40px" fontSize="14px"/>
                <Button label="Treat as collectible (No burn)" width="auto" margin="15px" padding="5px 15px" height="40px" fontSize="14px"/>
            </div>
            
            <p className="label">Supply</p>
            <input type="number" placeholder="# of NFTs to Mint" min={1}/>

            <p className="label">Mint to Wallet</p>
            <input type="text" placeholder="Default is Metamask wallet"/>

            <Button label="Mint" width="calc(100% - 30px)" margin="45px 15px" padding="5px 15px" height="60px" fontSize="24px"/>
        </MintParamsStyles>
    )
}