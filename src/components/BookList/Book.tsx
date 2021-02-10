import {Col, Row, Container, Form, Button} from "react-bootstrap";
import React, {useState, useRef} from 'react';
import {Edit, Trash2, XCircle, Plus, X} from "react-feather";
import {IAuthor} from "../../assets/types/LibraryTypes";

type BookProps = {
    authors: IAuthor[]
}

type BookType= {
    name:string,
    isbn:string,
    author:IAuthor,
}

const Book: React.FC<BookProps> = (Prop: any) => {

    const {authors} = Prop;
    var options = [];
    for (var i = 0; i < authors.length; i++) {
        options.push(<option key={i}>{authors[i].name}</option>);
    }
    const [books, setBooks] = useState<BookType[]>([]);
    const [name, setName] = useState<string>('');
    const [ISBN, setISBN] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [index, setIndex] = useState(0);
    const [dispForm, setdispForm] = useState(false);
    const [bookName, setbookName] = useState(false);
    const [bookUpdate, setbookUpdate] = useState(false);
    const [bookState, setbookState] = useState('Create');
    const [validated, setValidated] = useState(false);
    const scrollDiv: React.MutableRefObject<any> = useRef()

    const bookList = books.map((book: BookType, index: number) =>
        <Row className='p-0 mx-1 book' key={index}>
            <Col xs={9} className={'p-0'}>
                <label>{index + 1}. {book.name}</label>
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

    function createBooks(event:any) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setbookName(true)
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
        else{
            setbookName(false)
            const newBook:BookType = {name:name,isbn:ISBN,author:{name:author}}
            if(!bookUpdate){
                let newState:BookType[] = [...books, newBook ];
                setBooks(newState)
                let t = ' '
                setName(t)
            }
            else{
                books.splice(index , 1, newBook)
            }
            let t = ''
            setName(t)
            setISBN(t)
            setAuthor(t)
            setbookUpdate(false)
            event.preventDefault();
            setValidated(false);
        }
    }

    function deleteBooks(book: BookType) {
        let newState = books.filter((el: BookType) => el !== book);
        setBooks(newState)

    }

    function checkFormvalidity(event:any) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setbookName(true)
        }
        else{
            setbookName(false)
        }
    }

    function showForm(s :boolean) {
        setValidated(false);
        setbookName(false)
        if(bookUpdate){
            setbookState('Update')
        } else {
            setbookState('Create')
        }
        let newState = s
        setdispForm(newState)
        scrollDiv.current.scrollIntoView({behavior: 'smooth'})
    }

    function updateBook(book: BookType) {
        let index = books.indexOf(book)
        setIndex(index)
        setbookUpdate(true)
        showForm(true)
        setName(books[index].name)
        setISBN(books[index].isbn)
        setAuthor(books[index].author.name)
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
            <Col style={{display: dispForm ? 'inherit' : 'none'}} className='p-0' sm={10}>
                <Row className=' pb-1 mb-3 mx-1'>
                    <Col xs={10} className={'p-0'}>
                        <span className='add-book-title pt-2'>
                            {bookState} Book
                            </span>
                    </Col>
                    <Col className='closeBtn text-right p-0' xs={2}>
                        <XCircle color='#363636' className='mt-0 mr-3' onClick={() => showForm(false)}/>
                    </Col>
                </Row>

                <Form noValidate validated={validated} className='mx-4' ref={scrollDiv} onChange={e => checkFormvalidity(e)} onSubmit={(e) => createBooks(e)}>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="sm" xs={6} className='label'>
                                Title of the Book

                            </Form.Label>
                            <Col style={{ display: bookName? 'inherit' : 'none'}} xs={6} className="warning justify-content-end mt-2 pr-1">
                                <p className='text-right'>All fields are required</p>
                            </Col>
                            <Col sm={12}>

                                <Form.Control className={'bookInput'} size="sm" type="text" value={name} onChange={e => setName(e.target.value)}
                                              required/>

                            </Col>
                            <Form.Label column="sm" lg={12} className='label'>
                                ISBN
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control className={'bookInput'} size="sm" type="text" value={ISBN} onChange={e => setISBN(e.target.value)} required />
                            </Col>
                            <Form.Label column="sm" lg={12} className='label'>
                                Author
                            </Form.Label>
                            <Col sm={12} className='clear-in'>
                                <Form.Control  size="sm" as="select" className={'bookInput bookSelect'} required value={author}  onChange={e => setAuthor(e.target.value)}>
                                    <option value="" disabled selected hidden>Select an Author....</option>
                                    {options}
                                </Form.Control>
                                <button className="clear-btn" onClick={()=>setAuthor('')}><X size={12}/></button>
                                <div className="separator"></div>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Col className='text-right mb-3 p-0' sm={12}>
                        <Button  type={"submit"} variant="primary" size="sm" className='create-btn px-3' >
                            {bookState}
                        </Button>
                    </Col>
                </Form>
            </Col>
        </Container>
    )
}

export default Book;