import { connect } from 'react-redux';
import styled from 'styled-components';
import { flairpedia } from '../../flairpedia';
import { Primary, Card } from '../brand/brand.colors';
import { Flair } from '../common/common.flair';
import { setDankId } from '../../redux/redux.mint';

export const MintFlairStyles = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0;

    div.flair {
        position: relative;
        background: ${Card};
        border-radius: 9px;
        width: 180px;
        height: 210px;
        margin: 15px;
        padding: 15px;
        box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);

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
                dankflair.map(flair => {
                    const nft = flairpedia[flair.id];

                    return(
                        <div className="flair">
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