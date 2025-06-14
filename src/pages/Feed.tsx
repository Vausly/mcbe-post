import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { FC } from 'react';
import type { Post } from '../data/types';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';
import { Helmet } from 'react-helmet-async';

const Feed: FC = () => {
  const { page } = useParams<{ page?: string }>();
  const navigate = useNavigate();

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState<number>(page ? parseInt(page, 10) : 1);

  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const totalPages = Math.ceil(sortedPosts.length / itemsPerPage);

  useEffect(() => {
    const parsed = page ? parseInt(page, 10) : 1;
    if (!parsed || parsed < 1 || parsed > totalPages) {
      navigate('/feed'); // fallback jika page invalid
    } else {
      setCurrentPage(parsed);
    }
  }, [page, totalPages, navigate]);

  const handlePageChange = (targetPage: number) => {
    if (targetPage >= 1 && targetPage <= totalPages) {
      navigate(targetPage === 1 ? '/feed' : `/feed/page/${targetPage}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentPosts = sortedPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <Helmet>
        <title>Feed - Latest Minecraft Bedrock Posts</title>
        <meta
          name="description"
          content="Stay up-to-date with the latest Minecraft Bedrock posts across all categories including Add-Ons, Maps, Mods, and more."
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-center mb-4">Latest Posts</h1>
      <p className="text-center text-purple-300 mb-12">
        Discover the most recent Minecraft Bedrock creations from every category.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <div key={post.id} className="mx-auto w-[95%] sm:w-full">
            <PostCard post={post} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-2 flex-wrap">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-purple-700 hover:bg-purple-800 text-sm text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={`px-3 py-1 text-sm rounded ${
              pageNum === currentPage
                ? 'bg-purple-500 text-white'
                : 'bg-purple-800 hover:bg-purple-600 text-white'
            }`}
          >
            {pageNum}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-purple-700 hover:bg-purple-800 text-sm text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <br />
    </div>
  );
};

export default Feed;
