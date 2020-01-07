import { bookService } from '../../services';

export const getBooks = async () => {
  return bookService
    .list()
    .then(books => books)
    .catch(err => {
      throw err;
    });
};

export const saveBook = async (_, { input }) => {
  return bookService
    .save(input)
    .then(book => book)
    .catch(err => {
      throw err;
    });
};
