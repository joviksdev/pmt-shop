import React from 'react';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  container: {
    textAlign: 'center',
    '@media (min-width: 760px)': {
      textAlign: 'initial '
    }
  }
});

const SortFilter = () => {
  const classes = styles();
  return <div style={{ textAlign: 'center' }}>Sort and Filter</div>;
};

export default SortFilter;
