import type { FC } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal: FC<SearchModalProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center">
      <motion.div
        className="bg-[#1a0236] p-6 rounded-xl shadow-xl w-full max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <form onSubmit={handleSearch}>
          <label htmlFor="modal-search" className="text-white block mb-2 text-sm font-semibold">
            Search Post
          </label>
          <input
            ref={inputRef}
            id="modal-search"
            type="text"
            className="w-full px-4 py-2 rounded-md bg-purple-900 text-white placeholder-purple-300 border border-purple-600 focus:outline-none"
            placeholder="Search for something..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <div className="flex justify-end mt-4 gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
            >
              Search
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SearchModal;
