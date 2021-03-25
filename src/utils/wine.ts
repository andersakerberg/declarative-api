import { deleteEntityFromPath, getEntititesFromPath } from './common'

const wineRoot = '../entities/wines/'

export const getAllWines = () => {
  return getEntititesFromPath(wineRoot)
}

// Makes me a little sad
export const deleteWine = (fileName: string) => {
  return deleteEntityFromPath(wineRoot, fileName)
}
