/** @format */

import React from 'react';
import { Center } from '@chakra-ui/react';

const CryptoPair = ({ onChangeCrypto, cpo }) => {
	return (
		<Center className="form-input">
			<label htmlFor="cypto-pair">Pair</label>
			<select name="cypto-pair" onChange={onChangeCrypto}>
				{cpo.map((option, index) => (
					<option value={option.value} key={index}>
						{option.label}
					</option>
				))}
			</select>
		</Center>
	);
};

export default CryptoPair;
