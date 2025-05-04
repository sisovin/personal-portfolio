import { useState, useEffect } from 'react';
import { BlogPost, BlogPostDetails } from 'shared/types/blog';
import { fetchBlogPosts } from 'shared/api/blog';
import BlogPostCard from '../components/BlogPostCard';
import BlogPostModal from '../components/BlogPostModal';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPostDetails | null>(null);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    const loadBlogPosts = async () => {
      const fetchedBlogPosts = await fetchBlogPosts();
      setBlogPosts(fetchedBlogPosts);
    };

    loadBlogPosts();
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredBlogPosts = blogPosts.filter((blogPost) =>
    blogPost.title.toLowerCase().includes(filter.toLowerCase())
  );

  const handleBlogPostClick = (blogPost: BlogPostDetails) => {
    setSelectedBlogPost(blogPost);
  };

  const handleCloseModal = () => {
    setSelectedBlogPost(null);
  };

  return (
    <div>
      <h1>Blog</h1>
      <input
        type="text"
        placeholder="Filter blog posts"
        value={filter}
        onChange={handleFilterChange}
      />
      <div className="blog-post-grid">
        {filteredBlogPosts.map((blogPost) => (
          <BlogPostCard
            key={blogPost.id}
            blogPost={blogPost}
            onClick={() => handleBlogPostClick(blogPost)}
          />
        ))}
      </div>
      {selectedBlogPost && (
        <BlogPostModal blogPost={selectedBlogPost} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default BlogPage;
