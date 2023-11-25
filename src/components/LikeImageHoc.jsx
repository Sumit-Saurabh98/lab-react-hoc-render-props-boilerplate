import React from 'react';
import WrapperHoc from './WrapperHoc';

function LikeImageHOC(props) {
    return (
        <div>
            <button onClick={props.handleCounter}>Like me {props.counter}</button>
        </div>
    );
}

export default WrapperHoc(LikeImageHOC);