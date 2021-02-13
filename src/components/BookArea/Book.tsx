import {Col, Row} from "react-bootstrap";
import React from 'react';
import {Edit, Trash2} from "react-feather";
import {IBook} from "../../assets/types/LibraryTypes";
import handleOnDelete from "../../assets/utils/handleOnDelete";

type BookProps = {
    book: IBook,
    index: number,
    onDeleted: (index: number) => void
    onUpdateRequest: (index: number) => void
}

const Book: React.FC<BookProps> = (props) => {
    const {book, index, onDeleted, onUpdateRequest} = props;
    return (
        <Row className='mx-1 py-1 book'>
            <Col xs={8} className='p-0'>
                <label className='book-text p-0 m-0'>{index + 1}. {book.name}</label>
            </Col>
            <Col xs={4} className='p-0 justify-content-end btn-options pr-3'>
                <Col xs={1} className='text-warning clickBtn'>
                    <Edit size='20'
                          onClick={() => onUpdateRequest(index)}
                    />
                </Col>
                <Col xs={1} className='text-danger clickBtn'>
                    <Trash2 size='20'
                            onClick={() => handleOnDelete(index, onDeleted)}
                    />
                </Col>
            </Col>
        </Row>
    )
}

export default Book;