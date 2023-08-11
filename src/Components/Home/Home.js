import React from 'react';

const Home = (props) => {
    console.log("all Posts:", props.allPosts);

    return (
        <div>
            <h2>All Posts</h2>
            {props.allPosts.map((post, index) => (
                <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    {post.image && <img src={post.image} alt={`Image for ${post.title}`} style={{ maxWidth: '100%', height: 'auto' }} />}
                </div>
            ))}
        </div>
    );
};

export default Home;
