import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';
import CategoryRouteWrapper from '../pages/category/CategoryRouteWrapper';
import NotFound from '../pages/NotFound';
import { Navigate } from 'react-router-dom';
import Search from '../components/Search';
import Feed from '../pages/Feed';

export const routes = [
  // Home
  { path: '/', element: <Home /> },

  // External redirects
  { path: '/skins', element: <Navigate to="https://www.vausly.my.id/skin" replace /> },
  { path: '/servers', element: <Navigate to="https://www.vausly.my.id/server" replace /> },

  // Post detail
  { path: '/post/:slug', element: <PostDetail /> },

  //Search
  { path: '/search', element: <Search /> },

  // Dynamic category
  { path: '/:category/page/:page', element: <CategoryRouteWrapper /> },
  { path: '/:category', element: <CategoryRouteWrapper /> },

  // Feed
  { path: '/feed', element: <Feed /> },
  { path: '/feed/page/:page', element: <Feed /> },

  // Not found
  { path: '*', element: <NotFound /> }

];
