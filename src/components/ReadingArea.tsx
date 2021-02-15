import React from "react";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import welcomeAreaImg from "../assets/images/WelcomeAreaImg.jpg";

const ReadingArea: React.FC = () => {
    return (
        <Row xs={12}>
            <Col as={"h1"} xs={12} className='title text-center p-0 mt-2 mb-2 mb-lg-3'>
                My Library
            </Col>
            <Col as={"img"} src={welcomeAreaImg} xs={12} className='p-0'/>
            <Col xs={12} className='credit text-right mt-1'><span>Photo by <a
                href="https://unsplash.com/@annahunko?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Anna Hunko</a> on <a
                href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></Col>
        </Row>
    )
};
export default ReadingArea;
