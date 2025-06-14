import { clientPosts } from '../../data/posts/ClientPosts';
import GenericCategoryPage from './GenericCategoryPage';

const Client = () => {
  return (
    <GenericCategoryPage
      title="Minecraft Client & Tools"
      description="A Client & tools for Minecraft"
      posts={clientPosts}
      currentPage={1}
      categorySlug="clients"
    />
  );
};

export default Client;
