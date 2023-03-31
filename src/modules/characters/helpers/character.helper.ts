import { ImageSizesEnum } from '../../../constants/image-sizes.enum';

import { buildImagePath } from '../../../helpers/marvel-api.helper';
import { ICharacter, ICharacterResponse } from '../../../types';

/** Function which transforms characterObject */

const normalizeCharacter = (character: ICharacterResponse): ICharacter => {
  const { id, name, thumbnail } = character;

  const cover =
    buildImagePath(thumbnail.path, ImageSizesEnum.XLARGE_SIZE, thumbnail.extension);


  return ({ name, cover, id });
};


export { normalizeCharacter };
