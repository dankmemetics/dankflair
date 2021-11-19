import { Metadata } from '../components/common/common.metadata';
import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { MintDisclaimer } from '../components/mint/mint.disclaimer';
import { MintPreview } from '../components/mint/mint.preview';
import { MintParams } from '../components/mint/mint.params';
import { MintError } from '../components/mint/mint.error';

export function Mint() {
  return (
    <>
      <Metadata/>
      <Header tab="mint"/>
      <PageContainer>
        <MintDisclaimer/>
        <MintPreview/>
        <MintParams/>
        <MintError/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default Mint;