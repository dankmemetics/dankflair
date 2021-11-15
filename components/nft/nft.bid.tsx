import { useState } from 'react';
import styled from 'styled-components';
import { Primary, Background, Card } from '../brand/brand.colors';
import { Button } from '../common/common.button';
import { FlairOwnership, FusionNft } from '../../redux/redux.contract';

export const NftBidStyles = styled.div`
    padding: 0 15px 15px 15px;
    display: flex;
    flex-wrap: wrap;

    div.form {
        width: calc(100% - 30px);
        margin: 15px;

        opacity: 0.25;
        pointer-events: none;

        &.owned {
            opacity: 1;
            pointer-events: inherit;
        }

        @media (max-width: 1158px) {
            width: 100%;
            margin: 15px 0;
        }

        div.form-wrap {
            background: ${Card};
            padding: 15px;
            margin: 0 0 30px 0;
            width: 100%;
            border-radius: 5px;
            box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);
        }

        h3 {
            text-align: left;
            font-size: 18px;
            font-weight: 600;
            padding: 0 0 15px 0;
        }

        h4 {
            text-align: center;
            font-size: 32px;
            padding: 0 0 15px 0;
        }

        input {
            width: 100%;
            height: 40px;
            font-size: 18px;
            border-radius: 5px;
            border: none;
            padding: 0 15px;
            margin: 0 0 15px 0;
        }

        div.button-wrapper {
            display: flex;
            justify-content: flex-end;
            width: 100%;
        }
    }
`;

export interface NftBidI {
    contract: any;
    fusionContract: any;
    activeNft?: FlairOwnership;
    activeFusionNft?: FusionNft;
    accounts: string[];
}

export function NftBid({ contract, fusionContract, activeNft, activeFusionNft, accounts }: NftBidI) {
    const [transfer, setTransfer] = useState('');

    let owned = false;
    let connected = false;
    let fusion = false;

    if (activeFusionNft) {
        fusion = true;
    }

    if (accounts.length > 0) {
        if (fusion) {
            owned = activeFusionNft?.owner === accounts[0];
        } else {
            owned = activeNft?.owner === accounts[0];
        }
        
        connected = true;
    }

    return(
        <NftBidStyles>
            <div className={`form ${owned ? 'owned' : ''}`}>
                <div className="form-wrap">
                    <h3>Transfer NFT</h3>
                    <input type="text" placeholder="Address" value={transfer} onChange={e => setTransfer(e.target.value)}/>
                    <div className="button-wrapper">
                        <div onClick={async e => {
                            if (fusion) {
                                await fusionContract.methods.safeTransferFrom(activeFusionNft?.owner, transfer, activeFusionNft?.fusionId).send({ from: activeFusionNft?.owner });
                                setTransfer('');
                            } else {
                                await contract.methods.safeTransferFrom(activeNft.owner, transfer, activeNft.id).send({ from: activeNft.owner });
                                setTransfer('');
                            }                            

                            setTimeout(() => {
                                window.location.reload();
                            }, 1000);
                        }}>
                            <Button label="Transfer" width="240px" height="40px"/>
                        </div>      
                    </div>                  
                </div>
            </div>
        </NftBidStyles>
    )
}