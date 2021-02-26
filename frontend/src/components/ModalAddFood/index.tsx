import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { GiCancel } from 'react-icons/gi'
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

interface ICreateFoodData {
  name: string;
  image: string;
  price: string;
  description: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood?: (food: Omit<IFoodPlate, 'id' | 'available'>) => void;
}

const ModalAddFood: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateFoodData) => {

      setIsOpen();
    },
    [setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Adicionar um novo livro</h1>
        <Input name="title" placeholder="Titulo do livro" />

        <Input name="author" placeholder="Nome do autor" />
        <Input className="is_description" name="description" placeholder="Descrição" />

        <Input name="pages" placeholder="Número de páginas" />

        <Input name="tags" placeholder="Ex: ciência, robótica, programação" />
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

export default ModalAddFood;
