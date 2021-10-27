import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { ProfileHeader } from '../components/profile/profile.header';
import { ProfileStats } from '../components/profile/profile.stats';
import { ProfileNavigation } from '../components/profile/profile.navigation';
import { ProfileList } from '../components/profile/profile.list';

export function Profile() {
  return (
    <>
      <Header tab="profile"/>
      <PageContainer>
        <ProfileHeader/>
        <ProfileStats/>
        <ProfileNavigation/>
        <ProfileList/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default Profile;