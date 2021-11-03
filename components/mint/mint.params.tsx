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

    div.inputs {
        display: flex;
        align-items: center;
    }
`;

export function MintParams() {
    return(
        <MintParamsStyles>
            <p className="label">NFTs</p>
            <div className="buttons">
                <Button label="Select Dank Flair" width="240px" margin="15px"/>
                <Button label="Select ERC721" width="240px" margin="15px"/>
            </div>

            <p className="label">Name</p>
            <input type="text" placeholder="Name of new Dank Fusion NFT"/>

            <p className="label">Description</p>
            <textarea placeholder="Say something awesome about your new Fusion NFT bro"/>

            <p className="label">ERC721 Position</p>
            <div className="inputs">
                <div className="input">
                    <p className="label">X</p>
                    <input type="text" placeholder="can use CSS rules"/>
                </div>
                <div className="input">
                    <p className="label">Y</p>
                    <input type="text" placeholder="can use CSS rules"/>
                </div>
            </div>

            <p className="label">Clip Style</p>
            <div className="buttons">
                <Button label="Clipped" width="180px" height="40px" fontSize="14px" margin="15px"/>
                <Button label="Unclipped" width="180px" height="40px" fontSize="14px" margin="15px"/>
            </div>
       
            <Button label="Mint" width="calc(100% - 30px)" margin="45px 15px" padding="5px 15px" height="60px" fontSize="24px"/>
        </MintParamsStyles>
    )
}