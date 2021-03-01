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

const PaymentMethod = () => {
  const classes = styles();

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
    <div className={classes.container}>
      <ListWrapper data={data} />
    </div>
  );
};

export default PaymentMethod;
