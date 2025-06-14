import type { FC } from 'react';
import { Link } from 'react-router-dom';

export interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  external?: boolean;
}

const CategoryCard: FC<CategoryCardProps> = ({
  title,
  description,
  image,
  link,
  external = false,
}) => {
  return (
    <div className="w-4/5 md:w-full max-w-2xl md:max-w-full mx-auto bg-purple-900/40 border border-purple-700 rounded-2xl p-5 mb-6 shadow-lg flex flex-col md:flex-row items-center gap-4 hover:shadow-purple-500/20 transition">
      <img
        src={image}
        alt={title}
        className="w-28 h-28 object-cover rounded-xl border border-purple-800 shadow-md"
      />
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold text-white mb-1 transition-all duration-300 ease-in-out group-hover:scale-105">
          {title}
        </h2>
        <p className="text-purple-300 text-sm mb-3 transition-all duration-300 ease-in-out group-hover:scale-105">
          {description}
        </p>
        <div className="group w-full">
          {external ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:no-underline text-center"
            >
              Visit
            </a>
          ) : (
            <Link
              to={link}
              className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:no-underline text-center"
            >
              Visit
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
