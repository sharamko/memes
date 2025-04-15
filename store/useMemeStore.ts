import { Meme } from '@/types/meme';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  memes: Meme[];
  editMeme: (updated: Meme) => void;
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
};

const sampleMemes: Meme[] = [
  {
    id: 1,
    title: 'Doge',
    imageUrl:
      'https://i.pinimg.com/736x/cf/90/15/cf90154be9986e7721110d7c77cd5600.jpg',
    likes: 42,
  },
  {
    id: 2,
    title: 'Success Kid',
    imageUrl:
      'https://i.pinimg.com/736x/bf/11/2b/bf112b414ca176fb75949bc37d94d956.jpg',
    likes: 58,
  },
  {
    id: 3,
    title: 'Distracted Boyfriend',
    imageUrl:
      'https://i.pinimg.com/736x/46/67/1f/46671fbc353f47a0bbc022ddb27b0524.jpg',
    likes: 17,
  },
  {
    id: 4,
    title: 'Grumpy Cat',
    imageUrl:
      'https://i.pinimg.com/736x/c8/82/69/c8826925489830c04f5c8d185cfe4a6f.jpg',
    likes: 33,
  },
  {
    id: 5,
    title: 'UNO Reverse',
    imageUrl:
      'https://i.pinimg.com/736x/1a/c2/2c/1ac22c08e660d8935a59d6655b87dbfe.jpg',
    likes: 91,
  },
  {
    id: 6,
    title: 'This is Fine',
    imageUrl:
      'https://i.pinimg.com/736x/cb/5b/45/cb5b45ecf15b29fe95fde55411f2bac5.jpg',
    likes: 67,
  },
  {
    id: 7,
    title: 'Pepe the Frog',
    imageUrl:
      'https://i.pinimg.com/736x/14/3d/bc/143dbc11c0e848da28ddf212eb2ae73a.jpg',
    likes: 22,
  },
  {
    id: 8,
    title: 'Drake Hotline Bling',
    imageUrl:
      'https://i.pinimg.com/736x/95/f5/71/95f571c984db0733f053be66ce5695bc.jpg',
    likes: 49,
  },
  {
    id: 9,
    title: 'Woman Yelling at a Cat',
    imageUrl:
      'https://i.pinimg.com/736x/b5/89/b8/b589b8dc9b6e9ba851087526d5a067ef.jpg',
    likes: 74,
  },
  {
    id: 10,
    title: 'Surprised Pikachu',
    imageUrl:
      'https://i.pinimg.com/736x/05/51/f5/0551f506725ac1deeaa85d46f8b9a5fd.jpg',
    likes: 29,
  },
];

export const useMemeStore = create<State>()(
  persist(
    (set, get) => ({
      memes: sampleMemes,
      editMeme: (updated) => {
        const updatedMemes = get().memes.map((m) =>
          m.id === updated.id ? updated : m
        );
        set({ memes: updatedMemes });
      },
      hasHydrated: false,
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: 'meme-storage',
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
