import React from 'react';
import CustomInput from '../../../../../customComponent/CustomInput';

// Material-UI/Core
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

// MAterial-UI/Icon
import SendIcon from '@material-ui/icons/Send';

import { grayColor, primaryColor } from '../../../../../../assets/js/styleCss';

const styles = makeStyles({
  submitBtn: {
    padding: '5px',
    color: grayColor[2],
    borderRadius: '5px',
    '&:hover': {
      color: primaryColor
    }
  }
});

const InlineForm = () => {
  const classes = styles();
  return (
    <form>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <CustomInput
            variant='outlined'
            placeholder='Enter brand name'
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={3} style={{ display: 'flex', alignItems: 'center' }}>
          <Button className={classes.submitBtn}>
            <SendIcon />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default InlineForm;
