import React from 'react';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll';
import SearchBox from '../Components/SearchBox';
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    searchBoxChange = e => this.setState({ searchfield: e.target.value })
    
    render() {
        const { robots, searchfield } = this.state
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return (
            <div className='tc'>
                <h1 className='f1'>Robotfriends</h1>
                <SearchBox searchChange={ this.searchBoxChange } />
                <Scroll>
                    <CardList robots={ filteredRobot } />   
                </Scroll>
            </div>
        );
    }
};

export default App;