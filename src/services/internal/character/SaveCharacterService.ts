import prismaClient from "../../../prisma";
import { CharacterProps } from "../../../types/character.types";

class SaveCharacterService {
  async execute(characterReq: CharacterProps, tvShowId: number) {
    const characterRes = await prismaClient.character.create({
      data: {
        ...characterReq,
        tvShowId,
      },
    });

    return characterRes;
  }
}

export { SaveCharacterService };
