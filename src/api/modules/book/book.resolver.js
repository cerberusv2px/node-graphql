import * as bookController from './book.controller';

const BookResolver = {
  Query: {
    books: bookController.getBooks
  },
  Mutation: {
    createBook: bookController.saveBook
  }
};

export default BookResolver;
