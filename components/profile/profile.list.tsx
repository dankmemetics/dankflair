import styled from 'styled-components';
import { flairpedia } from '../../flairpedia';
import { Card } from '../common/common.card';

export const ProfileListStyles = styled.div`
    padding: 15px 15px 90px 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    div.card {
        margin: 30px;
    }

    @media (max-width: 1158px) {
        justify-content: center;
    }
`;

export function ProfileList({ dankflair, dankfusion, filter = '' }) {
    return(
        <ProfileListStyles>
            {
                dankflair
                .filter(flair => {
                    if (filter) {
                        const nft = flairpedia[flair.id];

                        if (nft.name.includes(filter)) {
                            return true;
                        }

                        return false;
                    } else {
                        return true;
                    }
                })
                .map(flair => {
                    return(<Card key={flair.id} buttonLabel="View NFT" type="feature" url={`/nft/${flair.id}`} nft={flairpedia[flair.id]}/>)
                })
            }
            {
                dankfusion
                .filter(flair => {
                    if (filter) {
                        if (flair.name.includes(filter)) {
                            return true;
                        }

                        return false;
                    } else {
                        return true;
                    }
                })
                .map(fusion => {
                    const item = flairpedia[fusion.dankId];
                    return(<Card
                        key={fusion.id}
                        buttonLabel="View NFT"
                        type="feature"
                        url={`/fusion/${fusion.mintId}`}
                        nft={item}
                        flairImage={fusion.mintUrl}
                        flairName={fusion.mintName}
                        flairId={fusion.mintId}
                        name={fusion.name}
                        mintWidth={fusion.mintWidth}
                        mintHeight={fusion.mintHeight}
                        mintX={fusion.mintX}
                        mintY={fusion.mintY}
                        mintBorder={fusion.mintBorder}
                    />)
                })
            }
        </ProfileListStyles>
    )
}