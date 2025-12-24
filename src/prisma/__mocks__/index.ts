const prismaClient = {
  movie: {
    findFirst: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
  },
};

export default prismaClient;
