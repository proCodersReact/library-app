import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';

type CreateFormProps = {
    onClose: () => void
}

const AuthorForm:React.FC<CreateFormProps> = (props) =>{
    return(
        <Row>
            <Col xs={12} md={9} className={"create-form"}>
                <Row>
                    <Col xs={12}>
                        <label className={"create-title"}>Create Author</label>
                        <i className="feather icon-x-circle float-right mt-2" onClick={props.onClose}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={{span:11, offset:1}}>
                        <Form.Label className={"mb-0"}>Name of the Author</Form.Label>
                        <Form.Control size={"sm"}/>
                    </Col>
                    <Col xs={12} className={"text-right pt-2"}>
                        <Button variant={"primary"} size={"sm"} className={"px-3 pt-1"}>Create</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default AuthorForm;