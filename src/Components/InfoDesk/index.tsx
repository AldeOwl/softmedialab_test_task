import React from 'react';
import './styled.scss';

type InfoDeskType = {
	value: string,
	ndfl: boolean,
}

export const InfoDesk: React.FC<InfoDeskType> = ({ value, ndfl }) => {
	return (
		<div className="desk">
			<p className="coast">{ndfl ? value + ' ₽' : value ? parseInt(value) - (parseInt(value)/100*13) + ' ₽' : ''}
				<span> сотрудник будет получать на руки</span>
			</p>
			<p className="coast">{value && parseInt(value)/100*13 + ' ₽'}
				<span> НДФЛ, 13% от оклада</span>
			</p>
			<p className="coast">{ndfl ? parseInt(value) + (parseInt(value)/100*13) + ' ₽' : parseInt(value) - (parseInt(value)/100*13) + (parseInt(value)/100*13) + ' ₽'}
				<span> за сотрудника в месяц</span>
			</p>
		</div>
	)
}