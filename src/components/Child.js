import React, { Component } from 'react';
import GrandChild from './GrandChild';
import UserContext from './context';

class Child extends Component {
    // static contextType = UserContext

    render() {
        return (
            <div>
                <h5>Child Component context value is {this.context}</h5>
                <GrandChild/>
            </div>
        )
    }
}

Child.contextType = UserContext

export default Child
