import { get } from 'superagent';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Metadata } from '../components/common/common.metadata';
import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { FlairpediaSearch } from '../components/flairpedia/flairpedia.search';
import { FlairpediaList } from '../components/flairpedia/flairpedia.list';
import { setOwnership } from '../redux/redux.contract';

export function FlairpediaComponent({ setOwnership }) {
  useEffect(() => {
    (
      async () => {
        const payload = await get(`/api/owner/dank`)
        setOwnership(payload.body);
      }
    )();
  }, []);

  return (
    <>
        <Metadata/>
        <Header tab="flairpedia"/>
        <PageContainer>
            <FlairpediaSearch/>
            <FlairpediaList/>
        </PageContainer>
        <Footer/>
    </>
  )
}

export const FlairpediaState = state => ({

});

export const Flairpedia = connect(FlairpediaState, { setOwnership })(FlairpediaComponent);

export default Flairpedia;