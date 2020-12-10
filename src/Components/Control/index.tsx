import React from 'react';
import './styled.scss';

import {Radiobox} from '../RadioBox';

type List = {
	list: {id: string, title: string}[];
}


export const Control: React.FC<List> = ({ list }) => {
	return (
		<div className="Wrap">
			{list && list.map(item => (
				<Radiobox id={item.id} title={item.title}/>
				))}
		</div>
	)
}