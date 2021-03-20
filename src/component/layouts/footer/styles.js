import {
  defaultBoxShadow,
  primaryColor,
  grayColor,
  container,
  whiteColor
} from '../../assets/js/styleCss';

const styles = () => ({
  container: {
    marginBottom: '15px',
    '@media (min-width: 760px)': {
      marginBottom: '0px'
    }
  },
  subContainer: {
    marginTop: '5px',
    '@media (min-width: 760px)': {
      marginTop: '0px',
      padding: '8px'
    }
  },
  subScriptionContainer: {
    backgroundColor: grayColor[4],
    padding: '20px 0px',
    color: grayColor[2]
  },
  gridContainer: {
    ...container,
    display: 'flex',
    alignItems: 'center'
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px',
    borderRadius: '5px',
    backgroundColor: grayColor[7],
    ...defaultBoxShadow
  },
  form: {
    maxWidth: '600px',
    display: 'flex',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: primaryColor,
    color: whiteColor,
    marginLeft: '5px',
    '&:hover': {
      backgroundColor: primaryColor
    }
  },
  text: {
    '@media (min-width: 960px)': {
      marginBottom: '0px'
    }
  },
  headerText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: grayColor[6],
    fontSize: '14px'
  },
  list: {
    padding: '0px',
    '& li': {
      padding: '0px'
    }
  },
  svgIcon: {
    minWidth: 'initial !important',
    padding: '8px',
    borderRadius: '50%',
    margin: '0 10px',
    fontSize: '14px',
    color: grayColor[9],
    backgroundColor: grayColor[7],
    ...defaultBoxShadow,
    '&:hover': {
      backgroundColor: primaryColor
    }
  }
});

export default styles;
