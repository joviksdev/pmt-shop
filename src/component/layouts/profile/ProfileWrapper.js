import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/FooterWrapper';
import MobileBottomNavbar from '../navbar/MobileBottomNavbar';
import User from './User';
import Wallet from './Wallet';
import Setting from './Setting';
import Account from './Account';

import Box from '@material-ui/core/Box';

const ProfileWrapper = (props) => {
	return (
		<div>
			<Header hideSearch={true} />
			<MobileBottomNavbar />

			<Box>
				<User />
				<Wallet />
				<Account />
				<Setting />
			</Box>
			<Footer />
		</div>
	);
};

export default ProfileWrapper;
