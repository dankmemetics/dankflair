import { connect } from 'react-redux';
import styled from 'styled-components';
import { flairpedia } from '../../flairpedia';
import { Card } from '../common/common.card';

export const FlairpediaListStyles = styled.div`
    padding: 15px 15px 90px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 1158px) {
        justify-content: center;
    }
`;

export function FlairpediaListComponent({ ownership }) {
    function matchOwner(id: number) {
        for (let i = 0; i < ownership.length; i++) {
            if (ownership[i].id === id) {
                return ownership[i].owner;
            }
        }

        return '';
    }

    return(
        <FlairpediaListStyles>
            {
                flairpedia.map(flair => {
                    const owner = matchOwner(flair.id);

                    return(
                        <Card buttonLabel="View NFT" type="feature" nft={flair} url={`/nft/${flair.id}`} owner={owner}/>
                    )
                })
            }
        </FlairpediaListStyles>
    )
}

export const FlairpediaListState = state => ({
    ownership: state.contract.ownership,
})

export const FlairpediaList = connect(FlairpediaListState)(FlairpediaListComponent);