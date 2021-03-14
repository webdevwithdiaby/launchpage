import React from 'react';
import PostList from './PostList';

const PostApp = () => {
    return (
        <PostList posts={data} />
    );
}

export default PostApp;

const data = [
    {
        id:1,
        title: 'Learn Immunology',
        content: 'Learn Immunology Content goes here',
        comments: [
            {
                id:1,
                user: 'Mousaa',
                comment: 'I love immunology'
            },
            {
                id:2,
                user:'Amadou',
                comment: 'I will learn it!'
            }
        ]
    },
    {
        id:2,
        title: 'Learn Pharmacology',
        content: 'Learn Pharmacology Content goes here',
        comments: [
            {
                id:1,
                user: 'Mousaa',
                comment: 'I love Pharmacology'
            },
            {
                id:2,
                user:'Amadou',
                comment: 'I will learn it!'
            }
        ]
    },
    {
        id:3,
        title: 'Learn Genetics',
        content: 'Learn Genetics Content goes here',
        comments: [
            {
                id:1,
                user: 'Mousaa',
                comment: 'I love Genetics'
            },
            {
                id:2,
                user:'Amadou',
                comment: 'I will learn it!'
            }
        ]
    },
];