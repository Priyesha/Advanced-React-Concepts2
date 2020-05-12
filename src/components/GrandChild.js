import React, { Component } from 'react';
import {UserConsumer} from './context';

export class GrandChild extends Component {
    render() {
        return (
          <UserConsumer>
              {(username) => {
               return <div>
                 <h2>Value from context is {username}</h2>
               </div>
              }
              }
          </UserConsumer>  
        )
    }
}

export default GrandChild
