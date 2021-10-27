import Link from 'next/link';
import styled from 'styled-components';
import { Card } from '../brand/brand.colors';

export const RoadmapListStyles = styled.div`
    padding: 15px 15px 90px 15px;

    @media (max-width: 1158px) {
        padding: 0 0 90px 0;
    }

    div.section {
        background: ${Card};
        margin: 30px 15px 60px 15px;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);

        h3 {
            font-size: 24px;
            font-weight: 400;
            padding: 0 0 5px 0;
        }
        
        h4 {
            font-size: 18px;
            font-weight: bold;
            padding: 0 0 30px 0;
        }

        p {
            font-size: 16px;
            padding: 0 0 10px 0;

            a {
                color: white;
                font-weight: bold;
            }
        }
    }
`;

export function RoadmapList() {
    return(
        <RoadmapListStyles>
            <div className="section">
                <h3>1. Ethereum Mainnet Launch</h3>
                <h4>End of October or Early November</h4>
                <p>- Launch the smart contract for minting NFTs with frames.</p>
                <p>- Mint a new "tethered" flair or a completely new NFT</p>
                <p>- Allow for flair to be burned to create new NFTs or "tethered".</p>
                <p>- Full minting and burning mechanics described in <Link href="/mint">mint</Link>.</p>
            </div>
            <div className="section">
                <h3>2. Dank DAO</h3>
                <h4>Continuous from November and Beyond</h4>
                <p>- Based on Community Feedback, design and mint new flair.</p>
                <p>- DAO voting mechanics for choosing new flair.</p>
                <p>- Have a new tradeable DAO Token for Dank Flair.</p>
            </div>
            <div className="section">
                <h3>3. Solana Mainnet Launch</h3>
                <h4>TBA</h4>
                <p>- Replicate all the Ethereum features, but using Metaplex's NFT mechanics</p>
                <p>- Create cross platform NFT flair trading? (TBD)</p>
            </div>
        </RoadmapListStyles>
    )
}