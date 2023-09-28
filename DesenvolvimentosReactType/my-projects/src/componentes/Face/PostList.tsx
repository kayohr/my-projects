// PostList.tsx
import React from 'react';
import { Comment, Post } from '../../types/FaceTypes';
import PostItem from './PostItem';

interface PostListProps {
  posts: Post[];
  toggleLike: (postId: number) => void;
  addComment: (postId: number, comment: Comment) => void; // Corrigido aqui
}

const PostList: React.FC<PostListProps> = ({ posts, toggleLike, addComment }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} toggleLike={toggleLike} addComment={addComment} />
      ))}
    </div>
  );
};

export default PostList;




