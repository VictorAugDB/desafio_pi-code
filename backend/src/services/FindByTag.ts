import { getRepository } from 'typeorm';
import Book from '../models/Book';

interface Request {
  tag: string;
}

class CreateBookService {
  public async execute({
    tag,
  }: Request): Promise<Book | undefined> {
    const booksRepository = getRepository(Book);

    const books = await booksRepository.find();

    const tags = books.find(
      (book) => book.tags.split(/\W+/).includes(tag),
    );

    return tags;
  }
}

export default CreateBookService;
