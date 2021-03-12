import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/FooterWrapper';
import MobileBottomNavbar from '../navbar/MobileBottomNavbar';
import User from './User';
import Wallet from './Wallet';
import Setting from './Setting';
import Account from './Account';

const ProfileWrapper = () => {
  return (
    <div>
      <Header />
      <User />
      <Wallet />
      <Account />
      <Setting />
      <MobileBottomNavbar />
      <Footer />
    </div>
  );
};

export default ProfileWrapper;
