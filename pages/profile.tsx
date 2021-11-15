import { connect } from 'react-redux';
import { Metadata } from '../components/common/common.metadata';
import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { ProfileHeader } from '../components/profile/profile.header';
import { ProfileStats } from '../components/profile/profile.stats';
import { ProfileNavigation } from '../components/profile/profile.navigation';
import { ProfileList } from '../components/profile/profile.list';

export interface ProfileI {
  accounts: string[],
  dankflair: any[],
  dankfusion: any[],
  profileInput: string;
}

export function ProfileComponent({ accounts, dankflair, dankfusion, profileInput }: ProfileI) {
  return (
    <>
      <Metadata/>
      <Header tab="profile"/>
      <PageContainer>
        <ProfileHeader address={accounts[0]}/>
        <ProfileStats dankflair={dankflair} dankfusion={dankfusion}/>
        <ProfileNavigation/>
        <ProfileList dankflair={dankflair} dankfusion={dankfusion} filter={profileInput}/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export const ProfileState = state => ({
  accounts: state.profile.accounts,
  dankflair: state.profile.dankflair,
  dankfusion: state.profile.dankfusion,
  profileInput: state.profile.profileInput,
})

export const Profile = connect(ProfileState)(ProfileComponent);

export default Profile;