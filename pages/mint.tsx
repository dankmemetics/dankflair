import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { MintUpload } from '../components/mint/mint.upload';
import { MintParams } from '../components/mint/mint.params';

export function Mint() {
  return (
    <>
      <Header tab="mint"/>
      <PageContainer>
        <MintUpload/>
        <MintParams/>
      </PageContainer>
    </>
  )
}

export default Mint;