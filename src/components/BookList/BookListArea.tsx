import React from 'react';
import {Container, Row,Col} from "react-bootstrap";
import Book from "./Book";
import {IAuthor} from "../../assets/types/LibraryTypes";

type BookListAreaProps = {
    authors:IAuthor[]
}
const BookListArea:React.FC<BookListAreaProps> = (Prop:any) =>{
    const {authors} = Prop;
    return (
        <Container fluid={true}>
            <Row as='h3' className='book-list-title pb-1 mt-1 mb-4 mx-1'>
                Books
            </Row>
            <Col className='mt-2'>
                <Book authors={authors}/>
            </Col>
        </Container>
    );
};

export default BookListArea;
