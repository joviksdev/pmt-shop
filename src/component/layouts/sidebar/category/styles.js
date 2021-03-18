import {
  primaryColor,
  link,
  grayColor,
  whiteColor
} from '../../../assets/js/styleCss';

const styles = () => ({
  drawer: {
    width: '280px !important',
    height: '100%',
    color: primaryColor,
    backgroundColor: whiteColor,
    padding: '10px',
    '@media (min-width: 576px)': {
      width: '480px !important'
    },
    '@media (min-width: 768px)': {
      width: '620px !important'
    },
    '@media (min-width: 992px)': {
      width: '920px  !important'
    }
  },
  headerText: {
    textTransform: 'uppercase',
    color: primaryColor,
    fontFamily: '"Montserrat", serif',
    fontWeight: '900',
    display: 'flex',
    fontSize: '18px',

    '@media (min-width: 768px)': {
      '& span': {
        fontSize: '30px',
        fontWeight: '900'
      }
    },
    '@media (min-width: 960px)': {
      '& span': {
        fontSize: '34px',
        fontWeight: '900'
      }
    }
  },
  appLogo: {
    width: '18px',
    marginRight: '5px',
    display: 'flex',
    alignItems: 'center',
    '& img': {
      display: 'block',
      width: '100%',
      verticalAlign: 'middle'
    },
    '@media (min-width: 768px)': {
      width: '22px'
    },
    '@media (min-width: 960px)': {
      width: '25px'
    }
  },
  textHeader: {
    color: primaryColor,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: '15px 0px 0px'
  },
  item: {
    padding: '6px 0px !important'
  },
  link: {
    ...link,
    display: 'flex',
    alignItems: 'center',
    color: grayColor[6]
  },
  icon: {
    width: '18px',
    marginRight: '10px',
    fill: primaryColor,
    display: 'inline-block'
  }
});

export default styles;
