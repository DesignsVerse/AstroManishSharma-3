import { blogDetails } from '@/data/blogDetails';

export async function generateStaticParams() {
  const allBlogIds = new Set<string>();
  
  // Collect all unique blog IDs from all languages
  Object.values(blogDetails).forEach(languageBlogs => {
    Object.keys(languageBlogs).forEach(blogId => {
      allBlogIds.add(blogId);
    });
  });
  
  return Array.from(allBlogIds).map((id) => ({
    id: id,
  }));
}

export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}