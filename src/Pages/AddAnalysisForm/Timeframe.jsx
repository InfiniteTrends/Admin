/** @format */

import React from 'react';
import { Center } from '@chakra-ui/react';

const Timeframe = ({ onChangeTf, tfs }) => {
	return (
		<Center className="form-input">
			<label htmlFor="timeframe">Chart Time Frame</label>
			<select name="cypto-pair" onChange={onChangeTf}>
				{tfs.map((option, index) => (
					<option value={option.value} key={index}>
						{option.label}
					</option>
				))}
			</select>
		</Center>
	);
};

export default Timeframe;
