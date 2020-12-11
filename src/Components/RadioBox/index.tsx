import React from 'react';
import './styled.scss';

import {InfoPopup} from '../InfoPopup';

type Item = {
	id: string,
	title: string
	checkedId: string,
	setId: Function,
	desc: string
}


export const Radiobox: React.FC<Item> = ({id, title, checkedId, setId, desc}) =>(
	<div className='radiobox'>
		<input
			id={id}
			name='control'
			type="radio"
			checked={checkedId === id}
			onChange={() => setId(id)}
		/>
		<label htmlFor={id}>{title}</label>
		{desc && 
			<InfoPopup
				desc={desc}
			/>
			}
	</div>
)