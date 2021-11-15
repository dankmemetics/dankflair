import Head from 'next/head';
import App, { AppContext, AppInitialProps } from 'next/app';
import { wrapper } from '../redux/redux.store';
import { AppContainer } from '../components/brand/brand.app';

export class AppComponent extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
      appProp: ctx.pathname,
    }
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContainer>
        <Head>
          <title>Dank Flair</title>
          <link rel="icon" type="image/png" href="/images/logo.png"/>
          <link rel="stylesheet" href="/css/reset.css"/>
          <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"/>
        </Head>
        <Component {...pageProps}/>
      </AppContainer>
    )
  }
}

export default wrapper.withRedux(AppComponent);