import { PageContainer } from "../components/brand/brand.app";
import { Metadata } from '../components/common/common.metadata';
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { NotFound } from '../components/common/common.notfound';

export function FourOhFour() {
  return (
    <>
        <Metadata/>
        <Header tab="index"/>
        <PageContainer>
            <NotFound/>
        </PageContainer>
        <Footer/>
    </>
  )
}

export default FourOhFour;