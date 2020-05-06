import React from 'react';
import './Banner.css';
import { Form, Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <div className="banner d-flex">
                <div className="banner-items">
                    <h1>Best food waiting for your belly</h1>
                    <div className="col-md-9 mx-auto">
                        <Form>
                            <Form.Group className="d-flex">
                                <Form.Control className="input-form" type="text" placeholder="Search food items"/>
                                <Button className="search-btn"><span className="search">Search</span></Button>
                            </Form.Group>
                        </Form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;