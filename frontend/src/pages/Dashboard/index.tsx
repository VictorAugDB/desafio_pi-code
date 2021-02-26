import React, { useState } from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import ModalAddFood from '../../components/ModalAddFood';

import { Container, Icon, Header, UserActions, InputsContainer, SearchInputContainer, FilterByTagContainer, BookContainer, Data } from './styles';

const Dashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }


  return (
    <Container>
      <Header>
        <h1>MLPR</h1>
        <h2>Melhores livros para se lembrar</h2>
      </Header>
      <UserActions>
        <InputsContainer>
          <SearchInputContainer>
            <input type="text" placeholder="Buscar" />
            <Icon />
          </SearchInputContainer>
          <FilterByTagContainer>
            <input type="checkbox" />
            <p>Procurar somente por tags</p>
          </FilterByTagContainer>
        </InputsContainer>
        <button
          type="button"
          onClick={toggleModal}
        >
          <div className="text">Adicionar</div>
          <div className="icon">
            <FiPlusSquare size={24} />
          </div>
        </button>
      </UserActions>
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
      />
      <BookContainer>
        <Data>
          <div>
            <strong>Uma breve História do tempo</strong>
            <p>Stephen Hawking - 256 páginas</p>
          </div>
          <span>Hawking e sua descoberta sobre o universo</span>

          <p>Science</p>
        </Data>
        <span>
          <p>remover</p>
        </span>
      </BookContainer>
    </Container>

  )
}

export default Dashboard;