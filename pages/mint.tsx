import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { MintPreview } from '../components/mint/mint.preview';
import { MintParams } from '../components/mint/mint.params';

export function Mint() {
  return (
    <>
      <Header tab="mint"/>
      <PageContainer>
        <MintPreview/>
        <MintParams/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default Mint;