import React from 'react';
import ListWrapper from './ListWrapper';
import styles from './styles';

// Material-Ui/Core
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const PaymentMethod = () => {
  const classes = useStyles();

  // List Data
  const data = {
    headerText: 'Payment method',
    list: [
      {
        name: 'Pmt pay'
      },
      {
        name: 'Wallet'
      },
      {
        name: 'Master card'
      },
      {
        name: 'Verve'
      }
    ]
  };
  return (
    <div>
      <ListWrapper data={data} />
    </div>
  );
};

export default PaymentMethod;
