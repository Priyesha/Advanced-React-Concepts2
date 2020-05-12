import React, { Component } from 'react'

export class HoverComponent extends Component {
    render() {
        const {count , incrementCount} = this.props;
        return (
            <div>
                <h4 onMouseOver={incrementCount}>Hovered {count} times</h4>
            </div>
        )
    }
}

export default HoverComponent
