import { connect } from 'react-redux';
import styled from 'styled-components';
import { flairpedia } from '../../flairpedia';
import { Primary, Card } from '../brand/brand.colors';
import { Flair } from '../common/common.flair';
import { setDankId } from '../../redux/redux.mint';
import { HiOutlineExclamation } from 'react-icons/hi';

export const MintFlairStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 15px 0;

    div.no-flair {
        position: relative;
        background: ${Card};
        border-radius: 9px;
        width: 100%;
        height: 210px;
        margin: 15px;
        padding: 15px 15px 30px 15px;
        box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.25);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        font-size: 18px;
        font-family: Arvo;
        font-weight: bold;
        text-align: center;

        .icon {
            margin: 5px;
            font-size: 42px;
        }
    }

    div.flair {
        position: relative;
        background: ${Card};
        border-radius: 9px;
        width: 180px;
        height: 210px;
        margin: 15px;
        padding: 15px;
        box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.25);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div.badge {
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 11px;
            font-weight: bold;
            background: ${Primary};
            padding: 2.5px 5px;
            border-radius: 5px;
        }

        h3 {
            font-size: 14px;
        }

        a.button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 30px;
            background: ${Primary};
            border-radius: 5px;
            margin: 15px 0 0 0;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
        }
    }
`;

export function MintFlairComponent({ dankflair, setDankId }) {
    return(
        <MintFlairStyles>
            {
                dankflair.length === 0 ?
                <div className="no-flair">
                    <HiOutlineExclamation className="icon"/>
                    You need to own Dank Flair to mint Rare, Exotic Dank NFTs.
                </div>
                : ''
            }

            {
                dankflair.map(flair => {
                    const nft = flairpedia[flair.id];

                    return(
                        <div className="flair" key={flair.id}>
                            <div className="badge">
                                #{nft.id}
                            </div>

                            <Flair
                                width={90}
                                height={90}
                                margin="0 0 10px 0"
                                flairUrl={`/flair/${nft.id}${nft.suffix}`}
                                nftUrl={null}
                            />
                            <h3>{nft.name}</h3>
                            <a className="button" onClick={e => {
                                setDankId(nft.id);
                            }}>
                                Select
                            </a>
                        </div>
                    )
                })
            }
        </MintFlairStyles>
    )
}

export const MintFlairState = state => ({
    dankflair: state.profile.dankflair,
});

export const MintFlair = connect(MintFlairState, { setDankId })(MintFlairComponent);