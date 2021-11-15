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
import { FlairOwnership, FusionNft, setActiveNft, setActiveFusionNft } from '../../redux/redux.contract';

export interface NFTI {
  contract: any;
  fusionContract: any;
  activeNft: FlairOwnership,
  activeFusionNft: FusionNft,
  accounts: string[],
  setActiveNft(payload: any): void;
  setActiveFusionNft(payload: any): void;
}

export function FusionNFTComponent({ contract, fusionContract, activeNft, activeFusionNft, accounts, setActiveNft, setActiveFusionNft }: NFTI) {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    (async () => {
      const fusionPayload = await get(`/api/owner/fusion/${id}`);
      setActiveFusionNft(fusionPayload.body);
    })();
  }, [id])

  return (
    <> 
      <Metadata/>
      <Header/>
      <PageContainer>
        <NftFeature activeFusionNft={activeFusionNft} id={id as string}/>
        <NftBid contract={contract} fusionContract={fusionContract} activeFusionNft={activeFusionNft} accounts={accounts}/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export const FusionNFTState = state => ({
  contract: state.contract.contract,
  fusionContract: state.contract.fusionContract,
  activeNft: state.contract.activeNft,
  activeFusionNft: state.contract.activeFusionNft,
  accounts: state.profile.accounts,
});

export const FusionNFT = connect(FusionNFTState, { setActiveNft, setActiveFusionNft })(FusionNFTComponent);

export default FusionNFT;