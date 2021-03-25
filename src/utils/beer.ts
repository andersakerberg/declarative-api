import { deleteEntityFromPath, getEntititesFromPath } from './common'

const beerPath = '../entities/beers/'
export const getAllBeers = () => {
  return getEntititesFromPath(beerPath)
}
// Makes me sad to use
export const deleteBeer = (fileName: string) => {
  return deleteEntityFromPath(beerPath, fileName)
}
