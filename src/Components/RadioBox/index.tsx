import React from 'react';
import './styled.scss';

type Item = {
	id: string,
	title: string
}


export const Radiobox: React.FC<Item> = ({id, title}) =>(
	<div className='Radiobox'>
		<input
			id={id}
			name='control'
			type="radio"
			// checked={driversLimit === 'limit'}
			// onChange={() => setDriversLimit('driversLimit', 'limit')}
		/>
		<label htmlFor={id}>{title}</label>
	</div>
)