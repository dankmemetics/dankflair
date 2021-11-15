import { connect } from 'react-redux';
import styled from 'styled-components';
import { setFlairpediaInput } from '../../redux/redux.profile';

export const FlairpediaSearchStyles = styled.div`
    padding: 60px 30px;
    
    input {
        width: 100%;
        height: 60px;
        border-radius: 30px;
        border: none;
        padding: 0 15px;
        text-align: center;
        font-size: 24px;
        box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.2);

        &:focus {
            box-shadow: 0 0 60px 30px rgba(0, 0, 0, 0.5);
        }
    }
`;

export interface FlairpediaSearchI {
    flairpediaInput: string;
    setFlairpediaInput(payload: string): void;
}

export function FlairpediaSearchComponent({ flairpediaInput, setFlairpediaInput }: FlairpediaSearchI) {
    return(
        <FlairpediaSearchStyles>
            <input type="text" placeholder="Search Dank Flair" value={flairpediaInput} onChange={e => setFlairpediaInput(e.target.value)}/>
        </FlairpediaSearchStyles>
    )
}

export const FlairpediaSearchState = state => ({
    flairpediaInput: state.profile.flairpediaInput,
})

export const FlairpediaSearch = connect(FlairpediaSearchState, { setFlairpediaInput })(FlairpediaSearchComponent);