import { Metadata } from '../components/common/common.metadata';
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { IndexFeatured } from '../components/index/index.featured';
import { IndexMint } from '../components/index/index.mint';
import { IndexDao } from '../components/index/index.dao';
import { IndexProfile } from '../components/index/index.profile';

export function Index() {
  return (
    <>
      <Metadata/>
      <Header tab="index"/>
      <IndexFeatured/>
      <IndexMint/>
      <IndexDao/>
      <IndexProfile/>
      <Footer/>
    </>
  )
}

export default Index;