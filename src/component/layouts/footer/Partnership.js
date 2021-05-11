import React from 'react';
import ListWrapper from './ListWrapper';

const Partnership = () => {
	// List Data
	const data = {
		headerText: 'Make money with PMT',
		list: [
			{
				name: 'Become a PMT affiliate',
			},
		],
	};
	return (
		<div>
			<ListWrapper data={data} />
		</div>
	);
};

export default Partnership;
