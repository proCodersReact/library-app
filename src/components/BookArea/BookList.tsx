import React from 'react';
import {Row,Col} from "react-bootstrap";
import Book from "./Book";
import {IBook} from "../../assets/types/LibraryTypes";

type BookListProps = {
    books: IBook[],
    onDeleted: (index:number) =>void
    onUpdateRequested:(index:number) => void
}

const BookList:React.FC<BookListProps> = (props) =>{
    const renderBooks = () => {
        if(props.books.length === 0){
            return <p className='empty-msg m-0 p-0 mx-1 pt-1'><i>No books listed here</i></p>
        }
        return (
            <Row className={'p-0 m-0 mt-2 mb-1'}>
                <Col className={'p-0 m-0'}>
                    {props.books.map((book:IBook, Index:number) => {
                        return <Book book={book} key={Index} index={Index} onDeleted={props.onDeleted} onUpdateRequest={props.onUpdateRequested}/>
                    })}
                </Col>
            </Row>
        )
    }

    return (
        <React.Fragment>
            {renderBooks()}
        </React.Fragment>
    );
};

export default BookList;
