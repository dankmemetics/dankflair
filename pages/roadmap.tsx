import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { RoadmapList } from '../components/roadmap/roadmap.list';

export function Roadmap() {
  return (
    <>
      <Header tab="roadmap"/>
      <PageContainer>
        <RoadmapList/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default Roadmap;