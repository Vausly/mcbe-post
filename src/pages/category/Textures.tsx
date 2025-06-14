import { texturePosts } from '../../data/posts/TexturePosts';
import GenericCategoryPage from './GenericCategoryPage';

const Textures = () => {
  return (
    <GenericCategoryPage
      title="Minecraft Texture Packs"
      description="Customize your Minecraft visuals with texture packs and shaders."
      posts={texturePosts}
      currentPage={1}
      categorySlug="worlds"
    />
  );
};

export default Textures;
