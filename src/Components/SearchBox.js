import React from'react';

const SearchBox = ({SearchChange}) => {
	return (
		<input
			className= 'bg-lightest-blue pa3 b--light-green bw2' 
			type='search' 
			placeholder = 'Search Here'
			onChange = {SearchChange} />
		);
}

export default SearchBox;
