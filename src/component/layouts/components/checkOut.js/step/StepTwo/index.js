import React from 'react';
import Header from './Header';
import PaymentMethod from './PaymentMethod';

const index = props => {
  const { decrementStep } = props;
  return (
    <div>
      <Header decrementStep={decrementStep} />
      <PaymentMethod />
    </div>
  );
};

export default index;
