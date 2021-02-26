import {
  dangerColor,
  successColor,
  defaultFont,
  secColor,
  grayColor
} from '../styleCss';

const customInputStyle = {
  disabled: {
    '&:before': {
      borderColor: 'transparent !important'
    }
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: grayColor[4] + '!important',
      borderWidth: '1px'
    },
    '&:after': {
      borderColor: secColor
    },
    '& + p': {
      fontWeight: '300'
    }
  },
  underlineNone: {
    '& .MuiInput-underline:before': {
      border: 'none !important'
    },
    '&:hover:not($disabled):before,&:before': {
      border: 'none !important'
    },
    '&:after': {
      border: 'none !important'
    }
  },
  underlineError: {
    '&:after': {
      borderColor: dangerColor[0]
    }
  },
  underlineSuccess: {
    '&:after': {
      borderColor: successColor[0]
    }
  },
  labelRoot: {
    ...defaultFont,
    color: grayColor[3] + ' !important',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.3',
    letterSpacing: 'unset'
  },
  labelRootError: {
    color: dangerColor[0] + ' !important'
  },
  labelRootSuccess: {
    color: successColor[0] + ' !important'
  },
  formControl: {
    verticalAlign: 'unset',
    '.material-icons': {
      color: grayColor[14]
    },
    '& .MuiInput-formControl': {
      background: 'transparent !important'
    },
  },
  input: {
    color: grayColor[14],
    height: 'unset',
    '&,&::placeholder': {
      fontSize: '14px',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.42857',
      opacity: '1'
    },
    '&::placeholder': {
      color: grayColor[3]
    }
  }
};

export default customInputStyle;
