import {
  container,
  primaryColor,
  whiteColor,
  defaultBoxShadow,
  grayColor,
  link,
  text,
  title
} from '../../assets/js/styleCss';

const styles = () => ({
  container: {
    marginTop: '15px',
    marginBottom: '15px'
  },
  productContainer: {
    ...container,
    cursor: 'pointer',
    '@media (min-width: 768px)': {
      backgroundColor: 'unset',
      width: '750px !important'
    }
  },
  headerTextContainer: {
    backgroundColor: '#FFF4F4',
    ...container,
    '@media (min-width: 768px)': {
      backgroundColor: 'unset',
      width: '750px !important'
    }
  },
  headerText: {
    backgroundColor: '#FFF4F4',
    padding: '8px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& p': {
      ...title,
      color: primaryColor,
      fontWeight: 'bold'
    },
    '& span': {
      color: primaryColor
    },
    '@media (min-width: 600px)': {
      padding: '8px 10px'
    }
  },
  gridContainer: {
    marginTop: '8px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '10px',
    '@media (min-width: 760px)': {
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  },
  gridItem: {},
  discountText: {
    padding: '5px',
    borderRadius: '5px',
    fontSize: '10px',
    color: whiteColor,
    backgroundColor: primaryColor,
    position: 'absolute',
    top: '5px',
    left: '5px'
  },
  bgWhite: {
    backgroundColor: whiteColor
  },
  card: {
    position: 'relative',
    border: `1px solid ${grayColor[8]}`,
    height: '100%',
    boxShadow: 'none',
    '&:hover': {
      ...defaultBoxShadow,
      zIndex: '100'
    }
  },
  cardContent: {
    padding: '10px !important'
  },
  imageWrapper: {
    width: '120px',
    height: '120px',
    '@media (min-width: 768px)': {
      width: '140px !important',
      height: '140px !important'
    },
    '@media (min-width: 992px)': {
      width: '160px  !important',
      height: '160px  !important'
    },
    '@media (min-width: 1200px)': {
      width: '180px  !important',
      height: '180px  !important'
    },
    margin: 'auto',
    '& img': {
      display: 'block',
      width: '100%'
    }
  },
  description: {},
  cardText: {
    ...text,
    marginBottom: '0px',
    textTransform: 'capitalize'
  },
  price: {
    fontWeight: 'bold',
    fontSize: '17px'
  },
  link: {
    ...link
  }
});

export default styles;
