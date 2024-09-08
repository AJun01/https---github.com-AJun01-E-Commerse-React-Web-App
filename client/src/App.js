import React, { useState } from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
    const [count, setCount] = useState(4);

    function decrementCount(){
        setCount(count - 1);
    };

    function incrementCount(){
        setCount(count + 1);
    };

    return (
    <div className='container'>
        <h1>Create Post</h1>
        <PostCreate />
        <hr />
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
        <hr />
        <h1>Posts</h1>
        <PostList />
    </div>
    );
};