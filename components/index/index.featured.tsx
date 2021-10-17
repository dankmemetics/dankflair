import styled from 'styled-components';
import { Background } from '../brand/brand.colors';

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

        div.sample-flair {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${Background};
            width: 180px;
            height: 180px;
            border-radius: 90px;
            overflow: hidden;
            margin: 15px;

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
        }
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
                <div className="sample-flair">
                    <img src="/images/flair1.gif" className="flair"/>
                    <img src="/images/sample.png" className="nft"/>
                </div>
                <div className="sample-flair">
                    <img src="/images/flair2.gif" className="flair"/>
                    <img src="/images/sample.png" className="nft"/>
                </div>
                <div className="sample-flair">
                    <img src="/images/flair3.gif" className="flair"/>
                    <img src="/images/sample.png" className="nft"/>
                </div>
                <div className="sample-flair">
                    <img src="/images/flair4.gif" className="flair"/>
                    <img src="/images/sample.png" className="nft"/>
                </div>
                <div className="sample-flair">
                    <img src="/images/flair5.gif" className="flair"/>
                    <img src="/images/sample.png" className="nft"/>
                </div>
                <div className="sample-flair">
                    <img src="/images/flair6.gif" className="flair"/>
                    <img src="/images/sample.png" className="nft"/>
                </div>
                <div className="sample-flair">
                    <img src="/images/flair7.gif" className="flair"/>
                    <img src="/images/sample.png" className="nft"/>
                </div>
                <div className="sample-flair">
                    <img src="/images/flair8.gif" className="flair"/>
                    <img src="/images/sample.png" className="nft"/>
                </div>
                <div className="sample-flair">
                    <img src="/images/flair9.gif" className="flair"/>
                    <img src="/images/sample.png" className="nft"/>
                </div>
            </div>
        </IndexFeaturedStyles>
    )
}