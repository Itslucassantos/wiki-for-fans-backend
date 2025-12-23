import prismaClient from "../../../src/prisma";
import { SearchMovieService } from "../../../src/services/internal/movie/SearchMovieService";

jest.mock("../../../src/prisma");

describe("SearchMovieService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns null when movie is not found", async () => {
    (prismaClient.movie.findFirst as jest.Mock).mockResolvedValue(null);

    const service = new SearchMovieService();
    const result = await service.execute({ name: "Not exists" });

    expect(result).toBeNull();
    expect(prismaClient.movie.findFirst).toHaveBeenCalledWith({
      where: {
        title: "Not exists",
      },
      include: {
        characters: true,
      },
    });
    expect(prismaClient.movie.findFirst).toHaveBeenCalledTimes(1);
  });

  it("returns the movie when found", async () => {
    (prismaClient.movie.findFirst as jest.Mock).mockResolvedValue({
      id: 1,
      title: "bloodsport",
      originalTitle: "Bloodsport",
      genres: [],
      productionCompanies: [],
      productionCountries: [],
      characters: [],
    });

    const service = new SearchMovieService();
    const result = await service.execute({ name: "Bloodsport" });

    expect(result).not.toBeNull();
    expect(result).toMatchObject({
      id: 1,
      title: "bloodsport",
      originalTitle: "Bloodsport",
    });
    expect(prismaClient.movie.findFirst).toHaveBeenCalledTimes(1);
  });
});
