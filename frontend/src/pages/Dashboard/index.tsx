import React, { useCallback, useEffect, useState } from 'react';
import { FiCheckSquare, FiPlusSquare } from 'react-icons/fi';
import { GiCancel } from 'react-icons/gi';
import ConfirmModal from '../../components/ConfirmModal';
import ModalAddFood from '../../components/ModalAddBook';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import { removerAcentosEspaco } from '../../utils/removerAcentos'

import { Container, Icon, Header, UserActions, InputsContainer, SearchInputContainer, FilterByTagContainer, BookContainer, Data, Tag, ConfirmModalContent } from './styles';

interface IBookData {
  id: string,
  title: string,
  author: string;
  description: string;
  pages: number;
  tags: string[];
}

const Dashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [books, setBooks] = useState<IBookData[]>([]);
  const [search, setSearch] = useState('');
  const [checked, setChecked] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const { addToast } = useToast();

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleConfirmModal(): void {
    setConfirmModalOpen(!confirmModalOpen);
  }

  useEffect(() => {
    async function loadBooks() {
      const response = await api.get('/books');

      const booksResponse = response.data;

      const booksFormatted: IBookData[] = booksResponse.map((bookResponse: IBookData) => {
        const array = JSON.parse(JSON.stringify(bookResponse.tags));

        const bookDivided = array.split(/\W+/)

        return {
          id: bookResponse.id,
          title: bookResponse.title,
          author: bookResponse.author,
          description: bookResponse.description,
          pages: bookResponse.pages,
          tags: bookDivided.slice(1, bookDivided.length - 1)
        }
      })

      setBooks(booksFormatted);
    }

    loadBooks();
  }, [])

  const handleAddBook = useCallback(async (
    book: Omit<IBookData, 'id'>
  ): Promise<void> => {
    try {
      const response = await api.post('/books', {
        title: book.title,
        author: book.author,
        description: book.description,
        pages: book.pages,
        tags: [removerAcentosEspaco(String(book.tags))]
      });

      const [array] = response.data.tags.map((sl: string) => sl.split(', '));

      const bookFormatted = {
        id: response.data.id,
        title: response.data.title,
        author: response.data.author,
        description: response.data.description,
        pages: response.data.pages,
        tags: array
      }

      setBooks([...books, bookFormatted])

      addToast({
        type: 'success',
        title: 'Livro adicionado!'
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao adicionar'
      });
    }
  }, [books, addToast]);

  const handleSearch = useCallback(async () => {
    if (checked) {
      const response = await api.get(`/books/esp?tag=${search}`)

      const booksFormatted: IBookData[] = response.data.map((bookResponse: IBookData) => {
        const array = JSON.parse(JSON.stringify(bookResponse.tags));

        const bookDivided = array.split(/\W+/)

        return {
          id: bookResponse.id,
          title: bookResponse.title,
          author: bookResponse.author,
          description: bookResponse.description,
          pages: bookResponse.pages,
          tags: bookDivided.slice(1, bookDivided.length - 1)
        }
      })
      setBooks(booksFormatted)
    } else {
      const response = await api.get('/books');
      const filteredBooks = response.data.filter((book: IBookData) => book.title.toLowerCase().includes(search) || book.author.toLowerCase().includes(search) || book.description.toLowerCase().includes(search))

      console.log(search)


      const booksFormatted: IBookData[] = filteredBooks.map((bookResponse: IBookData) => {
        const array = JSON.parse(JSON.stringify(bookResponse.tags));

        const bookDivided = array.split(/\W+/)

        return {
          id: bookResponse.id,
          title: bookResponse.title,
          author: bookResponse.author,
          description: bookResponse.description,
          pages: bookResponse.pages,
          tags: bookDivided.slice(1, bookDivided.length - 1)
        }
      })

      setBooks(booksFormatted);
    }
  }, [search, checked]);

  async function handleDeleteBook(id: string) {
    await api.delete(`/books/${id}`);

    setBooks(books.filter(book => book.id !== id))

    setConfirmModalOpen(!confirmModalOpen)

    addToast({
      type: 'info',
      title: 'Livro removido!'
    });
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
            <input type="text" placeholder="Buscar" onChange={event => setSearch((event.target.value.toLowerCase()))} id="searchInput" />
            <Icon onClick={handleSearch} />
          </SearchInputContainer>
          <FilterByTagContainer>
            <input type="checkbox" checked={checked} onChange={event => setChecked(!checked)} />
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
        handleAddBook={handleAddBook}
      />
      {books.map(book => (
        <BookContainer key={book.id}>
          <Data>
            <div>
              <strong>{book.title}</strong>
              <p>{book.author} - {book.pages}</p>
            </div>
            <span>
              <p>{book.description}</p>
            </span>

            <Tag>
              {book.tags.map(tag => (
                <p key={tag}>#{tag}</p>
              ))}
              <br />
            </Tag>
          </Data>
          <span>
            <p onClick={toggleConfirmModal}>remover</p>
            <ConfirmModal
              isOpen={confirmModalOpen}
              setIsOpen={toggleConfirmModal}
            >
              <ConfirmModalContent>
                <p>deseja realmente remover o livro ?</p>
                <div>
                  <button
                    type="button"
                    onClick={toggleConfirmModal
                    }>
                    <p className="text">Cancelar</p>
                    <div className="icon">
                      <GiCancel size={24} />
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteBook(book.id)
                    }>
                    <p className="text">Remover</p>
                    <div className="icon">
                      <FiCheckSquare size={24} />
                    </div>
                  </button>
                </div>
              </ConfirmModalContent>
            </ConfirmModal>
          </span>
        </BookContainer>
      ))}
    </Container>

  )
}

export default Dashboard;