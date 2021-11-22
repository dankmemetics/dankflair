
import { PageContainer } from "../components/brand/brand.app";
import { Metadata } from '../components/common/common.metadata';
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { DaoDisclaimer } from '../components/dao/dao.disclaimer';
import { DaoFeatured } from '../components/dao/dao.featured';
import { DaoHistory } from '../components/dao/dao.history';

export function DAO() {
  return (
    <>
      <Metadata/>
      <Header tab="dao"/>
      <PageContainer style={{ position: 'relative' }}>
        <DaoDisclaimer/>
        <DaoFeatured/>
        <DaoHistory/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default DAO;