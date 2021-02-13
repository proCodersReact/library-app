import React, {useEffect, useState} from 'react';

import {Container} from "react-bootstrap";
import {IAuthor, IBook} from "../../assets/types/LibraryTypes";
import BookWelcome from "./BookWelcome";
import BookList from "./BookList";
import BookForm from "./BookForm";
import CreateBook from "./CreateBook";

type BookContainerProps = {
    authors: IAuthor[],
}

const BookContainer: React.FC <BookContainerProps> = (props) => {

    const {authors} = props;
    const initBooks: IBook[] = [];
    const [books, setBooks] = useState<IBook[]>(initBooks);
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const [bookToUpdate, setBookToUpdate] = useState<IBook | null>(null);
    const [updateBookIndex, setUpdateBookIndex] = useState<number | null>(null);

    useEffect(() => {
        if (!bookToUpdate) {
            return
        }
        setIsFormVisible(true)
    }, [bookToUpdate]);

    const handleOnCreateClick = () => {
        setIsFormVisible(!isFormVisible);
        setBookToUpdate(null)
    }
    const handleOnFormClosed = () => {
        setIsFormVisible(false);
    }

    const handleBookAdded = (newBook: IBook) => {
        const allBooks: IBook[] = books.slice();
        allBooks.push(newBook)
        setBooks(allBooks);
    };

    const handleBookDeleted = (index: number) => {
        const allBooks: IBook[] = books.slice();
        allBooks.splice(index, 1);
        setBooks(allBooks);
    }
    const handleOnUpdateRequest = (index: number) => {
        setBookToUpdate(books[index]);
        setUpdateBookIndex(index);
        setIsFormVisible(true);
    }
    const handleOnBookUpdated = (updatedBook: IBook, index: number) => {
        const updatedBooks: IBook [] = books.slice();
        updatedBooks.splice(index, 1, updatedBook);
        setBooks(updatedBooks)
    }

    return (
        <Container fluid={true} className={"books"}>
            <BookWelcome/>
            <BookList books={books} onDeleted={handleBookDeleted} onUpdateRequested={handleOnUpdateRequest} />
            <CreateBook onClickCreate={handleOnCreateClick}/>
            {isFormVisible &&
            <BookForm onClose={handleOnFormClosed} authorList={authors} onBookAdded={handleBookAdded} onBookToUpdate={bookToUpdate} onBookUpdated={handleOnBookUpdated} updateBookIndex={updateBookIndex}/>}
        </Container>
    );
};

export default BookContainer;
