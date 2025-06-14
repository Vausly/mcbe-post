import { useEffect } from 'react';

type ShortcutHandler = () => void;

export default function useShortcut(key: string, handler: ShortcutHandler, ctrlKey = false) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMatchingKey = e.key === key || e.key === key.toLowerCase();
      if ((ctrlKey && e.ctrlKey && isMatchingKey) || (!ctrlKey && isMatchingKey)) {
        e.preventDefault(); // prevent default browser behavior (e.g., `/` on Firefox opens search)
        handler();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, handler, ctrlKey]);
}
