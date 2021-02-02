import React from 'react';
import {Container, Row,Col} from "react-bootstrap";
import Book from "./Book";
//import {Plus} from "react-feather";
//import BookListForm from "./BookListForm";

const BookListArea: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row as='h3' className='book-list-title pb-1 mt-1 mb-4 mx-1'>
                Books
            </Row>
            <Col className='mt-2'>
                <Book/>
            </Col>
            
        </Container>
    );
};

export default BookListArea;
