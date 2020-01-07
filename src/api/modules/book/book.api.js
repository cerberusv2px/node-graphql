const BookQuery = `
    books: [Book]
`;

const BookMutation = `
  createBook(input: BookInput): Book
`;

export {
  BookQuery,
  BookMutation,
};
