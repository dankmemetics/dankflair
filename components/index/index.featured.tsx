import styled from 'styled-components';
import { Background } from '../brand/brand.colors';
import { Flair } from '../common/common.flair';

export const IndexFeaturedStyles = styled.div`
    div.title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 90px 30px 30px 30px;
        width: 100%;

        h2 {
            font-size: 48px;
            font-weight: 600;
            padding: 0 0 5px 0;
        }

        p {
            font-size: 24px;
            font-weight: 500;
        }
    }

    div.featured {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 30px;
        width: 100%;
        transform-origin: center;
    }
`;

export function IndexFeatured() {
    return(
        <IndexFeaturedStyles>
            <div className="title">
                <h2>Dank Flair</h2>
                <p>Buy, Mint and Trade Dank Flair for your NFTs</p>
            </div>
            <div className="featured">
                <Flair
                    width={180}
                    height={180}
                    flairUrl="/images/flair1.gif"
                    nftUrl="/images/sample.png"
                />
                <Flair
                    width={180}
                    height={180}
                    flairUrl="/images/flair2.gif"
                    nftUrl="/images/sample.png"
                />
                <Flair
                    width={180}
                    height={180}
                    flairUrl="/images/flair3.gif"
                    nftUrl="/images/sample.png"
                />
                <Flair
                    width={180}
                    height={180}
                    flairUrl="/images/flair4.gif"
                    nftUrl="/images/sample.png"
                />
                <Flair
                    width={180}
                    height={180}
                    flairUrl="/images/flair5.gif"
                    nftUrl="/images/sample.png"
                />
                <Flair
                    width={180}
                    height={180}
                    flairUrl="/images/flair6.gif"
                    nftUrl="/images/sample.png"
                />
                <Flair
                    width={180}
                    height={180}
                    flairUrl="/images/flair7.gif"
                    nftUrl="/images/sample.png"
                />
                <Flair
                    width={180}
                    height={180}
                    flairUrl="/images/flair8.gif"
                    nftUrl="/images/sample.png"
                />
                <Flair
                    width={180}
                    height={180}
                    flairUrl="/images/flair9.gif"
                    nftUrl="/images/sample.png"
                />
            </div>
        </IndexFeaturedStyles>
    )
}