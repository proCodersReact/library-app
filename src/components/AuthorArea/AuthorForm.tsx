import React, { useEffect} from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { IAuthor } from "../../assets/types/LibraryTypes";
import { XCircle } from "react-feather";
import { useForm, Controller } from "react-hook-form";
import _ from "lodash/fp";

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
    const {handleSubmit, control, errors, setValue} = useForm<
        FormData
        >();
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
            props.onAuthorUpdated(
                { ...props.onAuthorToUpdate, name: data.authorName },
                props.updateAuthorIndex
            );
            setValue("authorName", "");
            return;
        }

        const newAuthor: IAuthor = { name: data.authorName };
        props.onAuthorAdded(newAuthor);
        setValue("authorName", "");
    };

    return (
        <Col className="p-0" sm={10}>
            <Row className=" pb-1 mb-3 mx-1">
                <Col xs={10}>
          <span className="add-book-title pt-2">
            {!props.onAuthorToUpdate && "Create Author"}
              {props.onAuthorToUpdate && "Update Author"}
          </span>
                </Col>
                <Col className="closeBtn text-right p-0" xs={2}>
                    <XCircle
                        color="#363636"
                        className="mt-2 mr-3"
                        onClick={props.onClose}
                    />
                </Col>
            </Row>
            <Form className="mx-4" onSubmit={handleSubmit(handleOnCreate)}>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="sm" xs={6} className="label">
                            Name of the Author
                        </Form.Label>
                        <Col xs={6} className="warning text-right mt-2 pr-2">
                            {_.get("authorName.type", errors) === "required" && (
                                <p>This field is required</p>
                            )}
                            {_.get("authorName.type", errors) === "maxLength" && (
                                <p>Maximum 50 characters</p>
                            )}
                            {_.get("authorName.type", errors) === "pattern" && (
                                <p>Alphabetical characters only</p>
                            )}
                        </Col>
                        <Col sm={12}>
                            <Controller
                                control={control}
                                name={"authorName"}
                                as={<Form.Control size={"sm"} />}
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
                        className={"px-3 pt-1"}
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
