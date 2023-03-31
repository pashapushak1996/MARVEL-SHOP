import {RootState} from '../../../app/store'

export const getCharacters = (state:RootState) => state.characters.characters;