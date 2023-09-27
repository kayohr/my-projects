// PostItem.tsx
import React, { useState } from 'react';
import CommentForm from '../Face/ComentForm';
import { Comment, Post } from '../../types/Types';

interface PostItemProps {
  post: Post;
  toggleLike: (postId: number) => void;
  addComment: (postId: number, comment: Comment) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, toggleLike, addComment }) => {
  const [commenting, setCommenting] = useState(false);

  return (
    <div>
      <p>{post.content}</p>
      <button onClick={() => toggleLike(post.id)}>
        {post.liked ? 'Unlike' : 'Like'}
      </button>
      <button onClick={() => setCommenting(!commenting)}>
        {commenting ? 'Cancel Comment' : 'Comment'}
      </button>

      {commenting && (
        <CommentForm
          postId={post.id}
          addComment={(comment) => {
            addComment(post.id, comment);
            setCommenting(false);
          }}
        />
      )}

      <div>
        <h4>Comments:</h4>
        {post.comments.map((comment) => (
          <p key={comment.id}>{comment.text}</p>
        ))}
      </div>
    </div>
  );
};

export default PostItem;
