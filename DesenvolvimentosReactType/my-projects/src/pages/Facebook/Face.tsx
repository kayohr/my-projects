import React, { useState } from 'react';
import NewPostForm from '../../componentes/Face/NewPostForm';
import PostList from '../../componentes/Face/PostList';
import { Post, Comment } from '../../types/Types';

export default function Face() {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  const toggleLike = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked } : post
      )
    );
  };

  const addComment = (postId: number, comment: Comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div>
      <NewPostForm addPost={addPost} />
      <PostList posts={posts} toggleLike={toggleLike} addComment={addComment} />
    </div>
  );
}
