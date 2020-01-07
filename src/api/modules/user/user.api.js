const UserQuery = `
  users: [User]
  userById(id: Int!): User
`;

const UserMutation = `
  createUser(input: UserInput): User
`;

export {
  UserQuery,
  UserMutation,
};
