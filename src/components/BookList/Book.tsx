import { Col, Row } from "react-bootstrap";
import React from "react";
import { Edit, Trash2 } from "react-feather";

class Book extends React.Component<{}, any>{
    constructor(props: string) {
        super(props);
        this.state = {
            count: 0,
            books: ['b1', 'b2', 'b3']
        };
        this.increase = this.increase.bind(this);
        this.delete = this.delete.bind(this);
    }

    increase() {
        this.setState({ count: this.state.count + 1 });
    }

    delete(id: string) {
        this.setState((prevState: any) => ({
            books: prevState.books.filter((el: string) => el !== id)
        }));
    }
    render() {
        if(this.state.books.length ===0){
            return(<p>No books to show</p>)
        }
        else{
            return (
                this.state.books.map((book: string, index: number) =>
                    <Row className='pl-1 pr-3 mt-1 book' key={index}>
                        <Col xs={8}  ><label >{index + 1}.{book}</label></Col>
                        <Col xs={4}>
                            <Row className='justify-content-end btn-options'>
                                <Col xs={1} className='text-center text-warning clickBtn'><Edit size='20' /></Col>
                                <Col xs={1} className='text-center text-danger clickBtn'><Trash2 size='20' onClick={() => this.delete(book)} /></Col>
                            </Row>
                        </Col>
                    </Row>)
            )
        }
       
    }
}

export default Book;