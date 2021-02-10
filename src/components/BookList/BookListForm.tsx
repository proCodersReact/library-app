import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

const BookListForm: React.FC = () => {
    return (
        <Col className='p-0' md={8}>
            <Row className=' pb-1 mb-3 mx-2'>
                <Col xs={10} className={'p-0'}>
                            <span className='add-book-title pt-2'>
                                Create Book
                            </span>
                </Col>
                <Col className='closeBtn text-right p-0' xs={2}>
                    <XCircle color='#363636' className='m-0'/>
                </Col>
            </Row>
            <Form className='mx-4'>
                <Form.Group>
                    <Form.Row className='ml-3'>
                        <Col xs={12}>
                            <Row xs={12}>
                                <Form.Label column="sm" xs={12} className='label p-0'>
                                    Title of the Book
                                </Form.Label>
                            </Row>
                            <Row xs={12}>
                                <Form.Control className='fluid' size="sm" type="text"/>
                            </Row>
                        </Col>
                        <Col xs={12}>
                            <Row xs={12}>
                                <Form.Label column="sm" lg={12} className='label p-0'>
                                    ISBN
                                </Form.Label>
                            </Row>

                            <Row xs={12}>
                                <Form.Control size="sm" type="text"/>
                            </Row>
                        </Col>
                        <Col xs={12}>
                            <Row xs={12}>
                                <Form.Label column="sm" lg={12} className='label p-0'>
                                    Author
                                </Form.Label>
                            </Row>
                            <Row xs={12}>
                                <Form.Control size="sm" as="select">
                                </Form.Control>
                            </Row>
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
