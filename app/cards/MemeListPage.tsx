'use client';

import { useMemeStore } from '@/store/useMemeStore';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Spinner,
} from '@heroui/react';

const MemeListPage = () => {
  const { memes, hasHydrated } = useMemeStore((state) => state);

  if (!hasHydrated) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Spinner
          classNames={{ label: 'text-foreground mt-4' }}
          variant="simple"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {memes.map((meme) => (
        <Card key={meme.id} className="w-full">
          <CardHeader>
            <h3 className="text-xl font-bold">{meme.title}</h3>
          </CardHeader>
          <CardBody>
            <div className="w-full h-[200px] flex items-center justify-center rounded overflow-hidden">
              <img
                src={meme.imageUrl}
                alt={meme.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-gray-500 mt-2">Лайки: {meme.likes}</p>
          </CardBody>
          <CardFooter className="flex justify-end">
            <Link href={meme.imageUrl} target="_blank" color="primary">
              Переглянути картинку
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MemeListPage;
