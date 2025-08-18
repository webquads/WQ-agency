export interface Blog {
  id: number;
  category: string;
  date: string;
  title: string;
  imageUrl: string;
  content: string;
}

export interface BlogButtonProps {
  href: string;
  text: string;
}

export interface BlogCardProps {
  blog: Blog;
}

export interface BlogGridProps {
  blogs: Blog[];
}
