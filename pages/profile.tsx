import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { ProfileHeader } from '../components/profile/profile.header';

export function Profile() {
  return (
    <>
      <Header tab="profile"/>
      <PageContainer>
        <ProfileHeader/>
      </PageContainer>
    </>
  )
}

export default Profile;