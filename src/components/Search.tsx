import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import type { Post } from '../data/types';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search: React.FC = () => {
  const query = useQuery().get('query')?.toLowerCase() || '';

  const filteredPosts: Post[] = posts.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.description?.toLowerCase().includes(query) ||
    post.category?.toLowerCase().includes(query)
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Search Results</h1>
      <p className="text-purple-300 mb-8">
        Showing results for "<span className="font-semibold">{query}</span>"
      </p>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <Link
              key={post.slug}
              to={`/post/${post.slug}`}
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-purple-400">{post.title}</h2>

                {post.category && (
                  <Link
                    to={`/${post.category}/page/1`}
                    className="text-xs text-purple-600 hover:underline mb-2 capitalize"
                  >
                    {post.category}
                  </Link>
                )}

                <p className="text-sm text-gray-600">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-purple-400 text-center text-lg mt-10">
          No results found for "<span className="italic">{query}</span>"
        </p>
      )}
    </div>
  );
};

export default Search;
