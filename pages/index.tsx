import { Header } from '../components/common/common.header';
import { IndexFeatured } from '../components/index/index.featured';
import { IndexMint } from '../components/index/index.mint';
import { IndexDao } from '../components/index/index.dao';
import { IndexProfile } from '../components/index/index.profile';

export function Index() {
  return (
    <>
      <Header tab="index"/>
      <IndexFeatured/>
      <IndexMint/>
      <IndexDao/>
      <IndexProfile/>
    </>
  )
}

export default Index;