import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {Plus} from "react-feather";

type CreateBookProps = {
    onClickCreate: () => void
}

const CreateBook: React.FC<CreateBookProps> = (props) => {
    return (
        <Row className='mx-0 mb-2 mb-md-4 mt-1 add-btn'>
            <Col className={'p-0 m-0'}>
                <Button variant='light' className="text-right p-0 pt-1 flex-row" onClick={props.onClickCreate}><Plus
                    size={21} color='#234479'/> Add Book</Button>
            </Col>
        </Row>
    );
};

export default CreateBook;
