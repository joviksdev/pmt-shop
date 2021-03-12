import React from 'react';
import { primaryColor } from '../../assets/js/styleCss';

// Material-UI/Core
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

// Material-UI/Icon
import SearchIcon from '@material-ui/icons/Search';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

const styles = makeStyles({
  searchForm: {
    width: '100%'
  },

  textField: {
    width: '100%',
    '& .MuiOutlinedInput-input': {
      padding: '10px 8px'
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#FFF4F4'
    },
    '&  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    },
    '&  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${primaryColor} !important`
    },
    '&  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${primaryColor} !important`
    }
  },

  textIcon: {
    fontSize: '18px',
    color: primaryColor,
    cursor: 'pointer'
  }
});

const Search = () => {
  const classes = styles();
  return (
    <div>
      <form className={classes.searchForm} noValidate autoComplete='off'>
        <TextField
          className={classes.textField}
          id='outlined-basic'
          variant='outlined'
          placeholder={'Search for products or brands'}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon className={classes.textIcon} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <CameraAltOutlinedIcon className={classes.textIcon} />
              </InputAdornment>
            )
          }}
        />
      </form>
    </div>
  );
};

export default Search;
