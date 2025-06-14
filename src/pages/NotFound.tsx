import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
return (
<>
<Helmet></Helmet>
  <title>404 - Minecraft Bedrock Post</title>
  <div className="h-screen w-screen overflow-hidden bg-gradient-to-b from-[#1d0539] to-[#2b0a52] text-white flex flex-col items-center justify-center px-4 text-center">
     <h1 className="text-6xl font-extrabold mb-4">404</h1>
       <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
         <p className="text-purple-300 mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
        </p>
      <Link to="/" className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-md text-white font-medium" >
      Back to Homepage
      </Link>
    </div>
    </>
    );
};

export default NotFound;