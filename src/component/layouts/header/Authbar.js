import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

// Material-UI/Icon
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { primaryColor, container } from '../../assets/js/styleCss';

const styles = makeStyles({
	container: {
		'& > div': {
			...container,
			width: '100%',
			display: 'flex',
			alignItems: 'center',
		},
		paddingTop: '10px',
		paddingBottom: '10px',
		boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
	},
	appLogo: {
		width: '18px',
		marginRight: '5px',
		display: 'flex',
		alignItems: 'center',
		'& img': {
			display: 'block',
			width: '100%',
			verticalAlign: 'middle',
		},
		'@media (min-width: 768px)': {
			width: '22px',
		},
		'@media (min-width: 960px)': {
			width: '25px',
		},
	},
	headerText: {
		textTransform: 'uppercase',
		color: primaryColor,
		fontFamily: '"Montserrat", serif',
		fontWeight: '900',
		display: 'flex',
		fontSize: '18px',
		cursor: 'pointer',

		'@media (min-width: 768px)': {
			'& span': {
				fontSize: '30px',
				fontWeight: '900',
			},
		},
		'@media (min-width: 960px)': {
			'& span': {
				fontSize: '34px',
				fontWeight: '900',
			},
		},
	},
});

const Authbar = () => {
	const classes = styles();
	const history = useHistory();
	return (
		<div className={classes.container}>
			<div>
				<div style={{ marginRight: '10px' }}>
					<Hidden implementation='css' mdUp>
						<ArrowBackIosIcon
							onClick={() => window.history.back()}
							style={{ verticalAlign: 'middle' }}
						/>
					</Hidden>
				</div>
				<Typography
					onClick={() => history.push('/')}
					className={classes.headerText}
					variant='h5'
					component='h2'
				>
					<div className={classes.appLogo}>
						<img src={logo} alt='app logo' />
					</div>
					<span> PMT Shop</span>
				</Typography>
			</div>
		</div>
	);
};

export default Authbar;
