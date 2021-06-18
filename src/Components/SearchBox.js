import React from'react';

const SearchBox = ({SearchChange}) => {
	return (
		<input
			className= 'bg-lightest-blue pa3 b--light-green bw2' 
			type='search' 
			placeholder = 'Search Robots'
			onChange = {SearchChange} />
		);
}

export default SearchBox;
