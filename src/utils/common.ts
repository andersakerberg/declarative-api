import path from 'path'
import * as fs from 'fs'

export const getEntititesFromPath = (directory: string): any[] => {
  const dirpath = path.join(__dirname, directory)

  const returnValues = []
  const filenames = fs.readdirSync(dirpath)
  filenames.forEach((file) => {
    const data = fs.readFileSync(`${dirpath}/${file}`, 'utf8')
    const entity = JSON.parse(data)
    entity.id = file
    returnValues.push(entity)
  })

  return returnValues
}

export const deleteEntityFromPath = (directory: string, file: string): boolean => {
  const dirpath = path.join(__dirname, directory)
  const data = fs.rmSync(`${dirpath}/${file}`)

  return true
}
