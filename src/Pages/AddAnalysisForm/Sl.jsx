/** @format */

import React from 'react';
import { Center } from '@chakra-ui/react';

const Sl = ({ value, setSl }) => {
	return (
		<Center className="form-input">
			<label htmlFor="sl">Stop Loss</label>
			<input
				type="text"
				name="sl"
				id="tp"
				value={value}
				onChange={(e) => setSl(e.target.value)}
			/>
		</Center>
	);
};

export default Sl;
