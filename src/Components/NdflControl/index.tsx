import React from 'react';
import './styled.scss';

type Status = {
	status: boolean
}
export const NdflControl: React.FC<Status> = ({ status }) => {
	return (
		<div  className='toggler'>
			<div className='toggler-btn'>
				<div className={!status ? 'percent': ''}
					// onClick={() => this.props.onChange([companyKey, type.key, region.key, 't'], 0)}
					>
					<span />
				</div>
				<div className={status ? 'rubble': ''}
					// onClick={() => this.props.onChange([companyKey, type.key, region.key, 't'], 1)}
					>
					<span />
							</div>
			</div>
		</div>
	)
}