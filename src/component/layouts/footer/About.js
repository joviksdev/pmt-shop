import React from 'react';
import ListWrapper from './ListWrapper';
import styles from './styles'

// Material-Ui/Core
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const About = () => {
  const classes = useStyles();

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
