import styled from 'styled-components';
import { Primary, Background, Card } from '../brand/brand.colors';
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
        &.active {
            opacity: 1;
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

        position: absolute;
        top: 15px;

        &.left {
            left: 30px;
        }

        &.right {
            right: 0px;
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