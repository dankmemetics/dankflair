import { PageContainer } from "../../components/brand/brand.app";
import { Header } from '../../components/common/common.header';
import { Footer } from '../../components/common/common.footer';
import { NftFeature } from '../../components/nft/nft.feature';
import { NftBid } from '../../components/nft/nft.bid';
import { NftHistory } from '../../components/nft/nft.history';

export function Auction() {
  return (
    <>
      <Header/>
      <PageContainer>
        <NftFeature/>
        <NftBid/>
        <NftHistory/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default Auction;