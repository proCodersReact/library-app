import {confirmAlert} from "react-confirm-alert";
import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Edit3, X} from "react-feather";
import {IAuthor} from "../types/LibraryTypes";


const handleOnUpdateAuthor = (onAuthorUpdated: (updatedAuthor: IAuthor, index: number) => void,
                              updatedAuthor: IAuthor,
                              index: number,
                              onUpdateClose: () => void,
                              setValue: (name: "authorName",
                                         value: unknown,
                                         config?: (Partial<{
                                             shouldValidate: boolean,
                                             shouldDirty: boolean
                                         }> | undefined)) => void) => {
    confirmAlert({
        customUI: ({onClose}) => {
            return (
                <Container fluid className='custom-ui-update'>
                    <Row xs='3' className={'notifier-header p-3'}>
                        <Col xs={2} className={'p-0 pt-1 pt-sm-0 align-content-center'}>
                            <Edit3 size={25} color='black'/>
                        </Col>
                        <Col xs={8} className={'p-0'}>
                            <h1 className='m-0 mt-1 text-center'>Confirm Update</h1>
                        </Col>
                        <Col xs={2} className={'p-0 pt-1 pt-sm-0 text-right'}>
                            <X color='black' size={25} onClick={onClose} className='confirm-close-btn'/>
                        </Col>
                    </Row>

                    <Row className={'p-sm-3 pt-4'}>
                        <Col xs={12}>
                            <p className='confirm-msg text-center'>
                                Are you sure to <b>update</b> this?
                            </p>
                        </Col>
                    </Row>

                    <Row className='text-sm-right text-center p-2 p-sm-3'>
                        <Col className={'confirm-btn text-sm-right'}>
                            <Button
                                variant={'light'}
                                size={'sm'}
                                onClick={() => {
                                    onClose();
                                }}
                                className={'mr-2'}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant={'warning'}
                                onClick={() => {
                                    onAuthorUpdated(updatedAuthor, index);
                                    setValue("authorName", "");
                                    onUpdateClose();
                                    onClose();
                                }}
                                size={'sm'}
                            >
                                Update
                            </Button>
                        </Col>
                    </Row>
                </Container>
            );
        }
    });
}

export default handleOnUpdateAuthor;