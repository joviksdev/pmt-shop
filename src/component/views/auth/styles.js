import {
  btn,
  container,
  grayColor,
  primaryColor,
  whiteColor,
  blueColor,
  defaultBoxShadow
} from '../../assets/js/styleCss';

const styles = () => ({
  container: {
    ...container,
    flex: '1',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '15px',
    marginBottom: '15px'
  },
  gridItem: {
    margin: 'auto'
  },

  cardHidden: {
    opacity: '0',
    transform: 'translate3d(0, -60px, 0)'
  },
  showcase: {
    backgroundColor: primaryColor
  },
  title: {
    textAlign: 'center',
    color: primaryColor,
    marginBottom: '20px',
    textTransform: 'uppercase'
  },
  text: {
    textAlign: 'center',
    margin: '15px 0px',
    color: grayColor[6],
    '& span': {
      color: primaryColor
    }
  },
  btn: {
    ...btn,
    color: whiteColor,
    backgroundColor: primaryColor,
    width: '100%',
    '&:hover': {
      backgroundColor: primaryColor,
      opacity: '0.8'
    }
  },
  option: {
    textAlign: 'center',
    width: '70%',
    margin: '20px auto',
    color: grayColor[6],
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '0px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '45%',
      height: '2px',
      backgroundColor: grayColor[9]
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      right: '0px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '45%',
      height: '2px',
      backgroundColor: grayColor[9]
    }
  },
  link: {
    color: primaryColor,
    textDecoration: 'none',
    listStyle: 'none'
  },
  visibilityIcon: {
    color: grayColor[6],
    fontSize: '17px',
    cursor: 'pointer'
  },
  svgIcon: {
    minWidth: 'initial !important',
    padding: '8px',
    borderRadius: '50%',
    margin: '0 15px',
    color: primaryColor,
    ...defaultBoxShadow
  },
  blueColor: {
    color: blueColor
  },
  skyblue: {
    color: 'skyblue'
  }
});

export default styles;
