import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {IAuthor} from "../../assets/types/LibraryTypes";
import {Edit, Trash2} from "react-feather";
import 'react-confirm-alert/src/react-confirm-alert.css';
import handleOnDelete from "../../assets/utils/handleOnDelete";

type AuthorProps = {
    index: number,
    author: IAuthor
    onDeleted: (index: number) => void
    onUpdateRequest: (index: number) => void
}

const Author: React.FC<AuthorProps> = (props) => {
    const {author, onDeleted, index, onUpdateRequest} = props;

    return (
        <Row className={"author mx-1 py-1"}>
            <Col xs={8} className={'p-0'}>
                <label className='author-text p-0 m-0'>{index + 1}. {author.name}</label>
            </Col>
            <Col xs={4} className={"p-0 justify-content-end btn-options pr-3"}>
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
};

export default Author;