import {Col, Row, Container, Form, Button} from "react-bootstrap";
import React, {useState, useRef} from 'react';
import {Edit, Trash2, XCircle, Plus} from "react-feather";
import {IAuthor} from "../../assets/types/LibraryTypes";

type BookProps = {
    authors: IAuthor[]
}
const Book: React.FC<BookProps> = (Prop: any) => {
    const {authors} = Prop;
    var options = [];
    for (var i = 0; i < authors.length; i++) {
        options.push(<option key={i}>{authors[i].name}</option>);
    }
    const [books, setBooks] = useState<string[]>([]);
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [dispForm, setdispForm] = useState(false);
    const [bookUpdate, setbookUpdate] = useState(false);
    const [bookState, setbookState] = useState('Create');
    const scrollDiv: React.MutableRefObject<any> = useRef()

    const bookList = books.map((book: string, index: number) =>
        <Row className='p-0 mx-1 book' key={index}>
            <Col xs={9} className={'p-0'}>
                <label>{index + 1}.{book}</label>
            </Col>
            <Col xs={3} className={"text-right book-icon p-0"}>
                <Edit className={"text-warning mr-2"} size='20' onClick={() => (updateBook(book))}/>
                <Trash2 className={"text-danger"} size='20' onClick={() => deleteBooks(book)}/>
            </Col>
        </Row>)

    function listAllBooks() {
        if (books.length !== 0) {
            return bookList
        } else {
            return <p className={'m-1'}><i>No Books listed here</i></p>
        }
    }


    function createBooks(event: React.FormEvent) {
        if (!bookUpdate) {
            let newState: string[] = [...books, text];
            setBooks(newState)
            let t = ' '
            setText(t)
        } else {
            books.splice(index, 1, text)
        }
        let t = ''
        setText(t)
        setbookUpdate(false)
        event.preventDefault();
    }

    function deleteBooks(name: string) {
        let newState = books.filter((el: string) => el !== name);
        setBooks(newState)

    }

    function showForm(s: boolean) {
        if (bookUpdate) {
            setbookState('Update')
        } else {
            setbookState('Create')
        }
        let newState = s
        setdispForm(newState)
        scrollDiv.current.scrollIntoView({behavior: 'smooth'})
    }

    function updateBook(book: string) {
        let newState = book
        let index = books.indexOf(book)
        setIndex(index)
        setbookUpdate(true)
        showForm(true)
        setText(newState)
    }

    return (
        <Container className='p-0'>
            <Col className={"m-0 mt-2 p-0"}>
                {listAllBooks()}
            </Col>

            <Row className='mx-0 mt-3 mb-4 add-btn'>
                <Button variant='light' className="text-right p-0 flex-row" onClick={() => showForm(true)}><Plus
                    size={21} color='#234479'/> Add Book</Button>
            </Row>
            <Col style={{display: dispForm ? 'inherit' : 'none'}} className='p-0' xs={10}>
                <Row className=' pb-1 mb-3 mx-1'>
                    <Col xs={10}>
                        <span className='add-book-title pt-2'>
                            {bookState} Book
                            </span>
                    </Col>
                    <Col className='closeBtn text-right p-0' xs={2}>
                        <XCircle color='#363636' className='mt-0 mr-3' onClick={() => showForm(false)}/>
                    </Col>
                </Row>

                <Form className='mx-4' ref={scrollDiv} onSubmit={(e) => createBooks(e)}>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="sm" xs={6} className='label'>
                                Title of the Book
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control size="sm" type="text" value={text}
                                              onChange={e => setText(e.target.value)}/>
                            </Col>
                            <Form.Label column="sm" xs={6} className='label'>
                                ISBN
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control size="sm" type="text"/>
                            </Col>
                            <Form.Label column="sm" xs={6} className='label'>
                                Author
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control size="sm" as="select">
                                    {options}
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Col className='text-right mb-3 p-0' sm={12}>
                        <Button type={"submit"} variant="primary" size="sm" className='create-btn px-3'>
                            {bookState}
                        </Button>
                    </Col>
                </Form>
            </Col>
        </Container>
    )
}

export default Book;