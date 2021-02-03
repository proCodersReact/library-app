import React from 'react'
import Author from "./Author";
import {Col} from 'react-bootstrap';
import {IAuthor} from "../../assets/types/LibraryTypes";

const AuthorAddedList:React.FC = () =>{

    const authors:IAuthor[] = [{name:"John Doe"},{name:"Jane Doe"},{name:"Jeewantha Lahiru"}];

    const renderAuthors = () =>{
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