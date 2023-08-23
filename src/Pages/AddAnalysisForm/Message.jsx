/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import * as BsIcons from 'react-icons/bs';
import '../../css/addanalysis.css';

const Message = ({ msg }) => {
	return (
		<div className="sent">
			<span>{msg}</span>
			<BsIcons.BsCheckCircle />
		</div>
	);
};

Message.propTypes = {
	msg: PropTypes.string.isRequired,
};

export default Message;
