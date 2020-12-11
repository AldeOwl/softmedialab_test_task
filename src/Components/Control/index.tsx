import React from 'react';
import './styled.scss';

import {Radiobox} from '../RadioBox';

type ControlList = {
	id: string,
	setId: Function,
	list: {id: string, title: string, description: string}[];
}


export const Control: React.FC<ControlList> = ({ list, id, setId}) => {
	return (
		<div className="Wrap">
			{list && list.map(item => (
				<Radiobox 
					id={item.id} 
					title={item.title}
					checkedId={id}
					setId={setId}
					desc={item.description}
					/>
				))}
		</div>
	)
}