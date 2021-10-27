import styled from 'styled-components';
import { Card } from '../common/common.card';
import { Button } from '../common/common.button';

export const IndexFeaturedStyles = styled.div`
    background: hsla(0, 0%, 7%, 1);
    background: linear-gradient(315deg, hsla(0, 0%, 7%, 1) 0%, hsla(0, 0%, 19%, 1) 100%);
    background: -moz-linear-gradient(315deg, hsla(0, 0%, 7%, 1) 0%, hsla(0, 0%, 19%, 1) 100%);
    background: -webkit-linear-gradient(315deg, hsla(0, 0%, 7%, 1) 0%, hsla(0, 0%, 19%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#111111", endColorstr="#303030", GradientType=1 );

    div.wrap {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        min-height: calc(100vh - 70px);

        @media (max-width: 1158px) {
            height: auto;
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    div.title {
        padding: 15px;
        width: 50%;

        @media (max-width: 1158px) {
            width: 100%;
            padding: 90px 15px;
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p {
                text-align: center;
            }
        }

        h2 {
            font-size: 42px;
            font-weight: 500;
            padding: 0 0 5px 0;
        }

        p {
            font-size: 24px;
            font-weight: 400;
        }
    }

    div.featured {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 15px;
        width: 50%;
        transform-origin: center;

        @media (max-width: 1158px) {
            width: 100%;
            min-height: 420px;
            top: 0;
            left: 0;
        }

        div.card {
            position: absolute;
            top: -240px;
            left: 180px;
            transform: scale(0.6);
            pointer-events: none;
            z-index: 3;

            @media (max-width: 1158px) {
                top: -120px;
                left: calc(50% - 170px);
            }

            @keyframes floatLeft {
                0% { transform: scale(0.6) rotate(-15deg) translateY(-15px); }
                50% { transform: scale(0.6) rotate(-15deg) translateY(-30px); }
                100% { transform: scale(0.6) rotate(-15deg) translateY(-15px); }
            }

            @keyframes floatCenter {
                0% { transform: scale(0.6) rotate(0) translateY(-15px); }
                50% { transform: scale(0.6) rotate(0) translateY(-30px); }
                100% { transform: scale(0.6) rotate(0) translateY(-15px); }
            }

            @keyframes floatRight {
                0% { transform: scale(0.6) rotate(15deg) translateY(-15px); }
                50% { transform: scale(0.6) rotate(15deg) translateY(-30px); }
                100% { transform: scale(0.6) rotate(15deg) translateY(-15px); }
            }

            &:nth-child(1) {
                top: -220px;
                left: 30px;
                transform: scale(0.6) rotate(-15deg);
                z-index: 2;

                animation: floatLeft;
                animation-duration: 2.5s;
                animation-iteration-count: infinite;

                @media (max-width: 1158px) {
                    top: -100px;
                    left: calc(50% - 310px);
                }
            }

            &:nth-child(2) {
                animation: floatCenter;
                animation-duration: 2.5s;
                animation-delay: 1s;
                animation-iteration-count: infinite;
            }

            &:nth-child(3) {
                top: -220px;
                left: 330px;
                transform: scale(0.6) rotate(15deg);
                z-index: 2;

                animation: floatRight;
                animation-duration: 2.5s;
                animation-delay: 2s;
                animation-iteration-count: infinite;

                @media (max-width: 1158px) {
                    top: -100px;
                    left: calc(50% - 10px);
                }
            }
        }
    }
`;

export function IndexFeatured() {
    return(
        <IndexFeaturedStyles>
            <div className="wrap">
                <div className="title">
                    <h2>Dank Flair</h2>
                    <p>Buy, Mint and Trade Dank Flair for your NFTs</p>
                    <Button label="View Auctions" link="/auction" width="280px" margin="30px 0 0 0"/>
                </div>
                <div className="featured">
                    <Card buttonLabel="View NFT"/>
                    <Card buttonLabel="View NFT"/>
                    <Card buttonLabel="View NFT"/>
                </div>
            </div>
        </IndexFeaturedStyles>
    )
}