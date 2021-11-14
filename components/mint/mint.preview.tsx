import { connect } from 'react-redux';
import styled from 'styled-components';
import { Primary } from '../brand/brand.colors';
import { Card } from '../common/common.card';
import { Badge } from '../common/common.badge';
import { flairpedia } from '../../flairpedia';
import { BsFillPatchCheckFill } from 'react-icons/bs';

export const MintPreviewStyles = styled.div`
    display: flex;
    align-items: center;
    padding: 60px 15px 0 15px;
    width: calc(100% - 60px);

    @media (max-width: 1158px) {
        flex-wrap: wrap;
        margin: 30px 0;
        width: 100%;
    }
    
    div.card-wrap {
        -webkit-transform: translateZ(0);
        -webkit-backface-visibility: hidden;

        @media (max-width: 1158px) {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        transform: translateY(0px);

        animation: float;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;

        @keyframes float {
            0% { transform: translateY(-0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(-0px); }
        }
    }

    div.text {
        padding: 15px 15px 15px 60px;
        width: calc(100% - 320px);

        @media (max-width: 1158px) {
            width: 100%;
            padding: 15px;
        }


        div.labels {
            display: flex;
            flex-wrap: wrap;
            padding: 10px 5px;
            
            div.label {
                width: calc(100% / 2);

                &.full {
                    width: 100%;
                }

                @media (max-width: 1158px) {
                    width: 100%;
                }            
            }
        }

        div.meter {
            width: 120px;
            height: 15px;
            border: 2px solid white;
            border-radius: 8px;
            margin: 0 10px;
            overflow: hidden;

            div.meter-inner {
                background: ${Primary};
                width: 60%;
                height: 100%;
            }
        }

        h2 {
            font-size: 32px;
            font-weight: 300;
            padding: 0 0 5px 0;
        }

        p {
            font-size: 14px;
            font-weight: bold;
            padding: 5px 0;
        }

        p.description {
            font-weight: 400;
            font-size: 18px;
            line-height: 2;
            padding: 0 0 15px 0;
        }

        h3 {
            display: flex;
            align-items: center;
            font-weight: 400;
            font-size: 18px;
            padding: 0 0 15px 0;
        }

        div.button-wrap {
            display: flex;
            justify-content: flex-end;
        }
    }

    .icon {
        font-size: 24px;
        color: ${Primary};
        margin: 0 10px 0 0;
    }
`;

export interface MintPreviewI {
    name: string,
    description: string,
    dankId: number,
    mintUrl: string,
    mintContract: string,
    mintName: string,
    mintId: number,
    mintKey: string,
    mintWidth: number,
    mintHeight: number,
    mintX: number,
    mintY: number,
    mintBorder: string,
    mintClip: number,
    accounts: string[],
}

export function MintPreviewComponent({ 
    name,
    description,
    dankId,
    mintUrl,
    mintContract,
    mintName,
    mintId,
    mintKey,
    mintWidth,
    mintHeight,
    mintX,
    mintY,
    mintBorder,
    mintClip,
    accounts,
}: MintPreviewI) {
    const nft = flairpedia[dankId || 0];
    let owner = '';

    if (accounts.length > 0) {
        owner = accounts[0];
    }

    return(
        <MintPreviewStyles>
            <div className="card-wrap">
                <Card type="feature" nft={dankId !== null ? nft : null} owner={owner} flairImage={mintUrl} flairName={mintName} mintWidth={mintWidth} mintHeight={mintHeight} mintX={mintX} mintY={mintY} mintBorder={mintBorder} name={name} />
            </div>
            <div className="text">
                <h2>{name ? name : 'No Name'}</h2>
                
                <div className="labels">
                    <div className="label">
                        <p>Flair NFT</p>
                        <h3>
                            {
                                dankId !== null ?
                                <>
                                    <BsFillPatchCheckFill className="icon"/>
                                    {nft.name} 
                                    <Badge label={`#${nft.id}`}/>
                                </> : 'None'
                            }
                            
                        </h3>
                    </div>
                    <div className="label">
                        <p>Content NFT</p>
                        <h3>{
                                mintName ?
                                <>
                                    <BsFillPatchCheckFill className="icon"/>
                                    {mintName} 
                                    <Badge label={`#${mintId}`}/>
                                </> : 'None'
                            }</h3>
                    </div>
                </div>

                <p>Description</p>
                <p className="description">
                    {description ? description : 'Please add a description'}
                </p>
            </div>
        </MintPreviewStyles>
    )
}

export const MintPreviewState = state => ({
    name: state.mint.name,
    description: state.mint.description,
    dankId: state.mint.dankId,
    mintUrl: state.mint.mintUrl,
    mintContract: state.mint.mintContract,
    mintName: state.mint.mintName,
    mintKey: state.mint.mintKey,
    mintId: state.mint.mintId,
    mintWidth: state.mint.mintWidth,
    mintHeight: state.mint.mintHeight,
    mintX: state.mint.mintX,
    mintY: state.mint.mintY,
    mintBorder: state.mint.mintBorder,
    mintClip: state.mint.mintClip,
    accounts: state.profile.accounts,
});

export const MintPreview = connect(MintPreviewState)(MintPreviewComponent);