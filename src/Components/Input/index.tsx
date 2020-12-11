import React from 'react';
import './styled.scss';

type InputText = {
	value: string,
	handler: Function,
	description: string,
}

export const Input: React.FC<InputText> = ({ value, handler, description }) => {
	return (
		<div className="wrapper">
			<input 
				type="text" 
				className='text-input'
				value={value}
				onChange={(e) => {
					const {value} = e.target;	
					if(/^\d{0,10}$/.test(value)) return handler(value)
				}}
			/>
	<p className='description'>{`₽ ${description}`}</p>
		</div>
	)
}