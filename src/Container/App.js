import React from 'react';
import CardArray from '../Components/CardArray.js';
import SearchBox from '../Components/SearchBox.js';
import './App.css';
import Scroll from '../Components/Scroll.js';
import ErrorBoundary from '../Components/ErrorBoundary.js';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots :[],
			SearchField : ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			  .then(response => response.json())
			  .then(users => this.setState({robots : users}))
	}

	onSearchChange = (event) =>{
		this.setState({SearchField: event.target.value})
	}

	render() {
			const { robots, SearchField} = this.state;
			const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(SearchField.toLowerCase())
			})
			if(!robots.length){
				return <h2>loading</h2>
			} else {
				return (
					<div className = 'tc'>
					<h1 className='f1'><strong>RoboFriends</strong></h1>
					<SearchBox SearchChange= {this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardArray robots = {filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
					</div>
					);
			}
		
	}
	
}

export default App;
