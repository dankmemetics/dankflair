import Link from 'next/link';
import styled from 'styled-components';
import { Background } from '../brand/brand.colors';
import { Gradient2 } from '../brand/brand.gradients';

import { FiTwitter } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { BiStoreAlt, BiMapPin } from 'react-icons/bi';
import { HiPrinter } from 'react-icons/hi';
import { MdOutlineGroups } from 'react-icons/md';
import { GiOpenBook } from 'react-icons/gi';

export const FooterStyles = styled.div`
    position: relative;
    z-index: 1111;
    background: ${Gradient2};
    width: 100%;

    div.wrap {
        width: 100%;
        max-width: 1200px;
        margin: auto;
        height: 100%;
        padding: 45px 0 90px 0;    

        @media (max-width: 1158px) {
            padding: 15px 15px 90px 15px;
        }
    }

    div.heading {
        padding: 15px;

        h3 {
            font-size: 32px;
            font-weight: 300;
            padding: 0 0 5px 0;
        }

        div.accent {
            background: white;
            width: 320px;
            height: 2px;
            margin: 0 0 15px 0;
        }
    }

    div.links {
        display: flex;
        flex-wrap: wrap;

        a.link {
            display: flex;
            align-items: center;
            width: 50%;
            height: 50px;
            padding: 0px 15px;
            margin: 0 0 10px 0;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            border-radius: 25px;
            color: white;
            text-decoration: none;

            &:hover {
                background: rgba(255, 255, 255, 0.25);
            }

            .icon {
                margin: 0 15px 0 0;
            }

            @media (max-width: 1158px) {
                width: 100%;
            }
        }
    }
`;

export function Footer() {
    return(
        <FooterStyles>
            <div className="wrap">
                <div className="heading">
                    <h3>Dank Flair</h3>
                    <div className="accent"/>
                </div>
                <div className="links">
                    <a className="link">
                        <FiTwitter className="icon"/>
                        Twitter
                    </a>
                    <a className="link">
                        <FaDiscord className="icon"/>
                        Discord
                    </a>
                    <Link href="/roadmap">
                        <a className="link">
                            <BiMapPin className="icon"/>
                            Roadmap
                        </a>
                    </Link>
                    <Link href="/dao">
                        <a className="link">
                            <MdOutlineGroups className="icon"/>
                            DAO
                        </a>
                    </Link>
                    <Link href="/mint">
                        <a className="link">
                        <HiPrinter className="icon"/>
                        Mint
                        </a>
                    </Link>
                    <Link href="/flairpedia">
                        <a className="link">
                            <GiOpenBook className="icon"/>
                            Flairpedia
                        </a>
                    </Link>
                    <Link href="/auction">
                        <a className="link">
                            <BiStoreAlt className="icon"/>
                            Auctions
                        </a>
                    </Link>
                </div>
            </div>
        </FooterStyles>
    )
}