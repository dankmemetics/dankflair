import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { FlairpediaSearch } from '../components/flairpedia/flairpedia.search';
import { FlairpediaList } from '../components/flairpedia/flairpedia.list';

export function Flairpedia() {
  return (
    <>
        <Header tab="flairpedia"/>
        <PageContainer>
            <FlairpediaSearch/>
            <FlairpediaList/>
        </PageContainer>
        <Footer/>
    </>
  )
}

export default Flairpedia;