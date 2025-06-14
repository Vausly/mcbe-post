import type { Post } from '../types';

export const clientPosts: Post[] = [
  {
    id: '2',
    title: 'Hackers Keyboard (Archived)',
    description: 'A keyboard app for Android recommended for Minecraft Mobile',
    image: 'https://raw.githubusercontent.com/klausw/hackerskeyboard/refs/heads/master/hk-5row-en-s.png',
    category: 'clients',
    slug: 'hackers-keyboard',
    createdAt: '2021-04-29T02:01:00Z',
    updatedAt: '2025-06-12T00:00:00Z',
    content: `
      <p>This is my recommended app used for typing a command in Minecraft Android, because the arrow navigation is too usefull. This app is owned by Klausww and no longer available in the Play Store.</p>
      <p>Disclaimer: I don't own this app.</p>
      <ul>
        <li><a href="https://sfile.mobi/3I9MmFugzmE">Download Hackers Keyboard .apk</a></li>
        <li><a href="https://github.com/klausw/hackerskeyboard">Source code original</a></li>
      </ul>
    `,
    shortLink: '',
  },
  {
    id: '1',
    title: 'Blocklauncher (Archived)',
    description: 'Mod launcher for Minecraft Bedrock Android',
    image: 'https://i.ibb.co/zHF4Ycfg/ic-launcher.png',
    category: 'clients',
    slug: 'blocklauncher',
    createdAt: '2019-12-29T10:00:00Z',
    updatedAt: '2025-06-12T00:00:00Z',
    content: `
      <p>This app used for running Minecraft mods in Android. This app is owned by Zhuowei Zhang and no longer available in the Play Store.</p>
      <p>Disclaimer: I don't own this app.</p>
      <ul>
        <li><a href="https://sfile.mobi/1dmjCGYrayn">Download BlockLauncher 1.27</a></li>
        <li><a href="https://sfile.mobi/a20ouECDlKl">Download BlockLauncher Pro 1.27</a></li>
        <li><a href="http://adfoc.us/607166110432109">More versions</a></li>
        <li><a href="https://github.com/zhuowei/MCPELauncher">Source code original</a></li>
      </ul>
    `,
    shortLink: 'https://vausly.ch/bl',
  }
];
