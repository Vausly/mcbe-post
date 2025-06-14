import { structurePosts } from '../../data/posts/StructurePosts';
import GenericCategoryPage from './GenericCategoryPage';

const Structures = () => {
  return (
    <GenericCategoryPage
      title="Minecraft Structures"
      description="Explore unique builds and downloadable Minecraft structures."
      posts={structurePosts}
      currentPage={1}
      categorySlug="structures"
    />
  );
};

export default Structures;
