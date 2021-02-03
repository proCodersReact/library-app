import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import AuthorAddedList from "./AuthorAddedList";
import AuthorForm from "./AuthorForm";
import AuthorWelcome from "./AuthorWelcome";
import CreateAuthor from "./CreateAuthor";

const AuthorList = () => {

    const [isFormVisible, setIsFormVisible ] = useState(false);

    const handleOnCreateClick = () =>{
      setIsFormVisible(!isFormVisible);
    };

    const handleOnFormClosed = () =>{
        setIsFormVisible((false));
    }

    return(

        <Container fluid={true} className={"authors"}>
            <AuthorWelcome/>
            <AuthorAddedList/>
            <CreateAuthor onClickCreate={handleOnCreateClick}/>
            {isFormVisible && <AuthorForm onClose={handleOnFormClosed}/>}
        </Container>
    )
};

export default AuthorList;