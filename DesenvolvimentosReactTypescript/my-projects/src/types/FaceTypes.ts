interface Comment {
  id: number;
  text: string;
}

interface Post {
  id: number;
  content: string; //conteúdo ou texto 
  liked: boolean;
  comments: Comment[];
}

export type { Post, Comment };