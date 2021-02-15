import React, {useEffect} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import Select from 'react-select'
import {Controller, useForm} from "react-hook-form";
import _ from "lodash/fp";
import handleOnUpdateBook from "../utils/handleOnUpdateBook";
import NumberFormat from 'react-number-format';
import {IAuthor, IBook} from "../../assets/types/LibraryTypes";
import {customStyles} from "../../assets/Constants/ReactSelectCustomStyle";


type BookFormProps = {
    onClose: () => void;
    onBookAdded: (book: IBook) => void;
    authorList: IAuthor[],
    onBookToUpdate: IBook | null;
    updateBookIndex: number | null;
    onBookUpdated: (updatedBook: IBook, index: number) => void;
}

type FormData = {
    bookName: string;
    bookISBN: string;
    bookAuthor: authorType;
};

type authorType = {
    value: string,
    label: string,
}


const BookForm: React.FC<BookFormProps> = (props) => {
    const {onClose, onBookAdded, authorList, onBookToUpdate, updateBookIndex, onBookUpdated} = props;
    const authorOptions: authorType[] = [];

    authorList.forEach((author) => {
        authorOptions.push({value: author.name, label: author.name})
    })

    const {handleSubmit, control, errors, setValue} = useForm<FormData>();

    useEffect(() => {
        if (!onBookToUpdate) {
            setValue("bookName", "");
            setValue("bookISBN", "");
            setValue("bookAuthor", "");
            return;
        }
        setValue("bookName", onBookToUpdate.name);
        setValue("bookISBN", onBookToUpdate.isbn);
        setValue("bookAuthor", {value: onBookToUpdate.author.name, label: onBookToUpdate.author.name});
    }, [onBookToUpdate, setValue])

    const handleOnCreate = (data: FormData) => {

        if (!data?.bookName && !data?.bookISBN && !data?.bookAuthor) {
            return;
        }

        if (onBookToUpdate && updateBookIndex !== null) {
            handleOnUpdateBook(onBookUpdated,
                {
                    ...onBookToUpdate,
                    name: data.bookName,
                    isbn: data.bookISBN,
                    author: {name: data.bookAuthor.value}
                },
                updateBookIndex,
                onClose,
                setValue)
            return;
        }

        const newBook: IBook = {name: data.bookName, isbn: data.bookISBN, author: {name: data.bookAuthor.value}};
        onBookAdded(newBook);
        setValue("bookName", "");
        setValue("bookISBN", "");
        setValue("bookAuthor", "");
    }

    return (
        <Col className='p-0 px-1 mr-1 mt-lg-2' xl={8} lg={10} md={11} sm={12}>
            <Row className='px-0 mx-0 pb-1 mb-3'>
                <Col className={'p-0'} xs={6}>
                    <span className='add-book-title pt-2'>
                        {!onBookToUpdate && "Create Book"}
                        {onBookToUpdate && "Update Book"}
                    </span>
                </Col>
                <Col className='close-btn text-right p-0 m-0 px-md-4 px-0' xs={6}>
                    <XCircle color='#363636' size={24} onClick={onClose}/>
                </Col>
            </Row>
            <Form className='px-0 mx-0 px-md-4 px-0' onSubmit={handleSubmit(handleOnCreate)}>
                <Form.Group>
                    <Form.Row className={'px-0 mx-0'}>
                        <Form.Label column="sm" xs={4} className='label p-0 pl-1 pb-1 pb-lg-0'>
                            Title of Book
                        </Form.Label>
                        <Form.Label column="sm" xs={8} className="warning text-right p-0 pr-1 pt-1 pt-lg-2">
                            {_.get("bookName.type", errors) === "required" && (
                                <p>This field is required</p>
                            )}
                            {_.get("bookName.type", errors) === "maxLength" && (
                                <p>Maximum 50 characters</p>
                            )}
                        </Form.Label>
                        <Col sm={12} className={'p-0 mb-3'}>
                            <Controller
                                autoFocus={true}
                                control={control}
                                name={"bookName"}
                                as={<Form.Control size={"sm"} className='book-name-input'/>}
                                defaultValue=""
                                rules={{
                                    required: true,
                                    maxLength: 50,
                                }}
                            />
                        </Col>
                        <Form.Label column="sm" xs={3} className='label p-0 pl-1 pb-1 pb-lg-0'>
                            Price
                        </Form.Label>
                        <Form.Label column="sm" xs={9} className="warning text-right p-0 pr-1 pt-1 pt-lg-2">
                            {_.get("bookISBN.type", errors) === "required" && (
                                <p>This field is required</p>
                            )}
                        </Form.Label>
                        <Col xs={12} className={'p-0 mb-3'}>
                            <Controller
                                control={control}
                                name={"bookISBN"}
                                as={<NumberFormat className='form-control' thousandSeparator={true} prefix={'Rs. '}/>}
                                defaultValue=""
                                rules={{
                                    required: true,
                                }}
                            />
                        </Col>
                        <Form.Label column="sm" xs={3} className='label p-0 pl-1 pb-1 pb-lg-0 '>
                            Author
                        </Form.Label>
                        <Form.Label column="sm" xs={9} className="warning text-right p-0 pr-1 pt-1 pt-lg-2">
                            {_.get("bookAuthor.type", errors) === "required" && (
                                <p>This field is required</p>
                            )}
                        </Form.Label>
                        <Col xs={12} className='react-select p-0 mb-1'>
                            <Controller
                                className='form-control'
                                as={Select}
                                name={"bookAuthor"}
                                placeholder={'Select an Author...'}
                                options={authorOptions}
                                isClearable={true}
                                isSearchable={true}
                                styles={customStyles}
                                rules={{
                                    required: true
                                }}
                                control={control}
                            />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Col className='text-right mb-3 p-0' xs={12}>
                    <Button variant="primary" size="sm" className='create-btn' type='submit'>
                        {!onBookToUpdate && "Create"}
                        {onBookToUpdate && "Update"}
                    </Button>
                </Col>
            </Form>
        </Col>
    );
};

export default BookForm;
