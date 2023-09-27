// CommentForm.tsx
import React, { useState } from 'react';
import { Comment } from '../../types/Types';

interface CommentFormProps {
  postId: number;
  addComment: (comment: Comment) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId, addComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (commentText.trim() !== '') {
      const newComment: Comment = {
        id: Date.now(),
        text: commentText,
      };

      addComment(newComment);
      setCommentText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
