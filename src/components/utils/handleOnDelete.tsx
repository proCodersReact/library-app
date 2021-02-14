import {confirmAlert} from "react-confirm-alert";
import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Trash2, X} from "react-feather";

const handleOnDelete = (index: number, onDeleted: (index: number) => void) => {
    confirmAlert({
        customUI: ({onClose}) => {
            return (
                <Container fluid className='custom-ui-delete'>
                    <Row xs='3' className={'notifier-header p-3'}>
                        <Col xs={2} className={'p-0 align-content-center'}>
                            <Trash2 size={25} color='white'/>
                        </Col>
                        <Col xs={8} className={'p-0'}>
                            <h1 className='m-0 mt-1 text-center'>Confirm Delete</h1>
                        </Col>
                        <Col xs={2} className={'p-0 text-right'}>
                            <X color='white' size={25} onClick={onClose} className='confirm-close-btn'/>
                        </Col>
                    </Row>

                    <Row className={'p-sm-3 pt-4'}>
                        <Col xs={12}>
                            <p className='confirm-msg text-center'>
                                Are you sure to <b>delete</b> this?
                            </p>
                        </Col>
                    </Row>

                    <Row className='text-sm-right text-center p-2 p-sm-3'>
                        <Col className={'confirm-btn text-sm-right'}>
                            <Button
                                variant={'light'}
                                size={'sm'}
                                onClick={onClose}
                                className={'mr-2'}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant={'danger'}
                                onClick={() => {
                                    onDeleted(index);
                                    onClose();
                                }}
                                size={'sm'}
                            >
                                Delete
                            </Button>
                        </Col>
                    </Row>
                </Container>
            );
        }
    });
}

export default handleOnDelete;