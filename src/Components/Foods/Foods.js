import React from 'react';
import './Foods.css';
import { CardDeck, Card } from 'react-bootstrap';

const Foods = (props) => {
    const {price, name, images, shortDetails, fullDetails} = props.food;
    return (
        <div className="card">
                <CardDeck>
                    <Card>
                        <Card.Img className="imgs" variant="top" src={images}alt=""/>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{shortDetails}</Card.Text>
                            <Card.Text>$ {price}</Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
        </div>
    );
};

export default Foods;