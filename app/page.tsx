import { Button } from '@heroui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className="font-medium text-6xl text-sky-500 mb-4">
          Бібліотека мемів
        </h1>
        <p className="font-medium text-xl mb-20">Збірник популярних мемів</p>
      </div>
      <Button className="px-16 py-8 text-xl min-w-60" as={Link} href="/cards">
        Картки
      </Button>
      <Button className="px-16 py-8 text-xl min-w-60" as={Link} href="/table">
        Таблиця
      </Button>
    </section>
  );
}
