import React from 'react'
import Author from "./Author";
import {Col, Row} from 'react-bootstrap';
import {IAuthor} from "../../assets/types/LibraryTypes";

type AuthorsListProps = {
    authors:IAuthor[]
    onDeleted: (index:number) =>void
    onUpdateRequested:(index:number) => void
}

const AuthorList:React.FC<AuthorsListProps> = (props) =>{

    const {authors, onDeleted, onUpdateRequested} = props;

    const renderAuthors = () => {
        if (authors.length === 0) {
            return <p className='empty-msg m-0 p-0 mx-1 pt-1'><i>No authors listed here</i></p>
        }
        return (
            <Row className={'p-0 m-0 mt-4 mb-4'}>
                <Col className={'p-0 m-0'}>
                    {authors.map((author: IAuthor, Index: number) => {
                        return <Author author={author}
                                       key={Index}
                                       onDeleted={onDeleted}
                                       index={Index}
                                       onUpdateRequest={onUpdateRequested}
                        />
                    })}
                </Col>
            </Row>
        );
    };

    return (
        <React.Fragment>
            {renderAuthors()}
        </React.Fragment>
    )
};

export default AuthorList;