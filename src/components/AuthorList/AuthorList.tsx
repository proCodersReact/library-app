import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import AuthorAddedList from "./AuthorAddedList";
import AuthorForm from "./AuthorForm";
import AuthorWelcome from "./AuthorWelcome";
import CreateAuthor from "./CreateAuthor";
import {IAuthor} from "../../assets/types/LibraryTypes";


const AuthorList:React.FC = () =>{

        const initAuthors: IAuthor[] = [];
        const [authors, setAuthors] = useState<IAuthor[]>(initAuthors);
        const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
        const [authorToUpdate, setAuthorToUpdate] = useState<IAuthor | null>(null);
        const [updateAuthorIndex, setUpdateAuthorIndex] = useState<number| null>(null)

        useEffect(()=>{
            if(!authorToUpdate){
                return;
            }
            setIsFormVisible(true);
        },[authorToUpdate,authors]);

        const handleOnCreateClick = () => {
            setIsFormVisible(true);
            setAuthorToUpdate(null);
        };


        const handleOnFormClosed = () => {
            setIsFormVisible((false));
        }

        const handleAuthorAdded = (newAuthor: IAuthor) => {
            const allAuthors: IAuthor[] = authors.slice();
            allAuthors.push(newAuthor)
            setAuthors(allAuthors);
        };

        const handleAuthorDeleted = (index: number) => {
            const allAuthors: IAuthor[] = authors.slice();
            allAuthors.splice(index, 1);
            setAuthors(allAuthors);
        }

        const handleOnUpdateRequest = (index: number) => {
            setAuthorToUpdate(authors[index]);
            setUpdateAuthorIndex(index);
        }

        const handleOnAuthorUpdated = (updatedAuthor: IAuthor, index:number) =>{
            const allAuthors : IAuthor [] = authors.slice();
            allAuthors.splice(index,1, updatedAuthor);
            console.log(authors);
            console.log(allAuthors);
            setAuthors(allAuthors)
        }

        return (

            <Container fluid={true} className={"authors"}>
                <AuthorWelcome/>
                <AuthorAddedList authors={authors} onDeleted={handleAuthorDeleted} onUpdateRequested={handleOnUpdateRequest} />
                <CreateAuthor onClickCreate={handleOnCreateClick}/>
                {isFormVisible &&
                <AuthorForm onClose={handleOnFormClosed} onAuthorAdded={handleAuthorAdded} onAuthorToUpdate={authorToUpdate} onAuthorUpdated={handleOnAuthorUpdated} updateAuthorIndex={updateAuthorIndex}/>}
            </Container>
        )
    }

export default AuthorList;