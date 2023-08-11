import React, { useState } from 'react';

function CreatePostForm(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can perform further actions, such as sending the post data to your backend API
    // For simplicity, let's just log the data to the console.
    // console.log('Post Data:', { title, content, image });
    const obj = {
      title: title,
      content: content,
      image: image
    }
    console.log("On create Form Props", props);
    console.log("On create Form", obj);
    props.onAddPost(obj);

    // Reset the form fields after submission
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" onChange={handleImageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>

      <a href="/">Home</a>
    </div>
  );
}

export default CreatePostForm;
