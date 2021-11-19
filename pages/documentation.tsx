import { Metadata } from '../components/common/common.metadata';
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { PageContainer } from "../components/brand/brand.app";
import { DocumentationIntro } from '../components/documentation/documentation.intro';
import { DocumentationWalkthrough } from '../components/documentation/documentation.walkthrough';

export function Index() {
  return (
    <>
      <Metadata/>
      <Header tab="documentation"/>
      <PageContainer>
        <DocumentationIntro/>
        <DocumentationWalkthrough/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default Index;