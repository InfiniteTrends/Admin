/** @format */

import React from 'react';
import { Center } from '@chakra-ui/react';

const TradingPrefrence = ({ onChangePrefrence, tpo }) => {
	return (
		<Center className="form-input">
			<label htmlFor="prefrence">Trading Prefrence</label>
			<select name="prefrence" onChange={onChangePrefrence}>
				{tpo.map((option, index) => (
					<option value={option.value} key={index}>
						{option.label}
					</option>
				))}
			</select>
		</Center>
	);
};

export default TradingPrefrence;
