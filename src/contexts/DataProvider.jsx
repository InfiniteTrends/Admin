/** @format */

import React, { useState, createContext } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<DataContext.Provider
			value={{
				navOpen,
				setNavOpen,
			}}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
