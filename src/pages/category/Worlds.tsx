import { worldPosts } from '../../data/posts/WorldPosts';
import GenericCategoryPage from './GenericCategoryPage';

const Worlds = () => {
  return (
    <GenericCategoryPage
      title="Minecraft Worlds"
      description="Explore custom Minecraft maps and survival builds!"
      posts={worldPosts}
      currentPage={1}
      categorySlug="worlds"
    />
  );
};

export default Worlds;
