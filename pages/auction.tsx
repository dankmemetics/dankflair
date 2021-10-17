import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { AuctionFeatured } from '../components/auction/auction.featured';
import { AuctionNavigation } from '../components/auction/auction.navigation';
import { AuctionList } from '../components/auction/auction.list';

export function Auction() {
  return (
    <>
      <Header tab="auction"/>
      <PageContainer>
        <AuctionFeatured/>
        <AuctionNavigation/>
        <AuctionList/>
      </PageContainer>
    </>
  )
}

export default Auction;