import React, {Component} from 'react'
import Author from "./Author";

class AuthorAddedList extends Component{
    render(){
        return(
            <div>
                <Author/>
                <Author/>
                <Author/>
            </div>

        );
    }
}

export default AuthorAddedList;