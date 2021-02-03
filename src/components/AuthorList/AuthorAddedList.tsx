import React, {Component} from 'react'
import Author from "./Author";
import {Col} from 'react-bootstrap';

class AuthorAddedList extends Component{
    render(){
        return(
            <div>
                <Col className={"mt-2"}>
                    <Author/>
                    <Author/>
                    <Author/>
                </Col>

            </div>

        );
    }
}

export default AuthorAddedList;