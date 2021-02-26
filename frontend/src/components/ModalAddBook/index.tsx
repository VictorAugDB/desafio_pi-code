import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { GiCancel } from 'react-icons/gi'
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface IBookData {
  id: string,
  title: string,
  author: string;
  description: string;
  pages: number;
  tags: string[];
}

interface ICreateBookData {
  name: string;
  title: string,
  author: string;
  description: string;
  pages: number;
  tags: string[];
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddBook: (book: Omit<IBookData, 'id'>) => void;
}

const ModalAddBook: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddBook,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateBookData) => {
      handleAddBook(data);

      setIsOpen();
    },
    [handleAddBook, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Adicionar um novo livro</h1>
        <Input name="title" placeholder="Titulo do livro" />

        <Input name="author" placeholder="Nome do autor" />
        <Input className="is_description" name="description" placeholder="Descrição" />

        <Input name="pages" placeholder="Número de páginas" />

        <Input name="tags" placeholder="Ex: ciencia, robotica, programacao" />
        <div>
          <button type="reset" data-testid="reset-inputs">
            <p className="text">Cancelar</p>
            <div className="icon">
              <GiCancel size={24} />
            </div>
          </button>
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalAddBook;
