import React from 'react';
import Header from './Header';
import AddressDetail from './AddressDetail';
import DeliveryMethod from './DeliveryMethod';
import ShipmentDetails from './ShipmentDetails';
import Button from './ProceedBtn';

const index = props => {
  const { incrementStep } = props;
  return (
    <div style={{ marginBottom: '10px' }}>
      <Header />
      <AddressDetail />
      <DeliveryMethod />
      <ShipmentDetails />
      <Button incrementStep={incrementStep} />
    </div>
  );
};

export default index;
