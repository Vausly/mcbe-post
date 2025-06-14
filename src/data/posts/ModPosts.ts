import type { Post } from '../types';

export const modPosts: Post[] = [
  {
    id: '1',
    title: 'More Swords Mod',
    description: 'Add new overpowered swords with special abilities.',
    image: '/assets/mods/old/sword_placeholder.png',
    category: 'mods',
    slug: 'more-swords-mod',
    createdAt: '2017-12-18T05:02:00Z',
    updatedAt: '2025-06-13T14:00:00Z',
    content: `
      <p>This mod adds powerful new weapons for survival and PVP. BlockLauncher is required to run this mod.</p>
      <p>Previouisly this mod was shared on UTK.io platform on 2017.</p>
      <h4>Mod details:</h4>
      <ul>
        <li>Version: 1.2.x - 1.14.5</li>
        <li>Recommended BlockLauncher version: 1.27 (for 1.14.5)</li>
      </ul>
      <h4>Downloads:</h4>
      <ul>
        <li><a href="http://adfoc.us/607166110778261" target="_blank">Download Mod (.zip)</a></li>
        <li><a href="http://adfoc.us/607166110763301" target="_blank">Download Mod (.modpkg)</a></li>
        <li><a href="https://www.youtube.com/watch?v=EGfUQiSINTU" target="_blank">Installation tutorial</a></li>
        <li><a href="/post/blocklauncher" target="_blank">Download BlockLauncher</a></li>
      </ul>
    `,
    shortLink: 'https://vausly.ch/2017ms',
  }
];
