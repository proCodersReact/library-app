import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {IAuthor} from "../../assets/types/LibraryTypes";

type AuthorProps = {
    index: number,
    author:IAuthor
    onDeleted: (index:number) =>void
    onUpdateRequest:(index:number) => void
}



const Author:React.FC<AuthorProps> = (props) =>{
    const {author,onDeleted,index,onUpdateRequest} = props;



    return(
        <Row className={"author pt-1 pl-0"}>
            <Col xs={9} className={"pl-0"}>
                <label>{index+1}. {author.name}</label>
            </Col>
            <Col xs={3} className={"text-right author-icon"}>
                <i className={"feather icon-edit text-warning mr-2"} onClick={()=>onUpdateRequest(index)}/>
                <i className={"feather icon-trash-2 text-danger"} onClick={()=>onDeleted(index)}/>
            </Col>
        </Row>
    )
};

export default Author;