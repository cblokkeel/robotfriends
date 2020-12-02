import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    searchBoxChange = e => {
        this.setState({ searchfield: e.target.value })
    }
    
    render() {
        const filteredRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className='tc'>
                <h1>Robotfriends</h1>
                <SearchBox searchChange={ this.searchBoxChange } />
                <CardList robots={ filteredRobot } />
            </div>
        );
    }
};

export default App;