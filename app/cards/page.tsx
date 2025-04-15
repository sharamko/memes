import { Metadata } from 'next';
import TablePage from './MemeListPage';

export default function Page() {
  return (
    <>
      <h1 className="font-medium px-4 text-2xl md:text-4xl text-sky-500 mb-4">
        Бібліотека популярних мемів в картках
      </h1>
      <TablePage />
    </>
  );
}

export const metadata: Metadata = {
  title: {
    default: 'Картки',
    template: '%s - Бібліотека мемів',
  },
  description: 'Бібліотека популярних мемів в картках',
};
