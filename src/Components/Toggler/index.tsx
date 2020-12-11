import React from 'react';
import './styled.scss';

type Status = {
	titleOff: string,
	titleOn: string,
	status: boolean,
	setStatus: Function
}
export const Toggler: React.FC<Status> = ({ titleOff, titleOn, status, setStatus }) => {
	return (
		<div className="wrapper">
			<h1 style={status ? {'color': 'lightgrey'} : {'color':'#000'}}>{titleOff}</h1>
			<div 
				className={!status ? 'toggler-btn': 'toggler-btn active'}
				onClick={() => setStatus(!status)}>
				<span/>
			</div>
				<h1 style={status ? {'color': '#000'} : {'color':'lightgrey'}}>{titleOn}</h1>
		</div>
	)
}