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
        width: 100%;
    }
`;

export function Flair({
    flairUrl,
    nftUrl,
    width = 256 as number | string,
    height = 'auto' as number | string,
    borderRadius = '50%',
    margin = '15px',
    mintWidth = 100 as number | null,
    mintHeight = null as number | null,
    mintBorder = null as string | null,
    mintX = 0 as number | null,
    mintY = 0 as number | null,
}) {
    return(
        <FlairStyles className="flair" style={{ width, height, margin, borderRadius }}>
            <img src={flairUrl} className="flair"/>
            {
                nftUrl ?
                    <img src={nftUrl} className="nft" style={{
                        width: `${mintWidth}%`,
                        height: mintHeight ? `${mintHeight}%` : 'auto',
                        borderRadius: mintBorder ? mintBorder : '0px' ,
                        left: mintX ? `${mintX}%` : '0px',
                        top: mintY ? `${mintY}%` : '0px',
                    }}/>
                    : ''
            }
            
        </FlairStyles>
    )
}