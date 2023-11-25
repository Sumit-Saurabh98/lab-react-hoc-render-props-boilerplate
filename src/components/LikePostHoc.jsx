import React from 'react';
import WrapperHoc from './WrapperHoc';

function LikePostHOC(props) {
    return (
        <div>
            <button onClick={props.handleCounter}>Like post {props.counter}</button>
        </div>
    );
}

export default WrapperHoc(LikePostHOC);