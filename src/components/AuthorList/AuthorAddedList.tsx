import React from 'react'
import Author from "./Author";
import {Col} from 'react-bootstrap';
import {IAuthor} from "../../assets/types/LibraryTypes";

type AuthorsListProps = {
    authors:IAuthor[]
}

const AuthorAddedList:React.FC<AuthorsListProps> = (props) =>{

    const {authors} = props;

    const renderAuthors = () =>{
        if(authors.length === 0){
            return <p><i>No authors listed here</i></p>
        }
      return authors.map((author:IAuthor, Index:number)=>{
          return <Author author={author} key={Index}/>
      })
    };

    return(
        <div>
            <Col className={"mt-2"}>
                {renderAuthors()}
            </Col>
        </div>

        )
};

export default AuthorAddedList;