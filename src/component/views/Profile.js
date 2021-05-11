import React from 'react';
import ProfileWrapper from '../layouts/profile/ProfileWrapper';

import Box from '@material-ui/core/Box';

const Profile = (props) => {
	return (
		<Box>
			<ProfileWrapper {...props} />
		</Box>
	);
};

export default Profile;
