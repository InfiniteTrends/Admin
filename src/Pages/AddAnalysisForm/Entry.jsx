/** @format */

import React from 'react';
import { Center } from '@chakra-ui/react';

const Entry = ({ value, setEntry }) => {
	return (
		<Center className="form-input">
			<label htmlFor="entry">Entry</label>
			<input
				type="text"
				name="entry"
				id="entry"
				value={value}
				onChange={(e) => setEntry(e.target.value)}
			/>
		</Center>
	);
};

export default Entry;
