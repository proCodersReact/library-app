import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import AuthorList from "./AuthorList";
import AuthorForm from "./AuthorForm";
import AuthorWelcome from "./AuthorWelcome";
import CreateAuthor from "./CreateAuthor";
import {IAuthor} from "../../assets/types/LibraryTypes";

type AuthorsListProps = {
    authors: IAuthor[];
    setAuthors: (newAuthors: IAuthor[]) => void;
}
const AuthorContainer: React.FC<AuthorsListProps> = (props) => {
    const {authors, setAuthors} = props;
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const [authorToUpdate, setAuthorToUpdate] = useState<IAuthor | null>(null);
    const [updateAuthorIndex, setUpdateAuthorIndex] = useState<number | null>(null)

    useEffect(() => {
        if (!authorToUpdate) {
            return;
        }
        setIsFormVisible(true);
    }, [authorToUpdate]);

    const handleOnCreateClick = () => {
        setIsFormVisible(true);
        setAuthorToUpdate(null);
    };

    const handleOnFormClosed = () => {
        setIsFormVisible(false);
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
        setIsFormVisible(true);
    }

    const handleOnAuthorUpdated = (updatedAuthor: IAuthor, index: number) => {
        const allAuthors: IAuthor [] = authors.slice();
        allAuthors.splice(index, 1, updatedAuthor);
        setAuthors(allAuthors)
    }

    return (
        <Container fluid={true} className={"authors px-sm-1 px-xl-4"}>
            <AuthorWelcome/>
            <AuthorList authors={authors} onDeleted={handleAuthorDeleted}
                        onUpdateRequested={handleOnUpdateRequest}/>
            <CreateAuthor onClickCreate={handleOnCreateClick}/>
            {isFormVisible &&
            <AuthorForm onClose={handleOnFormClosed}
                        onAuthorAdded={handleAuthorAdded}
                        onAuthorToUpdate={authorToUpdate}
                        onAuthorUpdated={handleOnAuthorUpdated}
                        updateAuthorIndex={updateAuthorIndex}/>}
        </Container>
    )
}

export default AuthorContainer;