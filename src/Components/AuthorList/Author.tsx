import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';

class Author extends Component{
    render(){
        return(
            <Row className={"author"}>
                <Col xs={9}>
                    <label>1. Author name</label>
                </Col>
                <Col xs={3} className={"text-right"}>
                    <i className={"feather icon-edit text-warning mr-3"}/>
                    <i className={"feather icon-trash-2 text-danger"}/>
                </Col>
            </Row>
        );
    }
}

export default Author;