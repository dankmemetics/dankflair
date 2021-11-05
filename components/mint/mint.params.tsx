import { connect } from 'react-redux';
import { post } from 'superagent';
import styled from 'styled-components';
import { Button } from '../common/common.button';
import {
    setName,
    setDescription,
    setDankId,
    setFusionUrl,
    setFusionContract,
    setFusionId,
    setFusionX,
    setFusionY,
    setFusionClip,
    resetForm,
} from '../../redux/redux.mint';

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

export interface MintParamsI {
    name: string,
    description: string,
    dankId: number,
    fusionUrl: string,
    fusionContract: string,
    fusionId: number,
    fusionX: string,
    fusionY: string,
    fusionClip: number,

    setName(payload: string): void,
    setDescription(payload: string): void,
    setDankId(payload: number): void,
    setFusionUrl(payload: string): void,
    setFusionContract(payload: string): void,
    setFusionId(payload: number): void,
    setFusionX(payload: string): void,
    setFusionY(payload: string): void,
    setFusionClip(payload: number): void,
    resetForm(payload: boolean): void;
}

export function MintParamsComponent(
    {
        name,
        description,
        dankId,
        fusionUrl,
        fusionContract,
        fusionId,
        fusionX,
        fusionY,
        fusionClip,

        setName,
        setDescription,
        setDankId,
        setFusionUrl,
        setFusionContract,
        setFusionId,
        setFusionX,
        setFusionY,
        setFusionClip,
        resetForm,
    }
    : MintParamsI
) {
    return(
        <MintParamsStyles>
            <p className="label">NFTs</p>
            <div className="buttons">
                <Button label="Select Dank Flair" width="240px" margin="15px"/>
                <Button label="Select ERC721" width="240px" margin="15px"/>
            </div>

            <p className="label">Name</p>
            <input type="text" placeholder="Name of new Dank Fusion NFT" value={name} onChange={e => setName(e.target.value)}/>

            <p className="label">Description</p>
            <textarea
                placeholder="Say something awesome about your new Fusion NFT bro"
                value={description} onChange={e => setDescription(e.target.value)}
            />

            <p className="label">ERC721 Position</p>
            <div className="inputs">
                <div className="input">
                    <p className="label">X</p>
                    <input type="text" placeholder="Can use CSS rules" value={fusionX} onChange={e => setFusionX(e.target.value)}/>
                </div>
                <div className="input">
                    <p className="label">Y</p>
                    <input type="text" placeholder="Can use CSS rules" value={fusionY} onChange={e => setFusionY(e.target.value)}/>
                </div>
            </div>

            <p className="label">Clip Style</p>
            <div className="buttons">
                <div onClick={e => setFusionClip(0)}>
                    <Button label="Clipped" width="180px" height="40px" fontSize="14px" margin="15px"/>
                </div>
                <div onClick={e => setFusionClip(1)}>
                    <Button label="Unclipped" width="180px" height="40px" fontSize="14px" margin="15px"/>
                </div>                
            </div>

            <div onClick={async e => {
                const result = await post(`/api/mint`)
                    .send({
                        nftId: 0,
                        name,
                        description,
                        dankId: 0,
                        fusionUrl: 'http://fusion.com',
                        fusionContract: '0x42069',
                        fusionId: 0,
                        fusionX,
                        fusionY,
                        fusionClip,
                    });
                
                resetForm(true);
                console.log(result.body);
            }}>
                <Button label="Mint" width="calc(100% - 30px)" margin="45px 15px" padding="5px 15px" height="60px" fontSize="24px"/>
            </div>            
        </MintParamsStyles>
    )
}

export const MintParamsState = state => ({
    name: state.mint.name,
    description: state.mint.description,
    dankId: state.mint.dankId,
    fusionUrl: state.mint.fusionUrl,
    fusionContract: state.mint.fusionContract,
    fusionId: state.mint.fusionId,
    fusionX: state.mint.fusionX,
    fusionY: state.mint.fusionY,
    fusionClip: state.mint.fusionClip,
});

export const MintParams = connect(MintParamsState, {
    setName,
    setDescription,
    setDankId,
    setFusionUrl,
    setFusionContract,
    setFusionId,
    setFusionX,
    setFusionY,
    setFusionClip,
    resetForm,
})(MintParamsComponent);