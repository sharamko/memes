import { Metadata } from 'next';
import TablePage from './MemeListPage';

export default function Page() {
  return <TablePage />;
}

export const metadata: Metadata = {
  title: {
    default: 'Картки',
    template: '%s - Бібліотека мемів',
  },
  description: 'Бібліотека популярних мемів в картках',
};
