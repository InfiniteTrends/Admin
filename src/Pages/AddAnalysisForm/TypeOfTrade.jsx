/** @format */

import React from 'react';
import { Center } from '@chakra-ui/react';

const TypeOfTrade = ({ value, setTypeOfTrade }) => {
	return (
		<Center className="form-input">
			<label htmlFor="type-of-trade">Type of trade</label>
			<input
				type="text"
				name="type-of-trade"
				id="type-of-trade"
				value={value}
				onChange={(e) => setTypeOfTrade(e.target.value)}
			/>
		</Center>
	);
};

export default TypeOfTrade;
