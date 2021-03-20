import React from 'react';
import ListWrapper from './ListWrapper';
import styles from './styles';

// Material-Ui/Core
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Partnership = () => {
  const classes = useStyles();

  // List Data
  const data = {
    headerText: 'Make money with PMT',
    list: [
      {
        name: 'Become a PMT affiliate'
      }
    ]
  };
  return (
    <div>
      <ListWrapper data={data} />
    </div>
  );
};

export default Partnership;
