import { modPosts } from '../../data/posts/ModPosts';
import GenericCategoryPage from './GenericCategoryPage';

const Mods = () => {
  return (
    <GenericCategoryPage
      title="Minecraft Mods"
      description="Add new mechanics and features to Minecraft with custom mods."
      posts={modPosts}
      currentPage={1}
      categorySlug="mods"
    />
  );
};

export default Mods;
