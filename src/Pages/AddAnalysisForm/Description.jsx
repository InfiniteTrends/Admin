/** @format */

import React from 'react';
import { Center } from '@chakra-ui/react';

const Description = ({ value, setDescription }) => {
	return (
		<Center className="txt-area">
			<label htmlFor="description">Description</label>
			<textarea
				name="description"
				id="description"
				value={value}
				onChange={(e) => setDescription(e.target.value)}></textarea>
		</Center>
	);
};

export default Description;
