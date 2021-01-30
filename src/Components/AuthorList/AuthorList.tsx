import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

class AuthorList extends Component{
    render(){
        return(
            <div>
                <Container>
                    <h1 className={"text-left"}>Authors</h1><hr className={"bg-dark"}/>
                    <ol>
                        <li className={"text-left"}>Author 1 name</li>
                        <li className={"text-left"}>Author 2 name</li>
                        <li className={"text-left"}>Author 3 name</li>
                    </ol>
                    <button className={"ml-1"}>Add Author</button>
                </Container>
            </div>
        );
    }
}

export default AuthorList;