import React from 'react';
import {Button, Container, Row,Col} from "react-bootstrap";
import Book from "./Book";
import {Plus} from "react-feather";
import BookListForm from "./BookListForm";

const BookListArea: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row as='h3' className='book-list-title pb-1 mt-1 mb-4 mx-1'>
                Books
            </Row>
            <Col className='mt-2'>
                <Book/>
            </Col>
            <Row className='mx-0 mt-3 mb-4 add-btn'>
                <Button variant='light' className="text-right p-0 flex-row"><Plus size={21} color='#234479'/>   Add Book</Button>
            </Row>
            <Col className='p-0 m-0'>
                <BookListForm/>
            </Col>
        </Container>
    );
};

export default BookListArea;
