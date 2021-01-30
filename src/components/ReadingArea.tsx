import React from "react";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Image from "react-bootstrap/cjs/Image";
import original_library from "../assets/images/original_library.jpg";

// ReadingArea contains header and image.

const ReadingArea: React.FC = () => {
    return(
        <div className="reading-area">
            <Container fluid={true}>
                <Row>
                    <Col xs={12}>
                        <h1 className="text-center my-2">My Library</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="px-0">
                        <Image src={original_library} className="library-img"/>
                    </Col>
                    <Col className="text-lg-right mt-1">
                        <span>Photo Credit <a href="#">Isuru Sathsara</a></span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
export default ReadingArea;
