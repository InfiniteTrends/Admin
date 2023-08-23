/** @format */

import React from 'react';
import { Center } from '@chakra-ui/react';

const Outlook = ({ value, setOutlook }) => {
	return (
		<Center className="txt-area">
			<label htmlFor="outlook"> Outlook </label>
			<textarea
				name="outlook"
				id="outlook"
				value={value}
				onChange={(e) => setOutlook(e.target.value)}></textarea>
		</Center>
	);
};

export default Outlook;
