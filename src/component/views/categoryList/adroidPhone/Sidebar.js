import React from 'react';
import RadioGroup from '../../../layouts/products/categories/layouts/RadioWrapper';

// Form
import RangeForm from '../../../layouts/products/categories/layouts/RangeForm';
import InlineForm from '../../../layouts/products/categories/layouts/InlineForm';

// MAterial-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import { whiteColor } from '../../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    backgroundColor: whiteColor,
    padding: '10px',
    borderRadius: '5px'
  }
});

const Sidebar = () => {
  const classes = styles();

  // Price
  const priceLists = [
    'below 2000',
    '2000 - 5000',
    '10000 - 20000',
    '20000 - 40000',
    '40000 above'
  ];

  // Brand LIst
  const brandLists = [
    'Samgung',
    'Apple',
    'Techno',
    'Nokia',
    'Lg',
    'Itel',
    'Oppo',
    'gionee',
    'vivo'
  ];

  // Screen Size
  const screenSizeList = [
    '10.1 inches',
    '7 inches',
    '6.4 inches',
    '6.1 inches',
    '5.88 inches',
    '5.5 inches',
    '4.7 inches'
  ];

  const ramSizes = ['12GB', '8GB', '6GB', '4GB', '2GB', '1GB'];

  return (
    <div className={classes.container}>
      <RadioGroup
        isBorderBottom={true}
        headerText={'Price'}
        lists={priceLists}
        Component={RangeForm}
      />
      <RadioGroup
        isBorderBottom={true}
        headerText={'Brand'}
        lists={brandLists}
        Component={InlineForm}
      />
      <RadioGroup
        isBorderBottom={true}
        headerText={'Screen Size'}
        lists={screenSizeList}
      />
      <RadioGroup
        isBorderBottom={false}
        headerText={'Ram Size'}
        lists={ramSizes}
      />
    </div>
  );
};

export default Sidebar;
