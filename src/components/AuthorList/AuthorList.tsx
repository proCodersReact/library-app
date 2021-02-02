import React, {Component} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import AuthorAddedList from "./AuthorAddedList";
import {Plus} from "react-feather";
import AuthorForm from "./AuthorForm";

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
                <Row className='mx-0 mt-3 mb-4 add-btn'>
                    <Button variant='light' className="text-right p-0 flex-row"><Plus size={21} color='#234479'/>   Add Author</Button>
                </Row>
                <AuthorForm/>

            </Container>
        );
    }
}

export default AuthorList;