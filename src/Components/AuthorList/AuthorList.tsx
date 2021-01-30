import React, {Component} from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import AuthorAddedList from "./AuthorAddedList";

class AuthorList extends Component{
    render(){
        return(
            <Container fluid={true} className={"authors"}>
                <Row as='h3' className='book-list-title pb-1 mt-1 mb-4 mx-1'>
                    Authors
                </Row>
                <Col className='mt-2'>
                    <AuthorAddedList/>
                </Col>

            </Container>
        );
    }
}

export default AuthorList;