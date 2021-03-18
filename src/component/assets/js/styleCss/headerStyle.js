import {
  container,
  transition,
  link,
  grayColor,
  blackColor,
  secondaryColor,
  whiteColor,
  primaryColor
} from '../styleCss';

const headerStyle = theme => ({
  container: {
    ...container
  },
  headerMainWrapper: {
    backgroundColor: whiteColor
  },
  diplayFlex: {
    display: 'flex',
    alignItems: 'center'
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
    '@media (min-width: 768px)': {
      padding: '8px 0'
    }
  },
  headerIcon: {
    flex: '1'
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
  menuList: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 !important',
    border: 'none'
  },
  menuLink: {
    ...link,
    padding: '10px',
    minHeight: '0px',
    color: grayColor[6],
    fontSize: '14px',
    verticalAlign: 'center',
    display: 'none',
    paddingLeft: '15px',
    '& .MuiSvgIcon-root': {
      marginRight: '5px'
    },
    '&:hover': {
      color: primaryColor
    },
    '& span': {
      fontSize: '8px'
    },
    '@media (min-width: 960px)': {
      display: 'flex'
    }
  },
  menuLinkColumn: {
    padding: '4px 0px',
    minHeight: '0px',
    overFlow: 'auto',
    '& a': {
      ...link,
      color: grayColor[6],
      fontSize: '14px',
      verticalAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& span': {
        fontSize: '10px'
      }
    },
    '&:hover a': {
      color: primaryColor
    },
    '& .MuiSvgIcon-root': {
      marginRight: '10px'
    },
    '@media (min-width: 768px)': {
      padding: '8px 15px',
      '& .MuiSvgIcon-root': {
        marginRight: '0px'
      }
    }
  },
  iconSvg: {
    ...transition
  },
  searchForm: {
    maxWidth: '768px',
    padding: '10px 0',
    margin: 'auto'
  },
  searchIcon: {
    backgroundColor: secondaryColor,
    color: whiteColor,
    '&:hover': {
      backgroundColor: secondaryColor,
      opacity: '0.8'
    }
  },
  rotateSvg: {
    transform: 'rotate(180deg)'
  },

  dropdown: {
    minWidth: '200px'
  },

  dropdownMenu: {
    padding: '8px'
  },

  dropdownItem: {
    borderRadius: '5px !important',
    '&:hover ': {
      backgroundColor: primaryColor
    },
    '& a': {
      textAlign: 'center',
      color: grayColor[6],
      listStyle: 'none',
      width: '100%',
      textTransform: 'capitalize'
    },
    '&:hover a': {
      color: whiteColor
    },
    '& .MuiList-padding': {
      padding: '8px !important'
    }
  },
  option: {
    padding: '8px 0px',
    textTransform: 'uppercase !important',
    display: 'inline-block',
    textAlign: 'center',
    width: '100%',
    position: 'relative',
    '&:before': {
      content: '""',
      left: '0',
      top: '50%',
      transfrom: 'translateY(-50%)',
      position: 'absolute',
      width: '40%',
      height: '2px',
      backgroundColor: grayColor[15]
    },
    '&:after': {
      right: '0 !important',
      content: '""',
      top: '50%',
      transfrom: 'translateY(-50%)',
      position: 'absolute',
      width: '40%',
      height: '2px',
      backgroundColor: grayColor[15]
    }
  },
  categoryWrapper: {
    padding: '15px 0px'
  },
  gridSubcategory: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '5px',
    width: '100%',
    padding: '10px'
  },

  categoryMenuList: {
    marginRight: '10px',
    paddingRight: '10px',
    paddingLeft: '10px'
  },

  categoryBtn: {
    display: 'flex',
    alignItem: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    padding: '5px 10px',
    boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.3)',
    borderRadius: '20px'
  },

  headerInfoList: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    padding: '0px 20px',
    '& a': {
      color: grayColor[6],
      verticalAlign: 'center',
      display: 'inline-block'
    },
    '& .MuiSvgIcon-root': {
      width: '18px !important',
      color: grayColor[6]
    },
    '&:hover, &:hover a': {
      color: `${secondaryColor} !important`,
      cursor: 'pointer'
    },
    '&:hover  .MuiSvgIcon-root': {
      color: `${secondaryColor} !important`
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
  headerSearchWrapper: {
    flex: '1',
    margin: '0px 15px'
  },

  cartNumber: {
    position: 'absolute',
    textAlign: 'center',
    top: '-2px',
    right: '5px',
    backgroundColor: primaryColor,
    color: whiteColor,
    height: '15px',
    width: '15px',
    borderRadius: '100%',
    '@media (min-width: 768px)': {
      top: '-5px',
      right: '-5px'
    }
  },

  verticalLine: {
    '&:after': {
      position: 'absolute',
      content: '""',
      right: '0',
      height: '100%',
      width: '1px',
      backgroundColor: grayColor[15]
    }
  },

  horizontalLine: {
    position: 'relative',
    '&:after': {
      display: 'none',
      position: 'absolute',
      content: '""',
      left: '0px',
      bottom: '0px',
      height: '1px',
      width: '100%',
      backgroundColor: grayColor[9]
    },
    '@media (min-width: 960px)': {
      '&:after': {
        display: 'block'
      }
    }
  },
  horizontalLineTop: {
    '&:after': {
      position: 'absolute',
      content: '""',
      top: '0px',
      height: '1px',
      width: '100%',
      backgroundColor: grayColor[15]
    }
  },

  categoryNavContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  categoriesTogglerWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: secondaryColor
  },
  toggler: {
    position: 'absolute',
    width: '25px',
    height: '25px',
    zIndex: '1000',
    opacity: '0',
    cursor: 'pointer',
    '&:checked + div': {
      transform: 'rotate(135deg)'
    },
    '&:checked + div:before': {
      transform: 'rotate(90deg)',
      top: '0px'
    },
    '&:checked + div:after': {
      display: 'none',
      top: '0px'
    }
  },
  categoryBar: {
    position: 'relative',
    width: '25px',
    height: '2px',
    backgroundColor: whiteColor,
    zIndex: '800',
    transition: 'transform 400ms',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      backgroundColor: whiteColor,
      top: '-8px',
      left: '0'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '80%',
      height: '2px',
      backgroundColor: whiteColor,
      top: '8px',
      left: '0'
    }
  },
  headingText: {
    padding: '0px 30px',
    backgroundColor: blackColor,
    color: whiteColor,
    alignSelf: 'stretch',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  paper: {
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px'
  },
  link: {
    ...link
  }
});

export default headerStyle;
