import { whiteColor } from '../styleCss';

const categoryStyle = () => ({
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
  categoryBtn: {
    display: 'flex',
    alignItem: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    padding: '5px 10px',
    boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.3)',
    borderRadius: '20px'
  },
  menuList: {
    display: 'flex',
    alignItems: 'center',
    padding: '0px !important'
  },
  categoryMenuList: {
    marginRight: '10px',
    paddingRight: '10px',
    paddingLeft: '10px'
  },
  sidebar: {
    backgroundColor: whiteColor,
    padding: '10px',
    borderRadius: '5px',
    '& ul': {
      padding: '0px'
    },
    '& li': {
      fontSize: '14px'
    }
  },
  rotateSvg: {
    transform: 'rotate(180deg)'
  }
});

export default categoryStyle;
