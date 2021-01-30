import React, {Component} from 'react';
import {Col, Container, Row} from 'react-bootstrap';

class AuthorList extends Component{
    render(){
        return(
            <Row className={"authors"}>
                <Col>
                    <h2>Authors</h2>
                    <hr className="author-title mt-2" />
                </Col>
            </Row>
        );
    }
}

export default AuthorList;