import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

const BookListForm: React.FC = () => {
    return (
        <Col className='p-0' sm={10}>
            <Row className=' pb-1 mb-3 mx-1'>
                <Col sm={10}>
                            <span className='add-book-title pt-2'>
                                Create Book
                            </span>
                </Col>
                <Col className='closeBtn text-right p-0' sm={2}>
                    <XCircle color='#363636' className='mt-2 mr-3'/>
                </Col>
            </Row>
            <Form className='mx-4'>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="sm" lg={12} className='label'>
                            Title of the Book
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control size="sm" type="text"/>
                        </Col>
                        <Form.Label column="sm" lg={12} className='label'>
                            ISBN
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control size="sm" type="text"/>
                        </Col>
                        <Form.Label column="sm" lg={12} className='label'>
                            Author
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control size="sm" as="select">
                            </Form.Control>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Col className='text-right mb-3 p-0' sm={12}>
                    <Button variant="primary" size="sm" className='create-btn px-3'>
                        Create
                    </Button>
                </Col>
            </Form>
        </Col>
    );
};

export default BookListForm;
