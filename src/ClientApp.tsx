import React, {useState} from "react";
import ReadingArea from "./components/ReadingArea";
import {Col, Container, Row} from "react-bootstrap";
import AuthorContainer from "./components/AuthorArea/AuthorContainer";
import {IAuthor} from "./assets/types/LibraryTypes";
import BookContainer from "./components/BookArea/BookContainer";

const ClientApp: React.FC = () => {
    const initAuthors: IAuthor[] = [];
    const [authors, setAuthors] = useState<IAuthor[]>(initAuthors);
    return(
        <Container className='welcome-area' fluid={true}>
            <ReadingArea/>
            <Row>
                <Col sm={6} className='px-4'><BookContainer authors={authors}/></Col>
                <Col sm={6} className='px-4'><AuthorContainer authors={authors} setAuthors={setAuthors}/></Col>
            </Row>
        </Container>
    )
};
export default ClientApp;

