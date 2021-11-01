import styled from 'styled-components';
import { Primary, Background } from '../brand/brand.colors';

export const FlairpediaSearchStyles = styled.div`
    padding: 30px;
    
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

export function FlairpediaSearch() {
    return(
        <FlairpediaSearchStyles>
            <input type="text" placeholder="Search Dank Flair"/>
        </FlairpediaSearchStyles>
    )
}