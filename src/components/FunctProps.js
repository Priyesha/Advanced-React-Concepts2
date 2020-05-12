import React from 'react';

function FunctProps(props) {
    return (
        <div>
          <h2>{props.name(true)}</h2>
        </div>
    )
}

export default FunctProps;