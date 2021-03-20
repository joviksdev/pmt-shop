import React from 'react';
import NewsLetterSubcription from './NewsLetterSubcription';
import FooterMain from './FooterMain';
import styles from './styles';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const FooterWrapper = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NewsLetterSubcription />
      <FooterMain />
    </div>
  );
};

export default FooterWrapper;
