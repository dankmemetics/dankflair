import styled from 'styled-components';
import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { get, post } from 'superagent';
import { Button } from '../common/common.button';
import {
    setName,
    setDescription,
    setDankId,
    setMintUrl,
    setMintContract,
    setMintName,
    setMintId,
    setMintKey,
    setMintWidth,
    setMintHeight,
    setMintX,
    setMintY,
    setMintBorder,
    setMintClip,
    setMintError,
    resetForm,
} from '../../redux/redux.mint';
import { MintFlair } from './mint.flair';
import { web3Provider, ConfigureCustomContract } from '../../dankflair';
import { Success } from '../brand/brand.colors';

declare const window;
declare const web3;

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
        
        @media (max-width: 1158px) { 
            flex-wrap: wrap;
        }

        div.input.json {
            width: calc(100% - 320px);

            @media (max-width: 1158px) {
                width: 100%;
            }
        }
        div.input.id {
            width: 320px;

            @media (max-width: 1158px) {
                width: 100%;
            }
        }
    }

    div.success-mint {
        position: fixed;
        left: calc(50% - 160px);
        top: calc(50% - 160px);
        width: 320px;
        height: 90px;
        background: ${Success};
        z-index: 1112;
        border-radius: 10px;
        box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.25);

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 24px;
        font-family: Arvo;
        font-weight: bold;

        opacity: 0;
        pointer-events: none;

        &.active {
            opacity: 1;
        }
    }

    div.mint-wrapper {
        opacity: 0.5;
        pointer-events: none;

        &.active {
            opacity: 1;
            pointer-events: inherit;
        }
    }
`;

export interface MintParamsI {
    accounts: string[],
    fusionContract: any,

    name: string,
    description: string,
    dankId: number,
    mintUrl: string,
    mintContract: string,
    mintId: number,
    mintName: string,
    mintKey: string,
    mintWidth: number,
    mintHeight: number,
    mintX: number,
    mintY: number,
    mintBorder: string,
    mintClip: number,
    mintError: number;

    setName(payload: string): void,
    setDescription(payload: string): void,
    setDankId(payload: number): void,
    setMintUrl(payload: string): void,
    setMintContract(payload: string): void,
    setMintName(payload: string): void,
    setMintId(payload: number): void,
    setMintKey(payload: string): void,
    setMintWidth(payload: number): void,
    setMintHeight(payload: number): void,
    setMintX(payload: number): void,
    setMintY(payload: number): void,
    setMintBorder(payload: string): void,
    setMintClip(payload: number): void,
    setMintError(payload: number): void,
    resetForm(payload: boolean): void;
}

export let timeout;

export function MintParamsComponent(
    {
        accounts,
        fusionContract,

        name,
        description,
        dankId,
        mintUrl,
        mintContract,
        mintId,
        mintName,
        mintKey,
        mintWidth,
        mintHeight,
        mintX,
        mintY,
        mintBorder,
        mintClip,
        mintError,

        setName,
        setDescription,
        setDankId,
        setMintUrl,
        setMintContract,
        setMintName,
        setMintId,
        setMintWidth,
        setMintHeight,
        setMintX,
        setMintY,
        setMintBorder,
        setMintClip,
        setMintError,
        resetForm,
    }
    : MintParamsI
) {
    useEffect(() => {
        (async () => {
            clearTimeout(timeout);
            if (mintContract && mintId !== null) {
                timeout = setTimeout(async () => {
                    try {
                        const Contract = ConfigureCustomContract(window.web3, web3Provider, mintContract);
                        console.log('Customized URI Contract', Contract);
                        console.log('Checking URI for', mintId);
                        const uri = await Contract.methods.tokenURI(mintId).call();
                        console.log('URI', uri);
                        const name = await Contract.methods.name().call();
                        console.log('Name', name);
                        setMintName(name);
                        const payload = await get(`${uri}/${mintId}`);
                        console.log('data', payload.body);

                        if (mintKey) {
                            const image = payload.body[mintKey];
                            setMintUrl(image);
                        } else {
                            const image = payload.body.image;
                            setMintUrl(image);
                        }

                        const owner = await Contract.methods.ownerOf(mintId).call();

                        if (owner === accounts[0]) {
                            setMintError(0);
                        } else {
                            setMintError(2);
                        }                        
                    } catch (error) {
                        console.error(error);
                        setMintName('');
                        setMintUrl('');
                        setMintError(1);
                    }
                }, 500);
            }
        })();
    }, [mintContract, mintId, mintKey]);

    const [success, setSuccess] = useState(false);

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

            <p className="label">Contract Address</p>
            <input type="text" placeholder="Address" value={mintContract} onChange={e => setMintContract(e.target.value)}/>

            <div className="inputs">
                <div className="input id">
                    <p className="label">Token ID</p>
                    <input type="number" placeholder="Token ID" value={mintId} min={0} onChange={e => setMintId(parseInt(e.target.value))}/>
                </div>
                <div className="input json">
                    <p className="label">JSON Key (default is image)</p>
                    <input
                        type="text"
                        placeholder="Specify the JSON key that has the image URL"
                        value={mintKey}
                        onChange={e => setMintKey(e.target.value)}
                    />
                </div>
            </div>

            <div className="inputs">
                <div className="input">
                    <p className="label">Width</p>
                    <input type="number" placeholder="% based, default 100%" value={mintWidth} onChange={e => setMintWidth(parseInt(e.target.value))}/>
                </div>
                <div className="input">
                    <p className="label">Height</p>
                    <input type="number" placeholder="% based, default auto" value={mintHeight} onChange={e => setMintHeight(parseInt(e.target.value))}/>
                </div>
                <div className="input">
                    <p className="label">Border Radius</p>
                    <input type="text" placeholder="Can use CSS rules" value={mintBorder} onChange={e => setMintBorder(e.target.value)}/>
                </div>
            </div>

            <div className="inputs">
                <div className="input">
                    <p className="label">X</p>
                    <input type="number" placeholder="relative % based" value={mintX} onChange={e => setMintX(parseInt(e.target.value))}/>
                </div>
                <div className="input">
                    <p className="label">Y</p>
                    <input type="number" placeholder="relative % based" value={mintY} onChange={e => setMintY(parseInt(e.target.value))}/>
                </div>
            </div>

            <div className={`success-mint ${success ? 'active' : ''}`}>
                GREAT SUCCESS!
            </div>
            <div
                className={`mint-wrapper ${mintError === 0 && name && description && mintId !== null && mintContract && dankId !== null ? 'active' : ''}`}
                onClick={async e => {
                    try {
                        const owner = accounts[0];

                        const payload = await post(`/api/mint`)
                            .send({
                                owner,
                                name,
                                description,
                                dankId,
                                mintContract,
                                mintUrl,
                                mintId,
                                mintName,
                                mintKey,
                                mintWidth,
                                mintHeight,
                                mintX,
                                mintY,
                                mintBorder,
                                mintClip,
                            });

                        const encoding = new TextEncoder();
                        const uuid = web3.utils.stringToHex(payload.body.id);

                        console.log('UUID encoding', payload.body.id, uuid);
                        console.log(fusionContract);

                        const mint = await fusionContract.methods.safeMintFusion(owner, mintContract, dankId, mintId, uuid).send({
                            from: owner,
                            value: 10000000000000000,
                        });

                        console.log('Mint Successful', mint);
                        
                        confetti({
                            particleCount: 200,
                            spread: 100,
                        })
                        resetForm(true);
                        setSuccess(true);
                        
                        setTimeout(() => {
                            window.location.reload();
                        }, 2500);                        
                    } catch (error) {
                        console.error(error);
                        setMintError(3);
                        setTimeout(() => {
                            setMintError(0);
                        }, 5000);
                    }
            }}>
                <Button label="Mint" width="calc(100% - 30px)" margin="45px 15px" padding="5px 15px" height="60px" fontSize="24px"/>
            </div>            
        </MintParamsStyles>
    )
}

export const MintParamsState = state => ({
    accounts: state.profile.accounts,
    fusionContract: state.contract.fusionContract,

    name: state.mint.name,
    description: state.mint.description,
    dankId: state.mint.dankId,
    mintUrl: state.mint.mintUrl,
    mintKey: state.mint.mintKey,
    mintName: state.mint.mintName,
    mintContract: state.mint.mintContract,
    mintId: state.mint.mintId,
    mintWidth: state.mint.mintWidth,
    mintHeight: state.mint.mintHeight,
    mintX: state.mint.mintX,
    mintY: state.mint.mintY,
    mintBorder: state.mint.mintBorder,
    mintClip: state.mint.mintClip,
    mintError: state.mint.mintError,
});

export const MintParams = connect(MintParamsState, {
    setName,
    setDescription,
    setDankId,
    setMintKey,
    setMintUrl,
    setMintContract,
    setMintName,
    setMintId,
    setMintWidth,
    setMintHeight,
    setMintX,
    setMintY,
    setMintBorder,
    setMintClip,
    setMintError,
    resetForm,
})(MintParamsComponent);