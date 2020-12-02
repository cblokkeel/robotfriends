import React from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ robots: users })
            })
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
                <h1 className='f1'>Robotfriends</h1>
                <SearchBox searchChange={ this.searchBoxChange } />
                <CardList robots={ filteredRobot } />
            </div>
        );
    }
};

export default App;