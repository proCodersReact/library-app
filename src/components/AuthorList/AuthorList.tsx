import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import AuthorAddedList from "./AuthorAddedList";
import AuthorForm from "./AuthorForm";
import AuthorWelcome from "./AuthorWelcome";
import CreateAuthor from "./CreateAuthor";
import {IAuthor} from "../../assets/types/LibraryTypes";


const AuthorList = () => {

    const initAuthors:IAuthor[] = [];
    const [authors, setauthors] = useState<IAuthor[]>(initAuthors);

    const [isFormVisible, setIsFormVisible ] = useState(false);

    const handleOnCreateClick = () =>{
      setIsFormVisible(!isFormVisible);
    };

    const handleOnFormClosed = () =>{
        setIsFormVisible((false));
    }

    const handleAuthorAdded = (newAuthor:IAuthor) => {
        const allAuthors:IAuthor[] = authors.slice();
        allAuthors.push(newAuthor)
        setauthors(allAuthors);
    };

    const handleAuthorDeleted = (index: number) =>{
        const allAuthors:IAuthor[] = authors.slice();
        allAuthors.splice(index,1);
        setauthors(allAuthors)
    }

    return(

        <Container fluid={true} className={"authors"}>
            <AuthorWelcome/>
            <AuthorAddedList authors={authors} onDeleted={handleAuthorDeleted}/>
            <CreateAuthor onClickCreate={handleOnCreateClick}/>
            {isFormVisible && <AuthorForm onClose={handleOnFormClosed} onAuthorAdded={handleAuthorAdded}/>}
        </Container>
    )
};

export default AuthorList;