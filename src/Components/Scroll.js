import React from 'react';

const Scroll = (props) => {
	return (
		<div style = {{overflowY : 'scroll', borderTop: '3px solid green', height : '800px', marginTop: '10px'}}>
			{props.children}
		</div>
		);
};

export default Scroll;