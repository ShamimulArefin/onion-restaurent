import React, { useState } from 'react';
import './FoodItems.css';
import fakedata from '../../fakedata/fakedata';
import Foods from '../Foods/Foods';
import { Nav } from 'react-bootstrap';

const FoodItems = () => {
    const [selectType, setselectType] = useState("Breakfast");
    const selectfood = fakedata.filter(food => food.type === selectType);


    return (
        <div>
            <Nav className="justify-content-center itemNav" activeKey="Breakfast">
                <Nav.Item>
                <Nav.Link className="itemBtn" eventKey="Breakfast" onClick={()=> setselectType("Breakfast")}>Breakfast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className="itemBtn" eventKey="Lunch" onClick={()=> setselectType("Lunch")}>Lunch</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className="itemBtn" eventKey="Dinner" onClick={()=> setselectType("Dinner")}>Dinner</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                </Nav.Item>
            </Nav>
                {
                    selectfood.map(foods => <Foods food ={foods}></Foods>)
                }
        </div>
    );
};

export default FoodItems;