import {
  container,
  primaryColor,
  grayColor,
  whiteColor,
  defaultBoxShadow
} from '../../assets/js/styleCss';

const carousel = theme => ({
  sliderWrapper: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '5px',
    '& .slide': {
      height: '100%',
      backgroundSize: 'cover !important'
    },
    '& .slide:before': {
      content: '',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: ' linear-gradient(transparent, rgba(0, 0, 0, 0.9))',
      bottom: '0',
      left: '0'
    },
    '& .slider .MuiTypography-h4': {
      transition: 'all 0.3s ease',
      transform: ' translateY(-20px)',
      opacity: '0'
    },
    '& .previousButton, & .nextButton': {
      position: 'absolute',
      top: '50%',
      backgroundColor: grayColor[8],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      transform: 'translateY(-50%)',
      zIndex: '10',
      width: '40px',
      height: '40px',
      cursor: 'pointer',
      '& polygon': {
        fill: grayColor[9]
      },
      '&:hover': {
        ...defaultBoxShadow,
        backgroundColor: primaryColor
      },
      '&:hover polygon': {
        fill: whiteColor
      },
      '& svg': {
        width: '25px',
        height: '25px'
      }
    },

    '& .previousButton': {
      left: '15px',
      [theme.breakpoints.up('md')]: {
        left: '50px'
      }
    },
    '& .nextButton': {
      right: '15px',
      [theme.breakpoints.up('md')]: {
        right: '50px'
      }
    },

    [theme.breakpoints.up('sm')]: {
      height: '100%'
    },
    [theme.breakpoints.up('md')]: {
      height: '100%'
    }
  },
  slideContent: {
    height: '40vh',
    '@media (min-width: 960px)': {
      height: '100%'
    }
  },
  inner: {
    ...container,
    boxSizing: 'border-box',
    position: 'absolute',
    width: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  sliderContent: {
    textAlign: 'center',
    width: '100%'
  },
  headerText: {
    color: whiteColor,
    textTransform: 'capitalize',
    marginBottom: '20px',
    textShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)'
  },
  btn: {
    color: whiteColor,
    backgroundColor: primaryColor,
    textTransform: 'capitalize',
    '&:hover': {
      opacity: '0.8',
      backgroundColor: primaryColor,
      color: whiteColor
    }
  }
});

export default carousel;
