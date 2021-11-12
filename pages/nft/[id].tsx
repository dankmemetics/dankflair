import { get } from 'superagent';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Metadata } from '../../components/common/common.metadata';
import { PageContainer } from "../../components/brand/brand.app";
import { Header } from '../../components/common/common.header';
import { Footer } from '../../components/common/common.footer';
import { NftFeature } from '../../components/nft/nft.feature';
import { NftBid } from '../../components/nft/nft.bid';
import { NftHistory } from '../../components/nft/nft.history';
import { setActiveNft } from '../../redux/redux.contract';

export interface NFTI {
  contract: any;
  activeNft: {
    id: number | null,
    owner: string | null,
  },
  accounts: string[],
  setActiveNft(payload: any): void;
}

export function NFTComponent({ contract, activeNft, accounts, setActiveNft }: NFTI) {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    (async () => {
      const payload = await get(`/api/owner/dank/${id}`);
      setActiveNft(payload.body);
    })();
  }, [id])

  return (
    <> 
      <Metadata/>
      <Header/>
      <PageContainer>
        <NftFeature activeNft={activeNft}/>
        <NftBid contract={contract} activeNft={activeNft} accounts={accounts}/>
        <NftHistory/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export const NFTState = state => ({
  contract: state.contract.contract,
  activeNft: state.contract.activeNft,
  accounts: state.profile.accounts,
});

export const NFT = connect(NFTState, { setActiveNft })(NFTComponent);

export default NFT;