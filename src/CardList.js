import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardsArray = robots.map(robot => {
        return (
            <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}/>
        )
    })

    return (
        <React.Fragment>
            {cardsArray}
        </React.Fragment>
    );
};

export default CardList;