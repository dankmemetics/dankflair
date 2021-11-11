import { connect } from 'react-redux';
import { post } from 'superagent';
import styled from 'styled-components';
import { Button } from '../common/common.button';
import {
    setName,
    setDescription,
    setDankId,
    setMintUrl,
    setMintContract,
    setMintId,
    setFusionX,
    setFusionY,
    setFusionClip,
    resetForm,
} from '../../redux/redux.mint';
import { MintFlair } from './mint.flair';

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

        div.input.address {
            width: calc(100% - 240px);
        }
        div.input.id {
            width: 240px;
        }
    }
`;

export interface MintParamsI {
    name: string,
    description: string,
    dankId: number,
    mintUrl: string,
    mintContract: string,
    mintId: number,
    fusionX: string,
    fusionY: string,
    fusionClip: number,

    setName(payload: string): void,
    setDescription(payload: string): void,
    setDankId(payload: number): void,
    setMintUrl(payload: string): void,
    setMintContract(payload: string): void,
    setMintId(payload: number): void,
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
        mintUrl,
        mintContract,
        mintId,
        fusionX,
        fusionY,
        fusionClip,

        setName,
        setDescription,
        setDankId,
        setMintUrl,
        setMintContract,
        setMintId,
        setFusionX,
        setFusionY,
        setFusionClip,
        resetForm,
    }
    : MintParamsI
) {
    function retrieveUri() {

    }

    return(
        <MintParamsStyles>
            <p className="label">Name</p>
            <input
                type="text"
                placeholder="Name of new Dank Fusion NFT"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <p className="label">Description</p>
            <textarea
                placeholder="Say something awesome about your new Fusion NFT bro"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />

            <p className="label">Configure Flair NFT</p>
            <MintFlair/>

            <p className="label">Configure Content NFT</p>
            <div className="inputs">
                <div className="input address">
                    <p className="label">Contract Address</p>
                    <input type="text" placeholder="Address" value={mintContract} onChange={e => {
                        setMintContract(e.target.value);
                    }}/>
                </div>
                <div className="input id">
                    <p className="label">Token ID</p>
                    <input type="number" placeholder="Token ID" value={mintId} min={0} onChange={e => {
                        setMintId(parseInt(e.target.value));
                    }}/>
                </div>
            </div>

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
    mintUrl: state.mint.mintUrl,
    mintContract: state.mint.mintContract,
    mintId: state.mint.mintId,
    fusionX: state.mint.fusionX,
    fusionY: state.mint.fusionY,
    fusionClip: state.mint.fusionClip,
});

export const MintParams = connect(MintParamsState, {
    setName,
    setDescription,
    setDankId,
    setMintUrl,
    setMintContract,
    setMintId,
    setFusionX,
    setFusionY,
    setFusionClip,
    resetForm,
})(MintParamsComponent);