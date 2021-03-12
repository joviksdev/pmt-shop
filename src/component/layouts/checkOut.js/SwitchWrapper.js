import React, { useState } from 'react';
import StepOne from './step/stepOne';
import StepTwo from './step/StepTwo';

const SwitchWrapper = () => {
  const [step, setStep] = useState(1);

  const [checkoutDetails, setCheckoutDetails] = useState({
    deliveryMethod: '',
    shipmentDetails: null
  });

  // Step Handler
  const incrementStep = () => setStep(step + 1);
  const decrementStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return (
        <StepOne
          checkoutDetails={checkoutDetails}
          setCheckoutDetails={setCheckoutDetails}
          incrementStep={incrementStep}
        />
      );

    case 2:
      return <StepTwo step={step} decrementStep={decrementStep} />;

    default:
      return <StepOne />;
  }
};

export default SwitchWrapper;
