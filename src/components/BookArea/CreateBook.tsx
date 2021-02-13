import React from 'react';
import {Button, Row} from "react-bootstrap";
import {Plus} from "react-feather";

type CreateBookProps = {
    onClickCreate:()=>void
}

const CreateBook: React.FC<CreateBookProps> = (props) => {
    return (
        <Row className='mx-0 mt-3 mb-4 add-btn'>
            <Button variant='light' className="text-right p-0 flex-row" onClick={props.onClickCreate}><Plus size={21} color='#234479'/>   Add Book</Button>
        </Row>
    );
};

export default CreateBook;
