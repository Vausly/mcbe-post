import React from 'react';
import { useParams } from 'react-router-dom';
import GenericCategoryPage from './GenericCategoryPage';
import { worldPosts } from '../../data/posts/WorldPosts';
import { addonsPosts } from '../../data/posts/AddOnsPosts';
import { modPosts } from '../../data/posts/ModPosts';
import { texturePosts } from '../../data/posts/TexturePosts';
import { seedPosts } from '../../data/posts/SeedPosts';
import { structurePosts } from '../../data/posts/StructurePosts';
import { clientPosts } from '../../data/posts/ClientPosts';
import NotFound from '../NotFound';

const categoryMap: Record<string, { title: string; description: string; posts: any[] }> = {
  worlds: {
    title: 'Minecraft Worlds',
    description: 'Explore custom worlds I`ve created.',
    posts: worldPosts,
  },
  addons: {
    title: 'Minecraft AddOns',
    description: 'Enhance your gameplay with useful add-ons.',
    posts: addonsPosts,
  },
  mods: {
    title: 'Minecraft Mods',
    description: 'Add new mechanics and features to Minecraft.',
    posts: modPosts,
  },
  textures: {
    title: 'Minecraft Textures',
    description: 'Refresh your visuals with custom texture packs and shaders.',
    posts: texturePosts,
  },
  seeds: {
    title: 'Minecraft Seeds',
    description: 'Discover amazing world seeds to try out.',
    posts: seedPosts,
  },
  structures: {
    title: 'Minecraft Structures',
    description: 'Build faster using premade structures.',
    posts: structurePosts,
  },
  clients: {
    title: 'Minecraft Clients',
    description: 'Try custom clients that enhance performance and features.',
    posts: clientPosts,
  },
};

const CategoryRouteWrapper: React.FC = () => {
  const { category, page } = useParams<{ category: string; page?: string }>();

  const categoryData = category ? categoryMap[category.toLowerCase()] : undefined;
  const currentPage = page ? parseInt(page, 10) : 1;

  if (!category) {
    return <NotFound />;
  }

  if (!categoryData) {
    return <NotFound />;
  }

  return (
    <GenericCategoryPage
      title={categoryData.title}
      description={categoryData.description}
      posts={categoryData.posts}
      currentPage={currentPage}
      categorySlug={category.toLowerCase()}
    />
  );
};

export default CategoryRouteWrapper;
