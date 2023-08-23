/** @format */

import React from 'react';
import { Center } from '@chakra-ui/react';

const Tp = ({ value, setTp }) => {
	return (
		<Center className="form-input">
			<label htmlFor="tp">Take Profit</label>
			<input
				type="text"
				name="tp"
				id="tp"
				value={value}
				onChange={(e) => setTp(e.target.value)}
			/>
		</Center>
	);
};

export default Tp;
