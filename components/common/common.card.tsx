import styled from 'styled-components';

import { Primary, Card as CardBg } from '../brand/brand.colors';
import { Button } from '../common/common.button';
import { Flair } from '../common/common.flair';
import { FlairI } from '../../flairpedia';

import { BsFillPatchCheckFill } from 'react-icons/bs';
import { AiOutlineFire } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';


export const CardStyles = styled.div`
    background: ${CardBg};
    border-radius: 15px;
    box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);
    margin: 15px;
    width: 320px;
    max-width: calc(100% - 30px);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;

    h3 {
        font-size: 24px;
        font-weight: 500;
        padding: 0 0 5px 0;
    }

    div.badge {
        position: absolute;
        right: 0px;
        top: 15px;
        font-size: 14px;
        font-weight: bold;
        background: ${Primary};
        padding: 5px 10px;
        margin: 0 15px;
        border-radius: 5px;
        color: white;
        text-decoration: none;
    }


    div.labels {
        display: flex;
        flex-wrap: wrap;

        div.label {
            width: 50%;
            padding: 0 0 2.5px;

            &.full {
                width: 100%;

                &.owner {
                    h3 {
                        font-size: 10px;
                        width: 100%;
                    }
                }
            }

            div.meter {
                width: calc(100% - 90px);
                height: 15px;
                border: 2px solid white;
                border-radius: 8px;
                margin: 2.5px 0 0 10px;
                overflow: hidden;

                div.meter-inner {
                    background: ${Primary};
                    width: 60%;
                    height: 100%;
                }
            }

            h3 {
                display: flex;
                align-items: center;
                font-weight: 400;
                font-size: 12px;
                padding: 0 0 5px 0;
            }

            p {
                font-size: 12px;
                font-weight: bold;
                padding: 5px 0;
            }

            .icon {
                position: relative;
                top: 1px;
                font-size: 14px;
                color: ${Primary};
                margin: 0 5px 0 0;
            }
        }
    }
`;

export function Card({
    type = 'generic',
    buttonLabel = '',
    url = '',
    nft = null,
    fusion = null,
    owner = '',
}: { type?: string, buttonLabel?: string, url?: string, owner?: string, nft?: FlairI | null, fusion?: any | null }) {
    return(
        <CardStyles className={`card ${type}`}>
            {
                nft ? 
                <div className="badge">
                    #{nft?.id}
                </div>
                : ''
            }
            <Flair
                width={180}
                height={180}
                margin="0 0 10px 0"
                flairUrl={`/flair/${nft?.id}${nft?.suffix}`}
                nftUrl={null}
            />
            <h3>{nft?.name || '~'}</h3>
            <div className="labels">
                <div className="label">
                    <p>Flair NFT</p>
                    <h3>
                        {nft ? 
                            <>
                                <BsFillPatchCheckFill className="icon"/>
                                {nft?.name} 
                            </>
                            :
                            'None'
                        }
                    </h3>
                </div>
                <div className="label">
                    <p>Content NFT</p>
                    <h3>None</h3>
                </div>
                <div className={`label ${type === 'feature' ? 'full' : ''}`}>
                    <p>Dank Meter</p>
                    <h3>
                        <div className="meter-label">
                            <AiOutlineFire className="icon"/>
                            {nft?.dankRank === 1 ? 'Meh' : ''}
                            {nft?.dankRank === 2 ? 'Cool' : ''}
                            {nft?.dankRank === 3 ? 'Bomb' : ''}
                            {nft?.dankRank === 4 ? 'Lit' : ''}
                            {nft?.dankRank === 5 ? 'Dank' : ''}
                        </div>                        
                        <div className="meter">
                            <div className="meter-inner" style={{ width: `${nft?.dankRank * 20}%` }}/>
                        </div>
                    </h3>
                </div>
                {
                    type !== 'feature' ?
                    <div className="label">
                        <p>Ask Price</p>
                        <h3>
                            <SiEthereum className="icon"/>
                            420 ETH
                        </h3>
                    </div> : ''
                }

                {
                    owner ?
                    <div className="label full owner">
                        <p>Owner</p>
                        <h3>
                            {owner}
                        </h3>
                    </div>
                    : ''
                }
            </div>

            {buttonLabel ? <Button label={buttonLabel} link={url} width="100%" height="40px" margin="15px 0 0 0" fontSize="16px"/> : ''}
        </CardStyles>
    )
}