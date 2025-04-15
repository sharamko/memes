import { Metadata } from 'next';
import TablePage from './MemeTable';

export default function Page() {
  return <TablePage />;
}

export const metadata: Metadata = {
  title: {
    default: 'Таблиця',
    template: '%s - Бібліотека мемів',
  },
  description: 'Бібліотека популярних мемів в таблиці',
};
