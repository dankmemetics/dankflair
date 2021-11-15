import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Background } from '../brand/brand.colors';
import { Gradient2 } from '../brand/brand.gradients';
import { Metamask } from './common.metamask';
import { auctionUrl } from '../../dankflair';

import { BiStoreAlt } from 'react-icons/bi';
import { HiPrinter } from 'react-icons/hi';
import { CgMenuCake } from 'react-icons/cg';
import { GiOpenBook } from 'react-icons/gi';

export const HeaderStyles = styled.div`
  position: relative;
  z-index: 1111;
  background: ${Gradient2};
  border-bottom: 5px solid ${Background};
  width: 100%;
  height: 65px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.25);

  div.wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1200px;
    margin: auto;
    height: 100%;
    padding: 0 15px;

    a.brand {
      display: flex;
      align-items: center;
      color: white;
      height: 100%;

      text-decoration: none;
      font-size: 32px;
      letter-spacing: 1px;
      border-bottom: 5px solid rgba(255, 255, 255, 0.25);

      &.active, &:hover {
        border-bottom: 5px solid white;
      }

      img {
        height: 32px;
        margin: 0 5px;
      }

      h2 {
        font-family: Arvo;
        font-size: 24px;
        font-weight: 400;
        padding: 2.5px 15px 2.5px 10px;
      }
    }

    a.menu-button {
      position: absolute;
      top: 0;
      right: 0;
      width: 70px;
      height: 70px;
      display: none;
      align-items: center;
      justify-content: center;
      font-size: 32px;

      @media(max-width: 1158px) {
        display: flex;
        padding: 0 0 15px 0;
      }
    }

    div.hitems {
      display: flex;
      height: 100%;

      @media(max-width: 1158px) {
        position: absolute;
        left: 0;
        top:  60px;
        width: 100%;
        height: auto;
        flex-direction: column;
        background: ${Background};

        display: none;
        padding: 15px 0 0 0;

        &.active {
          display: flex;
        }
      }

      a.item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        height: 100%;
        color: white;
        font-size: 18px;
        cursor: pointer;
        text-decoration: none;

        @media (max-width: 1158px) {
          justify-content: flex-start;
          padding: 10px 15px;
          height: auto;
        }

        .icon {
          margin: 0 10px 0 0;
        }

        border-bottom: 5px solid transparent;

        &:hover {
          border-bottom: 5px solid rgba(255, 255, 255, 0.5);
        }

        &.active {
          border-bottom: 5px solid white;
        }
      }
    }
  }
`;

export function Header({ tab = '' }) {
  const [menu, setMenu] = useState(false);

  return (
    <HeaderStyles>
      <div className="wrap">
        <Link href="/">
          <a className={`brand ${tab === 'index' ? 'active' : ''}`}>
            <img src="/images/logo.png"/>
            <h2>Dank Flair</h2>
          </a>
        </Link>

        <a className="menu-button" onClick={e => setMenu(!menu)}>
          <CgMenuCake/>
        </a>
        
        <div className={`hitems ${menu ? 'active' : ''}`}>      
          <Link href="/flairpedia">
            <a className={`item ${tab === 'flairpedia' ? 'active' : ''}`}>
              <GiOpenBook className="icon"/>
              Flairpedia
            </a>
          </Link>
          <Link href="/mint">
            <a className={`item ${tab === 'mint' ? 'active' : ''}`}>
              <HiPrinter className="icon"/>
              Mint
            </a>
          </Link>
          <a className={`item ${tab === 'auction' ? 'active' : ''}`} href={auctionUrl} target="opensea">
            <BiStoreAlt className="icon" />
            Auctions
          </a>
          <Metamask/>
        </div>        
      </div>
    </HeaderStyles>
  )
}