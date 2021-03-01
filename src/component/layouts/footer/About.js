import React from 'react';
import ListWrapper from './ListWrapper';

// Material-Ui/Core
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  container: {
    marginTop: '20px',
    '@media (min-width: 760px)': {
      marginTop: '0px',
      padding: '8px'
    }
  }
});

const About = () => {
  const classes = styles();

  // List Data
  const data = {
    headerText: 'About Pmt',
    list: [
      {
        name: 'Contact us'
      },
      {
        name: 'About us'
      },
      {
        name: 'Terms and Condition'
      },
      {
        name: 'Privacy policy'
      }
    ]
  };
  return (
    <div className={classes.container}>
      <ListWrapper data={data} />
    </div>
  );
};

export default About;
