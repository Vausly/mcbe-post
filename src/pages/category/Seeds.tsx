import { seedPosts } from '../../data/posts/SeedPosts';
import GenericCategoryPage from './GenericCategoryPage';

const Seeds = () => {
  return (
    <GenericCategoryPage
      title="Minecraft Seeds"
      description="Explore interesting Minecraft world seeds to start your adventure."
      posts={seedPosts}
      currentPage={1}
      categorySlug="seeds"
    />
  );
};

export default Seeds;
