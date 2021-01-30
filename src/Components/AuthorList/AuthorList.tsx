import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';

class AuthorList extends Component{
    render(){
        return(
            <Row className={"authors"}>
                <Col>
                    <h2>Authors</h2>
                    <hr className="author-title mt-1 mb-4" />
                </Col>
            </Row>
        );
    }
}

export default AuthorList;