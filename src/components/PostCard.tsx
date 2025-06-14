import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Post } from '../data/types';

interface PostCardProps {
  post: Post;
  index?: number;
}

const PostCard: React.FC<PostCardProps> = ({ post, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <Link to={`/post/${post.slug}`}>
        <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg font-bold">{post.title}</h3>

            {/* Kategori */}
            <Link
              to={`/${post.category}/page/1`}
              className="text-xs text-purple-600 hover:underline mb-1 capitalize"
            >
              {post.category}
            </Link>

            <p className="text-sm text-gray-600">{post.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PostCard;
