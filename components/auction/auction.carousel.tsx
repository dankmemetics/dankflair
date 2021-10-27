import styled from 'styled-components';
import { Primary, Primary3, Background, Card } from '../brand/brand.colors';
import { IoMdNavigate } from 'react-icons/io';

export const AuctionCarouselStyles = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 45px 0;
    width: 100%;

    div.selector {
        background: white;
        width: 90px;
        height: 5px;
        margin: 0 5px;
        opacity: 0.25;
        cursor: pointer;
        box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.1);

        &.active {
            opacity: 1;
        }

        @media (max-width: 1158px) {
            width: 30px;
            margin: 0 2.5px;
        }
    }

    a.button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${Primary};
        border-radius: 50%;
        width: 32px;
        height: 32px;
        margin: 15px;
        cursor: pointer;
        box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.1);

        position: absolute;
        top: 15px;

        &:hover {
            background: ${Primary3};
        }

        &.left {
            left: 30px;
        }

        &.right {
            right: 30px;
        }

        .button-icon {
            position: relative;

            &.left {
                left: -1px;
                transform: rotate(-90deg);
            }
            &.right {
                left: 1px;
                transform: rotate(90deg);
            }
        }
    }
`;

export function AuctionCarousel() {
    return(
        <AuctionCarouselStyles>
            <a className="button left">
                <IoMdNavigate className="button-icon left"/>
            </a>

            <div className="selector active"/>
            <div className="selector"/>
            <div className="selector"/>
            <div className="selector"/>
            <div className="selector"/>

            <a className="button right">
                <IoMdNavigate className="button-icon right"/>
            </a>
        </AuctionCarouselStyles>
    )
}