import React from 'react';
import NewsLetterSubcription from './NewsLetterSubcription';
import FooterMain from './FooterMain';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  container: {
    marginBottom: '50px',
    '@media (min-width: 760px)': {
      marginBottom: '0px'
    }
  }
});

const FooterWrapper = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <NewsLetterSubcription />
      <FooterMain />
    </div>
  );
};

export default FooterWrapper;
