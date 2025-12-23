const prismaClient = {
  movie: {
    findFirst: jest.fn(),
    delete: jest.fn(),
  },
};

export default prismaClient;
