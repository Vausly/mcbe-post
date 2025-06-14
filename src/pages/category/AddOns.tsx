import { addonsPosts } from '../../data/posts/AddOnsPosts';
import GenericCategoryPage from './GenericCategoryPage';

const Addons = () => {
  return (
    <GenericCategoryPage
      title="Minecraft Addons"
      description="Discover custom Minecraft addons to enhance your game."
      posts={addonsPosts}
      currentPage={1}
      categorySlug="worlds"
    />
  );
};

export default Addons;