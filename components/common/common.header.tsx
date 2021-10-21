import Link from 'next/link';
import styled from 'styled-components';
import { FaRegAddressCard } from 'react-icons/fa';
import { BiStoreAlt, BiMapPin } from 'react-icons/bi';
import { HiPrinter } from 'react-icons/hi';
import { MdOutlineGroups } from 'react-icons/md';
import { Gradient2 } from '../brand/brand.gradients';

export const HeaderStyles = styled.div`
  position: relative;
  z-index: 1111;
  background: ${Gradient2};
  width: 100%;
  height: 70px;

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

      &.active {
        border-bottom: 5px solid white;
      }

      h2 {
        font-size: 32px;
        font-weight: 400;
        padding: 2.5px 15px 0 15px;
      }
    }


    div.hitems {
      display: flex;
      height: 100%;

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

export function Header({ tab }) {
  return (
    <HeaderStyles>
      <div className="wrap">
        <Link href="/">
          <a className={`brand ${tab === 'index' ? 'active' : ''}`}>
            <h2>Dank Flair</h2>
          </a>
        </Link>
        
        <div className="hitems">
          <Link href="/roadmap">
            <a className={`item ${tab === 'roadmap' ? 'active' : ''}`}>
              <BiMapPin className="icon" />
              Roadmap
            </a>
          </Link>
          <Link href="/profile">
            <a className={`item ${tab === 'profile' ? 'active' : ''}`}>
              <FaRegAddressCard className="icon"/>
              Profile
            </a>
          </Link>
          <Link href="/mint">
            <a className={`item ${tab === 'mint' ? 'active' : ''}`}>
              <HiPrinter className="icon"/>
              Mint
            </a>
          </Link>
          <Link href="/dao">
            <a className={`item ${tab === 'dao' ? 'active' : ''}`}>
              <MdOutlineGroups className="icon"/>
              DAO
            </a>
          </Link>
          <Link href="/auction">
            <a className={`item ${tab === 'auction' ? 'active' : ''}`}>
              <BiStoreAlt className="icon" />
              Auctions
            </a>
          </Link>
        </div>        
      </div>
    </HeaderStyles>
  )
}