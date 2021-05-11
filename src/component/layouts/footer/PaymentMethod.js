import React from 'react';
import ListWrapper from './ListWrapper';

// Material-Ui/Core

const PaymentMethod = () => {
	// List Data
	const data = {
		headerText: 'Payment method',
		list: [
			{
				name: 'Pmt pay',
			},
			{
				name: 'Wallet',
			},
			{
				name: 'Master card',
			},
			{
				name: 'Verve',
			},
		],
	};
	return (
		<div>
			<ListWrapper data={data} />
		</div>
	);
};

export default PaymentMethod;
