import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { IndexFeatured } from '../components/index/index.featured';

export function Index() {
  return (
    <>
      <Header tab="index"/>
      <PageContainer>
        <IndexFeatured/>
      </PageContainer>
    </>
  )
}

export default Index;