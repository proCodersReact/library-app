import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {IAuthor} from "../../assets/types/LibraryTypes";

type AuthorProps = {
    author:IAuthor
}

const Author:React.FC<AuthorProps> = (props) =>{
    const {author} = props;
    return(
        <Row className={"author pt-1 pl-0"}>
            <Col xs={9} className={"pl-0"}>
                <label>{author.name}</label>
            </Col>
            <Col xs={3} className={"text-right author-icon"}>
                <i className={"feather icon-edit text-warning mr-2"}/>
                <i className={"feather icon-trash-2 text-danger"}/>
            </Col>
        </Row>
    )
};

export default Author;