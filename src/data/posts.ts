import { worldPosts } from './posts/WorldPosts';
import { addonsPosts } from './posts/AddOnsPosts';
import { modPosts } from './posts/ModPosts';
import { texturePosts } from './posts/TexturePosts';
import { seedPosts } from './posts/SeedPosts';
import { structurePosts } from './posts/StructurePosts';
import { clientPosts } from './posts/ClientPosts';

export const posts = [
  ...worldPosts,
  ...addonsPosts,
  ...modPosts,  
  ...texturePosts,
  ...seedPosts,
  ...structurePosts,
  ...clientPosts,

];
