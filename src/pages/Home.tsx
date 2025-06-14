import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/categories';

const Home = () => {
  return (
   
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Minecraft Content</h1>
        <p className="text-center text-purple-300 mb-12">
          Explore my custom Minecraft creations!
        </p>

        {/* Grid kategori dari data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
              link={category.link}
              external={category.external}
            />
          ))}
        </div>
      </div>
   
  );
};

export default Home;
