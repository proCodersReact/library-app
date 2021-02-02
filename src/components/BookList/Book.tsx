import { Col, Row, Container, Form, Button } from "react-bootstrap";
import React, { useState } from 'react';
import { Edit, Trash2, XCircle, Plus } from "react-feather";



const Book = () => {
    const [books, setBooks] = useState(['gdg','shda']);
    const [text, setText] = useState('');

    

    function createBooks() {
        let newState = [...books, text];
        setBooks(newState)
        let t = ''
        setText(t)
    }

    function deleteBooks(name:string) {
        let newState = books.filter((el: string) => el !== name);
        setBooks(newState)
       
    }

    return (
        <Container>
            {
                books.map((book: string, index: number) =>
                    <Row className='pl-1 pr-3 mt-1 book' key={index}>
                        <Col xs={8}  ><label >{index + 1}.{book}</label></Col>
                        <Col xs={4}>
                            <Row className='justify-content-end btn-options'>
                                <Col xs={1} className='text-center text-warning clickBtn'><Edit size='20' /></Col>
                                <Col xs={1} className='text-center text-danger clickBtn'><Trash2 size='20' 
                                onClick={() => deleteBooks(book)}/></Col>
                            </Row>
                        </Col>
                    </Row>)
            }
            <Row className='mx-0 mt-3 mb-4 add-btn'>
                <Button variant='light' className="text-right p-0 flex-row"><Plus size={21} color='#234479' />   Add Book</Button>
            </Row>
            <Col className='p-0' sm={10}>
                <Row className=' pb-1 mb-3 mx-1'>
                    <Col sm={10}>
                        <span className='add-book-title pt-2'>
                            Create Book
                            </span>
                    </Col>
                    <Col className='closeBtn text-right p-0' sm={2}>
                        <XCircle color='#363636' className='mt-2 mr-3' />
                    </Col>
                </Row>


                <Form className='mx-4'>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="sm" lg={12} className='label'>
                            Title of the Book
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control size="sm" type="text" value={text} onChange={e => setText(e.target.value)}/>
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
                    <Button variant="primary" size="sm" className='create-btn px-3' onClick={() => createBooks()}>
                        Create
                    </Button>
                </Col>
            </Form>


                
            </Col>
        </Container>
    )
}

export default Book;