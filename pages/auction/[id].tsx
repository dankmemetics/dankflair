import { PageContainer } from "../../components/brand/brand.app";
import { Header } from '../../components/common/common.header';
import { AuctionCard } from '../../components/auction/auction.card';
import { AuctionBid } from '../../components/auction/auction.bid';
import { AuctionHistory } from '../../components/auction/auction.history';

export function Auction() {
  return (
    <>
      <Header tab="auction"/>
      <PageContainer>
        <AuctionCard/>
        <AuctionBid/>
        <AuctionHistory/>
      </PageContainer>
    </>
  )
}

export default Auction;