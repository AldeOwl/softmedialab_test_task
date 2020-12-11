import React, { useState } from 'react';
import './styled.scss';

type InfoPopupType = {
	desc: string,
}

export const InfoPopup: React.FC<InfoPopupType> = ({ desc }) => {
	const [active, setActive] = useState(false);

	const toggleActive = ():void => {
		setActive(prev => !prev);
	}

	return (
		<>
		<button className="info-btn" onClick={() => toggleActive()}>
			<i>i</i>
		</button>
		<div className={active ? 'popup popup-active' : 'popup'}>
			<p className="popup-text">
				{desc}
			</p>
		</div>
		</>
	)
}