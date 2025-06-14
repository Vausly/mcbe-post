import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';
import type { Post } from '../data/types';
import { formatFullDate, formatRelativeTime } from '../data/timestamp';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post: Post | undefined = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center mt-20 text-red-600 text-xl font-semibold">
        Post not found.
      </div>
    );
  }

  const handleBack = () => navigate(`/${post.category}`);
  const formattedCategory = post.category.charAt(0).toUpperCase() + post.category.slice(1);

  return (
    <>
    <Helmet>
      <title>{post.title} | Minecraft Bedrock Post</title>
      <meta name="description" content={post.description || post.title} />
    </Helmet>

    <motion.div
      className="max-w-4xl mx-auto px-4 py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Breadcrumb */}
      <div className="text-sm text-purple-300 mb-6">
        <button onClick={handleBack} className="hover:underline hover:text-purple-400 transition">
          ← Back to {formattedCategory}
        </button>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-3">{post.title}</h1>

      {/* Cover Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto max-h-[400px] object-cover rounded-lg mb-6 shadow border border-purple-700"
      />

      {/* Meta Info */}
      <div className="text-xs text-purple-300 mb-6 flex flex-col md:flex-row md:items-center md:space-x-6 space-y-1 md:space-y-0">
        <p>
          Published At: {formatFullDate(post.createdAt)} ({formatRelativeTime(post.createdAt)})
        </p>
        <p>
          Last Updated: {formatFullDate(post.updatedAt)} ({formatRelativeTime(post.updatedAt)})
        </p>
      </div>

      {/* Content */}
      <motion.div
        className="prose prose-invert max-w-none mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Short Link */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-purple-300 mb-2">
          Share Link:
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={post.shortLink || `${window.location.origin}/post/${post.slug}`}
            readOnly
            className="bg-purple-950 text-purple-200 border border-purple-700 rounded-md px-3 py-2 max-w-xs w-full cursor-default select-all"
            onClick={(e) => (e.target as HTMLInputElement).select()}
          />
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                post.shortLink || `${window.location.origin}/post/${post.slug}`
              )
            }
            className="px-3 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-md transition"
          >
            Copy
          </button>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default PostDetail;
