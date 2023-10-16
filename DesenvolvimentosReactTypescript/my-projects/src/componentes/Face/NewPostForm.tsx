import React, { useState } from 'react';
import { Post } from '../../types/FaceTypes';

interface NewPostFormProps {
  addPost: (newPost: Post) => void;
}

const NewPostForm: React.FC<NewPostFormProps> = ({ addPost }) =>  {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (postContent.trim() !== '') {
      const newPost: Post = {
        id: Date.now(),
        content: postContent,
        liked: false,
        comments: [],
      };

      addPost(newPost);
      setPostContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="What's on your mind?"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default NewPostForm;