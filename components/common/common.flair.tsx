import styled from 'styled-components';
import { Background } from '../brand/brand.colors';

export const FlairStyles = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Background};
    overflow: hidden;
    
    img.flair {
        position: absolute;
        left: 0;
        top: 0;
    }

    img.nft {
        position: relative;
        left: 5px;
        height: 100%;
    }
`;

export function Flair({
    flairUrl,
    nftUrl,
    width = 256,
    height = 256,
    border = 'round',
    margin = '15px'
}) {
    let borderRadius = '0px';

    if (border === 'round') {
        borderRadius = '50%';
    }

    return(
        <FlairStyles className="flair" style={{ width, height, margin, borderRadius }}>
            <img src={flairUrl} className="flair"/>
            {nftUrl ? <img src={nftUrl} className="nft"/> : ''}
            
        </FlairStyles>
    )
}