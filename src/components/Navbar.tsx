import type { FC } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchModal from './SearchModal';
import useShortcut from '../hooks/useShortcut';

const MotionLink = motion(Link);
const MotionA = motion.a;

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [search, setSearch] = useState('');

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItemClasses = "text-white hover:text-purple-400 no-underline hover:no-underline transition";

  useShortcut('/', () => setIsSearchOpen(true));
  useShortcut('k', () => setIsSearchOpen(true), true); // Ctrl + K

  return (
    <motion.nav
      className="fixed top-0 w-full bg-[#1a0236]/90 backdrop-blur-sm z-50 text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex flex-col items-start gap-1 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
            <span className="font-bold text-white text-lg">VAUSLY MEDIA</span>
          </div>
         <span className="text-[10px] text-purple-300 ml-10">MINECRAFT BEDROCK POST</span>
        </motion.div>

        {/* Mobile Toggle Button */}
        <motion.button
          className="md:hidden text-white hover:text-purple-400 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <MotionLink whileHover={{ scale: 1.1 }} to="/" className={navItemClasses}>Home</MotionLink>
          <MotionLink whileHover={{ scale: 1.1 }} to="/feed" className={navItemClasses}>Feeds</MotionLink>
          <MotionA
            whileHover={{ scale: 1.1 }}
            href="https://www.vausly.my.id/#about"
            target="_blank"
            rel="noopener noreferrer"
            className={navItemClasses}
          >
            About
          </MotionA>
          <MotionLink whileHover={{ scale: 1.1 }} to="/worlds" className={navItemClasses}>Worlds</MotionLink>
          <MotionLink whileHover={{ scale: 1.1 }} to="/seeds" className={navItemClasses}>Seeds</MotionLink>
          <MotionLink whileHover={{ scale: 1.1 }} to="/addons" className={navItemClasses}>AddOns</MotionLink>
          <MotionA
            whileHover={{ scale: 1.1 }}
            href="https://www.vausly.my.id/minecraft-skins"
            target="_blank"
            rel="noopener noreferrer"
            className={navItemClasses}
          >
            Skins
          </MotionA>
          <MotionLink whileHover={{ scale: 1.1 }} to="/textures" className={navItemClasses}>Textures</MotionLink>
          <MotionA
            whileHover={{ scale: 1.1 }}
            href="https://www.vausly.my.id/servers"
            target="_blank"
            rel="noopener noreferrer"
            className={navItemClasses}
          >
            Servers
          </MotionA>
          <MotionLink whileHover={{ scale: 1.1 }} to="/structures" className={navItemClasses}>Structures</MotionLink>
          <MotionLink whileHover={{ scale: 1.1 }} to="/mods" className={navItemClasses}>Mods</MotionLink>
          <MotionLink whileHover={{ scale: 1.1 }} to="/clients" className={navItemClasses}>Client</MotionLink>
          <MotionA
            whileHover={{ scale: 1.1 }}
            href="https://link.vausly.com"
            target="_blank"
            rel="noopener noreferrer"
            className={navItemClasses}
          >
            Contacts
          </MotionA>
            {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition hidden md:block"
              onClick={() => setIsSearchOpen(true)}
            >
              Search
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1a0236] px-4 pb-4"
          >
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setIsOpen(false);
                    window.location.href = `/search?query=${encodeURIComponent(search)}`;
                  }
                }}
                className="px-3 py-2 rounded-md text-sm text-black placeholder-purple-400 focus:outline-none mt-2"
              />
              <MotionLink whileHover={{ scale: 1.05 }} to="/" onClick={() => setIsOpen(false)} className={navItemClasses}>Home</MotionLink>
              <MotionLink whileHover={{ scale: 1.05 }} to="/feed" onClick={() => setIsOpen(false)} className={navItemClasses}>Feeds</MotionLink>
              <MotionLink whileHover={{ scale: 1.05 }} to="https://www.vausly.my.id/#about" onClick={() => setIsOpen(false)} className={navItemClasses}>About</MotionLink>
              <MotionLink whileHover={{ scale: 1.05 }} to="/worlds" onClick={() => setIsOpen(false)} className={navItemClasses}>Worlds</MotionLink>
              <MotionLink whileHover={{ scale: 1.05 }} to="/seeds" onClick={() => setIsOpen(false)} className={navItemClasses}>Seeds</MotionLink>
              <MotionLink whileHover={{ scale: 1.05 }} to="/addons" onClick={() => setIsOpen(false)} className={navItemClasses}>AddOns</MotionLink>
              <MotionA
                whileHover={{ scale: 1.05 }}
                href="https://www.vausly.my.id/minecraft-skins"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className={navItemClasses}
              >
                Skins
              </MotionA>
              <MotionLink whileHover={{ scale: 1.05 }} to="/textures" onClick={() => setIsOpen(false)} className={navItemClasses}>Texture & Shaders</MotionLink>
              <MotionA
                whileHover={{ scale: 1.05 }}
                href="https://www.vausly.my.id/servers"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className={navItemClasses}
              >
                Servers
              </MotionA>
              <MotionLink whileHover={{ scale: 1.05 }} to="/structures" onClick={() => setIsOpen(false)} className={navItemClasses}>Structures</MotionLink>
              <MotionLink whileHover={{ scale: 1.05 }} to="/mods" onClick={() => setIsOpen(false)} className={navItemClasses}>Mods</MotionLink>
              <MotionLink whileHover={{ scale: 1.05 }} to="/clients" onClick={() => setIsOpen(false)} className={navItemClasses}>Client</MotionLink>
              <MotionA
                whileHover={{ scale: 1.05 }}
                href="https://link.vausly.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className={navItemClasses}
              >
                Contact
              </MotionA>
            </div>
          </motion.div>
        )}
        
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
