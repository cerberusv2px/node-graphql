import { Book } from '../models';

class BookService {
  async list() {
    try {
      return await Book.query();
    } catch (err) {
      throw err;
    }
  }

  async save(book) {
    try {
      await Book.query().insert({
        name: book.name,
        user_id: book.userId
      });
    } catch (err) {
      throw err;
    }
  }
}

const bookService = new BookService();
export default bookService;
