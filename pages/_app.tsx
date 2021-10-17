import '../components/brand/reset.css';
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
        <Component {...pageProps}/>
      </AppContainer>
    )
  }
}

export default wrapper.withRedux(AppComponent);