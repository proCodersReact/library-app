import React, {useState} from "react";
import ReadingArea from "./components/ReadingArea";
import {Col, Container, Row} from "react-bootstrap";
import AuthorContainer from "./components/AuthorArea/AuthorContainer";
import {IAuthor} from "./assets/types/LibraryTypes";
import BookContainer from "./components/BookArea/BookContainer";

const ClientApp: React.FC = () => {
    const initAuthors: IAuthor[] = [];
    const [authors, setAuthors] = useState<IAuthor[]>(initAuthors);

    const handleSetAuthors = (newAuthors:IAuthor[]) =>{
        setAuthors(newAuthors)
    }



    return (
        <Container className='welcome-area' fluid={true}>
            <ReadingArea/>
            <Row className='flex-column-reverse flex-sm-row'>
                <Col sm={6} className='book-container-class'><BookContainer authors={authors}/></Col>
                <Col sm={6} className='author-container-class'><AuthorContainer authors={authors}
                                                                                setAuthors={handleSetAuthors}/></Col>
            </Row>
        </Container>
    )
};
export default ClientApp;

