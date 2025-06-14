import type { Post } from '../types';

export const structurePosts: Post[] = [
  {
    id: '1',
    title: '30 December 2024 Project',
    description: 'Minecraft editor world project for test.',
    image: '/assets/structures/2024/1.png',
    category: 'structures',
    slug: 'world-editor-sample',
    createdAt: '2024-12-31T09:30:00Z',
    updatedAt: '2025-06-12T00:00:00Z',
    content: `
      <p>A project i made on my review video about world editor in Minecraft Bedrock.</p>
      <h4>Review video:</h4>
        <iframe
        allowfullscreen=""
        class="BLOG_video_class"
        height="360"
        src="https://www.youtube.com/embed/RcgJl8X22YY"
        width="540"
        youtube-src-id="RcgJl8X22YY"
      ></iframe>
      <ui>
        <li><a href="https://web.vausly.my.id/file/post/Test%20World.mcworld">Download as mcworld</a></li>
        <li><a href="https://web.vausly.my.id/file/post/Test%20World.mctemplate">Download as mctemplate</a></li>
        <li><a href="https://web.vausly.my.id/file/post/Test%20World.mcproject">Download as mcproject</a></li>
      </ui>
    `
  }
];
