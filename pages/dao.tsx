import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { DaoFeatured } from '../components/dao/dao.featured';
import { DaoHistory } from '../components/dao/dao.history';

export function DAO() {
  return (
    <>
      <Header tab="dao"/>
      <PageContainer>
        <DaoFeatured/>
        <DaoHistory/>
      </PageContainer>
    </>
  )
}

export default DAO;