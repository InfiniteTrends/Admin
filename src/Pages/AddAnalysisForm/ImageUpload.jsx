/** @format */

import React from 'react';
import { Center } from '@chakra-ui/react';
import * as AiIcons from 'react-icons/ai';

const ImageUpload = ({ onChangeImage, imageName }) => {
	return (
		<Center className="drop-zone">
			<div>
				<label htmlFor="image">
					<AiIcons.AiOutlinePlus />
				</label>
				<input
					type="file"
					name="image"
					id="image"
					onChange={onChangeImage}
					style={{ visibility: 'hidden' }}
				/>
			</div>
			<aside>
				<h4>Image:</h4>
				<span>{imageName}</span>
			</aside>
		</Center>
	);
};

export default ImageUpload;
