/** @format */

import React from 'react';
import { Center } from '@chakra-ui/react';

const Recommendation = ({ value, setRecommendation }) => {
	return (
		<Center className="txt-area">
			<label htmlFor="recommendation">Recommendation (Strategy)</label>
			<textarea
				name="recommendation"
				id="recommendation"
				value={value}
				onChange={(e) => setRecommendation(e.target.value)}></textarea>
		</Center>
	);
};

export default Recommendation;
