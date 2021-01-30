import React from "react";
import ReadingArea from "./components/ReadingArea";
import {Col, Container, Row} from "react-bootstrap";
import BookListArea from "./components/BookList/BookListArea";
import AuthorList from "./components/AuthorList/AuthorList";

const ClientApp: React.FC = () => {
    return(
        <Container className='welcome-area' fluid={true}>
            <ReadingArea/>
            <Row>
                <Col sm={6} className='p-0'><BookListArea/></Col>
                <Col sm={6} className='p-0'><AuthorList/></Col>
            </Row>
        </Container>

    )
};
export default ClientApp;

