import {Col, Row} from "react-bootstrap";
import React from "react";
import {Edit, Trash2} from "react-feather";

const Book: React.FC = () => {
    return(
        <Row className='pl-1 pr-3 mt-1 book'>
            <Col xs={8} className='book-title p-0 my-1'>
                1. Book 1 title
            </Col>
            <Col xs={4}>
                <Row className='justify-content-end btn-options'>
                    <Col xs={1}  className='text-center text-warning clickBtn'><Edit size='20'/></Col>
                    <Col xs={1} className='text-center text-danger clickBtn'><Trash2 size='20'/></Col>
                </Row>
            </Col>
        </Row>
    )
};
export default Book;