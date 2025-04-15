'use client';

import { useMemeStore } from '@/store/useMemeStore';
import { Meme } from '@/types/meme';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Input,
  Spinner,
} from '@heroui/react';
import { Key, useState } from 'react';

const columns = [
  { name: 'ID', uid: 'id' },
  { name: 'Назва', uid: 'title' },
  { name: 'Лайки', uid: 'likes' },
  { name: 'Дії', uid: 'actions' },
];

const MemeTable = () => {
  const { memes, editMeme, hasHydrated } = useMemeStore((state) => state);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);

  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [likes, setLikes] = useState<number>(0);

  const handleOpen = (meme: Meme) => {
    setSelectedMeme(meme);
    setTitle(meme.title);
    setImageUrl(meme.imageUrl);
    setLikes(meme.likes);
    setIsOpen(true);
  };

  const handleSave = () => {
    if (!selectedMeme) return;

    const isTitleValid = title.length >= 3 && title.length <= 100;
    const isImageValid = /^https?:\/\/.*\.(jpg|jpeg)$/i.test(imageUrl);
    const isLikesValid = Number.isInteger(likes) && likes >= 0 && likes <= 99;

    if (!isTitleValid || !isImageValid || !isLikesValid) return;

    const updatedMeme: Meme = {
      ...selectedMeme,
      title,
      imageUrl,
      likes,
    };

    editMeme(updatedMeme);
    setIsOpen(false);
  };

  const renderCell = (meme: Meme, columnKey: string) => {
    switch (columnKey) {
      case 'id':
        return meme.id;
      case 'title':
        return meme.title;
      case 'likes':
        return meme.likes;
      case 'actions':
        return (
          <Button onClick={() => handleOpen(meme)} color="primary" size="sm">
            Редагувати
          </Button>
        );
      default:
        return meme[columnKey as keyof Meme];
    }
  };

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
    <div className="p-1">
      <Table aria-label="Таблиця мемів">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === 'actions' ? 'center' : 'start'}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={memes}>
          {(item: Meme) => (
            <TableRow key={item.id}>
              {(columnKey: Key) => (
                <TableCell>{renderCell(item, columnKey.toString())}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Редагування мема</ModalHeader>
              <ModalBody>
                <Input
                  label="ID"
                  value={selectedMeme?.id.toString() ?? ''}
                  isReadOnly
                />
                <Input
                  label="Назва"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  isInvalid={title.length < 3 || title.length > 100}
                  errorMessage="Від 3 до 100 символів"
                  isRequired
                />
                <Input
                  label="Картинка (JPG)"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  isInvalid={!/^https?:\/\/.*\.(jpg|jpeg)$/i.test(imageUrl)}
                  errorMessage="Введіть правильне посилання на JPG"
                  isRequired
                />
                <Input
                  label="Кількість лайків"
                  type="number"
                  min={0}
                  max={99}
                  value={likes.toString()}
                  onChange={(e) => setLikes(Number(e.target.value))}
                  isInvalid={
                    !Number.isInteger(likes) || likes < 0 || likes > 99
                  }
                  errorMessage="Введіть число від 0 до 99"
                  isRequired
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Скасувати
                </Button>
                <Button color="primary" onPress={handleSave}>
                  Зберегти
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MemeTable;
