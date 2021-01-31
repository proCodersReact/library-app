import { Col, Row } from "react-bootstrap";
import React from "react";
import { Edit, Trash2 } from "react-feather";

const Book: React.FC = () => {

    const Books = ['Book 1 title', 'Book 2 title', 'Book 3 title', 'Book 4 title'];
    const listBooks = Books.map((book, index) =>
        <Row className='pl-1 pr-3 mt-1 book'>
            <Col xs={8}  ><label >{index + 1}. {book}</label></Col>
            <Col xs={4}>
                <Row className='justify-content-end btn-options'>
                    <Col xs={1} className='text-center text-warning clickBtn'><Edit size='20' /></Col>
                    <Col xs={1} className='text-center text-danger clickBtn'><Trash2 size='20' /></Col>
                </Row>
            </Col>
        </Row>);
        
    return (
        <Row >
            <Col className='book-title p-0 my-1'>
                {listBooks}
            </Col>

        </Row>
    )
};
export default Book;