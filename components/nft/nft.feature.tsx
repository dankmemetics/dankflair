import styled from 'styled-components';
import { Primary } from '../brand/brand.colors';
import { Card } from '../common/common.card';
import { Badge } from '../common/common.badge';
import { flairpedia } from '../../flairpedia';
import { FlairOwnership, FusionNft } from '../../redux/redux.contract';

import { BsFillPatchCheckFill } from 'react-icons/bs';
import { SiEthereum } from 'react-icons/si';

export const NftFeatureStyles = styled.div`
    display: flex;
    align-items: center;
    margin: 30px;
    padding: 15px;
    width: calc(100% - 60px);

    @media (max-width: 1158px) {
        flex-wrap: wrap;
        margin: 30px 0;
        width: 100%;

        div.flair {
            margin: auto !important;
        }
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
    }

    .icon {
        font-size: 24px;
        color: ${Primary};
        margin: 0 10px 0 0;
    }
`;

export interface NftFeatureI {
    activeNft?: FlairOwnership;
    activeFusionNft?: FusionNft;
}

export function NftFeature({ activeNft, activeFusionNft }: NftFeatureI) {
    const nft = activeNft ? flairpedia[activeNft?.id || 0] : flairpedia[activeFusionNft?.dankId || 0];

    console.log(activeFusionNft);

    return(
        <NftFeatureStyles>
            <div className="card-wrap">
                {
                    activeFusionNft ?
                    <Card
                        type="feature"
                        nft={nft}
                        owner={activeFusionNft.owner}
                        flairImage={activeFusionNft.mintUrl}
                        flairName={activeFusionNft.mintName}
                        flairId={activeFusionNft.mintId}
                        mintWidth={activeFusionNft.mintWidth}
                        mintHeight={activeFusionNft.mintHeight}
                        mintX={activeFusionNft.mintX}
                        mintY={activeFusionNft.mintY}
                        mintBorder={activeFusionNft.mintBorder}
                        name={activeFusionNft.name}
                    />
                    :
                    <Card type="feature" nft={nft} owner={activeNft?.owner}/>
                }
            </div>
            <div className="text">
                <h2>{activeFusionNft.name || nft.name}</h2>
                
                <div className="labels">
                    <div className="label">
                        <p>Flair NFT</p>
                        <h3>
                            <BsFillPatchCheckFill className="icon"/>
                            {nft.name} 
                            <Badge label={`#${nft.id}`}/>
                        </h3>
                    </div>
                    <div className="label">
                        <p>Content NFT</p>
                        <h3>
                            {
                                activeFusionNft ?
                                <>
                                    <BsFillPatchCheckFill className="icon"/>
                                    {activeFusionNft.mintName} 
                                    <Badge label={`#${activeFusionNft.mintId}`}/>
                                </>
                                : 'None'
                            }
                        </h3>
                    </div>
                    <div className="label">
                        <p>Ask Price</p>
                        <h3>
                            <SiEthereum className="icon"/>
                            420 ETH
                        </h3>
                    </div>
                    <div className="label">
                        <p>Highest Bid</p>
                        <h3>
                            <SiEthereum className="icon"/>
                            69 ETH
                        </h3>
                    </div>
                    <div className="label full">
                        <p>Owner</p>
                        <h3>
                            {activeFusionNft?.owner || activeNft?.owner || 'Unknown'}
                        </h3>
                    </div>
                </div>

                <p>Description</p>
                <p className="description">
                    {activeFusionNft?.description || nft.description}
                </p>
            </div>
        </NftFeatureStyles>
    )
}