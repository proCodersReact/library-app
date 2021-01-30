import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

class AuthorList extends Component{
    render(){
        return(
            <div>
                <Container>
                    <h1 className={"text-left"}>Authors</h1><hr/>
                </Container>
            </div>
        );
    }
}

export default AuthorList;