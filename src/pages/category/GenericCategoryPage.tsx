import { useEffect, useState } from 'react';
import type { FC } from 'react';
import type { Post } from '../../data/types';
import PostCard from '../../components/PostCard';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface GenericCategoryPageProps {
  title: string;
  description: string;
  posts: Post[];
  currentPage: number;
  categorySlug: string;
}

const GenericCategoryPage: FC<GenericCategoryPageProps> = ({
  title,
  description,
  posts,
  currentPage: initialPage,
  categorySlug,
}) => {
  const itemsPerPage = 9;
  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const navigate = useNavigate();

  // Sync state with URL param
  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      navigate(`/${categorySlug}/page/${page}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentPosts = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <Helmet>
      <title>{title} | Minecraft Bedrock Post</title>
      <meta name="description" content={description} />
    </Helmet>

      <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
      <p className="text-center text-purple-300 mb-12">{description}</p>

      {/* Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <div key={post.id} className="mx-auto w-[95%] sm:w-full">
            <PostCard post={post} />
          </div>
        ))}
      </div>

      {/* Pagination */}
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

export default GenericCategoryPage;
