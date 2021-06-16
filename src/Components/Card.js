import React from 'react';

const Card = ({id, name, email}) => {
	return (
			<div className = "tc bg-light-green o-100 dib br3 ma2 pd3 grow bw-2 shadow-5">
				<img src ={`https://robohash.org/${id}`} alt = "sufiyan"/>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		);
}

export default Card;