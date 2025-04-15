import { Metadata } from 'next';
import TablePage from './MemeTable';

export default function Page() {
  return (
    <>
      <h1 className="font-medium text-2xl md:text-4xl text-sky-500 mb-4">
        Бібліотека популярних мемів в таблиці
      </h1>
      <TablePage />
    </>
  );
}

export const metadata: Metadata = {
  title: {
    default: 'Таблиця',
    template: '%s - Бібліотека мемів',
  },
  description: 'Бібліотека популярних мемів в таблиці',
};
