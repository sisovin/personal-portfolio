import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useBlogPosts } from '../../../hooks/useBlogPosts';
import { Button } from '../../../components/ui/Button';
import { BlogPost } from '../../../types/blog';

const BlogManagement = () => {
  const router = useRouter();
  const { blogPosts, loading, error, fetchBlogPosts } = useBlogPosts();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleEdit = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleDelete = (postId: number) => {
    // Implement delete functionality
  };

  const handleCreate = () => {
    setSelectedPost({
      id: 0,
      title: '',
      content: '',
      authorId: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };

  const handleSave = () => {
    // Implement save functionality
  };

  return (
    <div>
      <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <h1>Blog Post Management</h1>
        <Button onClick={handleCreate}>Create New Post</Button>
      </header>
      <main className="p-4">
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id} className="mb-4">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <Button onClick={() => handleEdit(post)}>Edit</Button>
              <Button onClick={() => handleDelete(post.id)}>Delete</Button>
            </li>
          ))}
        </ul>
        {selectedPost && (
          <div>
            <h2>{selectedPost.id === 0 ? 'Create Post' : 'Edit Post'}</h2>
            <form>
              <div>
                <label>Title</label>
                <input
                  type="text"
                  value={selectedPost.title}
                  onChange={(e) =>
                    setSelectedPost({ ...selectedPost, title: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Content</label>
                <textarea
                  value={selectedPost.content}
                  onChange={(e) =>
                    setSelectedPost({ ...selectedPost, content: e.target.value })
                  }
                />
              </div>
              <Button onClick={handleSave}>Save</Button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogManagement;
