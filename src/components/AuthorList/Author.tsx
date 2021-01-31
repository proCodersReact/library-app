import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';

class Author extends Component{
    render(){
        return(
            <Row className={"author pt-1 pl-0"}>
                <Col xs={9} className={"pl-0"}>
                    <label>1. Author name</label>
                </Col>
                <Col xs={3} className={"text-right author-icon"}>
                    <i className={"feather icon-edit text-warning mr-2"}/>
                    <i className={"feather icon-trash-2 text-danger"}/>
                </Col>
            </Row>
        );
    }
}

export default Author;