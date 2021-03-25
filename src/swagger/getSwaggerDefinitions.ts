import fs from 'fs'
import path from 'path'

const definitionsFolder = path.join(__dirname, '../schemas')

const readFileAndReturnSchema = (filename: string): string => {
  try {
    const data = fs.readFileSync(`${definitionsFolder}/${filename}`)
    return data.toString()
  } catch (err) {
    console.error(err)
  }
}

interface DefinitionsObject {
  [index: string]: any
}

export const getSwaggerDefinitions = (): DefinitionsObject => {
  const returnValue: DefinitionsObject = {}
  try {
    const data = fs.readdirSync(definitionsFolder)
    console.log(data)
    data.forEach((file) => {
      console.log(file)
      const fileData = readFileAndReturnSchema(file)
      const fileDataAsJson = JSON.parse(fileData)
      returnValue[fileDataAsJson.description] = JSON.parse(fileData)
    })
  } catch (err) {
    console.error(err)
  }

  return returnValue
}
