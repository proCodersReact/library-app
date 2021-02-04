import React, {FormEvent, useEffect, useState} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import {IAuthor} from "../../assets/types/LibraryTypes";
import {XCircle} from "react-feather";

type CreateFormProps = {
    onClose: () => void,
    onAuthorAdded: (author:IAuthor)=>void,
    onAuthorToUpdate: IAuthor | null,
    updateAuthorIndex : number | null,
    onAuthorUpdated : (updatedAuthor:IAuthor, index:number)=>void,
}

const AuthorForm:React.FC<CreateFormProps> = (props) =>{

    const [authorName, setAuthorName] = useState<string|null>(null);

    useEffect(()=>{
        if(!props.onAuthorToUpdate){
            setAuthorName(null);
            return;
        }
        setAuthorName(props.onAuthorToUpdate.name);
    },[props.onAuthorToUpdate]);

    const handleOnNameChange = (name:string)=>{
        setAuthorName(name);
    }
    const handleOnCreate = (e:FormEvent) =>{
        e.preventDefault();
        if(!authorName){
            return;
        }

        if(props.onAuthorToUpdate && props.updateAuthorIndex !== null){
            props.onAuthorUpdated({...props.onAuthorToUpdate,name:authorName},props.updateAuthorIndex);
            return;
        }

        const newAuthor: IAuthor = {name:authorName};
        props.onAuthorAdded(newAuthor);
        setAuthorName(null);

    };


    return(
        <Col className='p-0' sm={10}>
            <Row className=' pb-1 mb-3 mx-1'>
                <Col sm={10}>
                    <span className='add-book-title pt-2'>
                        {!props.onAuthorToUpdate && 'Create Author'}
                        {props.onAuthorToUpdate && 'Update Author'}
                    </span>
                </Col>
                <Col className='closeBtn text-right p-0' sm={2}>
                    <XCircle color='#363636' className='mt-2 mr-3'/>
                </Col>
            </Row>
            <Form className='mx-4' onSubmit={handleOnCreate}>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="sm" lg={12} className='label'>
                            Name of the Author
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control size={"sm"}
                                          onChange={
                                              (event:React.ChangeEvent<HTMLInputElement>)=>
                                                  handleOnNameChange(event.target.value)
                                          }
                                          value={authorName?authorName:''}
                            />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Col className='text-right mb-3 p-0' sm={12}>
                    <Button type={"submit"} variant={"primary"} size={"sm"} className={"px-3 pt-1"}>
                        {!props.onAuthorToUpdate && 'Create'}
                        {props.onAuthorToUpdate && 'Update'}
                    </Button>
                </Col>
            </Form>
        </Col>
    )
};

export default AuthorForm;