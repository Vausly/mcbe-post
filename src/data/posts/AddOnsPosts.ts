import type { Post } from '../types';

export const addonsPosts: Post[] = [
  {
    id: '1',
    title: 'Example Addon Post',
    description: 'Nothing special.',
    image: '/assets/default.png',
    category: 'addons',
    slug: 'test-addons',
    createdAt: '1970-01-01T00:00:00Z',
    updatedAt: '2025-06-13T00:00:00Z',
    content: `
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h4>Downloads:</h4>
      <ul>
        <li><a href="https://vausly.ch/yt">Download Resource Pack</a></li>
        <li><a href="https://vausly.ch/yt">Download Behavior Pack</a></li>
        <li><a href="https://vausly.ch/yt">Download .mcaddon file</a></li>
      </ul>
    `
  }
];
