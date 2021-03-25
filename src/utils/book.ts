import { deleteEntityFromPath, getEntititesFromPath } from './common'
const bookDir = '../entities/books/'
export const getAllBooks = () => {
  return getEntititesFromPath(bookDir)
}

// I am more OK with this one
export const deleteBook = (fileName: string) => {
  return deleteEntityFromPath(bookDir, fileName)
}
