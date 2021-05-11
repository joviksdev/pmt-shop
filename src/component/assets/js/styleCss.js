const hexToRgb = (input) => {
	input = input + '';
	input = input.replace('#', '');
	let hexRegex = /[0-9A-Fa-f]/g;
	if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
		throw new Error('input is not a valid hex color.');
	}
	if (input.length === 3) {
		let first = input[0];
		let second = input[1];
		let last = input[2];
		input = first + first + second + second + last + last;
	}
	input = input.toUpperCase(input);
	let first = input[0] + input[1];
	let second = input[2] + input[3];
	let last = input[4] + input[5];
	return (
		parseInt(first, 16) +
		', ' +
		parseInt(second, 16) +
		', ' +
		parseInt(last, 16)
	);
};

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = '80%';

const drawerMiniWidth = 80;

const transition = {
	transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};

const containerFluid = {
	marginRight: 'auto',
	marginLeft: 'auto',
	'&:before,&:after': {
		display: 'table',
		content: '" "',
	},
	'&:after': {
		clear: 'both',
	},
	'@media (min-width: 768px)': {
		padding: '0px',
	},
};

const container = {
	padding: '0 15px',
	margin: 'auto',
	'@media (min-width: 768px)': {
		width: '750px !important',
	},
	'@media (min-width: 992px)': {
		width: '970px  !important',
	},
	'@media (min-width: 1200px)': {
		width: '1170px  !important',
	},
};

const defaultFont = {
	fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	fontWeight: '300',
	lineHeight: '1.5em',
};
const secondaryColor = '#2a8a85';
const warningColor = [
	'#ff9800',
	'#ffa726',
	'#fb8c00',
	'#ffa21a',
	'#f57c00',
	'#faf2cc',
	'#fcf8e3',
];
const dangerColor = [
	'#f44336',
	'#ef5350',
	'#e53935',
	'#f55a4e',
	'#d32f2f',
	'#ebcccc',
	'#f2dede',
];
const successColor = [
	'#4caf50',
	'#66bb6a',
	'#43a047',
	'#5cb860',
	'#388e3c',
	'#d0e9c6',
	'#dff0d8',
];
const infoColor = [
	'#00acc1',
	'#26c6da',
	'#00acc1',
	'#00d3ee',
	'#0097a7',
	'#c4e3f3',
	'#d9edf7',
];
const roseColor = ['#e91e63', '#ec407a', '#d81b60', '#eb3573', '#c2185b'];
const grayColor = [
	'#999',
	'#777',
	'#3C4858',
	'#AAAAAA',
	'#D2D2D2',
	'#DDD',
	'#555555',
	'#333',
	'#eee',
	'#ccc',
	'#e4e4e4',
	'#E5E5E5',
	'#f9f9f9',
	'#f5f5f5',
	'#495057',
	'#e7e7e7',
	'#212121',
	'#c8c8c8',
	'#505050',
];
const blackColor = '#000';
const blueColor = '#3f51b5';
const whiteColor = '#FFF';
const primaryColor = '#F4843A';
const secColor = '#9b1d93';

const boxShadow = {
	boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
};

const gridContainer = {
	margin: '0 -15px',
	width: 'calc(100% + 20px)',
};

const card = {
	display: 'inline-block',
	position: 'relative',
	width: '100%',
	margin: '25px 0',
	boxShadow: '0 1px 4px 0 rgba(' + hexToRgb(blackColor) + ', 0.14)',
	borderRadius: '6px',
	color: 'rgba(' + hexToRgb(blackColor) + ', 0.87)',
	background: whiteColor,
};

const cardActions = {
	margin: '0 20px 10px',
	paddingTop: '10px',
	borderTop: '1px solid ' + grayColor[8],
	height: 'auto',
	...defaultFont,
};

const cardHeader = {
	margin: '-20px 15px 0',
	borderRadius: '3px',
	padding: '15px',
};

const defaultBoxShadow = {
	boxShadow:
		'0 10px 20px -12px rgba(' +
		hexToRgb(blackColor) +
		', 0.42), 0 3px 20px 0px rgba(' +
		hexToRgb(blackColor) +
		', 0.12), 0 8px 10px -5px rgba(' +
		hexToRgb(blackColor) +
		', 0.2)',
	transition: 'all 150ms ease 0s',
};

const btn = {
	margin: 'auto',
	outline: 'none !important',
	textDecoration: 'none !important',
	listStyleType: 'none !important',
	'&:hover': {
		opacity: '0.8',
	},
};

const svgIcon = {
	width: '30px',
	height: '30px',
	fontSize: '24px',
	...defaultBoxShadow,
	borderRadius: '50%',
	padding: '5px !important',
};

const spinnerIcon = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	'& img': {
		display: 'block',
	},
};

const title = {
	color: grayColor[2],
	textDecoration: 'none',
	fontWeight: '300',
	marginBottom: '0px',
	fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
	'& small': {
		color: grayColor[1],
		fontSize: '65%',
		fontWeight: '400',
		lineHeight: '1',
	},
};

const text = {
	color: grayColor[2],
	textDecoration: 'none',
	fontWeight: '300',
	marginBottom: '0',
	fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
	'& small': {
		color: grayColor[1],
		fontSize: '80%',
		fontWeight: '400',
		lineHeight: '1',
	},
};

const cardTitle = {
	...title,
	marginTop: '0',
	marginBottom: '3px',
	minHeight: 'auto',
};

const cardSubtitle = {
	marginTop: '-.375rem',
};

const icon = {
	borderRadius: '3px',
	backgroundColor: grayColor[0],
	padding: '15px !important',
	marginTop: '-20px',
	marginRight: '15px',
	float: 'left',
};

const cardLink = {
	'& + $cardLink': {
		marginLeft: '1.25rem',
	},
};

const link = {
	textDecoration: 'none !important',
	listStyleType: 'none !important',
	cursor: 'pointer',
};

export {
	hexToRgb,
	//variables
	drawerWidth,
	drawerMiniWidth,
	transition,
	container,
	containerFluid,
	boxShadow,
	card,
	text,
	icon,
	btn,
	gridContainer,
	svgIcon,
	spinnerIcon,
	link,
	defaultFont,
	primaryColor,
	secondaryColor,
	warningColor,
	secColor,
	dangerColor,
	successColor,
	infoColor,
	roseColor,
	grayColor,
	blackColor,
	blueColor,
	whiteColor,
	cardActions,
	cardHeader,
	defaultBoxShadow,
	title,
	cardTitle,
	cardSubtitle,
	cardLink,
};
