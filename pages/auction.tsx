import { PageContainer } from "../components/brand/brand.app";
import { Metadata } from '../components/common/common.metadata';
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { AuctionFeatured } from '../components/auction/auction.featured';
import { AuctionCarousel } from '../components/auction/auction.carousel';
import { AuctionNavigation } from '../components/auction/auction.navigation';
import { AuctionList } from '../components/auction/auction.list';

export function Auction() {
  return (
    <>
      <Metadata/>
      <Header tab="auction"/>
      <PageContainer>
        <AuctionFeatured/>
        <AuctionCarousel/>
        <AuctionNavigation/>
        <AuctionList/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default Auction;