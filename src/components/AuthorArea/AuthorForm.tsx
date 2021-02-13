import React, {useEffect} from "react";
import {Row, Col, Form, Button} from "react-bootstrap";
import {IAuthor} from "../../assets/types/LibraryTypes";
import {XCircle} from "react-feather";
import {useForm, Controller} from "react-hook-form";
import _ from "lodash/fp";
import handleOnUpdateAuthor from "../../assets/utils/handleOnUpdateAuthor";

type FormData = {
    authorName: string;
};

type CreateFormProps = {
    onClose: () => void;
    onAuthorAdded: (author: IAuthor) => void;
    onAuthorToUpdate: IAuthor | null;
    updateAuthorIndex: number | null;
    onAuthorUpdated: (updatedAuthor: IAuthor, index: number) => void;
};

const AuthorForm: React.FC<CreateFormProps> = (props) => {
    const {handleSubmit, control, errors, setValue} = useForm<FormData>();
    useEffect(() => {
        if (!props.onAuthorToUpdate) {
            setValue("authorName", "");
            return;
        }
        setValue("authorName", props.onAuthorToUpdate.name);
    }, [props.onAuthorToUpdate, setValue]);

    const handleOnCreate = (data: FormData) => {
        if (!data?.authorName) {
            return;
        }

        if (props.onAuthorToUpdate && props.updateAuthorIndex !== null) {
            handleOnUpdateAuthor(props.onAuthorUpdated,
                {...props.onAuthorToUpdate, name: data.authorName},
                props.updateAuthorIndex, props.onClose, setValue)
            return;
        }

        const newAuthor: IAuthor = {name: data.authorName};
        props.onAuthorAdded(newAuthor);
        setValue("authorName", "");
    };

    return (
        <Col className='p-0 px-1 mr-1 mt-lg-2' xl={8} lg={9} md={11} sm={12}>
            <Row className="px-0 mx-0 pb-1 mb-3">
                <Col className={'p-0'} xs={6}>
                  <span className="add-author-title pt-2">
                    {!props.onAuthorToUpdate && "Create Author"}
                      {props.onAuthorToUpdate && "Update Author"}
                  </span>
                </Col>
                <Col className='close-btn text-right p-0 m-0 px-md-4 px-0' xs={6}>
                    <XCircle color="#363636" size={22} onClick={props.onClose}/>
                </Col>
            </Row>
            <Form className='px-0 mx-0 px-md-4 px-0' onSubmit={handleSubmit(handleOnCreate)}>
                <Form.Group>
                    <Form.Row className={'px-0 mx-0'}>
                        <Form.Label column="sm" xs={5} className="label p-0 pl-1 pb-1 pb-lg-0">
                            Name of Author
                        </Form.Label>
                        <Form.Label column="sm" xs={7} className="warning text-right p-0 pr-1 pt-1 pt-lg-2">
                            {_.get("authorName.type", errors) === "required" && (
                                <p>This field is required</p>
                            )}
                            {_.get("authorName.type", errors) === "maxLength" && (
                                <p>Maximum 50 characters</p>
                            )}
                            {_.get("authorName.type", errors) === "pattern" && (
                                <p>Alphabetical characters only</p>
                            )}
                        </Form.Label>
                        <Col sm={12} className={'p-0 mb-1'}>
                            <Controller
                                autoFocus={true}
                                control={control}
                                name={"authorName"}
                                as={<Form.Control size={"sm"} className='author-name-input'/>}
                                defaultValue=""
                                rules={{
                                    required: true,
                                    maxLength: 50,
                                    pattern: /^[A-Za-z ]+$/i
                                }}
                            />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Col className="text-right mb-3 p-0" xs={12}>
                    <Button
                        type={"submit"}
                        variant={"primary"}
                        size={"sm"}
                        className={"create-btn"}
                    >
                        {!props.onAuthorToUpdate && "Create"}
                        {props.onAuthorToUpdate && "Update"}
                    </Button>
                </Col>
            </Form>
        </Col>
    );
};

export default AuthorForm;
