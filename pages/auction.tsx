import { connect } from 'react-redux';
import { useEffect } from 'react';
import { PageContainer } from "../components/brand/brand.app";
import { Metadata } from '../components/common/common.metadata';
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { AuctionFeatured } from '../components/auction/auction.featured';
import { AuctionCarousel } from '../components/auction/auction.carousel';
import { AuctionNavigation } from '../components/auction/auction.navigation';
import { AuctionList } from '../components/auction/auction.list';

export interface AuctionI {

}

export function AuctionComponent({ }: AuctionI) {
  useEffect(() => {
    (
      async () => {

      }
    )();
  }, []);

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

export const AuctionState = state => ({

})

export const Auction = connect(AuctionState, { })(AuctionComponent);

export default Auction;