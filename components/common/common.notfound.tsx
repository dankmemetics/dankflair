import styled from 'styled-components';

export const NotFoundStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: calc(100vh - 210px);

    h3 {
        font-size: 64px;
        font-family: Arvo;
        letter-spacing: 3px;
    }
`;

export function NotFound() {
    return(
        <NotFoundStyles>
            <h3>404</h3>
        </NotFoundStyles>
    )
}