import styled from 'styled-components';
import { Background, Primary} from '../brand/brand.colors';
import { Button } from '../common/common.button';
import { Card } from '../common/common.card';
import { Badge } from '../common/common.badge';
import { flairpedia } from '../../flairpedia';

import { BsFillPatchCheckFill } from 'react-icons/bs';
import { SiEthereum } from 'react-icons/si';

export const MintUploadStyles = styled.div`
    display: flex;
    align-items: center;
    margin: 30px;
    padding: 15px;
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

export function MintUpload() {
    const nft = flairpedia[0];

    return(
        <MintUploadStyles>
            <div className="card-wrap">
                <Card type="feature" nft={flairpedia[0]}/>
            </div>
            <div className="text">
                <h2>{nft.name}</h2>
                
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
                        <h3>None</h3>
                    </div>
                </div>

                <p>Description</p>
                <p className="description">
                    {nft.description}
                </p>
            </div>
        </MintUploadStyles>
    )
}